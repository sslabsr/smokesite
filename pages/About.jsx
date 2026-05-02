// ABOUT — Story, Floor, Team, Values
const AboutHero = () => (
  <Section bg="#000" pad="120px 32px 80px">
    <Container>
      <Eyebrow>About · Smoke Show Labs · Est. 2001</Eyebrow>
      <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:1200}}>
        25 years on the floor.<br/>
        <span style={{color:"var(--color-pink)"}}>One block</span> in <span style={{color:"var(--color-cyan)"}}>downtown LA</span>.
      </Display>
      <p style={{maxWidth:760, fontSize:18, lineHeight:1.6, color:"rgba(227,240,247,.85)", margin:0}}>
        We started in 2001 packing glass. We're still in the same building. Same floor, same crew, more SKUs. Brands you've seen on shelves were built here — under their name, not ours.
      </p>
    </Container>
  </Section>
);

const StoryBlock = () => (
  <Section bg="var(--color-bg-elev)" pad="120px 32px">
    <Container>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:80, alignItems:"start"}}>
        <div>
          <Eyebrow>The story</Eyebrow>
          <Display as="h2" size="h2" style={{marginTop:14}}>Built by operators,<br/>for operators.</Display>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:24, fontSize:16, lineHeight:1.7, color:"rgba(227,240,247,.85)"}}>
          <p style={{margin:0}}>Smoke Show Labs started as a packing room behind a glass shop on Olympic. M. Reyes hand-rolled mylars for one local brand for a year before adding hardware.</p>
          <p style={{margin:0}}>Twenty-five years and a few thousand SKUs later, the floor is bigger, the lab is real, and the same brand still ships from us. The pitch has not changed: <span style={{color:"var(--color-cyan)"}}>your line, our floor</span>.</p>
          <p style={{margin:0}}>We don't put our name on the box. We don't co-brand. We don't pitch your customer. The work goes out under your label and stays there.</p>
          <p style={{margin:0, fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:24, lineHeight:1.2, color:"var(--color-pink)", letterSpacing:"-.01em"}}>"We're the people <br/>behind the people<br/>on the shelf."</p>
        </div>
      </div>
    </Container>
  </Section>
);

const FloorTour = () => (
  <Section bg="#000" pad="120px 32px">
    <Container>
      <Eyebrow color="var(--color-cyan)">The floor · Downtown LA</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>What you'd see<br/>walking in.</Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, border:"1px solid var(--color-pink)"}}>
        {[
          {n:"01", t:"Receiving",     b:"Hardware QA, oil intake, packaging stock. Everything tagged with batch ID before it touches a line."},
          {n:"02", t:"Lab",           b:"Potency, residual solvents, pesticides, terpenes. ISO-7 clean room. Every batch tested before fill."},
          {n:"03", t:"Fill lines",    b:"Cold + hot lines. 510 carts, AIOs, pods. Optical fill check on every cart. Snowcap station."},
          {n:"04", t:"Pack-out",      b:"Cartoning, kit-pack, label, shrink. Direct-to-shop trays staged for tracked shipping."},
        ].map((s, i) => (
          <div key={s.n} style={{
            padding:"32px 24px",
            borderRight: i<3 ? "1px solid rgba(236,142,190,.3)" : 0,
            display:"flex", flexDirection:"column", gap:14, minHeight:280, position:"relative",
            background: i%2 ? "rgba(120,214,241,.03)" : "transparent"
          }}>
            <div style={{
              fontFamily:"var(--font-display)", fontSize:64,
              color: i%2 ? "var(--color-cyan)" : "var(--color-pink)",
              lineHeight:1, letterSpacing:"-.03em"
            }}>{s.n}</div>
            <Display as="h3" size="h3" style={{fontSize:28}}>{s.t}</Display>
            <p style={{fontSize:13, lineHeight:1.55, color:"rgba(227,240,247,.7)", margin:0}}>{s.b}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:32, padding:"22px 28px", border:"1px solid var(--color-cyan)", background:"rgba(120,214,241,.04)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16}}>
        <div style={{display:"flex", alignItems:"center", gap:14}}>
          <span style={{color:"var(--color-cyan)"}}><Icons.Pin size={20}/></span>
          <span style={{fontFamily:"var(--font-mono)", fontSize:13, color:"var(--color-fg)"}}>Floor tours by appointment · 1234 Industrial Way · LA, CA 90021</span>
        </div>
        <Button size="sm" variant="outlined-cyan">Book a tour <Icons.ArrowRight size={14}/></Button>
      </div>
    </Container>
  </Section>
);

const TeamBlock = () => (
  <Section bg="var(--color-bg-elev)" pad="120px 32px">
    <Container>
      <Eyebrow>The crew</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>People you'll<br/>actually talk to.</Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18}}>
        {TEAM.map((t, i) => (
          <div key={t.name} style={{
            background:"#000", border:"1px solid var(--color-pink)",
            display:"flex", flexDirection:"column"
          }}>
            <div style={{
              aspectRatio:"4/5", display:"flex", alignItems:"center", justifyContent:"center",
              background:`linear-gradient(135deg, ${i%2 ? "rgba(120,214,241,.18)" : "rgba(255,45,180,.18)"}, rgba(0,0,0,.6))`,
              borderBottom:"1px solid var(--color-pink)"
            }}>
              <span style={{fontFamily:"var(--font-display)", fontSize:96, color: i%2 ? "var(--color-cyan)" : "var(--color-pink)", letterSpacing:"-.04em"}}>{t.init}</span>
            </div>
            <div style={{padding:"18px 18px 22px", display:"flex", flexDirection:"column", gap:6}}>
              <Display as="div" size="h3" style={{fontSize:24}}>{t.name}</Display>
              <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--color-cyan)"}}>{t.role}</div>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.5)"}}>{t.yrs}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const ValuesBlock = () => (
  <Section bg="var(--color-cyan)" pad="120px 32px">
    <Container>
      <Eyebrow color="#000">— What we believe</Eyebrow>
      <Display as="h2" size="hero" color="#000" style={{marginTop:14, fontSize:"clamp(56px, 9vw, 130px)"}}>
        Show up.<br/>Ship clean.<br/>Stay quiet.
      </Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:32, marginTop:60, color:"#000"}}>
        {[
          {n:"01", t:"Show up.",   b:"On the floor every day. Same crew, same building, since 2001. Phone number is a real number."},
          {n:"02", t:"Ship clean.", b:"Lab COAs every batch. Tracked shipping. Tamper-evident. Compliance checked per market."},
          {n:"03", t:"Stay quiet.", b:"Your name on the box, never ours. We don't co-brand. We don't pitch your customer."},
        ].map(v => (
          <div key={v.n} style={{borderTop:"2px solid #000", paddingTop:18}}>
            <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em"}}>— {v.n}</div>
            <div style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:36, letterSpacing:"-.02em", margin:"12px 0 14px"}}>{v.t}</div>
            <p style={{fontSize:15, lineHeight:1.55, margin:0}}>{v.b}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const About = ({setRoute}) => (
  <>
    <AboutHero/>
    <StoryBlock/>
    <FloorTour/>
    <TeamBlock/>
    <ValuesBlock/>
  </>
);

window.About = About;
