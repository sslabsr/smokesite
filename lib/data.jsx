// Data: products, services, FAQ, blog posts, etc.

const PRODUCTS = [
  {id:1,  name:"Neon",            type:"1g Disposable · 510 Threadless", category:"Disposables", price:24.00,  msrp:42.00,  badge:"NEW",      hue:"cyan",    spec:"1g · 1100mAh · USB-C · adjustable airflow"},
  {id:2,  name:"OG",              type:"510 Cart · 1g",                  category:"Carts",       price:18.00,  msrp:32.00,                      hue:"pink",    spec:"1g · ceramic core · child-resistant"},
  {id:3,  name:"Live Resin",      type:"All-in-One · 2g",                category:"AIO",         price:32.00,  msrp:54.00,  badge:"HOT",      hue:"cyan",    spec:"2g · 850mAh · live resin compatible"},
  {id:4,  name:"Terp Pod",        type:"Pod system · 0.5g",              category:"Pods",        price:15.00,  msrp:28.00,                      hue:"pink",    spec:"0.5g pod · magnetic · 380mAh"},
  {id:5,  name:"Snowcap",         type:"1g Disposable · Snow-capped",    category:"Disposables", price:28.00,  msrp:48.00,  badge:"LIMITED", hue:"magenta", spec:"1g · diamond-capped · ceramic core"},
  {id:6,  name:"Stealth",         type:"510 Cart · 0.5g",                category:"Carts",       price:14.00,  msrp:24.00,                      hue:"cyan",    spec:"0.5g · matte black · post-less"},
  {id:7,  name:"Big Bear",        type:"All-in-One · 3g",                category:"AIO",         price:42.00,  msrp:72.00,                      hue:"pink",    spec:"3g · 1500mAh · USB-C fast charge"},
  {id:8,  name:"Mini",            type:"Pod · 0.3g",                     category:"Pods",        price:12.00,  msrp:22.00,                      hue:"cyan",    spec:"0.3g · pocket size · 280mAh"},
];

const PRODUCT_CATEGORIES = ["All", "Disposables", "Carts", "AIO", "Pods"];

