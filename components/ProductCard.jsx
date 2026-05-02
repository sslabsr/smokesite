// Product card — used on Home + Shop
const ProductCard = ({p, onAdd, isReseller, onOpen}) => {
  const [hover, setHover] = React.useState(false);
  const hueColor = p.hue === "cyan" ? "var(--color-cyan)" : p.hue === "magenta" ? "var(--color-magenta)" : "var(--color-pink)";
  const wholesalePrice = (p.price * 0.55).toFixed(2);
  return (
    <div
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      onClick={onOpen}
      style={{
        background:"#000", border:`1px solid ${hover ? hueColor : "rgba(227,240,247,.1)"}`,
        display:"flex", flexDirection:"column",
        transition:"all .25s var(--ease-out)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        cursor: onOpen ? "pointer" : "default"
      }}>
      <div style={{
        position:"relative", aspectRatio:"1/1",
        background:`radial-gradient(ellipse at 50% 30%, ${p.hue==="cyan"?"rgba(120,214,241,.22)":p.hue==="magenta"?"rgba(255,45,180,.22)":"rgba(236,142,190,.22)"}, rgba(0,0,0,0) 60%), #0a0a0a`,
        display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"
      }}>
        <div style={{
          width:42, height:170,
          background:"linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #161616 100%)",
          borderRadius:6,
          boxShadow:`inset -3px 0 8px rgba(0,0,0,.6), 0 0 28px ${hueColor}66`,
          transition:"transform .35s var(--ease-out)",
          transform: hover ? "scale(1.06)" : "scale(1)"
        }}/>
        {p.badge && (
          <span style={{
            position:"absolute", top:12, left:12,
            background: p.badge==="LIMITED" ? "var(--color-magenta)" : p.badge==="HOT" ? "var(--color-pink)" : "var(--color-cyan)",
            color:"#000", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em",
            textTransform:"uppercase", padding:"4px 8px"
          }}>{p.badge}</span>
        )}
        {isReseller && (
          <span style={{position:"absolute", top:12, right:12, background:"#f7b829", color:"#2b2b2b", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".2em", textTransform:"uppercase", padding:"3px 7px"}}>WHOLESALE</span>
        )}
      </div>
      <div style={{padding:"16px 16px 18px", display:"flex", flexDirection:"column", gap:8}}>
        <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.55)"}}>{p.type}</div>
        <div style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:24, letterSpacing:"-.01em", lineHeight:1}}>{p.name}</div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginTop:6}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            {isReseller ? (
              <>
                <span style={{fontFamily:"var(--font-mono)", fontSize:10, color:"#f7b829", letterSpacing:".2em", textTransform:"uppercase"}}>Wholesale</span>
                <span style={{fontFamily:"var(--font-mono)", fontSize:14, color:"#f7b829"}}>${wholesalePrice} <span style={{textDecoration:"line-through", color:"rgba(247,184,41,.5)", marginLeft:6}}>${p.price.toFixed(2)}</span></span>
              </>
            ) : (
              <span style={{fontFamily:"var(--font-mono)", fontSize:14, color:hueColor}}>${p.price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" onClick={(e)=>{e.stopPropagation(); onAdd && onAdd();}} variant={p.hue==="pink"?"pink":"primary"}>
            <Icons.Plus size={14}/> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

window.ProductCard = ProductCard;
