// Sticky translucent top nav — with mobile hamburger menu
const Nav = ({route, setRoute, onSignup, onCart, cartCount=0, onSignin, isResellerAuthed}) => {
  const [open, setOpen]   = React.useState(false);
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 900);

  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menu when route changes
  React.useEffect(() => { setOpen(false); }, [route]);

  const links = [
    {id:"services",  label:"Services"},
    {id:"shop",      label:"Shop"},
    {id:"gallery",   label:"Gallery"},
    {id:"wholesale", label:"Wholesale"},
    {id:"blog",      label:"Blog"},
    {id:"about",     label:"About"},
    {id:"contact",   label:"Contact"},
  ];

  const go = (id) => {
    setRoute(id);
    setOpen(false);
    window.scrollTo({top:0, behavior:"instant"});
  };

  const linkStyle = (id) => ({
    cursor:"pointer",
    fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em",
    textTransform:"uppercase",
    color: route===id ? "var(--color-cyan)" : "var(--color-fg)",
    textShadow: route===id ? "0 0 8px rgba(120,214,241,.6)" : "none",
  });

  return (
    <nav style={{
      position:"sticky", top:0, zIndex:100,
      background:"rgba(0,0,0,.85)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)",
      borderBottom:"1px solid var(--color-pink)",
    }}>
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"14px 32px", gap:16,
      }}>
        {/* Logo */}
        <a onClick={()=>go("home")} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:10, flexShrink:0}}>
          <img src="assets/logo-neon-clean.png" alt="Smoke Show Labs" style={{height:34, filter:"drop-shadow(0 0 10px rgba(120,214,241,.35))"}}/>
        </a>

        {/* Desktop links */}
        {!mobile && (
          <div style={{display:"flex", gap:24, alignItems:"center"}}>
            {links.map(l => (
              <a key={l.id} onClick={()=>go(l.id)} className="ssl-link" style={linkStyle(l.id)}>{l.label}</a>
            ))}
          </div>
        )}

        {/* Right: auth + cart + hamburger */}
        <div style={{display:"flex", gap:12, alignItems:"center", flexShrink:0}}>
          {!mobile && (
            <>
              {isResellerAuthed ? (
                <a onClick={()=>go("wholesale")} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829"}}>
                  <Icons.User size={16}/> Reseller
                </a>
              ) : (
                <a onClick={onSignin} className="ssl-link" style={{cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"var(--color-fg)"}}>Sign in</a>
              )}
              <Button size="sm" onClick={onSignup}>Sign up</Button>
            </>
          )}
          <button onClick={onCart} aria-label="Open cart" style={{position:"relative", background:"transparent", border:0, color:"var(--color-fg)", cursor:"pointer", padding:6, lineHeight:0}}>
            <Icons.Cart size={22}/>
            {cartCount > 0 && (
              <span style={{position:"absolute", top:0, right:0, background:"var(--color-magenta)", color:"#fff", fontFamily:"var(--font-mono)", fontSize:10, width:16, height:16, borderRadius:999, display:"flex", alignItems:"center", justifyContent:"center"}}>{cartCount}</span>
            )}
          </button>
          {mobile && (
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              style={{background:"transparent", border:0, color:"var(--color-fg)", cursor:"pointer", padding:6, lineHeight:0}}
            >
              {open ? <Icons.X size={24}/> : <Icons.Menu size={24}/>}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobile && open && (
        <div style={{
          background:"#000", borderTop:"1px solid rgba(236,142,190,.3)",
          padding:"20px 32px 28px",
          display:"flex", flexDirection:"column", gap:0,
        }}>
          {links.map(l => (
            <a
              key={l.id} onClick={()=>go(l.id)}
              style={{
                ...linkStyle(l.id),
                padding:"14px 0",
                borderBottom:"1px solid rgba(227,240,247,.07)",
                display:"block",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{marginTop:20, display:"flex", flexDirection:"column", gap:10}}>
            {isResellerAuthed ? (
              <a onClick={()=>go("wholesale")} style={{cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829", display:"flex", alignItems:"center", gap:8}}>
                <Icons.User size={16}/> Reseller Dashboard
              </a>
            ) : (
              <a onClick={()=>{onSignin(); setOpen(false);}} style={{cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"var(--color-fg)"}}>Sign in</a>
            )}
            <Button size="sm" onClick={()=>{onSignup(); setOpen(false);}} style={{alignSelf:"flex-start"}}>Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

window.Nav = Nav;
