// Blog — index + inline post reader
const BlogPage = ({setRoute}) => {
  const [activePost, setActivePost] = React.useState(null);

  if (activePost) {
    return <BlogPost post={activePost} onBack={() => setActivePost(null)} setActivePost={setActivePost} setRoute={setRoute}/>;
  }
  return <BlogIndex setActivePost={setActivePost} setRoute={setRoute}/>;
};

const BlogIndex = ({setActivePost, setRoute}) => (
  <>
    {/* Hero */}
    <Section bg="#000" pad="120px 32px 80px">
      <Container>
        <Eyebrow>Journal · Lab Notes</Eyebrow>
        <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:900}}>
          From the <span style={{color:"var(--color-pink)"}}>Floor.</span>
        </Display>
        <p style={{maxWidth:600, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
          Hardware guides, terpene breakdowns, and brand-building playbooks from the Smoke Show Labs team.
        </p>
      </Container>
    </Section>

    {/* Post grid */}
    <Section bg="var(--color-bg-elev)" pad="80px 32px">
      <Container>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))", gap:3}}>
          {BLOG_POSTS.map((post, i) => {
            const colors = ["var(--color-cyan)", "var(--color-pink)", "var(--color-magenta)"];
            const bgs    = ["rgba(120,214,241,.08)", "rgba(236,142,190,.08)", "rgba(255,45,180,.08)"];
            const c = colors[i % 3];
            return (
              <button
                key={post.id}
                onClick={() => { setActivePost(post); window.scrollTo({top:0,behavior:"instant"}); }}
                style={{
                  background:bgs[i % 3],
                  border:`1px solid ${c}`,
                  padding:40,
                  display:"flex", flexDirection:"column", gap:20,
                  textAlign:"left", cursor:"pointer",
                  transition:"transform .2s var(--ease-out)",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16}}>
                  <span style={{
                    background:c, color:"#000",
                    fontFamily:"var(--font-mono)", fontSize:10,
                    letterSpacing:".22em", textTransform:"uppercase",
                    padding:"4px 10px",
                  }}>{post.tag}</span>
                  <span style={{
                    fontFamily:"var(--font-mono)", fontSize:10,
                    letterSpacing:".18em", textTransform:"uppercase",
                    color:"rgba(227,240,247,.45)", whiteSpace:"nowrap",
                  }}>{post.date}</span>
                </div>

                <Display as="h3" size="h3" style={{lineHeight:1.05}}>{post.title}</Display>

                <p style={{
                  fontSize:15, lineHeight:1.65,
                  color:"rgba(227,240,247,.75)", margin:0, flex:1,
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display:"flex", alignItems:"center", gap:8,
                  fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".18em", textTransform:"uppercase",
                  color:c,
                }}>
                  Read <Icons.ArrowRight size={14}/>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </Section>

    {/* Newsletter */}
    <BlogNewsletter/>
  </>
);

const BlogPost = ({post, onBack, setRoute}) => {
  const idx = BLOG_POSTS.findIndex(p => p.id === post.id);
  const colors = ["var(--color-cyan)", "var(--color-pink)", "var(--color-magenta)"];
  const c = colors[idx % 3];

  // Parse body — bold via **...**
  const renderBody = (text) => {
    return text.split("\n\n").map((para, i) => {
      if (!para.trim()) return null;
      // Replace **text** with bold spans
      const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} style={{color:"var(--color-fg)"}}>{part.slice(2,-2)}</strong>;
        }
        return part;
      });
      return (
        <p key={i} style={{
          fontSize:17, lineHeight:1.75,
          color:"rgba(227,240,247,.85)",
          margin:"0 0 24px",
        }}>
          {parts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Back nav */}
      <Section bg="#000" pad="32px 32px 0">
        <Container maxWidth={800}>
          <button onClick={onBack} style={{
            background:"transparent", border:0, cursor:"pointer",
            display:"flex", alignItems:"center", gap:8,
            fontFamily:"var(--font-mono)", fontSize:11,
            letterSpacing:".2em", textTransform:"uppercase",
            color:"rgba(227,240,247,.55)",
          }}>
            <Icons.ArrowRight size={14} style={{transform:"rotate(180deg)"}}/> Back to Journal
          </button>
        </Container>
      </Section>

      {/* Post header */}
      <Section bg="#000" pad="60px 32px 56px">
        <Container maxWidth={800}>
          <div style={{display:"flex", gap:16, alignItems:"center", marginBottom:24, flexWrap:"wrap"}}>
            <span style={{
              background:c, color:"#000",
              fontFamily:"var(--font-mono)", fontSize:10,
              letterSpacing:".22em", textTransform:"uppercase",
              padding:"4px 10px",
            }}>{post.tag}</span>
            <span style={{
              fontFamily:"var(--font-mono)", fontSize:10,
              letterSpacing:".18em", textTransform:"uppercase",
              color:"rgba(227,240,247,.45)",
            }}>{post.date}</span>
          </div>
          <Display as="h1" size="h1" style={{marginBottom:24}}>{post.title}</Display>
          <p style={{fontSize:20, lineHeight:1.55, color:"rgba(227,240,247,.65)", margin:0}}>
            {post.excerpt}
          </p>
        </Container>
      </Section>

      {/* Divider */}
      <div style={{borderTop:`2px solid ${c}`, margin:"0 32px"}}/>

      {/* Post body */}
      <Section bg="var(--color-bg-elev)" pad="72px 32px">
        <Container maxWidth={800}>
          <div>
            {renderBody(post.body)}
          </div>

          {/* Related posts */}
          <div style={{marginTop:72, paddingTop:48, borderTop:"1px solid rgba(236,142,190,.3)"}}>
            <div style={{
              fontFamily:"var(--font-mono)", fontSize:11,
              letterSpacing:".22em", textTransform:"uppercase",
              color:"var(--color-pink)", marginBottom:28,
            }}>— More from the floor</div>
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              {BLOG_POSTS.filter(p => p.id !== post.id).map((p, i) => {
                const rc = colors[BLOG_POSTS.findIndex(x => x.id === p.id) % 3];
                return (
                  <button key={p.id} onClick={() => { setActivePost(p); window.scrollTo({top:0,behavior:"instant"}); }}
                    style={{
                      background:"transparent", border:0, cursor:"pointer",
                      display:"flex", justifyContent:"space-between", alignItems:"center",
                      gap:16, padding:"16px 0", borderBottom:"1px solid rgba(227,240,247,.08)",
                      textAlign:"left",
                    }}
                  >
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontSize:18, textTransform:"uppercase", letterSpacing:"-.01em", color:"var(--color-fg)", marginBottom:4}}>
                        {p.title}
                      </div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:rc}}>{p.tag}</div>
                    </div>
                    <span style={{color:rc, flexShrink:0}}><Icons.ArrowRight size={18}/></span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <BlogNewsletter/>
    </>
  );
};

const BlogNewsletter = () => {
  const [email, setEmail] = React.useState("");
  const [sent, setSent]   = React.useState(false);
  return (
    <Section bg="#000" pad="80px 32px">
      <Container maxWidth={680}>
        <div style={{border:"1px solid var(--color-cyan)", padding:48}}>
          <Eyebrow color="var(--color-cyan)">Lab Notes · Subscribe</Eyebrow>
          <Display as="h3" size="h3" style={{marginTop:14, marginBottom:16}}>Get the next drop.</Display>
          <p style={{fontSize:15, color:"rgba(227,240,247,.7)", marginBottom:32}}>
            Hardware guides, terpene breakdowns, and restock alerts. No fluff. Unsubscribe anytime.
          </p>
          {sent ? (
            <div style={{display:"flex", gap:12, alignItems:"center", color:"var(--color-cyan)"}}>
              <Icons.Check size={20}/>
              <span style={{fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:".2em", textTransform:"uppercase"}}>You're on the list.</span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if(email) setSent(true); }} style={{display:"flex", gap:0, borderBottom:"1px solid var(--color-cyan)", maxWidth:480}}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@brand.co" required
                style={{
                  flex:1, background:"transparent", border:0,
                  color:"var(--color-fg)", fontFamily:"var(--font-sans)", fontSize:15,
                  padding:"10px 0", outline:"none",
                }}
              />
              <button type="submit" style={{
                background:"transparent", border:0, cursor:"pointer",
                color:"var(--color-cyan)", fontFamily:"var(--font-mono)",
                fontSize:11, letterSpacing:".2em", textTransform:"uppercase",
                padding:"0 4px",
              }}>
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
};

window.BlogPage = BlogPage;
