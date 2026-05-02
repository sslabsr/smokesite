// Gallery — floor photos, product showcase, brand partners
const GalleryPage = ({setRoute, addToCart, isReseller, openProduct}) => (
  <>
    <GalleryHero/>
    <FloorGallery/>
    <ProductShowcase setRoute={setRoute} addToCart={addToCart} isReseller={isReseller} openProduct={openProduct}/>
    <BrandPartners/>
    <GalleryCTA setRoute={setRoute}/>
  </>
);

const GalleryHero = () => (
  <Section bg="#000" pad="120px 32px 80px">
    <Container>
      <Eyebrow>Gallery · The Lab in Motion</Eyebrow>
      <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:1000}}>
        The Lab<br/>
        <span style={{color:"var(--color-cyan)"}}>in Motion.</span>
      </Display>
      <p style={{maxWidth:640, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
        1410 W. Olympic Blvd, Suite B, Los Angeles. Our floor, our lines, our catalog. 25 years of builds, poured into every batch.
      </p>
    </Container>
  </Section>
);

const FloorGallery = () => (
  <Section bg="var(--color-bg-elev)" pad="80px 32px">
    <Container>
      <Eyebrow style={{marginBottom:14}}>Floor Tour · 9 stations</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>Inside the Floor.</Display>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",
        gap:3,
      }}>
        {GALLERY_FLOOR.map((item, i) => {
          const hueColor = item.hue === "cyan" ? "var(--color-cyan)" : item.hue === "magenta" ? "var(--color-magenta)" : "var(--color-pink)";
          const hueRgb   = item.hue === "cyan" ? "120,214,241" : item.hue === "magenta" ? "255,45,180" : "236,142,190";
          return (
            <div key={i} style={{
              position:"relative",
              aspectRatio:"4/3",
              background:`radial-gradient(ellipse at 30% 40%, rgba(${hueRgb},.18) 0%, rgba(0,0,0,0) 65%), #0a0a0a`,
              border:`1px solid rgba(${hueRgb},.2)`,
              overflow:"hidden",
              display:"flex", flexDirection:"column", justifyContent:"space-between",
              padding:24,
              cursor:"default",
            }}>
              {/* Station number */}
              <div style={{
                fontFamily:"var(--font-display)", fontSize:80,
                color:`rgba(${hueRgb},.07)`,
                lineHeight:1, letterSpacing:"-.04em",
                position:"absolute", top:16, right:20,
              }}>
                {String(i+1).padStart(2,"0")}
              </div>

              {/* Center icon */}
              <div style={{
                flex:1, display:"flex", alignItems:"center", justifyContent:"center",
                color:`rgba(${hueRgb},.35)`,
              }}>
                {i === 0 && <Icons.Truck size={64}/>}
                {i === 1 && <Icons.Beaker size={64}/>}
                {i === 2 && <Icons.Shield size={64}/>}
                {i === 3 && <Icons.Flask size={64}/>}
                {i === 4 && <Icons.Box size={64}/>}
                {i === 5 && <Icons.Snow size={64}/>}
                {i === 6 && <Icons.Star size={64}/>}
                {i === 7 && <Icons.Truck size={64}/>}
                {i === 8 && <Icons.Check size={64}/>}
              </div>

              {/* Caption */}
              <div>
                <div style={{
                  fontFamily:"var(--font-display)", fontSize:22,
                  textTransform:"uppercase", letterSpacing:"-.01em",
                  color:"var(--color-fg)", marginBottom:6,
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".16em", textTransform:"uppercase",
                  color:`rgba(${hueRgb},.7)`,
                  lineHeight:1.5,
                }}>
                  {item.caption}
                </div>
              </div>

              {/* Glow line at bottom */}
              <div style={{
                position:"absolute", bottom:0, left:0, right:0,
                height:2,
                background:`linear-gradient(90deg, transparent, rgba(${hueRgb},.6), transparent)`,
              }}/>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);

const ProductShowcase = ({setRoute, addToCart, isReseller, openProduct}) => {
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return (
  <Section bg="#000" pad="80px 32px">
    <Container>
      <Eyebrow>Product Catalog · All SKUs</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:16}}>The Lineup.</Display>
      <p style={{fontSize:16, color:"rgba(227,240,247,.7)", marginBottom:56, maxWidth:600}}>
        Eight hardware formats. Fill any of them with distillate, live resin, live rosin, or snowcap. All ship under your label.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:0}}>
        {PRODUCTS.map((p, i) => {
          const hueColor = p.hue === "cyan" ? "var(--color-cyan)" : p.hue === "magenta" ? "var(--color-magenta)" : "var(--color-pink)";
          const hueRgb   = p.hue === "cyan" ? "120,214,241" : p.hue === "magenta" ? "255,45,180" : "236,142,190";
          const reverse  = !mobile && i % 2 === 1;
          const detail   = PRODUCT_DETAILS[p.id] || {};
          const wsPrice  = (p.price * 0.55).toFixed(2);
          return (
            <div key={p.id} style={{
              display:"grid",
              gridTemplateColumns: mobile ? "1fr" : (reverse ? "1fr 380px" : "380px 1fr"),
              borderTop:"1px solid rgba(227,240,247,.08)",
              minHeight: mobile ? "auto" : 320,
            }}>
              {/* Visual panel */}
              <div style={{
                order: reverse ? 2 : 1,
                background:`radial-gradient(ellipse at 50% 40%, rgba(${hueRgb},.2) 0%, rgba(0,0,0,0) 65%), #050505`,
                display:"flex", alignItems:"center", justifyContent:"center",
                position:"relative", overflow:"hidden", padding:40,
                minHeight:280,
              }}>
                {p.badge && (
                  <span style={{
                    position:"absolute", top:20, left:20,
                    background: p.badge==="LIMITED" ? "var(--color-magenta)" : p.badge==="HOT" ? "var(--color-pink)" : "var(--color-cyan)",
                    color:"#000", fontFamily:"var(--font-mono)", fontSize:10,
                    letterSpacing:".22em", textTransform:"uppercase", padding:"4px 8px",
                  }}>{p.badge}</span>
                )}
                {/* Hardware illustration */}
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:8}}>
                  <div style={{
                    width: p.category === "Pods" ? 36 : 42,
                    height: p.category === "Carts" ? 120 : p.category === "Pods" ? 80 : p.name === "Big Bear" ? 200 : 160,
                    background:"linear-gradient(180deg, #1e1e1e 0%, #2a2a2a 50%, #181818 100%)",
                    borderRadius: p.category === "Pods" ? 8 : 6,
                    boxShadow:`inset -3px 0 8px rgba(0,0,0,.7), 0 0 36px rgba(${hueRgb},.5)`,
                  }}/>
                  <div style={{
                    fontFamily:"var(--font-mono)", fontSize:9,
                    letterSpacing:".2em", textTransform:"uppercase",
                    color:`rgba(${hueRgb},.6)`,
                  }}>{p.spec}</div>
                </div>
              </div>

              {/* Info panel */}
              <div style={{
                order: reverse ? 1 : 2,
                padding:"48px 56px",
                display:"flex", flexDirection:"column", justifyContent:"center", gap:20,
              }}>
                <div>
                  <div style={{
                    fontFamily:"var(--font-mono)", fontSize:10,
                    letterSpacing:".22em", textTransform:"uppercase",
                    color:`rgba(${hueRgb},.7)`, marginBottom:8,
                  }}>{p.type}</div>
                  <Display as="h3" size="h2">{p.name}</Display>
                </div>

                <p style={{
                  fontSize:15, lineHeight:1.7, color:"rgba(227,240,247,.8)",
                  margin:0, maxWidth:480,
                }}>
                  {detail.description || p.spec}
                </p>

                {detail.features && (
                  <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:8}}>
                    {detail.features.slice(0,4).map(f => (
                      <li key={f} style={{display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"rgba(227,240,247,.75)"}}>
                        <span style={{color:hueColor, marginTop:1, flexShrink:0}}><Icons.Check size={14}/></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{display:"flex", gap:32, alignItems:"baseline"}}>
                  {isReseller ? (
                    <div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"#f7b829", marginBottom:4}}>Wholesale</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:22, color:"#f7b829"}}>${wsPrice}</div>
                    </div>
                  ) : (
                    <div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:hueColor, marginBottom:4}}>Retail</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:22, color:hueColor}}>${p.price.toFixed(2)}</div>
                    </div>
                  )}
                </div>

                <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
                  <Button
                    onClick={() => { if (openProduct) { openProduct(p); } else { setRoute("product"); window.scrollTo({top:0,behavior:"instant"}); } }}
                    variant="outlined-cyan" size="sm"
                  >
                    View Details <Icons.ArrowRight size={14}/>
                  </Button>
                  <Button
                    onClick={() => addToCart && addToCart(p)}
                    variant={p.hue === "pink" ? "pink" : "primary"}
                    size="sm"
                  >
                    <Icons.Plus size={14}/> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
  );
};

