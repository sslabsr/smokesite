// WHOLESALE — Reseller program page; toggles to dashboard preview when authed
const WholesaleHero = ({isResellerAuthed, onSignup}) => (
  <Section bg="#000" pad="120px 32px 80px">
    <Container>
      <Eyebrow color="#f7b829">Wholesale program · Reseller</Eyebrow>
      <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24}}>
        Margin you can <span style={{color:"#f7b829"}}>actually</span><br/>build a shop on.
      </Display>
      <p style={{maxWidth:760, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.85)", margin:"0 0 36px"}}>
        Smoke shops, dispensaries, and white-label operators get tiered pricing across the catalog. Lab COAs with every order. Restock alerts in your inbox.
      </p>
      {!isResellerAuthed && (
        <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
          <Button onClick={onSignup} variant="mustard" size="lg">Apply for reseller <Icons.ArrowRight size={18}/></Button>
          <Button variant="outlined" size="lg">Download line sheet <Icons.ArrowUpRight size={18}/></Button>
        </div>
      )}
    </Container>
  </Section>
);

const PricingTiers = () => (
  <Section bg="var(--color-bg-elev)" pad="120px 32px">
    <Container>
      <Eyebrow color="#f7b829">Tiered pricing · Volume discount</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>Three tiers.<br/>Auto-applied at cart.</Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, border:"1px solid #f7b829"}}>
        {[
          {tier:"BRONZE", units:"1k–4,999", off:"35%", color:"#c89060"},
          {tier:"SILVER", units:"5k–24,999", off:"45%", color:"#cfcfcf"},
          {tier:"GOLD",   units:"25k+",      off:"55%", color:"#f7b829"},
        ].map((t, i) => (
          <div key={t.tier} style={{
            padding:"40px 32px", borderRight: i<2 ? "1px solid rgba(247,184,41,.4)" : 0,
            background: i===2 ? "rgba(247,184,41,.06)" : "transparent",
            display:"flex", flexDirection:"column", gap:14
          }}>
            <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:t.color}}>— {t.tier}</div>
            <Display as="div" size="h2" style={{fontSize:80, color:t.color}}>{t.off}</Display>
            <div style={{fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.7)"}}>off MSRP</div>
            <SpecRow label="Volume" value={`${t.units} units`} color={t.color}/>
            <SpecRow label="Net terms" value={i===0 ? "Prepay" : i===1 ? "Net 15" : "Net 30"} color={t.color}/>
            <SpecRow label="Restock SLA" value={i===0 ? "5–7 days" : i===1 ? "3–5 days" : "Same week"} color={t.color}/>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const PerksGrid = () => (
  <Section bg="#000" pad="120px 32px">
    <Container>
      <Eyebrow>What's included · Every reseller</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>Standard kit.</Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
        {[
          {icon:"Beaker", title:"Lab COAs",     body:"Every shipment. PDF + traceable batch ID."},
          {icon:"Truck",  title:"Tracked ship", body:"All freight ships tracked. Restock SLA in writing."},
          {icon:"Tag",    title:"MAP enforced", body:"We protect your margin. Violators lose program."},
          {icon:"Bolt",   title:"Restock alerts", body:"Email + SMS when your top SKUs are low."},
          {icon:"Box",    title:"Dropship-ready", body:"Optional DTC fulfillment under your label."},
          {icon:"User",   title:"Dedicated rep",  body:"Real human, named, on Slack or email."},
        ].map(p => {
          const Icon = Icons[p.icon] || Icons.Box;
          return (
            <div key={p.title} style={{padding:"28px 24px", border:"1px solid var(--color-pink)", display:"flex", flexDirection:"column", gap:14}}>
              <div style={{color:"#f7b829"}}><Icon size={28}/></div>
              <div style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:24, letterSpacing:"-.01em"}}>{p.title}</div>
              <p style={{fontSize:14, lineHeight:1.55, color:"rgba(227,240,247,.75)", margin:0}}>{p.body}</p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);

const ResellerDashboard = () => {
  const orders = [
    {id:"SSL-26-0418", date:"Apr 18", units:5000, total:13750, status:"Delivered", color:"#5fdc8e"},
    {id:"SSL-26-0402", date:"Apr 02", units:2500, total:6800,  status:"In transit", color:"var(--color-cyan)"},
    {id:"SSL-26-0319", date:"Mar 19", units:8000, total:21200, status:"Delivered", color:"#5fdc8e"},
  ];
  return (
    <Section bg="#0a0a0a" pad="80px 32px">
      <Container>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32, flexWrap:"wrap", gap:16}}>
          <div>
            <Eyebrow color="#f7b829">Reseller dashboard · BUDS & CO LLC</Eyebrow>
            <Display as="h2" size="h2" style={{marginTop:14}}>Welcome back.</Display>
          </div>
          <div style={{display:"flex", gap:10, alignItems:"center", padding:"10px 16px", border:"1px solid #f7b829", background:"rgba(247,184,41,.06)"}}>
            <span style={{width:8, height:8, borderRadius:999, background:"#f7b829", boxShadow:"0 0 10px #f7b829"}}/>
            <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"#f7b829"}}>Tier · Silver · 45% off</span>
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14, marginBottom:48}}>
          {[
            {v:"$41,750", l:"YTD spend",   c:"var(--color-cyan)"},
            {v:"15,500",  l:"Units shipped", c:"#f7b829"},
            {v:"3",       l:"Open orders", c:"var(--color-pink)"},
            {v:"Net 15",  l:"Terms",       c:"var(--color-fg)"},
          ].map(s => (
            <div key={s.l} style={{padding:"22px 20px", border:"1px solid rgba(247,184,41,.3)", background:"#000"}}>
              <div style={{fontFamily:"var(--font-display)", fontSize:42, color:s.c, lineHeight:1, letterSpacing:"-.02em"}}>{s.v}</div>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.6)", marginTop:8}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{border:"1px solid rgba(247,184,41,.3)", background:"#000"}}>
          <div style={{padding:"18px 24px", borderBottom:"1px solid rgba(247,184,41,.3)", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Eyebrow color="#f7b829">Recent orders</Eyebrow>
            <a className="ssl-link" style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829", cursor:"pointer"}}>View all →</a>
          </div>
          {orders.map((o, i) => (
            <div key={o.id} style={{
              display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr 1fr 80px", gap:16, padding:"18px 24px",
              borderBottom: i<orders.length-1 ? "1px dashed rgba(247,184,41,.2)" : 0, alignItems:"center"
            }}>
              <span style={{fontFamily:"var(--font-mono)", fontSize:13, color:"var(--color-fg)"}}>{o.id}</span>
              <span style={{fontFamily:"var(--font-mono)", fontSize:13, color:"rgba(227,240,247,.7)"}}>{o.date}</span>
              <span style={{fontFamily:"var(--font-mono)", fontSize:13, color:"rgba(227,240,247,.85)"}}>{o.units.toLocaleString()} units</span>
              <span style={{fontFamily:"var(--font-mono)", fontSize:13, color:"#f7b829"}}>${o.total.toLocaleString()}</span>
              <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:o.color}}>{o.status}</span>
              <button style={{background:"transparent", border:"1px solid rgba(227,240,247,.2)", color:"var(--color-fg)", padding:"6px 12px", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", cursor:"pointer"}}>COA</button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Wholesale = ({setRoute, onSignup, isResellerAuthed}) => (
  <>
    <WholesaleHero isResellerAuthed={isResellerAuthed} onSignup={onSignup}/>
    {isResellerAuthed && <ResellerDashboard/>}
    <PricingTiers/>
    <PerksGrid/>
    <Section bg="var(--color-pink)" pad="100px 32px">
      <Container>
        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"center"}}>
          <Display as="h2" size="hero" color="#000" style={{fontSize:"clamp(48px, 8vw, 110px)"}}>Apply<br/>in 3 minutes.</Display>
          <div style={{display:"flex", flexDirection:"column", gap:16}}>
            <p style={{fontSize:17, lineHeight:1.55, color:"#000", margin:0}}>
              Business name, EIN, resale cert, monthly volume. Approval in 1–3 business days.
            </p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <Button onClick={onSignup} variant="mustard" size="lg">Start application <Icons.ArrowRight size={18}/></Button>
              <Button onClick={()=>setRoute("contact")} variant="outlined" size="lg" style={{color:"#000", borderColor:"#000"}}>Talk to a rep</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </>
);

window.Wholesale = Wholesale;