const PRODUCT_DETAILS = {
  1: {
    description: "The Neon is our flagship 1g disposable. 1100mAh battery, USB-C charge port, and three-stage adjustable airflow. Ceramic core delivers clean vapor from first pull to last. Available for custom fill — distillate, live resin, or snowcap.",
    features: ["1g fill capacity", "1100mAh rechargeable battery", "USB-C charging port", "3-stage adjustable airflow", "Ceramic core", "Child-resistant packaging", "COA included"],
    dimensions: "115mm × 13mm",
    coil: "Ceramic",
    connection: "510 Threadless",
    resistance: "1.2Ω",
  },
  2: {
    description: "The OG is our workhorse 510 cart. Ceramic core, child-resistant mouthpiece, post-less design. Runs clean across all standard 510 batteries. The most universal SKU in the catalog.",
    features: ["1g fill capacity", "510 thread", "Ceramic core", "Post-less design", "Child-resistant mouthpiece", "Clear window", "COA included"],
    dimensions: "57mm × 11.5mm",
    coil: "Ceramic",
    connection: "510 Thread",
    resistance: "1.4Ω",
  },
  3: {
    description: "The Live Resin AIO is built for live resin and rosin. 2g format, 850mAh battery, USB-C. The larger reservoir keeps viscous oils at operating temperature. Pull-activated.",
    features: ["2g fill capacity", "850mAh rechargeable battery", "USB-C charging port", "Pull-activate", "Live resin compatible", "Ceramic core", "COA included"],
    dimensions: "122mm × 14mm",
    coil: "Ceramic",
    connection: "Integrated",
    resistance: "1.0Ω",
  },
  4: {
    description: "The Terp Pod is a magnetic pod system in 0.5g format. Compatible with any 380mAh pod battery. Leak-resistant seal, ceramic wick. The most discreet SKU in the lineup.",
    features: ["0.5g fill capacity", "Magnetic connection", "380mAh compatible", "Ceramic wick", "Leak-resistant seal", "Compact form factor", "COA included"],
    dimensions: "45mm × 10mm",
    coil: "Ceramic wick",
    connection: "Magnetic",
    resistance: "1.6Ω",
  },
  5: {
    description: "The Snowcap is the shelf centerpiece. 1g disposable, diamond-capped at fill. THCA crystals settle into the oil for a high-margin, high-visibility SKU. Limited run — quantities are small by design.",
    features: ["1g fill capacity", "THCA diamond cap", "Ceramic core", "USB-C charge port", "Premium box packaging", "Diamond COA included", "Limited quantities"],
    dimensions: "115mm × 13mm",
    coil: "Ceramic",
    connection: "510 Threadless",
    resistance: "1.2Ω",
  },
  6: {
    description: "The Stealth is a matte black 0.5g cart for operators who want a low-profile SKU. Post-less design, matte finish, ceramic core. No window — clean for minimal brand labels.",
    features: ["0.5g fill capacity", "510 thread", "Post-less design", "Matte black finish", "Ceramic core", "No-window for label coverage", "COA included"],
    dimensions: "54mm × 11.5mm",
    coil: "Ceramic",
    connection: "510 Thread",
    resistance: "1.4Ω",
  },
  7: {
    description: "The Big Bear is the 3g AIO for heavy users and premium SKUs. 1500mAh battery, USB-C fast charge. Ceramic core handles thick oils. The highest-margin format in the all-in-one category.",
    features: ["3g fill capacity", "1500mAh rechargeable battery", "USB-C fast charging", "Pull-activate", "Ceramic core", "Heavy-duty casing", "COA included"],
    dimensions: "130mm × 16mm",
    coil: "Ceramic",
    connection: "Integrated",
    resistance: "0.9Ω",
  },
  8: {
    description: "The Mini is a 0.3g pocket pod. 280mAh compatible, magnetic, ceramic wick. Designed for single-strain limited drops and sample packs. The smallest footprint in the catalog.",
    features: ["0.3g fill capacity", "Magnetic connection", "280mAh compatible", "Ceramic wick", "Pocket-size", "Single-strain ready", "COA included"],
    dimensions: "38mm × 9mm",
    coil: "Ceramic wick",
    connection: "Magnetic",
    resistance: "1.8Ω",
  },
};

const SERVICES = [
  {id:"hardware",  num:"01", icon:"Cpu",    name:"Hardware",      tag:"Carts · Disposables · Pods · Batteries",
   blurb:"510 carts, all-in-ones, pods, batteries. Ceramic cores, child-resistant, USB-C, adjustable airflow. We source from vetted hardware partners and stock-pull for you.",
   bullets:["1g / 0.5g / 0.3g formats","Ceramic / quartz cores","Child-resistant + tamper-evident","Custom airflow + post-less options"],
   accent:"cyan"},
  {id:"filling",   num:"02", icon:"Beaker", name:"Oil Filling",   tag:"Distillate · Live Resin · Rosin · Snowcap",
   blurb:"Distillate, live resin, live rosin, snowcap. Lab-tested every batch. Filling lines for 510 carts, AIOs, pods. Snowcapping on request.",
   bullets:["Cold + hot fill lines","Snowcap (diamond cap) on request","Batch lab COAs delivered","Up to 50K units per run"],
   accent:"pink"},
  {id:"terpenes",  num:"03", icon:"Flask",  name:"Terpene Formulation", tag:"Strain-true · Custom · Botanical",
   blurb:"Strain-true profiles or build a custom blend around your brand's flavor signature. Botanical and cannabis-derived libraries. Reformulation rounds included.",
   bullets:["Strain-true library (200+ profiles)","Custom flavor blends","Cannabis-derived (CDT) on request","2 reformulation rounds included"],
   accent:"cyan"},
  {id:"snowcap",   num:"04", icon:"Snow",   name:"Snowcap",       tag:"Diamond-capped · Premium SKUs",
   blurb:"Diamond-capped premium SKUs. We snowcap your fills with THCA crystals for the high-margin shelf placement. Supply your own diamonds or pull from our stock.",
   bullets:["1g / 2g formats","Custom diamond ratio","Premium shelf positioning","COAs include diamond profile"],
   accent:"pink"},
  {id:"packaging", num:"05", icon:"Box",    name:"Packaging",     tag:"Boxes · Sleeves · Mylars · Compliance",
   blurb:"Print-ready boxes, sleeves, mylars. We design with you or accept your print files. Compliance-checked for your jurisdiction.",
   bullets:["Boxes · sleeves · mylars","Compliance review (CA, NV, AZ)","Foil + spot UV finishes","Co-design with our team"],
   accent:"cyan"},
  {id:"copack",    num:"06", icon:"Truck",  name:"Co-Pack & Fulfillment", tag:"Pick · Pack · Ship · Direct-to-shop",
   blurb:"Cartoning, kit-pack, direct-to-shop fulfillment from our LA floor. We ship under your label. 1,000-piece MOQ across the program.",
   bullets:["Direct-to-shop fulfillment","White-label compatible","1,000-piece MOQ","Tracked shipping"],
   accent:"pink"},
];

