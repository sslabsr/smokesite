const CartDrawer = ({open, onClose, items, removeItem, updateQty, isReseller}) => {
  if (!open) return null;
  const subtotal = items.reduce((s,i)=>s + (isReseller ? i.price*0.55 : i.price)*i.qty, 0);
  const totalUnits = items.reduce((s,i)=>s+i.qty, 0);
  const moqMet = !isReseller || totalUnits >= 1000;
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" style={{position:"fixed", inset:0, background:"rgba(0,0,0,.6)", zIndex:200, display:"flex", justifyContent:"flex-end"}}>
      <aside onClick={e=>e.stopPropagation()} style={{
        width:440, maxWidth:"100%", background:"#000", borderLeft:"2px solid var(--color-pink)",
        padding:"24px 24px 24px", display:"flex", flexDirection:"column", gap:16,
        boxShadow:"-12px 0 36px rgba(0,0,0,.6)"
      }}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Eyebrow>Cart · {items.length} {items.length===1?"item":"items"}</Eyebrow>
          <button onClick={onClose} aria-label="Close cart" style={{background:"transparent", border:0, color:"var(--color-fg)", cursor:"pointer", lineHeight:0}}><Icons.X size={22}/></button>
        </div>
        <Display as="div" size="h3" style={{fontSize:36, marginTop:-4}}>Your cart</Display>

        {items.length === 0 ? (
          <div style={{padding:"40px 0", textAlign:"center", color:"rgba(227,240,247,.55)", fontSize:14}}>
            <div style={{display:"flex", justifyContent:"center", marginBottom:14, color:"rgba(227,240,247,.3)"}}><Icons.Cart size={48}/></div>
            Your cart is empty.<br/>Add some hardware.
          </div>
        ) : (
          <div style={{display:"flex", flexDirection:"column", gap:0, flex:1, overflow:"auto"}} className="ssl-noscrollbar">
            {items.map(it=>(
              <div key={it.id} style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"14px 0", borderBottom:"1px solid rgba(236,142,190,.25)", gap:12}}>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.5)", marginBottom:4}}>{it.type}</div>
                  <div style={{fontFamily:"var(--font-display)", textTransform:"uppercase", fontSize:16, letterSpacing:"-.01em", lineHeight:1.1}}>{it.name}</div>
                  <div style={{display:"flex", alignItems:"center", gap:6, marginTop:8}}>
                    <button onClick={()=>updateQty(it.id, it.qty-1)} aria-label="Decrease" style={{background:"transparent", border:"1px solid rgba(236,142,190,.4)", color:"var(--color-fg)", width:24, height:24, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center"}}><Icons.Minus size={12}/></button>
                    <span style={{fontFamily:"var(--font-mono)", fontSize:13, minWidth:28, textAlign:"center"}}>{it.qty}</span>
                    <button onClick={()=>updateQty(it.id, it.qty+1)} aria-label="Increase" style={{background:"transparent", border:"1px solid rgba(236,142,190,.4)", color:"var(--color-fg)", width:24, height:24, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center"}}><Icons.Plus size={12}/></button>
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8}}>
                  <span style={{fontFamily:"var(--font-mono)", fontSize:13, color: isReseller ? "#f7b829" : "var(--color-cyan)"}}>${((isReseller? it.price*0.55 : it.price)*it.qty).toFixed(2)}</span>
                  <button onClick={()=>removeItem(it.id)} aria-label="Remove" style={{background:"transparent", border:0, color:"rgba(227,240,247,.4)", cursor:"pointer", lineHeight:0}}><Icons.X size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length>0 && (
          <div style={{display:"flex", flexDirection:"column", gap:14, paddingTop:14, borderTop:"2px solid var(--color-pink)"}}>
            <SpecRow label="Units" value={totalUnits.toLocaleString()} color="var(--color-fg)"/>
            <SpecRow label={isReseller ? "Subtotal · Wholesale" : "Subtotal"} value={`$${subtotal.toFixed(2)}`} color={isReseller? "#f7b829" : "var(--color-cyan)"}/>
            {isReseller && !moqMet && (
              <div style={{padding:"10px 12px", border:"1px solid #f7b829", background:"rgba(247,184,41,.08)", color:"#f7b829", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase"}}>
                Wholesale MOQ · {1000-totalUnits} more units to unlock
              </div>
            )}
            <Button as="button" disabled={isReseller && !moqMet} variant={isReseller ? "mustard" : "primary"} style={{justifyContent:"center", opacity: (isReseller && !moqMet) ? .5 : 1}}>
              Checkout · ${subtotal.toFixed(2)} →
            </Button>
            <div style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(227,240,247,.45)", textAlign:"center"}}>
              Free shipping over $200 · Lab COAs included
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

window.CartDrawer = CartDrawer;
