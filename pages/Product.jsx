// Product detail page
const ProductPage = ({product, addToCart, isReseller, onSignup, setRoute, openProduct}) => {
  const [qty, setQty]           = React.useState(1);
  const [added, setAdded]       = React.useState(false);

  // Fallback to first product if none passed
  const p = product || PRODUCTS[0];
  const detail   = PRODUCT_DETAILS[p.id] || {};
  const hueColor = p.hue === "cyan" ? "var(--color-cyan)" : p.hue === "magenta" ? "var(--color-magenta)" : "var(--color-pink)";
  const hueRgb   = p.hue === "cyan" ? "120,214,241" : p.hue === "magenta" ? "255,45,180" : "236,142,190";
  const wsPrice  = (p.price * 0.55).toFixed(2);

  const related  = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3);

  const handleAdd = () => {
    if (!addToCart) { onSignup && onSignup(); return; }
    for (let i = 0; i < qty; i++) addToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Back nav */}
      <Section bg="#000" pad="24px 32px 0">
        <Container>
          <button onClick={() => { setRoute("shop"); window.scrollTo({top:0,behavior:"instant"}); }}
            style={{
              background:"transparent", border:0, cursor:"pointer",
              display:"flex", alignItems:"center", gap:8,
              fontFamily:"var(--font-mono)", fontSize:11,
              letterSpacing:".2em", textTransform:"uppercase",
              color:"rgba(227,240,247,.55)",
            }}>
            <Icons.ArrowRight size={14} style={{transform:"rotate(180deg)"}}/> Back to Shop
          </button>
        </Container>
      </Section>

      {/* Hero / Main product */}
      <Section bg="#000" pad="60px 32px">
        <Container>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start"}}>

            {/* Left: Visual */}
            <div style={{
              aspectRatio:"1/1",
              background:`radial-gradient(ellipse at 50% 40%, rgba(${hueRgb},.25) 0%, rgba(0,0,0,0) 65%), #050505`,
              border:`1px solid rgba(${hueRgb},.25)`,
              display:"flex", alignItems:"center", justifyContent:"center",
              position:"relative", overflow:"hidden",
            }}>
              {p.badge && (
                <span style={{
                  position:"absolute", top:24, left:24,
                  background: p.badge==="LIMITED" ? "var(--color-magenta)" : p.badge==="HOT" ? "var(--color-pink)" : "var(--color-cyan)",
                  color:"#000", fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".22em", textTransform:"uppercase", padding:"5px 10px",
                }}>{p.badge}</span>
              )}
              {isReseller && (
                <span style={{
                  position:"absolute", top:24, right:24,
                  background:"#f7b829", color:"#2b2b2b",
                  fontFamily:"var(--font-mono)", fontSize:10,
                  letterSpacing:".2em", textTransform:"uppercase", padding:"4px 8px",
                }}>WHOLESALE</span>
              )}
              {/* Hardware illustration — larger */}
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:16}}>
                <div style={{
                  width: p.category === "Pods" ? 56 : 64,
                  height: p.category === "Carts" ? 190 : p.category === "Pods" ? 120 : p.name === "Big Bear" ? 280 : 240,
                  background:"linear-gradient(180deg, #222 0%, #333 45%, #1a1a1a 100%)",
                  borderRadius: p.category === "Pods" ? 10 : 8,
                  boxShadow:`inset -4px 0 12px rgba(0,0,0,.7), 0 0 60px rgba(${hueRgb},.55)`,
                }}/>
                <div style={{
                  fontFamily:"var(--font-mono)", fontSize:10,
                  letterSpacing:".2em", textTransform:"uppercase",
                  color:`rgba(${hueRgb},.7)`,
                }}>{p.spec}</div>
              </div>
            </div>

            {/* Right: Info */}
            <div style={{display:"flex", flexDirection:"column", gap:28}}>
              <div>
                <div style={{
                  fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".22em", textTransform:"uppercase",
                  color:`rgba(${hueRgb},.8)`, marginBottom:10,
                }}>{p.type}</div>
                <Display as="h1" size="h1" style={{marginBottom:16}}>{p.name}</Display>
                <p style={{fontSize:16, lineHeight:1.7, color:"rgba(227,240,247,.8)", margin:0}}>
                  {detail.description || p.spec}
                </p>
              </div>

              {/* Pricing */}
              <div style={{padding:"24px 0", borderTop:"1px solid rgba(227,240,247,.1)", borderBottom:"1px solid rgba(227,240,247,.1)"}}>
                {isReseller ? (
                  <div style={{display:"flex", gap:24, alignItems:"baseline"}}>
                    <div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829", marginBottom:6}}>Wholesale Price</div>
                      <div style={{fontFamily:"var(--font-display)", fontSize:48, color:"#f7b829", lineHeight:1, letterSpacing:"-.02em"}}>${wsPrice}</div>
                    </div>
                    <div style={{opacity:.5}}>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.5)", marginBottom:6}}>MSRP</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:22, color:"rgba(227,240,247,.4)", textDecoration:"line-through"}}>${p.price.toFixed(2)}</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:hueColor, marginBottom:6}}>Price per unit</div>
                    <div style={{fontFamily:"var(--font-display)", fontSize:56, color:hueColor, lineHeight:1, letterSpacing:"-.02em"}}>${p.price.toFixed(2)}</div>
                  </div>
                )}
              </div>

              {/* Qty + Add to cart */}
              <div style={{display:"flex", gap:16, alignItems:"center", flexWrap:"wrap"}}>
                <div style={{
                  display:"flex", alignItems:"center", gap:0,
                  border:"1px solid rgba(227,240,247,.2)",
                }}>
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    style={{
                      width:44, height:44, background:"transparent", border:0,
                      cursor:"pointer", color:"var(--color-fg)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}
                  >
                    <Icons.Minus size={16}/>
                  </button>
                  <span style={{
                    width:48, textAlign:"center",
                    fontFamily:"var(--font-mono)", fontSize:16,
                    color:"var(--color-fg)",
                  }}>{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    style={{
                      width:44, height:44, background:"transparent", border:0,
                      cursor:"pointer", color:"var(--color-fg)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}
                  >
                    <Icons.Plus size={16}/>
                  </button>
                </div>
                <Button
                  onClick={handleAdd}
                  variant={p.hue === "pink" ? "pink" : "primary"}
                  size="lg"
                  style={{flex:1, justifyContent:"center"}}
                >
                  {added ? (
                    <><Icons.Check size={18}/> Added</>
                  ) : (
                    <><Icons.Cart size={18}/> Add to Cart</>
                  )}
                </Button>
              </div>

              {isReseller && (
                <div style={{
                  padding:"14px 18px",
                  background:"rgba(247,184,41,.08)", border:"1px solid rgba(247,184,41,.3)",
                  fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".18em", textTransform:"uppercase",
                  color:"#f7b829",
                }}>
                  Wholesale MOQ · 1,000 units per SKU
                </div>
              )}

              {/* Spec rows */}
              {detail.features && (
                <div>
                  <div style={{
                    fontFamily:"var(--font-mono)", fontSize:10,
                    letterSpacing:".22em", textTransform:"uppercase",
                    color:"rgba(227,240,247,.5)", marginBottom:16,
                  }}>Specifications</div>
                  {detail.features.map(f => (
                    <div key={f} style={{
                      display:"flex", gap:10, alignItems:"flex-start",
                      padding:"10px 0", borderBottom:"1px dashed rgba(236,142,190,.2)",
                      fontSize:14, color:"rgba(227,240,247,.8)",
                    }}>
                      <span style={{color:hueColor, marginTop:1, flexShrink:0}}><Icons.Check size={14}/></span>
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Technical spec table */}
      <Section bg="var(--color-bg-elev)" pad="80px 32px">
        <Container maxWidth={900}>
          <Display as="h2" size="h2" style={{marginBottom:40}}>Tech Spec.</Display>
          <div style={{border:`1px solid rgba(${hueRgb},.35)`}}>
            {[
              ["SKU Name",        p.name],
              ["Type",            p.type],
              ["Fill Capacity",   p.spec.split("·")[0]?.trim()],
              ["Connection",      detail.connection || "—"],
              ["Coil Type",       detail.coil || "Ceramic"],
              ["Resistance",      detail.resistance || "—"],
              ["Dimensions",      detail.dimensions || "—"],
              ["Battery",         p.spec.includes("mAh") ? p.spec.split("·").find(s => s.includes("mAh"))?.trim() : "N/A"],
              ["Category",        p.category],
              ["COA Included",    "Yes — every batch"],
              ["Min. Order",      "1,000 units (wholesale)"],
            ].map(([k, v], i, arr) => (
              <div key={k} style={{
                display:"grid", gridTemplateColumns:"220px 1fr",
                gap:24, padding:"16px 28px",
                borderBottom: i < arr.length-1 ? `1px dashed rgba(${hueRgb},.2)` : 0,
                alignItems:"center",
              }}>
                <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:`rgba(${hueRgb},.7)`}}>{k}</span>
                <span style={{fontSize:15, color:"rgba(227,240,247,.9)"}}>{v}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section bg="#000" pad="80px 32px">
          <Container>
            <Eyebrow>More in {p.category}</Eyebrow>
            <Display as="h2" size="h2" style={{marginTop:14, marginBottom:40}}>Related.</Display>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:3}}>
              {related.map(rp => (
                <ProductCard
                  key={rp.id}
                  p={rp}
                  onAdd={() => addToCart && addToCart(rp)}
                  isReseller={isReseller}
                  onOpen={() => openProduct ? openProduct(rp) : undefined}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};

window.ProductPage = ProductPage;