const PROCESS = [
  {n:"01", title:"Brief",         body:"You bring the brand. We brief on volume, format, oil profile, packaging spec. 30-min call, no NDA fee."},
  {n:"02", title:"Spec sheet",    body:"We send a complete spec sheet — hardware, oil, fill weight, packaging, lab requirements, unit cost — within 48 hours."},
  {n:"03", title:"Sample run",    body:"We run a small sample batch (50–250 units) so you can validate hardware feel, flavor, and packaging in-hand."},
  {n:"04", title:"Production",    body:"Approved sample becomes the production reference. Full batch fills, lab tests, and pack-out happen on our LA floor."},
  {n:"05", title:"Ship & restock",body:"Direct-to-shop, direct-to-warehouse, or hold-and-pick. Restock cycles set up before launch — no scramble."},
];

const FAQ_CATEGORIES = [
  {
    title: "General",
    items: [
      {q:"What is the MOQ?",                        a:"1,000 units per SKU is the floor. Most clients run 1k for their first launch, then scale to 5k–25k per restock. We can quote up to 50k per batch. Talk to us about volume commitments for better unit pricing."},
      {q:"Do you white-label?",                     a:"Yes. Every program is white-label by default. Hardware, packaging, and shipping go out under your name. We never co-brand without explicit written permission."},
      {q:"What's the turnaround on a first run?",   a:"4–6 weeks from approved spec sheet to delivered units. 7–10 days for a sample batch. Restocks run 2–3 weeks once the program is set."},
      {q:"Can I supply my own hardware?",           a:"Yes. We accept client-supplied hardware after a quick QA inspection. There's a flat handling fee for receiving and inspecting client stock. Bring your data sheet so we can match fill parameters."},
      {q:"Do you do CBD-only products?",            a:"Yes. We run CBD, CBG, CBN, hemp-derived Δ8 / Δ9, and full-spectrum oils. Compliance is checked per your destination market before we begin."},
      {q:"What lab testing do you provide?",        a:"Every production batch ships with a COA from a third-party ISO-accredited lab. We test for potency, residual solvents, pesticides, heavy metals, and microbials. Additional test panels available on request."},
    ],
  },
  {
    title: "Wholesale & Reseller",
    items: [
      {q:"How does reseller approval work?",        a:"Apply through the Wholesale page. Approval takes 1–3 business days. We verify your license or resale certificate. Once approved, you see wholesale pricing and tiered discounts across the catalog immediately."},
      {q:"What are the pricing tiers?",             a:"Bronze (1k–4,999 units, 35% off MSRP), Silver (5k–24,999 units, 45% off MSRP), Gold (25k+ units, 55% off MSRP). Tier is calculated on rolling 90-day unit volume. You auto-upgrade when you hit the next tier."},
      {q:"Do you offer net terms?",                 a:"Bronze accounts are prepay. Silver unlocks Net 15. Gold accounts get Net 30 and priority restock SLA. Terms are calculated from delivery date."},
      {q:"What's the restock SLA for Gold accounts?", a:"Gold accounts get a 10-business-day restock SLA from order confirmation. We hold safety stock for Gold programs. If we miss the SLA, next order ships at Bronze pricing."},
      {q:"Do I get a dedicated rep?",               a:"Yes. Every approved reseller gets an account rep from the wholesale team. S. Okafor and the team handle all wholesale accounts. Response time is one business day."},
    ],
  },
  {
    title: "Shipping & Orders",
    items: [
      {q:"Which carriers do you use?",              a:"UPS Ground and FedEx Ground for standard domestic. UPS Next Day Air and FedEx Priority Overnight available at cost. Freight (LTL) for pallet orders over 5,000 units."},
      {q:"How do I track my order?",                a:"Tracking numbers are emailed at shipment. Your account dashboard shows order status in real time — from production queue through pack-out to carrier scan. COAs are uploaded to the order when lab results return."},
      {q:"What if my order arrives damaged?",       a:"Document damage on delivery with photos. Email us at info@smokeshowlabs.com within 48 hours of delivery. We file the carrier claim and ship replacement units at no charge pending claim approval."},
      {q:"Do you ship internationally?",            a:"International by request. We quote freight, customs paperwork, and compliance documentation per destination country. Contact us before placing an international order — some SKUs are not cleared for all markets."},
      {q:"Can I change or cancel an order?",        a:"Order changes and cancellations are accepted up to 24 hours after confirmation, before the order enters the fill queue. Once filling begins, changes may incur a restocking fee. Contact your account rep immediately."},
    ],
  },
];

