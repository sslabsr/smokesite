// Checkout page — order summary + shipping + mock payment + success
const CheckoutPage = ({cart, removeItem, updateQty, clearCart, isReseller, setRoute}) => {
  const [step, setStep]     = React.useState("form"); // form | success
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  const [form, setForm]     = React.useState({
    firstName:"", lastName:"", email:"", phone:"",
    address:"", city:"", state:"", zip:"",
    cardNum:"", cardExp:"", cardCvv:"",
  });
  const [errors, setErrors] = React.useState({});

  const items = cart || [];
  const wsDiscount = 0.55;

  const subtotal = items.reduce((sum, i) => {
    const price = isReseller ? i.price * wsDiscount : i.price;
    return sum + price * i.qty;
  }, 0);

  const shipping = subtotal >= 200 ? 0 : 18.99;
  const total    = subtotal + shipping;

  const confirmNum = React.useRef("SSL-26-" + Math.floor(100000 + Math.random() * 900000));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!form.email.trim())     e.email     = "Required";
    if (!form.address.trim())   e.address   = "Required";
    if (!form.city.trim())      e.city      = "Required";
    if (!form.state.trim())     e.state     = "Required";
    if (!form.zip.trim())       e.zip       = "Required";
    if (!form.cardNum.trim())   e.cardNum   = "Required";
    if (!form.cardExp.trim())   e.cardExp   = "Required";
    if (!form.cardCvv.trim())   e.cardCvv   = "Required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStep("success");
    clearCart && clearCart();
    window.scrollTo({top:0, behavior:"instant"});
  };

  const set = (k, v) => {
    setForm(p => ({...p, [k]: v}));
    setErrors(p => ({...p, [k]: undefined}));
  };

  if (step === "success") {
    return (
      <Section bg="#000" pad="120px 32px">
        <Container maxWidth={640}>
          <div style={{
            border:"1px solid var(--color-cyan)", padding:"64px 56px",
            display:"flex", flexDirection:"column", gap:24,
          }}>
            <span style={{color:"var(--color-cyan)"}}><Icons.Check size={48}/></span>
            <div>
              <Eyebrow color="var(--color-cyan)">Order Confirmed</Eyebrow>
              <Display as="h2" size="h2" style={{marginTop:12}}>You're all set.</Display>
            </div>
            <p style={{fontSize:15, lineHeight:1.7, color:"rgba(227,240,247,.8)", margin:0}}>
              Your order <strong style={{color:"var(--color-cyan)"}}>{confirmNum.current}</strong> has been received. You'll get a confirmation email at{" "}
              <strong style={{color:"var(--color-fg)"}}>{form.email || "the address on file"}</strong> within a few minutes.
            </p>
            <div style={{
              padding:"20px 24px",
              background:"rgba(120,214,241,.06)", border:"1px solid rgba(120,214,241,.25)",
              fontSize:14, lineHeight:1.7, color:"rgba(227,240,247,.75)",
            }}>
              COAs are delivered with your shipment and uploaded to your account when lab results return — typically 3–5 business days before ship date.
            </div>
            <p style={{fontSize:14, color:"rgba(227,240,247,.55)", margin:0}}>
              Questions? Reach your account rep at{" "}
              <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)"}}>info@smokeshowlabs.com</a>{" "}
              or <a href="tel:2139439000" style={{color:"var(--color-cyan)"}}>213-943-9000</a>.
            </p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:8}}>
              <Button variant="primary" size="lg" onClick={() => { setRoute("shop"); window.scrollTo({top:0,behavior:"instant"}); }}>
                Continue Shopping <Icons.ArrowRight size={18}/>
              </Button>
              <Button variant="outlined-cyan" size="lg" onClick={() => { setRoute("wholesale"); window.scrollTo({top:0,behavior:"instant"}); }}>
                Wholesale Program
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  if (items.length === 0) {
    return (
      <Section bg="#000" pad="120px 32px">
        <Container maxWidth={560}>
          <Eyebrow>Checkout</Eyebrow>
          <Display as="h2" size="h2" style={{marginTop:14, marginBottom:24}}>Cart is empty.</Display>
          <p style={{fontSize:16, color:"rgba(227,240,247,.65)", marginBottom:36}}>Add some products before checking out.</p>
          <Button variant="primary" size="lg" onClick={() => { setRoute("shop"); window.scrollTo({top:0,behavior:"instant"}); }}>
            Go to Shop <Icons.ArrowRight size={18}/>
          </Button>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg="#000" pad="60px 32px 100px">
      <Container>
        <Eyebrow>Checkout</Eyebrow>
        <Display as="h1" size="h2" style={{marginTop:14, marginBottom:48}}>Complete Your Order.</Display>

        <form onSubmit={handleSubmit}>
          <div style={{display:"grid", gridTemplateColumns: mobile ? "1fr" : "1fr 380px", gap:48, alignItems:"start"}}>

            {/* Left — form */}
            <div style={{display:"flex", flexDirection:"column", gap:40}}>

              {/* Contact */}
              <CheckoutSection title="Contact" num="01" color="var(--color-cyan)">
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
                  <FieldWrap error={errors.firstName}>
                    <Input label="First Name *" value={form.firstName} onChange={e=>set("firstName",e.target.value)} placeholder="Jane"/>
                  </FieldWrap>
                  <FieldWrap error={errors.lastName}>
                    <Input label="Last Name *" value={form.lastName} onChange={e=>set("lastName",e.target.value)} placeholder="Smith"/>
                  </FieldWrap>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
                  <FieldWrap error={errors.email}>
                    <Input label="Email *" type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@brand.co"/>
                  </FieldWrap>
                  <Input label="Phone (optional)" type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="213-555-0100"/>
                </div>
              </CheckoutSection>

              {/* Shipping address */}
              <CheckoutSection title="Shipping Address" num="02" color="var(--color-pink)">
                <FieldWrap error={errors.address}>
                  <Input label="Street Address *" value={form.address} onChange={e=>set("address",e.target.value)} placeholder="1234 Main St"/>
                </FieldWrap>
                <div style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:24}}>
                  <FieldWrap error={errors.city}>
                    <Input label="City *" value={form.city} onChange={e=>set("city",e.target.value)} placeholder="Los Angeles"/>
                  </FieldWrap>
                  <FieldWrap error={errors.state}>
                    <Input label="State *" value={form.state} onChange={e=>set("state",e.target.value)} placeholder="CA" maxLength={2}/>
                  </FieldWrap>
                  <FieldWrap error={errors.zip}>
                    <Input label="ZIP *" value={form.zip} onChange={e=>set("zip",e.target.value)} placeholder="90015" maxLength={10}/>
                  </FieldWrap>
                </div>
              </CheckoutSection>

              {/* Payment */}
              <CheckoutSection title="Payment" num="03" color="var(--color-cyan)">
                <div style={{
                  padding:"12px 16px",
                  background:"rgba(120,214,241,.06)", border:"1px solid rgba(120,214,241,.2)",
                  fontFamily:"var(--font-mono)", fontSize:11,
                  letterSpacing:".18em", textTransform:"uppercase",
                  color:"rgba(120,214,241,.8)", marginBottom:8,
                  display:"flex", gap:8, alignItems:"center",
                }}>
                  <Icons.Lock size={14}/> Secured · Encrypted
                </div>
                <FieldWrap error={errors.cardNum}>
                  <Input
                    label="Card Number *"
                    value={form.cardNum}
                    onChange={e=>set("cardNum", e.target.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim())}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                  />
                </FieldWrap>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
                  <FieldWrap error={errors.cardExp}>
                    <Input
                      label="Expiration *"
                      value={form.cardExp}
                      onChange={e=>{
                        let v = e.target.value.replace(/\D/g,"");
                        if (v.length>2) v = v.slice(0,2)+"/"+v.slice(2,4);
                        set("cardExp", v);
                      }}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </FieldWrap>
                  <FieldWrap error={errors.cardCvv}>
                    <Input
                      label="CVV *"
                      value={form.cardCvv}
                      onChange={e=>set("cardCvv",e.target.value.replace(/\D/g,"").slice(0,4))}
                      placeholder="123"
                      maxLength={4}
                    />
                  </FieldWrap>
                </div>
              </CheckoutSection>

              <Button type="submit" variant="primary" size="lg" style={{alignSelf:"stretch", justifyContent:"center"}}>
                Place Order · ${total.toFixed(2)} <Icons.ArrowRight size={18}/>
              </Button>
              <p style={{fontSize:12, color:"rgba(227,240,247,.4)", margin:"0", lineHeight:1.6}}>
                By placing your order you agree to our{" "}
                <span
                  style={{color:"var(--color-cyan)", cursor:"pointer", borderBottom:"1px solid rgba(120,214,241,.4)"}}
                  onClick={() => { setRoute("terms"); window.scrollTo({top:0,behavior:"instant"}); }}
                >Terms & Conditions</span>{" "}
                and{" "}
                <span
                  style={{color:"var(--color-cyan)", cursor:"pointer", borderBottom:"1px solid rgba(120,214,241,.4)"}}
                  onClick={() => { setRoute("privacy"); window.scrollTo({top:0,behavior:"instant"}); }}
                >Privacy Policy</span>.
                This site is for adults 21+.
              </p>
            </div>

            {/* Right — order summary */}
            <div style={{
              position:"sticky", top:80,
              border:"1px solid rgba(227,240,247,.12)",
              padding:28, background:"var(--color-bg-elev)",
            }}>
              <div style={{
                fontFamily:"var(--font-mono)", fontSize:11,
                letterSpacing:".22em", textTransform:"uppercase",
                color:"var(--color-pink)", marginBottom:20,
              }}>— Order Summary</div>

              {/* Items */}
              <div style={{display:"flex", flexDirection:"column", gap:12, marginBottom:24}}>
                {items.map(item => {
                  const price = isReseller ? item.price * wsDiscount : item.price;
                  const hue = item.hue === "cyan" ? "var(--color-cyan)" : item.hue === "magenta" ? "var(--color-magenta)" : "var(--color-pink)";
                  return (
                    <div key={item.id} style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12}}>
                      <div style={{flex:1}}>
                        <div style={{fontFamily:"var(--font-display)", fontSize:15, textTransform:"uppercase", letterSpacing:"-.01em"}}>{item.name}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(227,240,247,.45)", marginTop:2}}>
                          {item.type} · qty {item.qty}
                        </div>
                      </div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:14, color:isReseller?"#f7b829":hue, whiteSpace:"nowrap"}}>
                        ${(price * item.qty).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div style={{borderTop:"1px dashed rgba(236,142,190,.3)", paddingTop:16, display:"flex", flexDirection:"column", gap:10}}>
                <div style={{display:"flex", justifyContent:"space-between", fontSize:14, color:"rgba(227,240,247,.65)"}}>
                  <span>Subtotal</span>
                  <span style={{fontFamily:"var(--font-mono)"}}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", fontSize:14, color:"rgba(227,240,247,.65)"}}>
                  <span>Shipping</span>
                  <span style={{fontFamily:"var(--font-mono)"}}>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div style={{fontSize:12, color:"rgba(120,214,241,.6)", fontFamily:"var(--font-mono)", letterSpacing:".15em", textTransform:"uppercase"}}>
                    Free shipping over $200
                  </div>
                )}
                <div style={{
                  display:"flex", justifyContent:"space-between",
                  marginTop:8, paddingTop:12,
                  borderTop:"1px solid rgba(227,240,247,.15)",
                  fontFamily:"var(--font-display)", fontSize:22,
                  textTransform:"uppercase", letterSpacing:"-.01em",
                }}>
                  <span>Total</span>
                  <span style={{color: isReseller ? "#f7b829" : "var(--color-cyan)"}}>${total.toFixed(2)}</span>
                </div>
              </div>

              {isReseller && (
                <div style={{
                  marginTop:16, padding:"10px 14px",
                  background:"rgba(247,184,41,.08)", border:"1px solid rgba(247,184,41,.3)",
                  fontFamily:"var(--font-mono)", fontSize:10,
                  letterSpacing:".18em", textTransform:"uppercase", color:"#f7b829",
                }}>
                  Wholesale pricing applied
                </div>
              )}
            </div>
          </div>
        </form>
      </Container>
    </Section>
  );
};

const CheckoutSection = ({title, num, color, children}) => (
  <div>
    <div style={{display:"flex", gap:14, alignItems:"center", marginBottom:24}}>
      <span style={{fontFamily:"var(--font-display)", fontSize:32, color, lineHeight:1, letterSpacing:"-.02em", opacity:.6}}>{num}</span>
      <div style={{fontFamily:"var(--font-display)", fontSize:22, textTransform:"uppercase", letterSpacing:"-.01em"}}>{title}</div>
    </div>
    <div style={{display:"flex", flexDirection:"column", gap:20}}>
      {children}
    </div>
  </div>
);

const FieldWrap = ({error, children}) => (
  <div style={{display:"flex", flexDirection:"column", gap:4}}>
    {children}
    {error && <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--color-magenta)"}}>{error}</span>}
  </div>
);

window.CheckoutPage = CheckoutPage;
