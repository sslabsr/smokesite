// Age gate modal — blocks site on first visit until 21+ confirmed
const AgeGate = ({onAccept}) => {
  const [open, setOpen] = React.useState(() => !localStorage.getItem("ssl_age_ok"));
  if (!open) return null;
  const accept = () => {
    localStorage.setItem("ssl_age_ok", "1");
    setOpen(false);
    onAccept && onAccept();
  };
  return (
    <div role="dialog" aria-modal="true" style={{
      position:"fixed", inset:0, background:"rgba(0,0,0,.94)", zIndex:1000,
      display:"flex", alignItems:"center", justifyContent:"center", padding:24,
    }}>
      <div style={{
        background:"#000", border:"2px solid var(--color-pink)",
        boxShadow:"0 0 36px rgba(236,142,190,.45)",
        padding:"40px 36px 32px", maxWidth:520, width:"100%",
        display:"flex", flexDirection:"column", gap:18, textAlign:"center", position:"relative"
      }}>
        <div style={{display:"flex", justifyContent:"center", marginBottom:4, color:"var(--color-pink)"}}>
          <Icons.Shield size={42}/>
        </div>
        <Eyebrow>Age Verification · 21+</Eyebrow>
        <Display as="div" size="h3" style={{fontSize:"clamp(36px,5vw,52px)"}}>
          Are you 21<br/>or older?
        </Display>
        <div style={{fontSize:13, lineHeight:1.55, color:"rgba(227,240,247,.75)", maxWidth:380, margin:"0 auto"}}>
          By entering this site you confirm you are of legal age in your jurisdiction and agree to our Terms of Use and Privacy Policy. We'll remember your choice on this device.
        </div>
        <div style={{display:"flex", justifyContent:"center", gap:12, marginTop:8, flexWrap:"wrap"}}>
          <Button onClick={accept}>Yes — I'm 21+</Button>
          <Button variant="outlined" onClick={()=>{ window.location = "https://google.com"; }}>No</Button>
        </div>
        <div style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.4)", marginTop:8}}>
          CCPA Compliant · Cookie set on accept
        </div>
      </div>
    </div>
  );
};

window.AgeGate = AgeGate;
