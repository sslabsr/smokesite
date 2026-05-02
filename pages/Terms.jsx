// Terms & Conditions page
const TermsPage = ({setRoute}) => (
  <>
    {/* Hero */}
    <Section bg="#000" pad="120px 32px 80px">
      <Container>
        <Eyebrow>Legal · Terms & Conditions</Eyebrow>
        <Display as="h1" size="h1" style={{marginTop:24, marginBottom:24, maxWidth:900}}>
          Terms &<br/><span style={{color:"var(--color-pink)"}}>Conditions.</span>
        </Display>
        <p style={{maxWidth:680, fontSize:18, lineHeight:1.55, color:"rgba(227,240,247,.8)", margin:0}}>
          Last updated: January 1, 2026. By accessing our website or purchasing our products and services, you agree to these terms. Read them.
        </p>
      </Container>
    </Section>

    {/* Terms body */}
    <Section bg="var(--color-bg-elev)" pad="80px 32px">
      <Container maxWidth={900}>
        <div style={{display:"flex", flexDirection:"column", gap:56}}>

          <PolicySection num="01" title="Acceptance of Terms" accent="pink">
            <PolicyPara>By accessing or using the Smoke Show Labs website (smokeshowlabs.com) or engaging our manufacturing, filling, packaging, or co-packing services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, do not use our website or services.</PolicyPara>
            <PolicyPara>These terms apply to all visitors, users, reseller account holders, and wholesale customers. We may update these terms at any time. Continued use of our site or services after an update constitutes acceptance of the revised terms.</PolicyPara>
          </PolicySection>

          <PolicySection num="02" title="Age Verification" accent="cyan">
            <PolicyPara>Our website and products are intended for individuals who are 21 years of age or older (or the legal age of majority in your jurisdiction, whichever is higher). By accessing our website, you represent that you are 21 or older.</PolicyPara>
            <PolicyPara>We reserve the right to cancel any order or account that we reasonably believe is held by a minor. We are not liable for any harm resulting from a minor accessing our site or products despite our age verification measures.</PolicyPara>
          </PolicySection>

          <PolicySection num="03" title="Use of This Website" accent="pink">
            <PolicyPara>You may use our website for lawful purposes only. You agree not to:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li>Use the site in any way that violates applicable local, state, national, or international law</li>
              <li>Transmit unsolicited commercial communications</li>
              <li>Attempt to gain unauthorized access to any part of the site or its related systems</li>
              <li>Use automated tools to scrape, crawl, or harvest data from the site without our written permission</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Introduce viruses, trojans, worms, or other malicious code</li>
            </ul>
            <PolicyPara>We reserve the right to terminate access to any account or user that violates these terms without notice.</PolicyPara>
          </PolicySection>

          <PolicySection num="04" title="Intellectual Property" accent="cyan">
            <PolicyPara>All content on this website — including text, graphics, logos, images, and software — is the property of Smoke Show Labs or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.</PolicyPara>
            <PolicyPara>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our site without our prior written consent, except as follows: you may print or download one copy of a reasonable number of pages for your personal, non-commercial use.</PolicyPara>
            <PolicyPara>The Smoke Show Labs name, logo, and all related marks are trademarks of Smoke Show Labs. Nothing in these terms grants you any right to use our trademarks.</PolicyPara>
          </PolicySection>

          <PolicySection num="05" title="Products, Pricing & Orders" accent="pink">
            <PolicyPara>All prices are in US dollars. We reserve the right to change prices at any time without notice. Price changes do not affect orders already confirmed and in production.</PolicyPara>
            <PolicyPara>Product descriptions and specifications are as accurate as we can make them. We do not warrant that product descriptions are error-free. If a product is not as described, your sole remedy is to return it unused per our Shipping & Returns policy.</PolicyPara>
            <PolicyPara>We reserve the right to refuse or cancel any order for any reason, including but not limited to: product unavailability, pricing errors, or suspected fraud. If we cancel an order after payment has been processed, we will issue a full refund.</PolicyPara>
            <PolicyPara>Wholesale orders are subject to our separate Wholesale Program Agreement, which governs pricing tiers, net terms, restock obligations, and reseller requirements. The Wholesale Program Agreement takes precedence over these Terms for wholesale account holders.</PolicyPara>
          </PolicySection>

          <PolicySection num="06" title="Compliance & Regulatory" accent="cyan">
            <PolicyPara>Cannabis and hemp-derived products are subject to complex and variable state and local laws. It is your sole responsibility to ensure that your purchase, possession, resale, and use of our products complies with the laws of your jurisdiction.</PolicyPara>
            <PolicyPara>We provide lab COAs with every batch. It is your responsibility to verify that the products you receive comply with applicable potency, contaminant, and labeling requirements in your state before placing them in commerce.</PolicyPara>
            <PolicyPara>We do not provide legal compliance advice. Consult a licensed attorney or compliance consultant in your state if you are uncertain about the legal status of specific products or activities.</PolicyPara>
          </PolicySection>

          <PolicySection num="07" title="Limitation of Liability" accent="pink">
            <PolicyPara>To the fullest extent permitted by applicable law, Smoke Show Labs and its directors, employees, partners, agents, suppliers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, or other intangible losses, resulting from:</PolicyPara>
            <ul style={{paddingLeft:20, lineHeight:2, color:"rgba(227,240,247,.85)", fontSize:15}}>
              <li>Your use of or inability to use our products or services</li>
              <li>Any conduct or content of third parties in connection with our services</li>
              <li>Unauthorized access to or alteration of your account or data</li>
              <li>Any regulatory action, seizure, or enforcement action related to the products</li>
            </ul>
            <PolicyPara>Our total liability to you for any claim arising from these terms or your use of our services shall not exceed the amount you paid to us in the twelve months preceding the claim.</PolicyPara>
          </PolicySection>

          <PolicySection num="08" title="Disclaimer of Warranties" accent="cyan">
            <PolicyPara>Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or secure.</PolicyPara>
          </PolicySection>

          <PolicySection num="09" title="Governing Law & Disputes" accent="pink">
            <PolicyPara>These Terms are governed by the laws of the State of California without regard to conflict-of-law principles. Any dispute arising from these Terms or your use of our services shall be resolved exclusively in the state or federal courts located in Los Angeles County, California.</PolicyPara>
            <PolicyPara>You waive any objection to the exercise of jurisdiction over you by such courts and waiver of any right to a jury trial in connection with any litigation between us.</PolicyPara>
          </PolicySection>

          <PolicySection num="10" title="Contact" accent="cyan">
            <PolicyPara>Questions about these Terms should be directed to:</PolicyPara>
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

window.TermsPage = TermsPage;
