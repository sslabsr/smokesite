// FAQ — full expanded FAQ page with 3 categories
const FAQPage = ({setRoute}) => {
  const [openMap, setOpenMap] = React.useState({});
  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenMap(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <>
      {/* Hero */}
      <Section bg="#000" pad="120px 32px 80px">
        <Container>
          <Eyebrow>Support · FAQ</Eyebrow>
          <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:900}}>
            Common <span style={{color:"var(--color-cyan)"}}>questions.</span>
          </Display>
          <p style={{maxWidth:680, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
            Everything about the program, wholesale pricing, and getting your order out the door. Don't see what you need? Email us at{" "}
            <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)", borderBottom:"1px solid var(--color-cyan)"}}>info@smokeshowlabs.com</a>.
          </p>
        </Container>
      </Section>

      {/* FAQ Categories */}
      {FAQ_CATEGORIES.map((cat, catIdx) => (
        <Section key={cat.title} bg={catIdx % 2 === 1 ? "var(--color-bg-elev)" : "#000"} pad="80px 32px">
          <Container maxWidth={960}>
            <div style={{
              fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em",
              textTransform:"uppercase", color:"var(--color-pink)", marginBottom:12
            }}>— {String(catIdx + 1).padStart(2,"0")}</div>
            <Display as="h2" size="h2" style={{marginBottom:48}}>{cat.title}.</Display>
            <div>
              {cat.items.map((f, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = !!openMap[key];
                const isLast = itemIdx === cat.items.length - 1;
                return (
                  <div key={itemIdx} style={{
                    borderTop:"1px solid rgba(236,142,190,.35)",
                    borderBottom: isLast ? "1px solid rgba(236,142,190,.35)" : 0,
                  }}>
                    <button
                      onClick={() => toggle(catIdx, itemIdx)}
                      style={{
                        width:"100%", background:"transparent", border:0,
                        color:"var(--color-fg)", padding:"24px 0", cursor:"pointer",
                        display:"flex", justifyContent:"space-between", alignItems:"center",
                        gap:24, textAlign:"left"
                      }}
                    >
                      <span style={{
                        fontFamily:"var(--font-display)", textTransform:"uppercase",
                        fontSize:22, letterSpacing:"-.01em", lineHeight:1.1
                      }}>{f.q}</span>
                      <span style={{
                        color:"var(--color-cyan)", flexShrink:0,
                        transition:"transform .2s",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0)"
                      }}>
                        <Icons.Plus size={22}/>
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{
                        padding:"0 0 28px",
                        fontSize:15, lineHeight:1.7,
                        color:"rgba(227,240,247,.85)",
                        maxWidth:760
                      }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ))}

      {/* Contact CTA */}
      <Section bg="var(--color-bg-elev)" pad="80px 32px">
        <Container maxWidth={960}>
          <div style={{
            border:"1px solid var(--color-cyan)", padding:48,
            display:"flex", gap:40, alignItems:"center",
            flexWrap:"wrap", justifyContent:"space-between"
          }}>
            <div>
              <div style={{fontFamily:"var(--font-display)", fontSize:32, textTransform:"uppercase", letterSpacing:"-.02em", marginBottom:12}}>
                Still have questions?
              </div>
              <p style={{fontSize:15, color:"rgba(227,240,247,.75)", margin:0, maxWidth:480}}>
                1410 W. Olympic Blvd Suite B · Los Angeles, CA 90015<br/>
                <a href="tel:2139439000" style={{color:"var(--color-cyan)"}}>213-943-9000</a>{" · "}
                <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)"}}>info@smokeshowlabs.com</a><br/>
                Mon–Fri 9am–5:30pm PT
              </p>
            </div>
            <Button onClick={() => { setRoute("contact"); window.scrollTo({top:0,behavior:"instant"}); }} variant="primary" size="lg">
              Contact Us <Icons.ArrowRight size={18}/>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

window.FAQPage = FAQPage;
