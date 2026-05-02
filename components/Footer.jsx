const FooterCol = ({title, links, onClick}) => (
  <div>
    <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--color-pink)", marginBottom:14}}>— {title}</div>
    <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10}}>
      {links.map(l=>(
        <li key={l.label}>
          <a
            onClick={l.route && onClick ? ()=>onClick(l.route) : undefined}
            className="ssl-link"
            style={{
              color:"rgba(227,240,247,.85)", cursor: l.route ? "pointer" : "default",
              fontSize:13,
            }}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = ({setRoute}) => {
  const go = (r) => { setRoute(r); window.scrollTo({top:0, behavior:"instant"}); };
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <footer style={{background:"#000", borderTop:"2px solid var(--color-pink)", padding:"64px 32px 28px", marginTop:0}}>
      <Container>
        <div style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:32, marginBottom:48}}>
          <div>
            <img src="assets/logo-neon-clean.png" alt="Smoke Show Labs" style={{height:48, marginBottom:18, filter:"drop-shadow(0 0 12px rgba(120,214,241,.35))"}}/>
            <p style={{fontSize:13, lineHeight:1.55, color:"rgba(227,240,247,.7)", maxWidth:380, margin:"0 0 22px"}}>
              Brand development &amp; manufacturing for operators launching their own line. Hardware, oils, terpenes, fill, packaging — shipped under your name.
            </p>
            <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.5)", marginBottom:18}}>
              Subscribe — drop announcements, lab results, restock alerts.
            </div>
            <form onSubmit={e=>{e.preventDefault(); if(email) setSubscribed(true);}} style={{display:"flex", gap:0, maxWidth:380, borderBottom:"1px solid var(--color-pink)"}}>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@brand.co" style={{flex:1, background:"transparent", border:0, color:"var(--color-fg)", fontFamily:"var(--font-sans)", fontSize:14, padding:"10px 0", outline:"none"}}/>
              <button type="submit" style={{background:"transparent", border:0, color:subscribed?"var(--color-pink)":"var(--color-cyan)", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", cursor:"pointer", padding:"0 4px"}}>
                {subscribed ? "On the list ✓" : "Subscribe →"}
              </button>
            </form>

            <div style={{display:"flex", gap:16, marginTop:28}}>
              <a href="https://instagram.com/smokeshowlabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{color:"var(--color-fg)", lineHeight:0}}><Icons.Instagram size={20}/></a>
              <a href="mailto:info@smokeshowlabs.com" aria-label="Email" style={{color:"var(--color-fg)", lineHeight:0}}><Icons.Mail size={20}/></a>
              <a href="tel:2139439000" aria-label="Phone" style={{color:"var(--color-fg)", lineHeight:0}}><Icons.Phone size={20}/></a>
            </div>
          </div>

          <FooterCol title="Company" onClick={go} links={[
            {label:"About",       route:"about"},
            {label:"Gallery",     route:"gallery"},
            {label:"Blog",        route:"blog"},
            {label:"Careers",     route:"contact"},
            {label:"Press kit",   route:"contact"},
          ]}/>

          <FooterCol title="Operators" onClick={go} links={[
            {label:"Services",         route:"services"},
            {label:"Wholesale",        route:"wholesale"},
            {label:"Reseller signup",  route:"wholesale"},
            {label:"Spec sheets",      route:"contact"},
            {label:"Lab results",      route:"contact"},
          ]}/>

          <FooterCol title="Legal" onClick={go} links={[
            {label:"Terms & Conditions",        route:"terms"},
            {label:"Privacy Policy",            route:"privacy"},
            {label:"Shipping & Returns",        route:"shipping"},
            {label:"FAQ",                       route:"faq"},
            {label:"Do Not Sell My Info (CCPA)",route:"ccpa"},
          ]}/>
        </div>

        <div style={{
          paddingTop:24, borderTop:"1px solid rgba(236,142,190,.25)",
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12,
          fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase",
          color:"rgba(227,240,247,.5)"
        }}>
          <span>© 2026 Smoke Show Labs · Los Angeles, CA · 1410 W. Olympic Blvd Suite B · 213-943-9000</span>
          <span>21+ Only · Legal age required · CCPA Compliant</span>
        </div>
      </Container>
    </footer>
  );
};

window.Footer = Footer;
