// HOME — Hero · Marquee · Services snapshot · Featured products · Process · Stats · Social proof · CTA
const HeroBlock = ({setRoute, onSignup}) => (
  <Section pad="0" bg="#000">
    <div className="r-px r-hero-py" style={{position:"relative", overflow:"hidden", padding:"120px 32px 100px", borderBottom:"2px solid var(--color-pink)"}}>
      {/* subtle smoke gradient bg */}
      <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 70% 30%, rgba(120,214,241,.08), transparent 60%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(255,45,180,.07), transparent 60%)", pointerEvents:"none"}}/>
      {/* grid lines */}
      <div style={{position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(227,240,247,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(227,240,247,.04) 1px, transparent 1px)", backgroundSize:"80px 80px", pointerEvents:"none"}}/>

      <Container style={{position:"relative"}}>
        <div className="r-stack" style={{display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"end"}}>
          <div>
            <Eyebrow>LA · Co-Pack & Brand Dev · Est. 2001</Eyebrow>
            <Display as="h1" size="hero" style={{marginTop:24, marginBottom:24}}>
              Your line.<br/>
              <span style={{color:"var(--color-cyan)", textShadow:"0 0 24px rgba(120,214,241,.5)"}}>Our floor.</span>
            </Display>
            <p style={{maxWidth:600, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.85)", margin:"0 0 36px"}}>
              Hardware, oils, terpenes, fill, packaging — shipped under your name. Twenty-five years of co-pack on a floor we still walk every day. 1,000-piece MOQ. No fluff.
            </p>
            <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
              <Button onClick={()=>setRoute("services")} size="lg">Start a program <Icons.ArrowRight size={18}/></Button>
              <Button onClick={onSignup} variant="outlined-cyan" size="lg">Sign up to shop</Button>
            </div>
            <div style={{display:"flex", gap:32, marginTop:48, flexWrap:"wrap"}}>
              <Stat value="25" label="Years on the floor"/>
              <Stat value="1k" label="Piece MOQ" color="var(--color-pink)"/>
              <Stat value="50k" label="Units / batch"/>
              <Stat value="48h" label="Spec sheet" color="var(--color-pink)"/>
            </div>
          </div>
          <div className="r-hide" style={{display:"flex", flexDirection:"column", gap:14, minWidth:260}}>
            <div style={{padding:"18px 20px", border:"1px solid var(--color-cyan)", background:"rgba(120,214,241,.04)"}}>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"var(--color-cyan)", marginBottom:8}}>— Floor status</div>
              <div style={{display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-mono)", fontSize:13}}>
                <span style={{width:8, height:8, borderRadius:999, background:"#5fdc8e", boxShadow:"0 0 10px #5fdc8e"}}/>
                Running · Q2 slots open
              </div>
            </div>
            <div style={{padding:"18px 20px", border:"1px solid var(--color-pink)"}}>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"var(--color-pink)", marginBottom:8}}>— Last batch</div>
              <div style={{fontFamily:"var(--font-mono)", fontSize:13}}>SSL-2026-0418 · 24,000 units · COA ✓</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Section>
);

const ServicesSnapshot = ({setRoute}) => (
  <Section className="r-px r-py" bg="#000" pad="120px 32px">
    <Container>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16}}>
        <div>
          <Eyebrow>What we do · Six lanes</Eyebrow>
          <Display as="h2" size="h2" style={{marginTop:14}}>End-to-end,<br/>or any one piece.</Display>
        </div>
        <Button variant="outlined" onClick={()=>setRoute("services")}>All services <Icons.ArrowRight size={16}/></Button>
      </div>
      <div className="r-stack" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, border:"1px solid rgba(236,142,190,.3)"}}>
        {SERVICES.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Box;
          const accent = s.accent === "cyan" ? "var(--color-cyan)" : "var(--color-pink)";
          return (
            <div key={s.id} style={{
              padding:"32px 28px",
              borderRight: (i+1)%3 ? "1px solid rgba(236,142,190,.3)" : "0",
              borderBottom: i<3 ? "1px solid rgba(236,142,190,.3)" : "0",
              display:"flex", flexDirection:"column", gap:14, minHeight:280, position:"relative",
              transition:"background .2s",
              cursor:"pointer"
            }}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.02)"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}
            onClick={()=>setRoute("services")}
            >
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
                <div style={{color:accent}}><Icon size={32}/></div>
                <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", color:"rgba(227,240,247,.4)"}}>{s.num}</span>
              </div>
              <Display as="h3" size="h3" style={{fontSize:32, marginTop:8}}>{s.name}</Display>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:accent}}>{s.tag}</div>
              <p style={{fontSize:13, lineHeight:1.55, color:"rgba(227,240,247,.7)", margin:0}}>{s.blurb}</p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);