// Flat FAQ array kept for backward compatibility (Services page accordion)
const FAQ = FAQ_CATEGORIES.flatMap(c => c.items);

const SOCIAL_PROOF = [
  {brand:"BLOOM CO",   quote:"Smoke Show stood up our line in six weeks. Hardware, oil, packaging — all under our label.", role:"FOUNDER"},
  {brand:"OFF/HOURS",  quote:"Their snowcap program is the reason we're in 200+ shops in California.", role:"VP OPERATIONS"},
  {brand:"NIGHT SHOP", quote:"Spec sheet in 48 hours. Sample in a week. Production in five.", role:"CEO"},
];

const TEAM = [
  {name:"M. Reyes",  role:"Founder · Floor Lead",    yrs:"14 yrs hemp-derived",  init:"MR"},
  {name:"D. Park",   role:"Head of Filling",         yrs:"9 yrs co-pack",        init:"DP"},
  {name:"A. Vega",   role:"Terpene Formulation",     yrs:"7 yrs flavor R&D",     init:"AV"},
  {name:"S. Okafor", role:"Account · Wholesale",     yrs:"6 yrs B2B sales",      init:"SO"},
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Terpene Profiles: What Every Operator Needs to Know",
    date: "April 14, 2026",
    tag: "Formulation",
    excerpt: "Terpenes are the difference between a SKU that moves and one that sits. Here's what you actually need to know before you brief.",
    body: `Terpenes are not a finishing touch. They're a structural decision — one that affects viscosity, color stability, vaporization temperature, and consumer perception. Get the brief wrong and you're reformulating mid-production run.

**The three types you'll choose from**

Cannabis-derived terpenes (CDTs) come extracted directly from cannabis plant material. They carry the full flavor and aroma profile of the source strain — earthy, complex, sometimes funky. They're expensive, supply is variable, and no two batches are identical. For high-end SKUs and snowcap programs, CDTs are the move. Buyers pay for them.

Botanical-derived terpenes (BDTs) are extracted from non-cannabis plants: mangoes, hops, lavender, pine. Cheaper, more consistent, wider availability. The profiles can be remarkably accurate to popular strains. OG Kush built on BDTs has been moving in California dispensaries for five years. For operators who need margin, BDTs are the practical answer.

Synthetic terpenes are food-grade aroma compounds. Cost-effective, FDA-compliant for hemp products, infinitely reproducible. The trade-off is that they don't carry cannabinoid synergies and they can read as artificial to experienced consumers. Use them for entry-level price-point SKUs.

**Concentration matters**

Standard oil formulations run 3–10% terpene by weight. Too low and the profile disappears — you get vapor with no nose. Too high and you're looking at irritation, coil degradation, and a product that tastes like cleaner. We run formulation samples at three concentrations before we lock a blend: 4%, 7%, and 10%. Your team vapes all three. The one that tastes like your brief is the one that goes to production.

**The CDT sourcing question**

If you want CDTs, lock your source before you design your label. CDT supply is tight. A strain-true Gelato profile from a California extractor today is not the same as what ships in six weeks — harvest variables, extraction technique, and post-processing all shift the nose. We maintain relationships with three CDT suppliers to hedge this. But if your brand is built on a specific named strain, source-lock early or build in a reformulation round.

**Two rounds are included**

Our terpene program includes two reformulation rounds at no additional cost. That's two iterations of the blend before it locks for production. Use them. Don't use them for indecision — bring a clear brief and a reference product if you have one. Use them to dial concentration and fine-tune the back-end of the profile.

For custom blends starting from scratch, bring a flavor brief, not just a strain name. "Earthy with a citrus front-end and a pine finish" is a workable brief. "Make it taste like Runtz" is a conversation, not a specification.`,
  },
  {
    id: 2,
    title: "Hardware Guide: Choosing the Right Format for Your Line",
    date: "March 28, 2026",
    tag: "Hardware",
    excerpt: "Four formats, four different margins, four different consumers. Here's how to think about the hardware decision before you write a check.",
    body: `The hardware decision is the first structural choice in your program. It sets your price point, your consumer, your fill weight, your margin, and your shelf footprint. Get it wrong and no amount of packaging or branding recovers it.

**510 carts — the universal format**

510 carts fit any standard 510 battery. They're the most widely distributed format in the cannabis market. Your consumer already owns a battery. Low barrier to trial, low risk. Half-gram and full-gram options. The OG and Stealth are our 510 SKUs — ceramic core, child-resistant mouthpiece.

The trade-off is that 510 carts are commoditized. Price compression is real. You're competing on oil quality, brand, and label design — not hardware. If you want margin, you need to differentiate on the fill. For operators entering the market at volume, 510 is the right first SKU because it's familiar and easy to move.

**All-in-one (AIO) — the integrated format**

AIO devices combine hardware and oil in one unit. No battery needed. Consumer experience is simple and consistent. The Neon (1g) and Big Bear (3g) are our AIO formats. Higher price point, higher perceived value, better margin.

AIO is harder to move at retail because it requires consumer education — first-time buyers don't always know what they're getting. But for online DTC, gift shops, and lifestyle-adjacent retailers (smoke shops with a curated section), AIO outperforms. The hardware tells a story that a cart can't.

**Pods — the premium and the compact**

Pod systems require a dedicated pod battery, which you can source and bundle with us. The Terp Pod (0.5g) and Mini (0.3g) are our pod formats. Pods are the highest perceived-value format when sold with their battery. The system feel — magnetic connection, satisfying click, consistent draw — reads as luxury compared to a cart and battery.

Pod programs work best for brands that sell bundles. "Starter kit" positioning: pod battery + two pods. Higher initial sale, driven by the hardware feel. Ongoing revenue from pod refills. The catch: your consumer needs the battery. If they lose it, they might not come back.

**How to decide**

Ask three questions. One: who is your consumer and do they already have a battery? If yes, 510 is the path of least resistance. Two: what is your target retail price? Under $30, you're in 510 or pod territory. $40–$60, AIO or pod system. Over $60, AIO or snowcap. Three: what's your distribution channel? Dispensary wholesale moves 510 easily. DTC or lifestyle retail can move AIO with the right brand.

We always recommend a multi-format launch — one 510, one AIO, or one pod — so you capture both the hardware-owning consumer and the first-timer. Talk to your account rep about bundle pricing across formats.`,
  },
  {
    id: 3,
    title: "Launching Your First Brand: A 90-Day Roadmap",
    date: "March 5, 2026",
    tag: "Brand Building",
    excerpt: "Ninety days from blank page to first units on a shelf. Here's the actual sequence — no hype, no skipped steps.",
    body: `Most first-time operators underestimate the time between "I want to start a brand" and "I have units I can sell." Here's the honest sequence.

**Days 1–10: Brief and spec**

The brief is not a conversation — it's a document. Format (cart, AIO, pod), fill weight, oil type (distillate, live resin, snowcap), terpene preference (CDT, BDT, or custom blend), packaging spec (box, sleeve, mylar, or just hardware), and volume for the first run. The more specific you are, the faster we move.

We send a spec sheet within 48 hours of a complete brief. The spec sheet covers hardware model, fill parameters, terpene concentration, packaging print spec, lead time, unit cost, and MOQ breakdown. Review it with your team. Red-line anything that doesn't match the brief. We iterate until it's right.

**Days 10–20: Sample run**

Once the spec sheet is approved, we run a sample batch. 50–250 units depending on what you need for review. The sample is the exact hardware, the exact oil, the exact terpene blend at the approved concentration — just in placeholder packaging if your print files aren't ready yet.

Vape the sample. Get it into the hands of the people whose opinion matters — your retail buyers, your team, your most demanding consumer. Look for: airflow performance, vapor density, flavor accuracy, battery life (for AIOs and disposables), and hardware feel. Report back with specifics, not just "I like it" or "I don't."

If the terpene blend needs adjustment, that's what the reformulation rounds are for. If the hardware feel is wrong, we swap the model and run a new sample. This step is where first-time operators rush — don't.

**Days 20–40: Design and compliance**

While you're reviewing the sample, your packaging design should be in motion. You can bring us your files or work with our co-design team. Either way, we run a compliance review before anything goes to print — labeling requirements in CA, NV, and AZ are different, and mistakes here delay launches by weeks.

Get your license confirmed for your distribution state. If you're selling wholesale to dispensaries, verify your METRC/track-and-trace requirements. Some states require specific label data fields that need to be on the artwork.

**Days 40–60: Production**

Approved sample + approved print files = production. Full batch runs on our fill lines. Lab testing happens in parallel — we pull samples at the start, mid-run, and end-run. COAs are back before packing begins.

Pack-out and cartoning are done on our floor. Your units ship under your label. Tracking goes out by email at shipment.

**Days 60–90: Distribution**

This is the step most first-time operators haven't pre-solved. Where are your units going? Dispensary wholesale means you need buyer relationships before product arrives. DTC (direct to consumer) means you need a compliant ecommerce setup in your state. Third-party distribution means a signed agreement and a forecast.

The brands that launch clean have the distribution relationship locked before the sample is approved. The brands that scramble have pallets in a warehouse and no one to call.

Talk to buyers before you commit to volume. The spec sheet conversation with a buyer also tells you what format and price point has legs in their shop — use that information before you finalize your order.`,
  },
];

