// App router — single-page hash router
const App = () => {
  const [route, setRoute]           = React.useState(() => (location.hash.replace("#","") || "home"));
  const [authed, setAuthed]         = React.useState(() => !!localStorage.getItem("ssl_authed"));
  const [isReseller, setIsReseller] = React.useState(() => localStorage.getItem("ssl_reseller") === "1");
  const [signupOpen, setSignupOpen] = React.useState(false);
  const [signupMode, setSignupMode] = React.useState("signup");
  const [cartOpen, setCartOpen]     = React.useState(false);
  const [cart, setCart]             = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Sync route to hash — deep links + back/forward
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
  const removeItem = (id)      => setCart(c => c.filter(x => x.id !== id));
  const updateQty  = (id, qty) => setCart(c => qty<=0 ? c.filter(x=>x.id!==id) : c.map(x=>x.id===id?{...x,qty}:x));
  const clearCart  = ()        => setCart([]);
  const cartCount  = cart.reduce((s,i)=>s+i.qty, 0);

  // Navigate to product detail
  const openProduct = (p) => {
    setSelectedProduct(p);
    setRoute("product");
    window.scrollTo({top:0, behavior:"instant"});
  };

  // Go to checkout from cart drawer
  const goCheckout = () => {
    setRoute("checkout");
    window.scrollTo({top:0, behavior:"instant"});
  };

  const sharedProps = {
    setRoute,
    isReseller,
    addToCart,
    onSignup: openSignup,
    openProduct,
  };

  const Page = {
    home:      <Home      {...sharedProps}/>,
    services:  <Services  setRoute={setRoute}/>,
    shop:      <Shop      addToCart={addToCart} isAuthed={authed} isReseller={isReseller} onSignup={openSignup} openProduct={openProduct}/>,
    gallery:   <GalleryPage {...sharedProps}/>,
    wholesale: <Wholesale setRoute={setRoute} onSignup={openSignup} isResellerAuthed={authed && isReseller}/>,
    blog:      <BlogPage  setRoute={setRoute}/>,
    about:     <About     setRoute={setRoute}/>,
    contact:   <Contact/>,
    product:   <ProductPage
                  product={selectedProduct}
                  addToCart={addToCart}
                  isReseller={isReseller}
                  onSignup={openSignup}
                  setRoute={setRoute}
                  openProduct={openProduct}
               />,
    faq:       <FAQPage      setRoute={setRoute}/>,
    shipping:  <ShippingPage setRoute={setRoute}/>,
    privacy:   <PrivacyPage setRoute={setRoute}/>,
    terms:     <TermsPage    setRoute={setRoute}/>,
    ccpa:      <CCPAPage/>,
    checkout:  <CheckoutPage
                  cart={cart}
                  removeItem={removeItem}
                  updateQty={updateQty}
                  clearCart={clearCart}
                  isReseller={isReseller}
                  setRoute={setRoute}
               />,
  }[route] || <Home {...sharedProps}/>;

  return (
    <>
      <AgeGate/>
      <Nav
        route={route} setRoute={setRoute}
        onSignup={openSignup} onSignin={openSignin}
        onCart={()=>setCartOpen(true)} cartCount={cartCount}
        isResellerAuthed={authed && isReseller}
      />
      {Page}
      <Footer setRoute={setRoute}/>
      <SignupModal
        open={signupOpen} mode={signupMode}
        onClose={()=>setSignupOpen(false)}
        onComplete={onAuthComplete}
      />
      <CartDrawer
        open={cartOpen} onClose={()=>setCartOpen(false)}
        items={cart} removeItem={removeItem} updateQty={updateQty}
        isReseller={isReseller}
        onCheckout={goCheckout}
      />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
