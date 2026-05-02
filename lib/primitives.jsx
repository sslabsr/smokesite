// Shared primitives: Button, Eyebrow, Input, Section, Container, Pop title
const Button = ({children, variant="primary", size="md", as="button", icon, ...rest}) => {
  const base = {
    fontFamily: "var(--font-display)",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    transition: "transform .15s var(--ease-snap), box-shadow .15s var(--ease-snap), background .15s",
    fontSize: size === "sm" ? 12 : size === "lg" ? 16 : 14,
    padding: size === "sm" ? "8px 14px" : size === "lg" ? "18px 28px" : "14px 22px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };
  const variants = {
    primary: { background: "var(--color-cyan)", color: "#000", boxShadow: "6px 6px 0 var(--color-pink)" },
    pink:    { background: "var(--color-pink)", color: "#000", boxShadow: "6px 6px 0 var(--color-cyan)" },
    mustard: { background: "#f7b829", color: "#2b2b2b", boxShadow: "6px 6px 0 #000" },
    outlined:{ background: "transparent", color: "var(--color-fg)", border: "2px solid var(--color-fg)" },
    "outlined-cyan": { background: "transparent", color: "var(--color-cyan)", border: "2px solid var(--color-cyan)" },
    ghost:   { background: "transparent", color: "var(--color-cyan)", fontFamily: "var(--font-sans)", fontWeight: 600, textTransform: "none", letterSpacing: 0, padding: "8px 0", borderBottom: "1px solid var(--color-cyan)" },
  };
  const Tag = as;
  const onMouseDown = (e) => { e.currentTarget.style.transform = "translate(2px,2px)"; const cur = variants[variant].boxShadow; if (cur && cur.includes("6px")) e.currentTarget.style.boxShadow = cur.replace("6px 6px","2px 2px"); };
  const onMouseUp   = (e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = variants[variant].boxShadow || "none"; };
  return <Tag style={{...base, ...variants[variant]}} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} {...rest}>{children}{icon}</Tag>;
};

const Eyebrow = ({children, color="var(--color-pink)", as="span"}) => {
  const Tag = as;
  return <Tag style={{
    fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".22em",
    textTransform: "uppercase", color, display:"inline-block"
  }}>— {children}</Tag>;
};

const Input = ({label, hint, ...rest}) => (
  <label style={{display:"flex", flexDirection:"column", gap:6, flex:1, minWidth:0}}>
    {label && <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.65)"}}>{label}</span>}
    <input style={{
      background:"transparent", color:"var(--color-fg)", border:0,
      borderBottom:"1px solid var(--color-pink)", padding:"10px 0",
      fontFamily:"var(--font-sans)", fontSize:15, outline:"none", width:"100%"
    }} {...rest}/>
    {hint && <span style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.45)"}}>{hint}</span>}
  </label>
);

const Textarea = ({label, hint, rows=4, ...rest}) => (
  <label style={{display:"flex", flexDirection:"column", gap:6, flex:1}}>
    {label && <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.65)"}}>{label}</span>}
    <textarea rows={rows} style={{
      background:"rgba(255,255,255,.02)", color:"var(--color-fg)",
      border:"1px solid var(--color-pink)", padding:"12px",
      fontFamily:"var(--font-sans)", fontSize:14, outline:"none", resize:"vertical"
    }} {...rest}/>
    {hint && <span style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.45)"}}>{hint}</span>}
  </label>
);

const Select = ({label, options=[], ...rest}) => (
  <label style={{display:"flex", flexDirection:"column", gap:6, flex:1, minWidth:0}}>
    {label && <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.65)"}}>{label}</span>}
    <select style={{
      background:"transparent", color:"var(--color-fg)", border:0,
      borderBottom:"1px solid var(--color-pink)", padding:"10px 0",
      fontFamily:"var(--font-sans)", fontSize:15, outline:"none", appearance:"none",
      backgroundImage:"linear-gradient(45deg, transparent 50%, var(--color-pink) 50%), linear-gradient(135deg, var(--color-pink) 50%, transparent 50%)",
      backgroundPosition:"calc(100% - 12px) 14px, calc(100% - 7px) 14px",
      backgroundSize:"5px 5px, 5px 5px",
      backgroundRepeat:"no-repeat",
      paddingRight:24,
    }} {...rest}>
      {options.map(o => <option key={o.value||o} value={o.value||o} style={{background:"#000"}}>{o.label||o}</option>)}
    </select>
  </label>
);

// Sections used as page anchors / rhythm
const Section = ({id, bg="#000", pad="96px 32px", children, ...rest}) => (
  <section id={id} style={{padding:pad, background:bg, position:"relative"}} {...rest}>
    {children}
  </section>
);

const Container = ({maxWidth=1280, children, style}) => (
  <div style={{maxWidth, margin:"0 auto", ...style}}>{children}</div>
);

// Display headline component
const Display = ({as="h2", size="h2", children, color="var(--color-fg)", style}) => {
  const Tag = as;
  const sizes = {
    hero: { fontSize: "clamp(64px, 11vw, 168px)", lineHeight: .88, letterSpacing: "-.03em" },
    h1:   { fontSize: "clamp(48px, 8vw, 112px)",  lineHeight: .9,  letterSpacing: "-.03em" },
    h2:   { fontSize: "clamp(40px, 6vw, 80px)",   lineHeight: .92, letterSpacing: "-.02em" },
    h3:   { fontSize: "clamp(28px, 4vw, 48px)",   lineHeight: .95, letterSpacing: "-.02em" },
  };
  return <Tag style={{
    fontFamily: "var(--font-display)", textTransform: "uppercase",
    margin: 0, color, ...sizes[size], ...style
  }}>{children}</Tag>;
};

// Spec-sheet style data row
const SpecRow = ({label, value, color="var(--color-cyan)"}) => (
  <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"12px 0", borderBottom:"1px dashed rgba(236,142,190,.3)", gap:24}}>
    <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.65)"}}>{label}</span>
    <span style={{fontFamily:"var(--font-mono)", fontSize:14, color, textAlign:"right"}}>{value}</span>
  </div>
);

// Sticker / poster slab — bold block with display headline
const Slab = ({children, bg="var(--color-cyan)", color="#000", style}) => (
  <div style={{
    background:bg, color, padding:"48px 32px",
    fontFamily:"var(--font-display)", textTransform:"uppercase",
    fontSize:"clamp(48px, 8vw, 96px)", lineHeight:.9, letterSpacing:"-.03em",
    ...style
  }}>{children}</div>
);

// Stat block
const Stat = ({value, label, color="var(--color-cyan)"}) => (
  <div style={{display:"flex", flexDirection:"column", gap:6}}>
    <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(48px,7vw,96px)", lineHeight:.9, letterSpacing:"-.03em", color}}>{value}</div>
    <div style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(227,240,247,.7)"}}>{label}</div>
  </div>
);

Object.assign(window, { Button, Eyebrow, Input, Textarea, Select, Section, Container, Display, SpecRow, Slab, Stat });