const GALLERY_FLOOR = [
  {label:"Receiving Bay",     caption:"Inbound hardware QA · All stock inspected before floor entry",        hue:"cyan"},
  {label:"Fill Lines",        caption:"Cold + hot fill capacity · Up to 50k units per batch",                hue:"pink"},
  {label:"QC Lab",            caption:"In-house quality control · Pre-production and mid-run pulls",          hue:"cyan"},
  {label:"Terpene Room",      caption:"200+ strain profiles · CDT and BDT libraries",                        hue:"magenta"},
  {label:"Pack-Out Floor",    caption:"Cartoning, kitting, white-label assembly",                            hue:"pink"},
  {label:"Cold Storage",      caption:"Temperature-controlled oil storage · Live resin and rosin holdings",  hue:"cyan"},
  {label:"Snowcap Station",   caption:"Diamond-capping line · THCA crystal application + COA",               hue:"magenta"},
  {label:"Shipping Dock",     caption:"Direct-to-shop, DTC, 3PL handoff · Tracked from our dock",           hue:"pink"},
  {label:"Compliance Desk",   caption:"CA · NV · AZ label review · COA verification",                       hue:"cyan"},
];

Object.assign(window, {
  PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_DETAILS,
  SERVICES, PROCESS,
  FAQ, FAQ_CATEGORIES,
  SOCIAL_PROOF, TEAM,
  BLOG_POSTS, GALLERY_FLOOR,
});
