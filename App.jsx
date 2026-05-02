// App router — single-page hash router for the marketing site
const App = () => {
  const [route, setRoute] = React.useState(() => (location.hash.replace("#","") || "home"));
  const [authed, setAuthed] = React.useState(() => !!localStorage.getItem("ssl_authed"));
  const [isReseller, setIsReseller] = React.useState(() => localStorage.getItem("ssl_reseller") === "1");
  const [signupOpen, setSignupOpen] = React.useState(false);
  const [signupMode, setSignupMode] = React.useState("signup");
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  // Sync route to hash so deep links work + back/forward navigates
  React.useEffect(() => { location.hash = route; }, [route]);
  React.useEffect(() => {
    const onHash = () => setRoute(location.hash.replace("#","") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const openSignup = () => { setSignupMode("signup"); setSignupOpen(true); };
  const openSignin = () => { setSignupMode("signin"); setSignupOpen(true); };
  const onAuthComplete = ({reseller}) => {
    localStorage.setItem("ssl_authed", "1");
    setAuthed(true);
    if (reseller) { localStorage.setItem("ssl_reseller", "1"); setIsReseller(true); }
  };

  const addToCart = (p) => {
    setCart(c => {
      const ex = c.find(x => x.id === p.id);
      if (ex) return c.map(x => x.id===p.id ? {...x, qty:x.qty+1} : x);
      return [...c, {...p, qty:1}];
    });
    setCartOpen(true);
  };
  const removeItem = (id) => setCart(c => c.filter(x => x.id !== id));
  const updateQty  = (id, qty) => setCart(c => qty<=0 ? c.filter(x=>x.id!==id) : c.map(x=>x.id===id?{...x, qty}:x));
  const cartCount = cart.reduce((s,i)=>s+i.qty, 0);

  const Page = {
    home:      <Home      setRoute={setRoute} onSignup={openSignup} addToCart={addToCart} isReseller={isReseller}/>,
    services:  <Services  setRoute={setRoute}/>,
    shop:      <Shop      addToCart={addToCart} isAuthed={authed} isReseller={isReseller} onSignup={openSignup}/>,
    wholesale: <Wholesale setRoute={setRoute} onSignup={openSignup} isResellerAuthed={authed && isReseller}/>,
    about:     <About     setRoute={setRoute}/>,
    contact:   <Contact/>,
  }[route] || <Home setRoute={setRoute} onSignup={openSignup} addToCart={addToCart} isReseller={isReseller}/>;

  return (
    <>
      <AgeGate/>
      <Nav route={route} setRoute={setRoute} onSignup={openSignup} onSignin={openSignin}
           onCart={()=>setCartOpen(true)} cartCount={cartCount}
           isResellerAuthed={authed && isReseller}/>
      {Page}
      <Footer setRoute={setRoute}/>
      <SignupModal open={signupOpen} mode={signupMode} onClose={()=>setSignupOpen(false)} onComplete={onAuthComplete}/>
      <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} items={cart}
                  removeItem={removeItem} updateQty={updateQty} isReseller={isReseller}/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
