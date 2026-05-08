// SHOP — Storefront with category filter, locked state for non-authed users
const ShopHero = ({isAuthed, isReseller, onSignup}) => (
  <Section className="r-px r-hero-py" bg="#000" pad="100px 32px 60px">
    <Container>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:24}}>
        <div>
          <Eyebrow color={isReseller ? "#f7b829" : "var(--color-pink)"}>
            {isReseller ? "Reseller storefront · Wholesale pricing live" : isAuthed ? "Storefront · Retail pricing" : "Storefront · Sign in to shop"}
          </Eyebrow>
          <Display as="h1" size="h1" style={{marginTop:24, marginBottom:18}}>Shop.</Display>
          <p style={{maxWidth:560, fontSize:17, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
            In-stock SKUs from our floor. Lab COAs included with every order. Free ship over $200.
          </p>
        </div>
        {!isAuthed && (
          <div style={{padding:"18px 22px", border:"1px solid var(--color-cyan)", background:"rgba(120,214,241,.04)", maxWidth:340}}>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8, color:"var(--color-cyan)"}}>
              <Icons.Lock size={16}/>
              <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase"}}>Sign-in required</span>
            </div>
            <p style={{fontSize:13, lineHeight:1.5, margin:"0 0 12px", color:"rgba(227,240,247,.8)"}}>Browse freely — sign up to add to cart and check out.</p>
            <Button size="sm" onClick={onSignup}>Sign up · Free</Button>
          </div>
        )}
      </div>
    </Container>
  </Section>
);

const ShopFilters = ({active, setActive, sort, setSort}) => (
  <div className="r-filters-bar" style={{borderTop:"1px solid var(--color-pink)", borderBottom:"1px solid var(--color-pink)", padding:"14px 32px", background:"#000", position:"sticky", top:64, zIndex:50, backdropFilter:"blur(10px)"}}>
    <Container>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
        <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
          {PRODUCT_CATEGORIES.map(c => (
            <button key={c} onClick={()=>setActive(c)} style={{
              background: active===c ? "var(--color-cyan)" : "transparent",
              color: active===c ? "#000" : "var(--color-fg)",
              border:"1px solid", borderColor: active===c ? "var(--color-cyan)" : "rgba(227,240,247,.2)",
              padding:"8px 14px", cursor:"pointer",
              fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase",
              transition:"all .15s"
            }}>{c}</button>
          ))}
        </div>
        <div style={{display:"flex", gap:14, alignItems:"center"}}>
          <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.55)"}}>Sort</span>
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{
            background:"transparent", color:"var(--color-fg)", border:"1px solid rgba(227,240,247,.2)",
            padding:"6px 10px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase"
          }}>
            <option value="featured" style={{background:"#000"}}>Featured</option>
            <option value="price-asc" style={{background:"#000"}}>Price · low → high</option>
            <option value="price-desc" style={{background:"#000"}}>Price · high → low</option>
            <option value="name" style={{background:"#000"}}>Name · A–Z</option>
          </select>
        </div>
      </div>
    </Container>
  </div>
);

const Shop = ({addToCart, isAuthed, isReseller, onSignup, openProduct}) => {
  const [cat, setCat] = React.useState("All");
  const [sort, setSort] = React.useState("featured");
  const filtered = PRODUCTS
    .filter(p => cat==="All" || p.category===cat)
    .sort((a,b) => {
      if (sort==="price-asc")  return a.price - b.price;
      if (sort==="price-desc") return b.price - a.price;
      if (sort==="name")       return a.name.localeCompare(b.name);
      return 0;
    });
  const handleAdd = (p) => {
    if (!isAuthed) { onSignup(); return; }
    addToCart(p);
  };
  return (
    <>
      <ShopHero isAuthed={isAuthed} isReseller={isReseller} onSignup={onSignup}/>
      <ShopFilters active={cat} setActive={setCat} sort={sort} setSort={setSort}/>
      <Section className="r-px" bg="#000" pad="48px 32px 120px">
        <Container>
          <div className="r-2col" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20}}>
            {filtered.map(p => (
              <ProductCard key={p.id} p={p} onAdd={()=>handleAdd(p)} isReseller={isReseller} onOpen={openProduct ? ()=>openProduct(p) : undefined}/>
            ))}
          </div>
          {filtered.length===0 && (
            <div style={{padding:"80px 0", textAlign:"center", color:"rgba(227,240,247,.5)", fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:".22em", textTransform:"uppercase"}}>
              No SKUs in this category yet.
            </div>
          )}
        </Container>
      </Section>
      <Marquee items={["LAB-TESTED EVERY BATCH","COAs INCLUDED","CHILD-RESISTANT","CCRR COMPLIANT","FREE SHIP $200+","RESTOCK ALERTS"]} color="var(--color-pink)" speed={32} fontSize={28}/>
    </>
  );
};

window.Shop = Shop;
