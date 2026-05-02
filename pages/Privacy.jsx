// Privacy Policy page
const PrivacyPage = ({setRoute}) => (
  <>
    {/* Hero */}
    <Section bg="#000" pad="120px 32px 80px">
      <Container>
        <Eyebrow>Legal · Privacy Policy</Eyebrow>
        <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:900}}>
          Privacy <span style={{color:"var(--color-cyan)"}}>Policy.</span>
        </Display>
        <p style={{maxWidth:680, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
          Last updated: January 1, 2026. This policy explains how Smoke Show Labs ("we," "us," "our") collects, uses, and protects your information when you visit our website or engage our services.
        </p>
      </Container>
    </Section>

    {/* Policy body */}
    <Section bg="var(--color-bg-elev)" pad="80px 32px">
      <Container maxWidth={900}>
        <div style={{display:"flex", flexDirection:"column", gap:56}}>

          <PolicySection num="01" title="Information We Collect" accent="cyan">
            <PolicyPara>We collect information you provide directly to us, including when you create an account, submit a wholesale application, contact us through our website forms, subscribe to our email list, or place an order.</PolicyPara>
            <PolicyPara>This may include: name, email address, phone number, business name, business license or resale certificate number, shipping and billing address, and payment information. Payment card data is processed by our payment processor and is not stored on our servers.</PolicyPara>
            <PolicyPara>We also collect information automatically when you visit our website: IP address, browser type and version, operating system, referring URLs, pages visited, and time spent on pages. This data is collected through cookies and similar tracking technologies.</PolicyPara>
          </PolicySection>

          <PolicySection num="02" title="How We Use Your Information" accent="pink">
            <PolicyPara>We use the information we collect to:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li>Process and fulfill your orders and wholesale applications</li>
              <li>Communicate with you about orders, programs, and account status</li>
              <li>Send transactional emails (order confirmations, shipping notifications, COA delivery)</li>
              <li>Send marketing communications, if you have opted in</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Detect, investigate, and prevent fraudulent or illegal activity</li>
            </ul>
            <PolicyPara>We do not sell your personal information to third parties. We do not use your data for automated decision-making that produces legal or similarly significant effects without human review.</PolicyPara>
          </PolicySection>

          <PolicySection num="03" title="Third-Party Sharing" accent="cyan">
            <PolicyPara>We share your information with third parties only as necessary to operate our business and fulfill your orders:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li><strong style={{color:"var(--color-fg)"}}>Shipping carriers</strong> (UPS, FedEx) — name, address, order details for delivery</li>
              <li><strong style={{color:"var(--color-fg)"}}>Payment processors</strong> — billing name, address, and card details for payment processing</li>
              <li><strong style={{color:"var(--color-fg)"}}>Email service providers</strong> — email address for transactional and marketing communications</li>
              <li><strong style={{color:"var(--color-fg)"}}>Analytics providers</strong> — anonymized usage data for website analytics</li>
              <li><strong style={{color:"var(--color-fg)"}}>Legal and regulatory authorities</strong> — when required by law, court order, or regulatory requirement</li>
            </ul>
            <PolicyPara>All third-party service providers are contractually bound to protect your information and use it only for the purposes we specify.</PolicyPara>
          </PolicySection>

          <PolicySection num="04" title="Cookies & Tracking" accent="pink">
            <PolicyPara>We use cookies and similar technologies to remember your preferences, maintain your session (age verification, cart contents), and understand how visitors use our website.</PolicyPara>
            <PolicyPara>Types of cookies we use:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li><strong style={{color:"var(--color-fg)"}}>Essential cookies</strong> — required for basic site functionality (age gate, session, cart)</li>
              <li><strong style={{color:"var(--color-fg)"}}>Analytics cookies</strong> — help us understand website traffic and usage patterns</li>
              <li><strong style={{color:"var(--color-fg)"}}>Preference cookies</strong> — remember your settings and choices</li>
            </ul>
            <PolicyPara>You can control cookies through your browser settings. Disabling essential cookies may affect site functionality. For California residents, see the CCPA section below.</PolicyPara>
          </PolicySection>

          <PolicySection num="05" title="Data Retention" accent="cyan">
            <PolicyPara>We retain your personal information for as long as your account is active, as needed to provide our services, or as required by law. Order and business records are retained for a minimum of seven years for tax and regulatory compliance.</PolicyPara>
            <PolicyPara>You may request deletion of your personal information at any time (subject to legal retention requirements) by emailing <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)"}}>info@smokeshowlabs.com</a>.</PolicyPara>
          </PolicySection>

          <PolicySection num="06" title="Your Rights (CCPA / GDPR)" accent="pink">
            <PolicyPara>Depending on your jurisdiction, you may have the following rights regarding your personal information:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li>Right to know what personal information we collect and how it is used</li>
              <li>Right to access a copy of your personal information</li>
              <li>Right to delete your personal information (subject to exceptions)</li>
              <li>Right to opt out of the sale of your personal information (we do not sell data)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
              <li>Right to correct inaccurate personal information (GDPR)</li>
              <li>Right to data portability (GDPR)</li>
            </ul>
            <PolicyPara>To exercise any of these rights, contact us at <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-pink)"}}>info@smokeshowlabs.com</a> or visit our <span style={{color:"var(--color-pink)", cursor:"pointer", borderBottom:"1px solid var(--color-pink)"}} onClick={() => setRoute && setRoute("ccpa")}>CCPA page</span>.</PolicyPara>
          </PolicySection>

          <PolicySection num="07" title="Security" accent="cyan">
            <PolicyPara>We implement industry-standard security measures to protect your information, including TLS encryption for data in transit and access controls for data at rest. No method of electronic transmission or storage is 100% secure. We will notify you in the event of a data breach affecting your personal information as required by applicable law.</PolicyPara>
          </PolicySection>

          <PolicySection num="08" title="Children" accent="pink">
            <PolicyPara>Our website and services are intended for individuals who are 21 years of age or older. We do not knowingly collect personal information from individuals under 21. If we discover that we have inadvertently collected information from a minor, we will delete it promptly.</PolicyPara>
          </PolicySection>

          <PolicySection num="09" title="Contact" accent="cyan">
            <PolicyPara>For privacy-related questions, requests, or complaints:</PolicyPara>
            <div style={{marginTop:16, padding:"24px 28px", border:"1px solid rgba(120,214,241,.35)", fontSize:14, lineHeight:1.8, color:"rgba(227,240,247,.85)"}}>
              Smoke Show Labs<br/>
              1410 W. Olympic Blvd Suite B<br/>
              Los Angeles, CA 90015<br/>
              <a href="mailto:info@smokeshowlabs.com" style={{color:"var(--color-cyan)"}}>info@smokeshowlabs.com</a><br/>
              <a href="tel:2139439000" style={{color:"var(--color-cyan)"}}>213-943-9000</a>
            </div>
          </PolicySection>

        </div>
      </Container>
    </Section>
  </>
);

const PolicySection = ({num, title, accent="cyan", children}) => {
  const color = accent === "cyan" ? "var(--color-cyan)" : "var(--color-pink)";
  return (
    <div>
      <div style={{display:"flex", gap:18, alignItems:"baseline", marginBottom:24}}>
        <span style={{fontFamily:"var(--font-display)", fontSize:48, color, lineHeight:1, letterSpacing:"-.03em", opacity:.5}}>{num}</span>
        <Display as="h2" size="h3">{title}</Display>
      </div>
      <div>{children}</div>
    </div>
  );
};

const PolicyPara = ({children}) => (
  <p style={{fontSize:15, lineHeight:1.7, color:"rgba(227,240,247,.85)", margin:"0 0 12px"}}>{children}</p>
);

// Export shared policy components for use by Terms.jsx
Object.assign(window, { PrivacyPage, PolicySection, PolicyPara });
