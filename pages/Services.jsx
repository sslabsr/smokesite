// SERVICES — Detailed lanes with bullets, process, capability table, FAQ, CTA
const ServicesHero = () => (
  <Section bg="#000" pad="120px 32px 80px">
    <Container>
      <Eyebrow>Services · Six lanes</Eyebrow>
      <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:1100}}>
        Everything from <span style={{color:"var(--color-pink)"}}>spec sheet</span><br/>
        to <span style={{color:"var(--color-cyan)"}}>shelf-ready</span>.
      </Display>
      <p style={{maxWidth:760, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
        Run the whole program with us, or hand us one piece. Hardware, fill, terpenes, snowcap, packaging, co-pack — every lane runs out of our LA floor.
      </p>
    </Container>
  </Section>
);

const ServiceLane = ({s, i}) => {
  const Icon = Icons[s.icon] || Icons.Box;
  const accent = s.accent === "cyan" ? "var(--color-cyan)" : "var(--color-pink)";
  const reverse = i % 2 === 1;
  return (
    <div id={s.id} style={{
      padding:"100px 32px", borderTop:"1px solid rgba(236,142,190,.3)",
      background: reverse ? "var(--color-bg-elev)" : "#000"
    }}>
      <Container>
        <div style={{display:"grid", gridTemplateColumns: reverse ? "1fr 1.2fr" : "1.2fr 1fr", gap:64, alignItems:"start"}}>
          <div style={{order: reverse ? 2 : 1}}>
            <div style={{display:"flex", gap:18, alignItems:"center", marginBottom:18}}>
              <span style={{fontFamily:"var(--font-display)", fontSize:64, color:accent, lineHeight:1, letterSpacing:"-.03em"}}>{s.num}</span>
              <span style={{color:accent}}><Icon size={42}/></span>
            </div>
            <Display as="h2" size="h2" style={{marginBottom:14}}>{s.name}</Display>
            <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:accent, marginBottom:24}}>{s.tag}</div>
            <p style={{fontSize:17, lineHeight:1.6, color:"rgba(227,240,247,.85)", margin:"0 0 28px", maxWidth:560}}>{s.blurb}</p>
            <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:12}}>
              {s.bullets.map(b => (
                <li key={b} style={{display:"flex", gap:12, alignItems:"flex-start", fontSize:15, color:"rgba(227,240,247,.9)"}}>
                  <span style={{color:accent, marginTop:2, flexShrink:0}}><Icons.Check size={18}/></span>{b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{order: reverse ? 1 : 2}}>
            <div style={{
              aspectRatio:"1/1", border:`1px solid ${accent}`, padding:32,
              background:`radial-gradient(ellipse at 50% 30%, ${accent}22, rgba(0,0,0,0) 65%), #0a0a0a`,
              display:"flex", flexDirection:"column", justifyContent:"space-between"
            }}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:accent}}>SPEC · {s.id.toUpperCase()}</div>
                <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", color:"rgba(227,240,247,.5)"}}>SSL-{s.num}</div>
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, color:accent, opacity:.7}}>
                <Icon size={120}/>
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:0}}>
                <SpecRow label="MOQ" value="1,000 units" color={accent}/>
                <SpecRow label="Sample lead" value="7–10 days" color={accent}/>
                <SpecRow label="Production" value="4–6 weeks" color={accent}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const CapabilityTable = () => (
  <Section bg="#000" pad="120px 32px">
    <Container>
      <Eyebrow>Capability sheet · At a glance</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>What we run.</Display>
      <div style={{border:"1px solid var(--color-pink)"}}>
        {[
          ["Hardware formats",      "0.3g · 0.5g · 1g · 2g · 3g · pods · post-less"],
          ["Oil types",             "Distillate · live resin · live rosin · snowcap · CDT · CBD · CBG · CBN"],
          ["Fill capacity",         "Up to 50,000 units per batch · cold + hot lines"],
          ["Lab testing",           "Every batch · COAs delivered with shipment · CA, NV, AZ compliance"],
          ["Packaging",             "Boxes · sleeves · mylars · child-resistant · tamper-evident"],
          ["Print finishes",        "Spot UV · soft-touch · foil · emboss · holographic"],
          ["Fulfillment",           "Direct-to-shop · DTC · 3PL handoff · tracked shipping"],
          ["Compliance markets",    "All 50 US states for compliant SKUs · International by request"],
        ].map(([k,v], i) => (
          <div key={k} style={{
            display:"grid", gridTemplateColumns:"260px 1fr", gap:32, padding:"20px 28px",
            borderBottom: i<7 ? "1px dashed rgba(236,142,190,.3)" : 0,
            alignItems:"center"
          }}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"var(--color-cyan)"}}>{k}</span>
            <span style={{fontSize:15, color:"rgba(227,240,247,.9)"}}>{v}</span>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const FAQBlock = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <Section bg="var(--color-bg-elev)" pad="120px 32px">
      <Container maxWidth={960}>
        <Eyebrow>Common questions</Eyebrow>
        <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>FAQ.</Display>
        <div>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{borderTop:"1px solid var(--color-pink)", borderBottom: i===FAQ.length-1 ? "1px solid var(--color-pink)" : 0}}>
                <button onClick={()=>setOpen(isOpen ? -1 : i)} style={{
                  width:"100%", background:"transparent", border:0, color:"var(--color-fg)",
                  padding:"24px 0", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", gap:24,
                  textAlign:"left"
                }}>
                  <span style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:22, letterSpacing:"-.01em"}}>{f.q}</span>
                  <span style={{color:"var(--color-cyan)", flexShrink:0, transition:"transform .2s", transform: isOpen ? "rotate(45deg)" : "rotate(0)"}}><Icons.Plus size={22}/></span>
                </button>
                {isOpen && (
                  <div style={{padding:"0 0 24px", fontSize:15, lineHeight:1.65, color:"rgba(227,240,247,.85)", maxWidth:760}}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const Services = ({setRoute}) => (
  <>
    <ServicesHero/>
    {SERVICES.map((s, i) => <ServiceLane key={s.id} s={s} i={i}/>)}
    <CapabilityTable/>
    <FAQBlock/>
    <CTABlock setRoute={setRoute}/>
  </>
);

window.Services = Services;
