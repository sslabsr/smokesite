// CONTACT — Lead form, channels, location card
const ContactHero = () => (
  <Section bg="#000" pad="120px 32px 60px">
    <Container>
      <Eyebrow>Contact · Brief us</Eyebrow>
      <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24}}>
        Tell us what you're<br/><span style={{color:"var(--color-cyan)"}}>building.</span>
      </Display>
      <p style={{maxWidth:680, fontSize:17, lineHeight:1.55, color:"rgba(227,240,247,.85)", margin:0}}>
        Spec sheet within 48 hours of a complete brief. No NDA fee. Real human reply, never a portal.
      </p>
    </Container>
  </Section>
);

const ContactForm = () => {
  const [sent, setSent] = React.useState(false);
  const [interest, setInterest] = React.useState([]);
  const togg = (k) => setInterest(interest.includes(k) ? interest.filter(x=>x!==k) : [...interest, k]);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) return (
    <div style={{padding:"60px 40px", border:"2px solid var(--color-cyan)", background:"rgba(120,214,241,.04)", textAlign:"center", display:"flex", flexDirection:"column", gap:14, alignItems:"center"}}>
      <div style={{color:"var(--color-cyan)"}}><Icons.Check size={48}/></div>
      <Eyebrow color="var(--color-cyan)">Brief received · SSL-26-{String(Math.floor(Math.random()*9000)+1000)}</Eyebrow>
      <Display as="div" size="h3" style={{fontSize:36}}>You're on the list.</Display>
      <p style={{fontSize:15, lineHeight:1.55, color:"rgba(227,240,247,.85)", maxWidth:480, margin:0}}>
        S. Okafor will reply within one business day with a spec sheet, sample lead times, and a short list of clarifying questions.
      </p>
    </div>
  );
  return (
    <form onSubmit={submit} style={{display:"flex", flexDirection:"column", gap:24, padding:"40px 40px", border:"2px solid var(--color-pink)", background:"#000"}}>
      <div style={{display:"flex", gap:18}}>
        <Input label="First name" placeholder="Alex" required/>
        <Input label="Last name" placeholder="Vega" required/>
      </div>
      <div style={{display:"flex", gap:18}}>
        <Input label="Email" type="email" placeholder="you@brand.co" required/>
        <Input label="Phone (optional)" placeholder="(213) 555-0100"/>
      </div>
      <Input label="Brand / company" placeholder="Bloom Co"/>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.65)"}}>Interested in</span>
        <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
          {SERVICES.map(s => {
            const active = interest.includes(s.id);
            return (
              <button key={s.id} type="button" onClick={()=>togg(s.id)} style={{
                background: active ? "var(--color-cyan)" : "transparent",
                color: active ? "#000" : "var(--color-fg)",
                border:"1px solid", borderColor: active ? "var(--color-cyan)" : "rgba(227,240,247,.2)",
                padding:"8px 14px", cursor:"pointer",
                fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase",
                transition:"all .15s"
              }}>{s.name}</button>
            );
          })}
        </div>
      </div>
      <div style={{display:"flex", gap:18}}>
        <Select label="Estimated volume" options={["—","1k–4,999 units","5k–24,999 units","25k+ units"]}/>
        <Select label="Timing" options={["—","Now / urgent","30 days","60–90 days","Just exploring"]}/>
      </div>
      <Textarea label="Tell us about the brand" placeholder="What's the line, what's the vibe, where will it sell?" rows={5}/>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:14, flexWrap:"wrap"}}>
        <span style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.5)"}}>21+ confirmed · CCPA Compliant</span>
        <Button type="submit" size="lg">Send brief <Icons.ArrowRight size={18}/></Button>
      </div>
    </form>
  );
};

const ContactChannels = () => (
  <div style={{display:"flex", flexDirection:"column", gap:18}}>
    {[
      {icon:"Mail", label:"EMAIL",   value:"hello@smokeshowlabs.com",   sub:"Replied within 1 business day"},
      {icon:"Phone", label:"PHONE",   value:"(213) 555-0100",            sub:"Mon–Fri · 9–5 PT · real human"},
      {icon:"Pin",  label:"FLOOR",   value:"1234 Industrial Way · LA",  sub:"Tours by appointment only"},
      {icon:"Instagram", label:"INSTAGRAM", value:"@smokeshowlabs",      sub:"DMs open · slow but human"},
    ].map(c => {
      const Icon = Icons[c.icon];
      return (
        <div key={c.label} style={{padding:"22px 24px", border:"1px solid var(--color-pink)", display:"flex", gap:18, alignItems:"flex-start"}}>
          <div style={{color:"var(--color-cyan)", flexShrink:0, marginTop:2}}><Icon size={22}/></div>
          <div style={{display:"flex", flexDirection:"column", gap:4, flex:1}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"var(--color-pink)"}}>— {c.label}</span>
            <span style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:22, letterSpacing:"-.01em"}}>{c.value}</span>
            <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.5)"}}>{c.sub}</span>
          </div>
        </div>
      );
    })}
  </div>
);

const Contact = () => (
  <>
    <ContactHero/>
    <Section bg="#000" pad="20px 32px 120px">
      <Container>
        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:40}}>
          <ContactForm/>
          <ContactChannels/>
        </div>
      </Container>
    </Section>
  </>
);

window.Contact = Contact;
