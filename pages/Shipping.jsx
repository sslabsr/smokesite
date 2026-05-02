// Shipping & Returns policy page
const ShippingPage = ({setRoute}) => (
  <>
    {/* Hero */}
    <Section bg="#000" pad="120px 32px 80px">
      <Container>
        <Eyebrow>Policy · Shipping & Returns</Eyebrow>
        <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:900}}>
          Shipping &<br/><span style={{color:"var(--color-cyan)"}}>Returns.</span>
        </Display>
        <p style={{maxWidth:680, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
          Last updated: January 1, 2026. For order-specific questions, contact{" "}
          <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)", borderBottom:"1px solid var(--color-cyan)"}}>info@smokeshowlabs.com</a>{" "}
          or your account rep directly.
        </p>
      </Container>
    </Section>

    {/* Shipping Policy */}
    <Section bg="var(--color-bg-elev)" pad="80px 32px">
      <Container maxWidth={900}>
        <Display as="h2" size="h2" style={{marginBottom:40}}>Shipping Policy.</Display>
        <div style={{display:"flex", flexDirection:"column", gap:32}}>

          <PolicyBlock title="Processing & Lead Times" accent="cyan">
            <p>Orders enter the production queue within one business day of payment confirmation. Standard lead times for in-stock hardware programs are 4–6 weeks from order confirmation to delivery. Sample batches ship within 7–10 business days. Restock orders for established programs run 2–3 weeks.</p>
            <p style={{marginTop:12}}>Lead times are estimates, not guarantees. If your order will be delayed beyond the estimate, your account rep will contact you before the delay affects your delivery window.</p>
          </PolicyBlock>

          <PolicyBlock title="Carriers" accent="pink">
            <p>We ship via <strong style={{color:"var(--color-fg)"}}>UPS</strong> and <strong style={{color:"var(--color-fg)"}}>FedEx</strong> for standard domestic orders. Carrier selection is based on destination and order weight. You will be notified of the carrier at time of shipment.</p>
            <ul style={{paddingLeft:20, marginTop:12, lineHeight:2}}>
              <li>UPS Ground / FedEx Ground — standard domestic</li>
              <li>UPS Next Day Air / FedEx Priority Overnight — expedited, at cost</li>
              <li>LTL freight — pallet orders over 5,000 units</li>
            </ul>
            <p style={{marginTop:12}}>International shipping is available by request. Contact us for a freight quote, customs documentation, and compliance clearance before placing your order.</p>
          </PolicyBlock>

          <PolicyBlock title="Tracking" accent="cyan">
            <p>Tracking numbers are emailed to the address on file at time of shipment. Your account dashboard shows live order status from production queue through pack-out to carrier scan. COAs are uploaded to your order record when lab results are returned — typically 3–5 business days before shipment.</p>
          </PolicyBlock>

          <PolicyBlock title="Shipping Costs" accent="pink">
            <p>Shipping costs are calculated at checkout based on order weight, dimensions, and destination. Freight quotes for pallet orders are provided by your account rep. Free shipping is not available on wholesale orders — all orders ship at carrier cost.</p>
          </PolicyBlock>

        </div>
      </Container>
    </Section>

    {/* Returns & Exchanges */}
    <Section bg="#000" pad="80px 32px">
      <Container maxWidth={900}>
        <Display as="h2" size="h2" style={{marginBottom:40}}>Returns & Exchanges.</Display>
        <div style={{display:"flex", flexDirection:"column", gap:32}}>

          <PolicyBlock title="Return Eligibility" accent="cyan">
            <p>We accept returns on defective or non-conforming products within <strong style={{color:"var(--color-cyan)"}}>30 days of delivery</strong>. Products are considered defective if they fail to function under normal conditions or do not match the approved sample and spec sheet on record.</p>
            <p style={{marginTop:12}}>We do not accept returns for change-of-mind, flavor preference, or market conditions. Cannabis manufacturing programs are built to specification — once a batch runs to an approved spec, it is non-returnable except for quality defects.</p>
          </PolicyBlock>

          <PolicyBlock title="Return Process" accent="pink">
            <ol style={{paddingLeft:20, lineHeight:2, marginTop:0}}>
              <li>Contact your account rep or email <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-pink)"}}>info@smokeshowlabs.com</a> within 30 days of delivery</li>
              <li>Provide your order number, a description of the defect, and photos or video documentation</li>
              <li>We will issue a Return Merchandise Authorization (RMA) number within 2 business days</li>
              <li>Ship defective units back to us with the RMA number visible on the outer box</li>
              <li>Once received and inspected, we will issue a replacement shipment or credit at our discretion</li>
            </ol>
          </PolicyBlock>

          <PolicyBlock title="Exchanges" accent="cyan">
            <p>Exchanges are available only for defective hardware where the oil fill is intact. If the hardware is defective but the oil and terpene fill is undamaged, we will replace the hardware component and re-fill at no additional cost. Exchange eligibility is determined on inspection.</p>
          </PolicyBlock>

        </div>
      </Container>
    </Section>

    {/* Damaged / Missing Items */}
    <Section bg="var(--color-bg-elev)" pad="80px 32px">
      <Container maxWidth={900}>
        <Display as="h2" size="h2" style={{marginBottom:40}}>Damaged & Missing Items.</Display>
        <div style={{display:"flex", flexDirection:"column", gap:32}}>

          <PolicyBlock title="Carrier Damage" accent="pink">
            <p>If your order arrives with visible damage, note the damage on the delivery receipt before signing. Photograph the outer packaging and all damaged units. Email documentation to <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-pink)"}}>info@smokeshowlabs.com</a> within <strong style={{color:"var(--color-fg)"}}>48 hours of delivery</strong>.</p>
            <p style={{marginTop:12}}>We file the carrier claim on your behalf and ship replacement units at no charge pending carrier claim approval. Do not discard damaged packaging — it is required for the claim.</p>
          </PolicyBlock>

          <PolicyBlock title="Missing Items" accent="cyan">
            <p>If your shipment is missing items relative to the packing slip, contact us within <strong style={{color:"var(--color-cyan)"}}>5 business days of delivery</strong>. We investigate at the warehouse and ship missing items at no charge if our records confirm the shortage.</p>
          </PolicyBlock>

        </div>

        {/* Contact card */}
        <div style={{marginTop:56, border:"1px solid var(--color-pink)", padding:36, display:"flex", gap:28, flexWrap:"wrap", justifyContent:"space-between", alignItems:"center"}}>
          <div>
            <div style={{fontFamily:"var(--font-display)", fontSize:24, textTransform:"uppercase", letterSpacing:"-.01em", marginBottom:10}}>Need help with an order?</div>
            <p style={{fontSize:14, color:"rgba(227,240,247,.75)", margin:0}}>
              <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-pink)"}}>info@smokeshowlabs.com</a>{" · "}
              <a href="tel:2139439000" style={{color:"var(--color-pink)"}}>213-943-9000</a>{" "}
              · Mon–Fri 9am–5:30pm PT
            </p>
          </div>
          <Button onClick={() => { setRoute("contact"); window.scrollTo({top:0,behavior:"instant"}); }} variant="pink" size="md">
            Contact Us <Icons.ArrowRight size={16}/>
          </Button>
        </div>
      </Container>
    </Section>
  </>
);

const PolicyBlock = ({title, accent="cyan", children}) => {
  const color = accent === "cyan" ? "var(--color-cyan)" : "var(--color-pink)";
  return (
    <div style={{borderLeft:`3px solid ${color}`, paddingLeft:28}}>
      <div style={{
        fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em",
        textTransform:"uppercase", color, marginBottom:14
      }}>{title}</div>
      <div style={{fontSize:15, lineHeight:1.7, color:"rgba(227,240,247,.85)"}}>
        {children}
      </div>
    </div>
  );
};

window.ShippingPage = ShippingPage;
