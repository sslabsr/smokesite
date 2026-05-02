// Signup / sign-in modal — toggles to reseller-extra fields
const SignupModal = ({open, mode, onClose, onComplete}) => {
  const [reseller, setReseller] = React.useState(false);
  const [tab, setTab] = React.useState(mode || "signup");
  React.useEffect(()=>{ if (open) setTab(mode || "signup"); }, [open, mode]);
  if (!open) return null;
  const submit = (e) => { e.preventDefault(); onComplete && onComplete({reseller}); onClose(); };
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" style={{position:"fixed", inset:0, background:"rgba(0,0,0,.86)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24, overflow:"auto"}}>
      <form onSubmit={submit} onClick={e=>e.stopPropagation()} style={{
        background:"#000", border:"2px solid var(--color-cyan)", boxShadow:"0 0 36px rgba(120,214,241,.45)",
        padding:"32px 36px", maxWidth:580, width:"100%", display:"flex", flexDirection:"column", gap:16, position:"relative"
      }}>
        <button type="button" aria-label="Close" onClick={onClose} style={{position:"absolute", top:14, right:14, background:"transparent", border:0, color:"var(--color-fg)", cursor:"pointer", lineHeight:0}}><Icons.X size={20}/></button>

        <div style={{display:"flex", gap:0, borderBottom:"1px solid var(--color-pink)", marginBottom:4}}>
          {["signup","signin"].map(t => (
            <button key={t} type="button" onClick={()=>setTab(t)} style={{
              background:"transparent", border:0, padding:"12px 0", marginRight:24, cursor:"pointer",
              fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase",
              color: tab===t ? "var(--color-cyan)" : "rgba(227,240,247,.55)",
              borderBottom: tab===t ? "2px solid var(--color-cyan)" : "2px solid transparent",
              marginBottom:-1
            }}>{t==="signup" ? "Sign up" : "Sign in"}</button>
          ))}
        </div>

        <Eyebrow>{tab==="signup" ? "Create account · Free" : "Sign in to your account"}</Eyebrow>
        <Display as="div" size="h3" style={{fontSize:"clamp(36px,5vw,52px)"}}>
          {tab==="signup" ? <>Sign up<br/>to shop.</> : <>Welcome<br/>back.</>}
        </Display>
        <p style={{fontSize:14, color:"rgba(227,240,247,.75)", margin:0, lineHeight:1.55}}>
          {tab==="signup" ? "An account unlocks the storefront. Resellers see wholesale pricing after manual approval (1–3 business days)." : "Sign in to view your orders, lab COAs, and reseller pricing."}
        </p>

        {tab==="signup" && (
          <div style={{display:"flex", gap:14}}>
            <Input label="First name" placeholder="Alex" required/>
            <Input label="Last name"  placeholder="Vega"  required/>
          </div>
        )}
        <Input label="Email" type="email" placeholder="you@brand.co" required/>
        <Input label="Password" type="password" placeholder="••••••••" required/>

        {tab==="signup" && (
          <>
            <label style={{display:"flex", gap:10, alignItems:"center", cursor:"pointer", padding:"12px 14px", border:"1px solid var(--color-pink)", background: reseller ? "rgba(120,214,241,.05)" : "transparent"}}>
              <input type="checkbox" checked={reseller} onChange={e=>setReseller(e.target.checked)} style={{accentColor:"#78d6f1", width:18, height:18, flexShrink:0}}/>
              <span style={{fontSize:14, lineHeight:1.4}}>I'm a reseller, smoke shop, or white-label operator <span style={{color:"rgba(227,240,247,.55)"}}>· wholesale pricing</span></span>
            </label>
            {reseller && (
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, padding:18, background:"var(--color-bg-elev)", border:"1px solid var(--color-cyan)"}}>
                <div style={{gridColumn:"1/-1"}}><Eyebrow color="var(--color-cyan)">Reseller details</Eyebrow></div>
                <Input label="Business name" placeholder="Buds & Co LLC" required/>
                <Input label="EIN" placeholder="12-3456789" required/>
                <Input label="Resale cert #" placeholder="RC-000000" required/>
                <Input label="Est. monthly volume" placeholder="5,000 units" required/>
                <Select label="State" options={["CA","NV","AZ","OR","WA","CO","NY","FL","Other"]}/>
                <Input label="Website / IG" placeholder="@yourshop"/>
                <div style={{gridColumn:"1/-1", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"var(--color-cyan)", marginTop:4}}>Approval in 1–3 business days. A rep may contact you for clarification.</div>
              </div>
            )}
            <label style={{display:"flex", gap:10, alignItems:"flex-start", fontSize:12, color:"rgba(227,240,247,.65)", lineHeight:1.5}}>
              <input type="checkbox" required style={{accentColor:"#78d6f1", width:14, height:14, marginTop:3, flexShrink:0}}/>
              <span>I confirm I'm 21+ and agree to the Terms of Use, Privacy Policy, and CCPA notice.</span>
            </label>
          </>
        )}

        <div style={{display:"flex", gap:12, justifyContent:"flex-end", marginTop:6}}>
          <Button type="button" variant="outlined" onClick={onClose}>Cancel</Button>
          <Button type="submit">{tab==="signup" ? "Create account →" : "Sign in →"}</Button>
        </div>
      </form>
    </div>
  );
};

window.SignupModal = SignupModal;
