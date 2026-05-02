// CCPA — California Consumer Privacy Act page
const CCPAPage = () => {
  const [form, setForm] = React.useState({name:"", email:"", type:"access", details:""});
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const requestTypes = [
    {value:"access",   label:"Right to Know — request a copy of my personal information"},
    {value:"delete",   label:"Right to Delete — request deletion of my personal information"},
    {value:"correct",  label:"Right to Correct — request correction of inaccurate information"},
    {value:"optout",   label:"Opt-Out — opt out of sale/sharing of my information"},
    {value:"portability", label:"Data Portability — request my data in a portable format"},
    {value:"other",    label:"Other privacy request"},
  ];

  return (
    <>
      {/* Hero */}
      <Section bg="#000" pad="120px 32px 80px">
        <Container>
          <Eyebrow>Legal · Privacy Rights</Eyebrow>
          <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:1000}}>
            Your Privacy<br/><span style={{color:"var(--color-cyan)"}}>Rights.</span>
          </Display>
          <p style={{maxWidth:700, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
            Under the California Consumer Privacy Act (CCPA) and other applicable laws, you have rights regarding your personal information. This page explains those rights and how to exercise them.
          </p>
        </Container>
      </Section>

      {/* Rights explanation */}
      <Section bg="var(--color-bg-elev)" pad="80px 32px">
        <Container maxWidth={900}>
          <Display as="h2" size="h2" style={{marginBottom:48}}>Your Rights.</Display>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(380px, 1fr))", gap:24}}>
            {[
              {title:"Right to Know", color:"var(--color-cyan)", body:"You have the right to request that we disclose the categories and specific pieces of personal information we have collected about you, the sources from which we collected it, and why we collected it."},
              {title:"Right to Delete", color:"var(--color-pink)", body:"You have the right to request that we delete personal information we have collected from you, subject to certain exceptions (e.g., completing a transaction, legal obligations, fraud prevention)."},
              {title:"Right to Correct", color:"var(--color-cyan)", body:"You have the right to request that we correct inaccurate personal information about you, taking into account the nature of the information and the purposes for which we process it."},
              {title:"Right to Opt-Out", color:"var(--color-magenta)", body:"We do not sell or share your personal information with third parties for their direct marketing purposes. If that changes, you will have the right to opt out."},
              {title:"Right to Non-Discrimination", color:"var(--color-pink)", body:"We will not discriminate against you for exercising any of your CCPA rights. We will not deny you goods or services, charge you different prices, or provide a different level of quality because you exercised your rights."},
              {title:"Right to Data Portability", color:"var(--color-cyan)", body:"You have the right to receive your personal information in a structured, commonly used, machine-readable format where technically feasible."},
            ].map(r => (
              <div key={r.title} style={{borderLeft:`3px solid ${r.color}`, paddingLeft:24}}>
                <div style={{fontFamily:"var(--font-display)", fontSize:20, textTransform:"uppercase", letterSpacing:"-.01em", color:r.color, marginBottom:10}}>{r.title}</div>
                <p style={{fontSize:14, lineHeight:1.7, color:"rgba(227,240,247,.8)", margin:0}}>{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Data categories */}
      <Section bg="#000" pad="80px 32px">
        <Container maxWidth={900}>
          <Display as="h2" size="h2" style={{marginBottom:40}}>What We Collect.</Display>
          <div style={{border:"1px solid var(--color-pink)"}}>
            {[
              ["Identifiers",              "Name, email address, phone number, IP address, account username"],
              ["Business information",     "Business name, EIN, resale certificate number, license number"],
              ["Commercial information",   "Purchase history, order details, product preferences"],
              ["Internet activity",        "Browser type, pages visited, referring URLs, session duration"],
              ["Geolocation data",         "Shipping and billing address (city, state, ZIP)"],
              ["Communications",           "Emails, form submissions, customer service interactions"],
              ["Financial information",    "Payment method type (processed by payment provider — we do not store card numbers)"],
            ].map(([cat, desc], i) => (
              <div key={cat} style={{
                display:"grid", gridTemplateColumns:"220px 1fr", gap:24,
                padding:"18px 28px",
                borderBottom: i < 6 ? "1px dashed rgba(236,142,190,.3)" : 0,
                alignItems:"start"
              }}>
                <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--color-pink)"}}>{cat}</span>
                <span style={{fontSize:14, color:"rgba(227,240,247,.85)", lineHeight:1.5}}>{desc}</span>
              </div>
            ))}
          </div>
          <p style={{marginTop:24, fontSize:13, color:"rgba(227,240,247,.55)", lineHeight:1.6}}>
            We do not sell any of these categories of personal information to third parties. We share data only as necessary to operate our business (shipping carriers, payment processors, email service providers) as described in our Privacy Policy.
          </p>
        </Container>
      </Section>

      {/* Request form */}
      <Section bg="var(--color-bg-elev)" pad="80px 32px">
        <Container maxWidth={700}>
          <Eyebrow>Submit a request</Eyebrow>
          <Display as="h2" size="h2" style={{marginTop:14, marginBottom:40}}>Exercise Your Rights.</Display>

          {submitted ? (
            <div style={{
              border:"1px solid var(--color-cyan)", padding:48,
              display:"flex", flexDirection:"column", gap:16, alignItems:"flex-start"
            }}>
              <span style={{color:"var(--color-cyan)"}}><Icons.Check size={36}/></span>
              <div style={{fontFamily:"var(--font-display)", fontSize:28, textTransform:"uppercase", letterSpacing:"-.01em"}}>
                Request Received
              </div>
              <p style={{fontSize:15, lineHeight:1.65, color:"rgba(227,240,247,.8)", margin:0}}>
                We've received your privacy request and will respond within <strong style={{color:"var(--color-cyan)"}}>45 days</strong> as required by law. We may contact you to verify your identity before processing the request.
              </p>
              <p style={{fontSize:13, color:"rgba(227,240,247,.55)", margin:0}}>
                Reference: CCPA-{Date.now().toString().slice(-6)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:28}}>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
                <Input
                  label="Full Name *"
                  value={form.name}
                  onChange={e => setForm(p => ({...p, name: e.target.value}))}
                  required
                  placeholder="Your full legal name"
                />
                <Input
                  label="Email Address *"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(p => ({...p, email: e.target.value}))}
                  required
                  placeholder="Email on file with us"
                />
              </div>
              <Select
                label="Request Type *"
                value={form.type}
                onChange={e => setForm(p => ({...p, type: e.target.value}))}
                options={requestTypes}
              />
              <Textarea
                label="Additional Details (Optional)"
                value={form.details}
                onChange={e => setForm(p => ({...p, details: e.target.value}))}
                rows={4}
                placeholder="Any additional context that will help us process your request"
              />
              <p style={{fontSize:12, color:"rgba(227,240,247,.5)", lineHeight:1.6, margin:0}}>
                We will respond within 45 days. We may ask you to verify your identity before completing your request. You may also submit requests by email at{" "}
                <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)"}}>info@smokeshowlabs.com</a>{" "}
                or by phone at <a href="tel:2139439000" style={{color:"var(--color-cyan)"}}>213-943-9000</a>.
              </p>
              <Button type="submit" variant="primary" size="lg" style={{alignSelf:"flex-start"}}>
                Submit Request <Icons.ArrowRight size={18}/>
              </Button>
            </form>
          )}
        </Container>
      </Section>
    </>
  );
};

window.CCPAPage = CCPAPage;
