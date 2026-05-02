// Data: products, services, FAQ, etc.

const PRODUCTS = [
  {id:1,  name:"Neon",            type:"1g Disposable · 510 Threadless", category:"Disposables", price:24.00,  msrp:42.00,  badge:"NEW",      hue:"cyan",  spec:"1g · 1100mAh · USB-C · adjustable airflow"},
  {id:2,  name:"OG",              type:"510 Cart · 1g",                  category:"Carts",       price:18.00,  msrp:32.00,                      hue:"pink",  spec:"1g · ceramic core · child-resistant"},
  {id:3,  name:"Live Resin",      type:"All-in-One · 2g",                category:"AIO",         price:32.00,  msrp:54.00,  badge:"HOT",      hue:"cyan",  spec:"2g · 850mAh · live resin compatible"},
  {id:4,  name:"Terp Pod",        type:"Pod system · 0.5g",              category:"Pods",        price:15.00,  msrp:28.00,                      hue:"pink",  spec:"0.5g pod · magnetic · 380mAh"},
  {id:5,  name:"Snowcap",         type:"1g Disposable · Snow-capped",    category:"Disposables", price:28.00,  msrp:48.00,  badge:"LIMITED", hue:"magenta",spec:"1g · diamond-capped · ceramic core"},
  {id:6,  name:"Stealth",         type:"510 Cart · 0.5g",                category:"Carts",       price:14.00,  msrp:24.00,                      hue:"cyan",  spec:"0.5g · matte black · post-less"},
  {id:7,  name:"Big Bear",        type:"All-in-One · 3g",                category:"AIO",         price:42.00,  msrp:72.00,                      hue:"pink",  spec:"3g · 1500mAh · USB-C fast charge"},
  {id:8,  name:"Mini",            type:"Pod · 0.3g",                     category:"Pods",        price:12.00,  msrp:22.00,                      hue:"cyan",  spec:"0.3g · pocket size · 280mAh"},
];

const PRODUCT_CATEGORIES = ["All", "Disposables", "Carts", "AIO", "Pods"];

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

const FAQ = [
  {q:"What is the MOQ?",                     a:"1,000 units per SKU is the floor. Most clients run 1k for sample / first launch, then scale to 5k–25k per restock. We can quote up to 50k per batch."},
  {q:"Do you white-label?",                  a:"Yes. Every program is white-label by default. Hardware, packaging, and shipping go out under your name. We never co-brand without explicit permission."},
  {q:"What's the turnaround on a first run?",a:"4–6 weeks from approved spec sheet to delivered units. 7–10 days for a sample. Restocks run 2–3 weeks."},
  {q:"Can I supply my own hardware?",        a:"Yes. We accept client-supplied hardware after a quick QA. There's a flat handling fee for receiving and inspecting client stock."},
  {q:"Do you do CBD-only?",                  a:"Yes. We run CBD, CBG, CBN, hemp-derived Δ8 / Δ9, and full-spectrum oils. Compliance is checked per your destination market."},
  {q:"What's reseller approval?",            a:"Smoke shops, dispensaries, and white-label operators can apply for a reseller account. Approval takes 1–3 business days. Once approved you see wholesale pricing across the catalog."},
  {q:"Where do you ship?",                   a:"All 50 US states for compliant SKUs. International by request — we'll quote freight + paperwork."},
  {q:"Do you have minimums on flavor?",      a:"For custom terpene blends, 1g of finished product per profile is the smallest test batch. Production blends start at 50g."},
];

const SOCIAL_PROOF = [
  {brand:"BLOOM CO",   quote:"Smoke Show stood up our line in six weeks. Hardware, oil, packaging — all under our label.", role:"FOUNDER"},
  {brand:"OFF/HOURS",  quote:"Their snowcap program is the reason we're in 200+ shops in California.", role:"VP OPERATIONS"},
  {brand:"NIGHT SHOP", quote:"Spec sheet in 48 hours. Sample in a week. Production in five.", role:"CEO"},
];

const TEAM = [
  {name:"M. Reyes",    role:"Founder · Floor Lead",    yrs:"14 yrs hemp-derived",    init:"MR"},
  {name:"D. Park",     role:"Head of Filling",         yrs:"9 yrs co-pack",          init:"DP"},
  {name:"A. Vega",     role:"Terpene Formulation",     yrs:"7 yrs flavor R&D",       init:"AV"},
  {name:"S. Okafor",   role:"Account · Wholesale",     yrs:"6 yrs B2B sales",        init:"SO"},
];

Object.assign(window, { PRODUCTS, PRODUCT_CATEGORIES, SERVICES, PROCESS, FAQ, SOCIAL_PROOF, TEAM });