const FeaturedProducts = ({setRoute, addToCart, isReseller, openProduct}) => (
  <Section className="r-px r-py" bg="var(--color-bg-elev)" pad="120px 32px">
    <Container>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16}}>
        <div>
          <Eyebrow color="var(--color-cyan)">In-stock now · Ship-ready</Eyebrow>
          <Display as="h2" size="h2" style={{marginTop:14}}>Stock-pull SKUs.</Display>
        </div>
        <Button variant="outlined-cyan" onClick={()=>setRoute("shop")}>Shop all <Icons.ArrowRight size={16}/></Button>
      </div>
      <div className="r-2col" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18}}>
        {PRODUCTS.slice(0,4).map(p => (
          <ProductCard key={p.id} p={p} onAdd={()=>addToCart(p)} isReseller={isReseller} onOpen={() => openProduct ? openProduct(p) : setRoute("shop")}/>
        ))}
      </div>
    </Container>
  </Section>
);

const ProcessBlock = () => (
  <Section className="r-px r-py" bg="#000" pad="120px 32px">
    <Container>
      <Eyebrow>How it runs · Brief to ship</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:60}}>Five steps,<br/>no surprises.</Display>
      <div className="r-process" style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:0, borderTop:"2px solid var(--color-pink)"}}>
        {PROCESS.map((p, i) => (
          <div key={p.n} style={{
            padding:"28px 22px",
            borderRight: i<4 ? "1px solid rgba(236,142,190,.3)" : "0",
            display:"flex", flexDirection:"column", gap:14
          }}>
            <div style={{fontFamily:"var(--font-display)", fontSize:64, color:i%2 ? "var(--color-pink)" : "var(--color-cyan)", lineHeight:1, letterSpacing:"-.03em"}}>{p.n}</div>
            <div style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:22, letterSpacing:"-.01em"}}>{p.title}</div>
            <p style={{fontSize:13, lineHeight:1.55, color:"rgba(227,240,247,.7)", margin:0}}>{p.body}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const SocialProofBlock = () => (
  <Section className="r-px r-py" bg="var(--color-bg-elev)" pad="120px 32px">
    <Container>
      <Eyebrow>Operators we ship under</Eyebrow>
      <Display as="h2" size="h2" style={{marginTop:14, marginBottom:48}}>Brands you've<br/>seen on shelves.</Display>
      <div className="r-stack" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
        {SOCIAL_PROOF.map((s, i) => (
          <div key={i} style={{padding:"32px 28px", border:"1px solid var(--color-pink)", background:"#000", display:"flex", flexDirection:"column", gap:18, minHeight:240}}>
            <div style={{fontFamily:"var(--font-display)", fontSize:32, letterSpacing:"-.02em", color: i===1 ? "var(--color-cyan)" : "var(--color-fg)"}}>{s.brand}</div>
            <p style={{fontSize:15, lineHeight:1.55, margin:0, color:"rgba(227,240,247,.85)", flex:1}}>"{s.quote}"</p>
            <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", color:"var(--color-pink)"}}>— {s.role}</div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const CTABlock = ({setRoute}) => (
  <Section className="r-px r-py" bg="var(--color-pink)" pad="120px 32px">
    <Container>
      <div className="r-stack" style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"center"}}>
        <Display as="h2" size="hero" color="#000" style={{fontSize:"clamp(56px, 9vw, 130px)"}}>
          Ready to<br/>build a line?
        </Display>
        <div style={{display:"flex", flexDirection:"column", gap:16}}>
          <p style={{fontSize:17, lineHeight:1.55, color:"#000", margin:0}}>
            30-min intro call. No NDA fee. Spec sheet within 48 hours of brief.
          </p>
          <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
            <Button onClick={()=>setRoute("contact")} variant="mustard" size="lg">Book a call <Icons.ArrowRight size={18}/></Button>
            <Button onClick={()=>setRoute("wholesale")} variant="outlined" size="lg" style={{color:"#000", borderColor:"#000"}}>Wholesale program</Button>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

const Home = ({setRoute, onSignup, addToCart, isReseller, openProduct}) => (
  <>
    <HeroBlock setRoute={setRoute} onSignup={onSignup}/>
    <Marquee items={["HARDWARE","OIL FILLING","TERPENES","SNOWCAP","PACKAGING","CO-PACK","WHITE-LABEL","LA-MADE"]} color="var(--color-cyan)" speed={36}/>
    <ServicesSnapshot setRoute={setRoute}/>
    <FeaturedProducts setRoute={setRoute} addToCart={addToCart} isReseller={isReseller} openProduct={openProduct}/>
    <ProcessBlock/>
    <SocialProofBlock/>
    <CTABlock setRoute={setRoute}/>
  </>
);

window.Home = Home;
