// Sticky translucent top nav
const Nav = ({route, setRoute, onSignup, onCart, cartCount=0, onSignin, isResellerAuthed}) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    {id:"services",  label:"Services"},
    {id:"shop",      label:"Shop"},
    {id:"wholesale", label:"Wholesale"},
    {id:"about",     label:"About"},
    {id:"contact",   label:"Contact"},
  ];
  const go = (id) => { setRoute(id); setOpen(false); window.scrollTo({top:0, behavior:"instant"}); };
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:100,
      background:"rgba(0,0,0,.7)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)",
      borderBottom:"1px solid var(--color-pink)",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"14px 32px", gap:16
    }}>
      <a onClick={()=>go("home")} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:10, flexShrink:0}}>
        <img src="assets/logo-neon-clean.png" alt="Smoke Show Labs" style={{height:34, filter:"drop-shadow(0 0 10px rgba(120,214,241,.35))"}}/>
      </a>

      <div style={{display:"flex", gap:28, alignItems:"center"}} className="ssl-nav-links">
        {links.map(l => (
          <a key={l.id} onClick={()=>go(l.id)} className="ssl-link" style={{
            cursor:"pointer",
            fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em",
            textTransform:"uppercase",
            color: route===l.id ? "var(--color-cyan)" : "var(--color-fg)",
            textShadow: route===l.id ? "0 0 8px rgba(120,214,241,.6)" : "none"
          }}>{l.label}</a>
        ))}
      </div>

      <div style={{display:"flex", gap:14, alignItems:"center", flexShrink:0}}>
        {isResellerAuthed ? (
          <a onClick={()=>go("wholesale")} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829"}}>
            <Icons.User size={16}/> Reseller
          </a>
        ) : (
          <a onClick={onSignin} className="ssl-link" style={{cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"var(--color-fg)"}}>Sign in</a>
        )}
        <Button size="sm" onClick={onSignup}>Sign up</Button>
        <button onClick={onCart} aria-label="Open cart" style={{position:"relative", background:"transparent", border:0, color:"var(--color-fg)", cursor:"pointer", padding:6, lineHeight:0}}>
          <Icons.Cart size={22}/>
          {cartCount>0 && (
            <span style={{position:"absolute", top:0, right:0, background:"var(--color-cart-dot-bg)", color:"#fff", fontFamily:"var(--font-mono)", fontSize:10, width:16, height:16, borderRadius:999, display:"flex", alignItems:"center", justifyContent:"center"}}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
