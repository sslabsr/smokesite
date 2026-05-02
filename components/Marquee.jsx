// Looping marquee
const Marquee = ({items, color="var(--color-pink)", speed=24, fontSize=32}) => {
  const reel = [...items, ...items, ...items];
  return (
    <div style={{
      overflow:"hidden", borderTop:"2px solid var(--color-fg)", borderBottom:"2px solid var(--color-fg)",
      background:color, color:"#000", padding:"14px 0", whiteSpace:"nowrap"
    }}>
      <style>{`
        @keyframes ssl-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `}</style>
      <div style={{
        display:"inline-flex", gap:48, animation:`ssl-marquee ${speed}s linear infinite`,
        fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize, letterSpacing:"-.01em",
      }}>
        {reel.map((t,i)=>(<span key={i} style={{display:"inline-flex", alignItems:"center", gap:48}}>{t}<span style={{opacity:.5}}>★</span></span>))}
      </div>
    </div>
  );
};

window.Marquee = Marquee;