const BrandPartners = () => (
  <Section bg="var(--color-bg-elev)" pad="80px 32px">
    <Container>
      <Eyebrow>Brand Partners · In the Market</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>Who We Build For.</Display>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:3}}>
        {[
          ...SOCIAL_PROOF,
          {brand:"YOUR BRAND",  quote:"This spot could be yours. Apply for the wholesale program and get your line on our floor.", role:"APPLY NOW", placeholder:true},
        ].map((b, i) => {
          const colors = ["var(--color-cyan)", "var(--color-pink)", "var(--color-magenta)", "var(--color-cyan)"];
          const bgs    = ["rgba(120,214,241,.06)", "rgba(236,142,190,.06)", "rgba(255,45,180,.06)", "rgba(120,214,241,.03)"];
          return (
            <div key={b.brand} style={{
              background: bgs[i],
              border:`1px solid ${b.placeholder ? "rgba(227,240,247,.1)" : colors[i]}`,
              padding:"48px 36px",
              display:"flex", flexDirection:"column", gap:24,
              opacity: b.placeholder ? .6 : 1,
            }}>
              <div style={{
                fontFamily:"var(--font-display)", fontSize:28,
                textTransform:"uppercase", letterSpacing:"-.01em",
                color: b.placeholder ? "rgba(227,240,247,.5)" : colors[i],
              }}>
                {b.brand}
              </div>
              <p style={{
                fontSize:16, lineHeight:1.65,
                color:"rgba(227,240,247,.8)",
                fontStyle: b.placeholder ? "normal" : "italic",
                margin:0, flex:1,
              }}>
                "{b.quote}"
              </p>
              <div style={{
                fontFamily:"var(--font-mono)", fontSize:10,
                letterSpacing:".22em", textTransform:"uppercase",
                color:"rgba(227,240,247,.45)",
              }}>
                — {b.role}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);

const GalleryCTA = ({setRoute}) => (
  <Section bg="var(--color-pink)" pad="100px 32px">
    <Container>
      <div style={{maxWidth:800}}>
        <Display as="h2" size="h2" color="#000" style={{marginBottom:24}}>
          Ready to see your brand on this floor?
        </Display>
        <p style={{fontSize:18, color:"rgba(0,0,0,.75)", marginBottom:40, maxWidth:560}}>
          Book a floor tour or start a wholesale application. We run tours Mon–Fri by appointment.
        </p>
        <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
          <Button variant="mustard" size="lg" onClick={() => { setRoute("contact"); window.scrollTo({top:0,behavior:"instant"}); }}>
            Book a Tour <Icons.ArrowRight size={18}/>
          </Button>
          <Button variant="outlined" size="lg" onClick={() => { setRoute("wholesale"); window.scrollTo({top:0,behavior:"instant"}); }} style={{borderColor:"#000", color:"#000"}}>
            Wholesale Program
          </Button>
        </div>
      </div>
    </Container>
  </Section>
);

window.GalleryPage = GalleryPage;
