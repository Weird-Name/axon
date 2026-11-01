// ============================================================================
// AXON PETRO ENGINEERING PVT. LTD. (axonpetro.in)
// Complete Enterprise Dataset:
// - 30 Engineered Products with Full Spec Tables & Printable Brochures (Module 03)
// - 9 Real Executed EPC Case Studies from PDF 1 with 32 Real Photos
// - 26 Welding Procedure Specifications (AWS D1.1 2006 & ASME IX.2010) from PDF 1
// - Thermax R&D Model: 4 Innovation Pillars, 5-Stage Lab-to-Market, Project Cards
// - Elinta Services Model: 4 End-to-End Engineering, Prototyping & Testing Stages
// - Corporate: Leadership, News & Media, Facilities, HSE & Policy Downloads
// ============================================================================

const DEFAULT_AXON_DATA = {
  company: {
    name: "Axon Petro Engineering Pvt. Ltd.",
    shortName: "Axonpetro",
    domain: "axonpetro.in",
    tagline: "Engineered to perform.",
    jvPartner: "Greengold Energy (JV)",
    established: "2002",
    phone: "+91 98450 12345",
    whatsapp: "919845012345",
    email: "projects@axonpetro.in",
    rfqEmail: "rfq@axonpetro.in",
    headquarters: "Industrial Estate, Peenya / Electronic City Phase II, Bengaluru, Karnataka, India",
    regionalHubs: "Pasir Gudang (Johor, Malaysia) • Kuala Langsat (Selangor, Malaysia) • Jurong Island (Singapore)",
    stats: [
      { value: "30+", label: "Engineered Equipment Lines", detail: "Reactors, Skids, Heat Exchangers, Silos, Columns & Custom Fabrication" },
      { value: "5,300+ MT", label: "Structural & Process Steel Erected", detail: "Single-site steel erection up to 3,000 MT with zero LTI" },
      { value: "26", label: "Qualified WPS Procedures", detail: "Certified under ASME IX.2010 & AWS D1.1 2006 for CS, SS & Exotic Alloys" },
      { value: "100%", label: "On-Schedule Turnkey Delivery", detail: "Trusted by Petronas, Emery Oleochemicals, Lanxess & Yokogawa" }
    ]
  },

  // Slide 2 of Proposal: "How industrial buyers pick a supplier"
  buyerPillars: [
    {
      id: "capability",
      title: "Capability",
      question: "Can you make exactly what I need, in the grade and size I need?",
      answer: "From 1.5 mm orbital-welded Hastelloy C276 & Monel 400 instrumentation lines to 100 mm heavy-wall carbon steel vessels and 3,000 MT structural frameworks, we fabricate 30+ equipment types to your exact ASME, API, and TEMA specifications.",
      linkText: "Explore All 30 Equipment Types & Spec Sheets",
      linkTarget: "products",
      badge: "CS • SS 304/316L/317L • Super Duplex • Hastelloy • Monel",
      icon: "cog"
    },
    {
      id: "scale",
      title: "Scale",
      question: "Do you have the plant and machinery to deliver on time?",
      answer: "Our heavy fabrication bays feature CNC 4-roll plate bending, high-tonnage EOT cranes, dedicated stainless/exotic alloy clean bays, hydrotesting pits, and multi-disciplinary site EPC teams capable of executing turnkey chemical plants.",
      linkText: "Tour Our Infrastructure & Shop Floor",
      linkTarget: "infra-hse",
      badge: "Heavy Fabrication Bays & Turnkey Site Teams",
      icon: "factory"
    },
    {
      id: "compliance",
      title: "Compliance",
      question: "Are your HSE and quality systems documented and certified?",
      answer: "Every weld is traceable to our 26 pre-qualified AWS D1.1 (2006) and ASME Section IX (2010) Welding Procedure Specifications (DESB-WPS-001 to 026), backed by 100% Radiography, PMI, hydro-testing, and strict HSE protocols.",
      linkText: "Inspect All 26 ASME IX & AWS D1.1 WPS Tables",
      linkTarget: "wps-registry.html",
      badge: "ASME IX.2010 • AWS D1.1 • ISO 9001 & 45001",
      icon: "shield"
    },
    {
      id: "commitment",
      title: "Commitment",
      question: "Are you investing in R&D and the next generation of products?",
      answer: "Through our Research, Technology & Innovation Centre (RTIC) and Greengold Energy (JV), we pioneer Flare Gas Recovery Units (FGRU), modular process intensification skids, carbon capture piping, and green-hydrogen ready metallurgy.",
      linkText: "Discover Our R&D Innovation Pillars",
      linkTarget: "rnd",
      badge: "RTIC Lab-to-Market & Greengold Energy JV",
      icon: "flask"
    }
  ],

  // Module 03: Full 30-Product Catalog (Dhiraj Engineers + Axon Petro EPC Equipment Range)
  products: [
    {
      id: "ss-chemical-reactors",
      code: "AXN-EQ-001",
      name: "Limpet Coil & Jacketed Chemical Reactors",
      category: "Reactors & Pressure Vessels",
      shortDesc: "Custom-engineered half-pipe limpet coil, dimple jacketed, and internal helical coil reactors for sulphonation, resin synthesis, and oleochemical processing.",
      image: "assets/images/project-reactor-crayvalley.jpg",
      gallery: ["assets/images/project-reactor-crayvalley.jpg", "assets/images/project-vessels-crayvalley.jpg", "assets/images/project-polymer-agitator.jpg"],
      featured: true,
      badge: "ASME Sec VIII Div. 1",
      materials: ["SS 304 / 304L", "SS 316 / 316L", "SA 516 Gr. 70", "UNS S32760 (Super Duplex)", "UNS N10276 (Hastelloy C276)"],
      industries: ["Oleochemicals & Surfactants", "Synthetic Resins & Polymers", "Specialty Chemicals", "Pharmaceuticals & API"],
      overview: "Engineered for exothermic and endothermic chemical reactions under vacuum or high pressure. Built with precision-polished internal surfaces, dynamically balanced agitator drives, double mechanical seals, and automated nozzle manifolds.",
      specs: [
        { param: "Capacity Range", value: "500 Liters to 65,000 Liters (0.5 KL – 65 KL)" },
        { param: "Design Code", value: "ASME Section VIII Div. 1 & Div. 2 / EN 13445" },
        { param: "Design Pressure", value: "Full Vacuum (-1.0 bar) up to 45 bar(g)" },
        { param: "Design Temperature", value: "-40°C to +350°C" },
        { param: "Heating / Cooling Jacket", value: "Half-Pipe Limpet Coil / Dimple Jacket / Conventional Jacket" },
        { param: "Qualified WPS Used", value: "DESB-WPS-006, WPS-008, WPS-024 (GTAW / SMAW / FCAW)" },
        { param: "Surface Finish", value: "Internal Ra ≤ 0.4 µm (Electropolished / Mirror) or Pickled & Passivated" }
      ]
    },
    {
      id: "custody-metering-skids",
      code: "AXN-EQ-002",
      name: "Custody Transfer & Fiscal Flow Metering Skids",
      category: "Modular Process Skids",
      shortDesc: "Turnkey pre-assembled, hydro-tested fiscal flow metering, proving, and custody transfer skid packages for oil, gas, and petrochemical terminals.",
      image: "assets/images/project-metering-skid-main.jpg",
      gallery: ["assets/images/project-metering-skid-main.jpg", "assets/images/project-metering-skid-valves.jpg", "assets/images/project-metering-skid-hydrotest.jpg", "assets/images/project-metering-skid-spools.jpg"],
      featured: true,
      badge: "API MPMS / ASME B31.3",
      materials: ["ASTM A106 Gr. B", "SA 312 TP 316L", "Duplex UNS S31803", "Super Duplex UNS S32760", "S355JR Structural Base"],
      industries: ["Upstream & Midstream Oil & Gas", "Refineries & Petrochemicals", "Pipeline Custody Transfer", "LNG & Gas Processing"],
      overview: "Delivered as plug-and-play modular units complete with Coriolis/ultrasonic flow meters, motor-operated valves (MOV), basket strainers, flow conditioning headers, E&I junction boxes, and structural drip-pan bases. Proven in international oil & gas terminal installations.",
      specs: [
        { param: "Line Size Range", value: "2\" NB to 24\" NB (DN50 to DN600)" },
        { param: "Pressure Rating", value: "ASME Class 150#, 300#, 600#, 900#, 1500#" },
        { param: "Piping Design Code", value: "ASME B31.3 / ASME B31.4 / ASME B31.8" },
        { param: "Structural Skid Code", value: "AWS D1.1 2006 (DESB-WPS-025 & WPS-026) — S355JR Heavy I-Beam" },
        { param: "Metering Technologies", value: "Coriolis Mass Flow, Ultrasonic Multi-Path, Positive Displacement, Orifice" },
        { param: "NDT & Hydrotest", value: "100% Radiography (RT) on Butt Welds + 1.5x Design Pressure Hydrotest" }
      ]
    },
    {
      id: "vertical-storage-silos-tanks",
      code: "AXN-EQ-003",
      name: "Vertical Storage Silos & Process Tank Farms",
      category: "Storage Vessels & Silos",
      shortDesc: "High-capacity stainless steel and carbon steel vertical silos, conical-bottom enzymatic vessels, and insulated storage tank farms.",
      image: "assets/images/project-ioi-silos-main.jpg",
      gallery: ["assets/images/project-ioi-silos-main.jpg", "assets/images/project-ioi-conical-vessel.jpg", "assets/images/project-polymer-tankfarm.jpg", "assets/images/project-turnkey-crane-vessel.jpg"],
      featured: true,
      badge: "API 650 / API 620",
      materials: ["SS 304 / 316L", "SA 516 Gr. 70", "IS 2062 / S355JR", "Aluminum / Rockwool Cladding"],
      industries: ["Edible Oils & Lipid Processing", "Oleochemicals", "Latex & Polymer Emulsions", "Dairy, Food & Distilleries"],
      overview: "Shop-fabricated and site-erected vertical silos and atmospheric/low-pressure storage tanks. Available with conical, dished, or flat sloped bottoms, internal heating coils, nitrogen blanketing systems, load-cell mounting lugs, and Rockwool thermal insulation.",
      specs: [
        { param: "Storage Capacity", value: "10 m³ to 2,500 m³ (Shop & Site Erected)" },
        { param: "Design Standard", value: "API 650, API 620, ASME Sec VIII, IS 803" },
        { param: "Shell Thickness", value: "3.0 mm to 48.2 mm (Qualified under DESB-WPS-021 & WPS-022)" },
        { param: "Bottom Geometry", value: "60° / 45° Conical Hopper, Torispherical Dished, or Flat Bottom" },
        { param: "Thermal Insulation", value: "50 mm – 150 mm High-Density Rockwool / PUF with SS 304 Cladding" }
      ]
    },
    {
      id: "custom-steel-ducting-stacks",
      code: "AXN-EQ-004",
      name: "Large-Bore Industrial Ducting, Flues & Chimneys",
      category: "Custom Steel Fabrication",
      shortDesc: "Precision-rolled heavy-gauge stainless and alloy steel process ducting, mitre bends, venturi scrubbers, and self-supporting stacks.",
      image: "assets/images/project-ducting-lanxess-long.jpg",
      gallery: ["assets/images/project-ducting-lanxess-long.jpg", "assets/images/project-ducting-lanxess-shop.jpg", "assets/images/project-ducting-lanxess-welding.jpg", "assets/images/project-ducting-lanxess-rolling.jpg"],
      featured: true,
      badge: "Custom CAD/CAM Rolled",
      materials: ["SS 316L / 317L", "SA 516 Gr. 70", "S355JR / Corten Steel", "Hastelloy C276 Cladded"],
      industries: ["Butyl Rubber & Elastomers", "Petrochemical Off-Gas & FGRU", "Power & Boilers", "Cement & Metallurgical Plants"],
      overview: "Engineered for high-temperature, corrosive flue gas and process air handling. Fabricated using CNC 4-roll plate bending, automated longitudinal/circumferential seam welding, heavy angle-ring stiffeners, and expansion bellows. Proven at Lanxess Butyl Pte Ltd on Jurong Island, Singapore.",
      specs: [
        { param: "Diameter Range", value: "600 mm to 4,200 mm OD" },
        { param: "Wall Thickness", value: "3.0 mm to 25.0 mm" },
        { param: "Flange Connections", value: "Machined Ring Flanges with EPDM / PTFE / Metallic Spiral Gaskets" },
        { param: "Welding Qualification", value: "AWS D1.1 (DESB-WPS-001 to 005) & ASME IX (DESB-WPS-016 / 024)" },
        { param: "Dimensional Tolerance", value: "Laser-Checked Roundness & Flange Flatness within ±1.5 mm" }
      ]
    },
    {
      id: "shell-tube-heat-exchangers",
      code: "AXN-EQ-005",
      name: "Shell & Tube Heat Exchangers & Condensers",
      category: "Heat Transfer Equipment",
      shortDesc: "TEMA Class R, C, and B shell-and-tube heat exchangers, overhead condensers, thermosyphon reboilers, and waste heat recovery units.",
      image: "assets/images/project-vessels-crayvalley.jpg",
      gallery: ["assets/images/project-vessels-crayvalley.jpg", "assets/images/project-piping-manifold-ss304.jpg"],
      featured: true,
      badge: "TEMA Class R / C / B",
      materials: ["SA 106 Gr.B / SA 516 Gr.70", "SA 312 / SA 213 TP 304L / 316L / 317L", "Monel 400 (UNS N0400)", "Hastelloy C276 (UNS N10276)", "Super Duplex UNS S32760"],
      industries: ["Refineries & Petrochemicals", "Chemical & Solvent Recovery", "Power & Cogeneration", "Marine & Offshore"],
      overview: "Thermal and mechanical design optimized for fouling resistance, low pressure drop, and high heat transfer coefficients. We fabricate fixed tube-sheet (BEM, AEL), U-tube (BEU), and floating head (AES) configurations with CNC-drilled tube sheets.",
      specs: [
        { param: "Heat Transfer Area", value: "5 m² to 1,200 m² per unit" },
        { param: "Design Standards", value: "TEMA (R, C, B) + ASME Section VIII Div. 1" },
        { param: "Exotic Alloy WPS", value: "Monel N0400 (WPS-014), Hastelloy N10276 (WPS-015), 317L (WPS-016)" },
        { param: "Tube-to-Tubesheet Joint", value: "Torque-Controlled Expansion + Orbital GTAW Seal/Strength Weld" },
        { param: "Test Pressure", value: "Shell & Tube Side Independent Hydrostatic & Helium Leak Testing" }
      ]
    },
    {
      id: "process-piping-spools-manifolds",
      code: "AXN-EQ-006",
      name: "Prefabricated Process Piping Spools & Manifolds",
      category: "Industrial & Process Piping",
      shortDesc: "Shop-prefabricated high-pressure piping spools, jacketed piping, and multi-valve distribution manifolds in CS, SS, Duplex, and Nickel Alloys.",
      image: "assets/images/project-piping-manifold-ss304.jpg",
      gallery: ["assets/images/project-piping-manifold-ss304.jpg", "assets/images/project-petronas-shop-1.jpg", "assets/images/project-polymer-piperack.jpg", "assets/images/project-petronas-shop-2.jpg"],
      featured: true,
      badge: "ASME B31.3 / IX.2010",
      materials: ["CS A106 Gr.B", "SS 304 / 304L / 316L / 317L", "Super Duplex UNS S32760", "Monel UNS N0400", "Hastelloy C276 UNS N10276"],
      industries: ["Oil & Gas (Petronas GPPA/GPPB)", "Sulphonation & Oleochemicals", "Specialty Polymers", "Cryogenic & High-Temp Utilities"],
      overview: "High-output spool prefabrication with complete heat-number traceability, isometric spool tagging, root-pass GTAW purging, and FCAW/SMAW fill passes. Ready for rapid site erection on multi-tier pipe racks.",
      specs: [
        { param: "Pipe Schedules", value: "Sch 10S, Sch 40S, Sch 80S, Sch 160, XXS (1.5 mm to 76.0 mm wall)" },
        { param: "Qualified WPS Coverage", value: "All 26 Procedures (DESB-WPS-001 through DESB-WPS-026)" },
        { param: "Dissimilar Metal Welds", value: "CS A106 Gr.B to SS 316L (WPS-012 & WPS-018) / 317L to C276 (WPS-017)" },
        { param: "Quality Assurance", value: "100% Visual, PMI, Radiography (RT), Ultrasonic (UT) & Hydrotest" }
      ]
    },
    {
      id: "heavy-structural-steel-piperacks",
      code: "AXN-EQ-007",
      name: "Heavy Structural Steel & Multi-Tier Pipe Racks",
      category: "Structural Steel Work",
      shortDesc: "Fabrication and turnkey erection of heavy industrial plant structures, multi-story process buildings, and pipe rack corridors up to 3,000+ MT.",
      image: "assets/images/project-steel-zamil-2.jpg",
      gallery: ["assets/images/project-steel-zamil-2.jpg", "assets/images/project-steel-zamil-1.jpg", "assets/images/project-steel-ioi-2.jpg", "assets/images/project-turnkey-erection.jpg"],
      featured: false,
      badge: "AWS D1.1 2006",
      materials: ["S355JR / S275JR", "ASTM A36 / A572 Gr. 50", "IS 2062 E250 / E350", "Hot-Dip Galvanized Grating & Handrails"],
      industries: ["Stainless Steel Mills", "Petrochemical Complexes", "Refinery Pipe Corridors", "Industrial Warehouses & Plants"],
      overview: "End-to-end structural steel detailing (Tekla), CNC drilling/coping, submerged-arc and flux-cored welding, grit-blasting, intumescent fireproofing/epoxy painting, and high-altitude crane erection.",
      specs: [
        { param: "Project Tonnage Capacity", value: "500 MT to 3,500+ MT per contract" },
        { param: "Welding Code", value: "AWS D1.1 2006 (DESB-WPS-001 to 005, WPS-025, WPS-026)" },
        { param: "Material Thickness", value: "1.5 mm to 100.0 mm S355JR & Grade 43A Structural Sections" },
        { param: "Connection Types", value: "Huck-Bolted / HSFG Friction Grip Bolted & Full-Penetration Site Welded" }
      ]
    },
    {
      id: "industrial-agitators-mixers",
      code: "AXN-EQ-008",
      name: "Top & Bottom Entry Industrial Agitators",
      category: "Mixing & Blending Equipment",
      shortDesc: "High-torque top-entry, bottom-entry, and side-entry industrial agitators and homogenizers for high-viscosity chemical and polymer media.",
      image: "assets/images/project-polymer-agitator.jpg",
      gallery: ["assets/images/project-polymer-agitator.jpg", "assets/images/project-reactor-crayvalley.jpg"],
      featured: false,
      badge: "CFD Optimized Impellers",
      materials: ["SS 316L / 317L", "Duplex 2205 / Super Duplex 2507", "Hastelloy C276 Wetted Parts", "PTFE / Rubber Lined Shafts"],
      industries: ["Latex & Polymer Emulsions", "Resins & Adhesives", "Pharmaceutical & Herbal Extraction", "Food, Dairy & Confectionery"],
      overview: "Custom-engineered mixing systems designed for gas dispersion, solid suspension, heat transfer enhancement, and high-viscosity blending. Supplied with helical bevel gearboxes and double mechanical seals.",
      specs: [
        { param: "Drive Power Rating", value: "0.75 kW to 250 kW (Flameproof Ex-d / VFD Compatible)" },
        { param: "Shaft Length", value: "Up to 9,500 mm with Intermediate Steady Bearings" },
        { param: "Seal Arrangement", value: "Single / Double Cartridge Mechanical Seal (API Plan 52 / 53B)" },
        { param: "Impeller Types", value: "Hydrofoil, Pitched Blade Turbine, Helical Ribbon, Anchor, Rushton" }
      ]
    },
    {
      id: "evaporators-distillation-columns",
      code: "AXN-EQ-009",
      name: "Falling Film Evaporators & Distillation Columns",
      category: "Mass Transfer & Separation",
      shortDesc: "Multi-effect falling film/forced circulation evaporators, packed/tray distillation towers, and solvent recovery columns.",
      image: "assets/images/project-ioi-column-lift.jpg",
      gallery: ["assets/images/project-ioi-column-lift.jpg", "assets/images/project-ioi-silos-main.jpg"],
      featured: false,
      badge: "ASME Sec VIII Towers",
      materials: ["SS 304L / 316L / 317L", "Duplex Stainless Steel", "Titanium / Nickel Alloy Tubes"],
      industries: ["Oleochemicals & Fatty Acid Fractionation", "Distilleries & Bio-Ethanol", "Zero Liquid Discharge (ZLD)", "Pharmaceutical Solvent Recovery"],
      overview: "Complete mass-transfer columns engineered with structured/random packings, sieve/valve/bubble-cap trays, liquid redistributors, and TVR/MVR energy recovery.",
      specs: [
        { param: "Column Diameter", value: "450 mm to 3,800 mm ID" },
        { param: "Column Height", value: "Up to 45 Meters (Single-Piece or Field-Welded Sections)" },
        { param: "Internals", value: "Structured Mellapak, Pall Rings, Sieve Trays, Bubble-Cap Trays, Demisters" },
        { param: "Operating Vacuum", value: "Down to 2 mbar(a) for Heat-Sensitive Fatty Acids & Esters" }
      ]
    },
    {
      id: "fgru-modular-packages",
      code: "AXN-EQ-010",
      name: "Flare Gas Recovery Unit (FGRU) Modular Packages",
      category: "Clean Energy & Emission Skids",
      shortDesc: "Engineered FGRU compressor skids, liquid ring scrubbers, knockout drums, and high-integrity piping for zero-routine-flaring initiatives.",
      image: "assets/images/project-petronas-fgru-site.jpg",
      gallery: ["assets/images/project-petronas-fgru-site.jpg", "assets/images/project-petronas-shop-1.jpg", "assets/images/project-petronas-signboard.jpg"],
      featured: false,
      badge: "Petronas GPPA/GPPB Proven",
      materials: ["NACE MR0175 Sour Service CS", "SA 106 Gr.B", "SS 316L", "Super Duplex UNS S32760"],
      industries: ["Gas Processing Plants (GPPA / GPPB)", "Refineries", "Petrochemical Complexes", "Decarbonisation & Clean Tech"],
      overview: "Proven on Petronas GPPA & GPPB Paka, Terengganu (with Synerlitz Malaysia & Greengold Energy JV). Captures waste flare header gases, scrubs H2S/condensibles, and recompresses recovered gas back into the fuel gas header.",
      specs: [
        { param: "Sour Service Compliance", value: "NACE MR0175 / ISO 15156 Hardness Controlled Welds (< 22 HRC)" },
        { param: "Scope of Supply", value: "Structural Steel Module, Knockout Vessels, Process Piping & Tie-Ins" },
        { param: "WPS Qualification", value: "ASME IX.2010 (DESB-WPS-009, WPS-011, WPS-020) & AWS D1.1" }
      ]
    },
    {
      id: "autoclaves-quick-opening",
      code: "AXN-EQ-011",
      name: "Quick-Opening Bayonet Door Industrial Autoclaves",
      category: "Reactors & Pressure Vessels",
      shortDesc: "Horizontal and vertical pressure curing autoclaves with hydraulic quick-opening bayonet doors and PLC safety interlocks.",
      image: "assets/images/project-turnkey-crane-vessel.jpg",
      gallery: ["assets/images/project-turnkey-crane-vessel.jpg", "assets/images/project-reactor-crayvalley.jpg"],
      featured: false,
      badge: "ASME Sec VIII Div. 1",
      materials: ["SA 516 Gr. 70", "SS 304 / 316L", "IS 2062 Gr. B"],
      industries: ["Rubber Vulcanization & Hose Curing", "Aerospace Composites", "AAC Blocks & Building Materials", "Pharmaceutical Sterilization"],
      overview: "Built with heavy-duty forged bayonet locking rings, zero-pressure safety mechanical/PLC interlocks, internal rail tracks, and forced hot-air or steam circulation fans.",
      specs: [
        { param: "Internal Diameter", value: "900 mm to 3,200 mm ID" },
        { param: "Shell Length", value: "2,000 mm to 18,000 mm" },
        { param: "Working Pressure", value: "Up to 25 bar(g) at 240°C" },
        { param: "Door Mechanism", value: "Hydraulic Tooth-Lock Bayonet with Dual Pressure Interlock" }
      ]
    },
    {
      id: "cyclone-dust-separators",
      code: "AXN-EQ-012",
      name: "High-Efficiency Cyclone Separators & Multi-Clones",
      category: "Mass Transfer & Separation",
      shortDesc: "Aerodynamically profiled tangential-inlet cyclone separators and rotary airlock hoppers for catalyst, powder, and flue-gas particulate recovery.",
      image: "assets/images/project-ioi-conical-vessel.jpg",
      gallery: ["assets/images/project-ioi-conical-vessel.jpg", "assets/images/project-ducting-lanxess-rolling.jpg"],
      featured: false,
      badge: "98.5% Particulate Capture",
      materials: ["SS 304 / 316L", "SA 516 Gr. 70", "Hardox 450 Abrasion-Resistant Liner"],
      industries: ["Spray Drying & Dairy Powder", "Boiler Flue Gas De-Dusting", "Catalyst Recovery", "Cement & Minerals"],
      overview: "Engineered with precision cone geometry and smooth ground internal welds to eliminate powder hang-up and maximize centrifugal separation efficiency.",
      specs: [
        { param: "Airflow Capacity", value: "1,000 CMH to 120,000 CMH" },
        { param: "Cut-Point Efficiency", value: "98.5% for particles ≥ 10 µm" },
        { param: "Wear Protection", value: "Replaceable Ceramic Tile or Hardox Liner Plates" },
        { param: "Discharge Valve", value: "Motorized Rotary Airlock Valve (RAV) or Double Flap Valve" }
      ]
    },
    {
      id: "sulphonation-film-reactors",
      code: "AXN-EQ-013",
      name: "Multi-Tube Falling Film Sulphonation Reactors",
      category: "Reactors & Pressure Vessels",
      shortDesc: "Precision-toleranced multi-tube falling film sulphonation and sulfation reactors for LABSA, SLES, and methyl ester sulphonate (MES) plants.",
      image: "assets/images/project-turnkey-emery-main.jpg",
      gallery: ["assets/images/project-turnkey-emery-main.jpg", "assets/images/project-vessels-crayvalley.jpg"],
      featured: false,
      badge: "Oleochemical Flagship",
      materials: ["SS 316L / 317L", "904L Stainless Steel", "Alloy 20 / Hastelloy C276"],
      industries: ["Surfactants & Detergents", "Oleochemicals (Emery / IOI)", "Personal Care Feedstocks"],
      overview: "Proven in turnkey sulphonation plant expansions (such as Emery Oleochemicals in Selangor). Ensures uniform organic liquid film distribution and rapid SO3 reaction heat removal.",
      specs: [
        { param: "Production Capacity", value: "1.5 MT/hr to 8.0 MT/hr Active Matter" },
        { param: "Tube Straightness", value: "Honed Internal Tubes ≤ 0.5 mm/m Deviation" },
        { param: "Welding Standard", value: "ASME IX GTAW (DESB-WPS-016 for SS 317L / WPS-006 for 316L)" }
      ]
    },
    {
      id: "asme-air-gas-receivers",
      code: "AXN-EQ-014",
      name: "ASME Section VIII Compressed Air & Nitrogen Receivers",
      category: "Reactors & Pressure Vessels",
      shortDesc: "Vertical and horizontal high-pressure air, nitrogen, and instrument gas buffer vessels with full radiography and hydrotest certification.",
      image: "assets/images/project-metering-skid-hydrotest.jpg",
      gallery: ["assets/images/project-metering-skid-hydrotest.jpg", "assets/images/project-turnkey-crane-vessel.jpg"],
      featured: false,
      badge: "ASME Sec VIII Div. 1",
      materials: ["SA 516 Gr. 70", "SA 240 TP 304 / 316L"],
      industries: ["Plant Utilities & Instrument Air", "Nitrogen Blanketing", "PSA Oxygen/Nitrogen Generation"],
      overview: "Manufactured from normalized boiler-quality SA 516 Gr. 70 plates with torispherical or 2:1 ellipsoidal dished heads, automatic drain traps, and ASME relief valves.",
      specs: [
        { param: "Volume Range", value: "0.5 m³ to 100 m³" },
        { param: "Pressure Rating", value: "7 bar(g) to 65 bar(g)" },
        { param: "Shell Thickness", value: "5.0 mm to 76.0 mm (Qualified under DESB-WPS-021, 022, 023)" }
      ]
    },
    {
      id: "knockout-drums-flare-scrubbers",
      code: "AXN-EQ-015",
      name: "Flare Knockout (KO) Drums & Gas-Liquid Separators",
      category: "Clean Energy & Emission Skids",
      shortDesc: "Two-phase and three-phase horizontal/vertical knockout drums with internal vane packs and wire-mesh demister pads.",
      image: "assets/images/project-petronas-shop-1.jpg",
      gallery: ["assets/images/project-petronas-shop-1.jpg", "assets/images/project-petronas-fgru-site.jpg"],
      featured: false,
      badge: "API 12J / ASME VIII",
      materials: ["SA 516 Gr. 70 (NACE MR0175)", "SS 316L Internals", "Super Duplex Cladded"],
      industries: ["Oil & Gas Processing", "Flare Gas Recovery (FGRU)", "Refinery Blowdown Systems"],
      overview: "Separates entrained hydrocarbon droplets and sour condensates from gas streams prior to flare stacks or FGRU compressors.",
      specs: [
        { param: "Vessel Diameter", value: "800 mm to 3,600 mm OD" },
        { param: "Mist Elimination", value: "99.9% Removal ≥ 8 microns via SS 316L / Monel Mesh Pad" },
        { param: "PWHT & NDT", value: "100% Radiography + Post-Weld Heat Treatment (PWHT) for Sour Service" }
      ]
    },
    {
      id: "horizontal-insulated-blending-tanks",
      code: "AXN-EQ-016",
      name: "Horizontal Insulated Storage & Molasses/Resin Tanks",
      category: "Storage Vessels & Silos",
      shortDesc: "Saddle-mounted horizontal cylindrical storage and blending tanks with internal steam heating coils and insulated SS cladding.",
      image: "assets/images/project-turnkey-crane-vessel.jpg",
      gallery: ["assets/images/project-turnkey-crane-vessel.jpg", "assets/images/project-polymer-tankfarm.jpg"],
      featured: false,
      badge: "BS 2594 / ASME VIII",
      materials: ["SS 304 / 316L", "SA 516 Gr. 70", "IS 2062 Mild Steel with Epoxy Lining"],
      industries: ["Distilleries & Molasses Storage", "Resins, Solvents & Plasticizers", "Bitumen & Heavy Fuel Oil", "Edible Oils"],
      overview: "Engineered to heavy industrial storage standards, these horizontal saddle-mounted tanks include internal steam/thermic-fluid coils to maintain low viscosity for heavy media.",
      specs: [
        { param: "Capacity Range", value: "5 KL to 200 KL" },
        { param: "Support Type", value: "Twin / Multi-Saddle Supports per Zick Analysis" },
        { param: "Insulation", value: "100 mm Mineral Wool with 0.8 mm Corrugated Aluminum / SS 304 Sheet" }
      ]
    },
    {
      id: "sanitary-dairy-milk-silos",
      code: "AXN-EQ-017",
      name: "Sanitary Dairy Silos, Weigh Bowls & Road Milk Tankers",
      category: "Storage Vessels & Silos",
      shortDesc: "Food-grade 3A sanitary stainless steel milk storage silos, dump tanks, weigh bowls, and insulated PUF road milk tankers.",
      image: "assets/images/project-ioi-silos-main.jpg",
      gallery: ["assets/images/project-ioi-silos-main.jpg", "assets/images/project-vessels-crayvalley.jpg"],
      featured: false,
      badge: "3A Sanitary / Food Grade",
      materials: ["AISI 304 / 316L Mirror Polished", "PUF CFC-Free Insulation"],
      industries: ["Dairy & Milk Processing", "Beverages & Fruit Juices", "Liquid Sugar & Confectionery"],
      overview: "Crevice-free internal TIG welds ground flush and polished to Ra ≤ 0.4 µm, equipped with rotary CIP spray balls, sanitary manways, and dimple cooling jackets.",
      specs: [
        { param: "Silo Capacity", value: "10,000 Liters to 150,000 Liters (10 KL – 150 KL)" },
        { param: "Thermal Hold", value: "≤ 1°C Temperature Rise over 24 Hours (100 mm PUF)" },
        { param: "Welding Procedure", value: "ASME IX GTAW SA 312 TP 304L (DESB-WPS-019)" }
      ]
    },
    {
      id: "ribbon-blenders-paddle-mixers",
      code: "AXN-EQ-018",
      name: "Double Helical Ribbon Blenders & Twin-Shaft Paddle Mixers",
      category: "Mixing & Blending Equipment",
      shortDesc: "U-trough horizontal ribbon blenders and high-homogeneity paddle mixers for dry powders, granules, spices, and detergent formulations.",
      image: "assets/images/project-polymer-agitator.jpg",
      gallery: ["assets/images/project-polymer-agitator.jpg"],
      featured: false,
      badge: "CV ≤ 3% Mix Uniformity",
      materials: ["SS 304 / 316L Contact Parts", "MS Heavy Structural End-Frames"],
      industries: ["Pharmaceuticals & Nutraceuticals", "Confectionery & Food Powders", "Detergents & Agrochemicals"],
      overview: "Counter-current inner and outer helical ribbons produce triple-action axial and radial convective mixing with liquid spray atomization nozzles and pneumatic flush-bottom discharge.",
      specs: [
        { param: "Batch Volume", value: "100 Liters to 15,000 Liters" },
        { param: "Mixing Cycle Time", value: "5 to 12 Minutes per Batch" },
        { param: "Shaft Sealing", value: "Air-Purged PTFE Stuffing Box & Split Mechanical Seals" }
      ]
    },
    {
      id: "pharma-bioreactors-fermenters",
      code: "AXN-EQ-019",
      name: "Sterile Bioreactors & Microbial Fermenter Vessels",
      category: "Reactors & Pressure Vessels",
      shortDesc: "cGMP sterile jacketed fermenters with sparger rings, Rushton turbines, steam-in-place (SIP), and clean-in-place (CIP) automation.",
      image: "assets/images/project-reactor-crayvalley.jpg",
      gallery: ["assets/images/project-reactor-crayvalley.jpg", "assets/images/project-piping-manifold-ss304.jpg"],
      featured: false,
      badge: "ASME BPE / cGMP",
      materials: ["SS 316L Low-Ferrite (< 0.5%)", "Hastelloy C276"],
      industries: ["Biotechnology & Industrial Enzymes", "Biofuels & Microbial Foundries", "Pharmaceutical APIs"],
      overview: "Supports both our sterile pharmaceutical equipment line and our RTIC Bioprocessing pillar. Engineered with zero-dead-leg block valves and orbital-welded sterile piping.",
      specs: [
        { param: "Working Volume", value: "50 Liters (Pilot) to 30,000 Liters (Industrial)" },
        { param: "Height-to-Diameter Ratio", value: "2.5:1 to 3.5:1 Aspect Ratio" },
        { param: "Internal Finish", value: "Electropolished Ra ≤ 0.25 µm with Boroscope Inspection" }
      ]
    },
    {
      id: "herbal-solid-liquid-extractors",
      code: "AXN-EQ-020",
      name: "Herbal, Botanical & Phytochemical Extraction Plants",
      category: "Mass Transfer & Separation",
      shortDesc: "Percolation and Soxhlet-type solid-liquid extractors with pneumatic bottom spent-cake discharge doors and solvent recovery condensers.",
      image: "assets/images/project-ioi-conical-vessel.jpg",
      gallery: ["assets/images/project-ioi-conical-vessel.jpg", "assets/images/project-vessels-crayvalley.jpg"],
      featured: false,
      badge: "Turnkey Phyto-Extraction",
      materials: ["SS 304 / 316L", "Wedge-Wire False Bottom Screens"],
      industries: ["Herbal & Ayurvedic Extracts", "Essential Oils & Oleoresins", "Nutraceuticals & Coffee/Tea Instantization"],
      overview: "Complete extraction battery consisting of extractor vessel, tubular condenser, miscella receiver, falling-film concentrator, and vacuum dryer chamber.",
      specs: [
        { param: "Extractor Volume", value: "500 Liters to 12,000 Liters" },
        { param: "Bottom Discharge", value: "Hydraulic Locking Quick-Open Perforated False Bottom" },
        { param: "Solvent Recovery", value: "> 97% Closed-Loop Solvent Recovery Efficiency" }
      ]
    },
    {
      id: "rotary-vacuum-paddle-dryers",
      code: "AXN-EQ-021",
      name: "Rotary Vacuum Paddle Dryers (RVPD) & Dryer Chambers",
      category: "Heat Transfer Equipment",
      shortDesc: "Jacketed cylindrical vacuum dryers with hollow heated agitator shafts and scraper blades for wet cakes, slurries, and heat-sensitive APIs.",
      image: "assets/images/project-vessels-crayvalley.jpg",
      gallery: ["assets/images/project-vessels-crayvalley.jpg"],
      featured: false,
      badge: "Hollow Heated Shaft",
      materials: ["SS 316L / 317L", "Hastelloy C276", "SA 516 Gr. 70 Jacket"],
      industries: ["Specialty Chemicals", "Active Pharmaceutical Ingredients (API)", "Dyestuffs & Pigments"],
      overview: "Both the vessel shell jacket and the internal hollow shaft/paddles are heated with steam or hot water, doubling heat transfer area per unit volume under deep vacuum.",
      specs: [
        { param: "Gross Capacity", value: "200 Liters to 10,000 Liters" },
        { param: "Operating Vacuum", value: "Up to 5 Torr (mmHg) with Bag Filter Dust Catcher" },
        { param: "Final Moisture", value: "< 0.1% w/w Achievable" }
      ]
    },
    {
      id: "chemical-dosing-injection-skids",
      code: "AXN-EQ-022",
      name: "High-Pressure Chemical Dosing & Corrosion Inhibitor Skids",
      category: "Modular Process Skids",
      shortDesc: "API 675 plunger/diaphragm metering pump skids with SS/Hastelloy day tanks, calibration pots, pulsation dampeners, and PRVs.",
      image: "assets/images/project-metering-skid-valves.jpg",
      gallery: ["assets/images/project-metering-skid-valves.jpg", "assets/images/project-metering-skid-main.jpg"],
      featured: false,
      badge: "API 675 Compliant",
      materials: ["SS 316L", "Hastelloy C276 (UNS N10276)", "Monel 400 (UNS N0400)", "Super Duplex S32760"],
      industries: ["Offshore Platforms & FPSOs", "Refinery Desalters & Crude Units", "Boiler Water Treatment"],
      overview: "Compact modular chemical injection packages fabricated using orbital GTAW small-bore tubing and ASME IX qualified exotic alloy headers (DESB-WPS-013, 014, 015).",
      specs: [
        { param: "Injection Pressure", value: "Up to 450 bar(g)" },
        { param: "Flow Rate Range", value: "0.5 LPH to 2,500 LPH (Simplex / Duplex / Triplex Pumps)" },
        { param: "Wetted Metallurgy", value: "SS 316L, Super Duplex 2507, Hastelloy C276, or PVDF" }
      ]
    },
    {
      id: "exotic-alloy-piping-spools",
      code: "AXN-EQ-023",
      name: "Exotic Alloy Piping Spools (Hastelloy C276, Monel 400 & Super Duplex)",
      category: "Industrial & Process Piping",
      shortDesc: "Clean-bay fabricated high-corrosion piping spools in UNS N10276, UNS N0400, UNS S32760, and SS 317L with 100% XRF PMI & RT.",
      image: "assets/images/project-ducting-lanxess-welding.jpg",
      gallery: ["assets/images/project-ducting-lanxess-welding.jpg", "assets/images/project-piping-manifold-ss304.jpg"],
      featured: false,
      badge: "WPS-013 to WPS-017",
      materials: ["Hastelloy C276 (UNS N10276)", "Monel 400 (UNS N0400)", "Super Duplex (UNS S32760)", "SS 317L (A312 TP 317L)"],
      industries: ["Chlor-Alkali & Acid Plants", "Seawater Desalination & Offshore", "Sour Gas & Petrochemicals"],
      overview: "Directly backed by Axonpetro's ASME IX.2010 qualifications: DESB-WPS-013 (Super Duplex S32760 with ER2209), WPS-014 (Monel N0400 with ERNiCu-7), WPS-015 (Hastelloy N10276 with ERNiCrMo-4), WPS-016 (317L), and WPS-017 (Dissimilar 317L to Hastelloy C276).",
      specs: [
        { param: "Certified WPS Nos.", value: "DESB-WPS-013, WPS-014, WPS-015, WPS-016, WPS-017" },
        { param: "Purging Protocol", value: "99.999% High-Purity Argon Root Purge (< 20 ppm O2 Dewpoint)" },
        { param: "Quality Testing", value: "100% XRF PMI, Ferrite Scope Check, Dye Penetrant & Radiography" }
      ]
    },
    {
      id: "steam-jacketed-piping-manifolds",
      code: "AXN-EQ-024",
      name: "Jacketed Piping Spools & Steam Distribution Headers",
      category: "Industrial & Process Piping",
      shortDesc: "Core-and-jacket concentric piping spools for molten sulfur, bitumen, polymers, fatty acids, and high-pressure IBR/ASME steam headers.",
      image: "assets/images/project-polymer-piperack.jpg",
      gallery: ["assets/images/project-polymer-piperack.jpg", "assets/images/project-petronas-shop-2.jpg"],
      featured: false,
      badge: "ASME B31.1 / B31.3",
      materials: ["Core: SS 316L / SA 106 Gr.B", "Jacket: SA 106 Gr.B / SS 304"],
      industries: ["Molten Sulfur & Bitumen", "Polymer & Resin Plants (Cray Valley / Synthomer)", "Oleochemicals"],
      overview: "Prevents solidification of high-pour-point fluids during transport. Both inner core pipe and outer steam jacket undergo independent hydrostatic and helium leak testing.",
      specs: [
        { param: "Core Pipe Size", value: "1\" NB to 12\" NB (Jacket 2\" NB to 16\" NB)" },
        { param: "Spacer Design", value: "Non-Restrictive Spider Guides with Differential Thermal Expansion Loops" },
        { param: "Qualified WPS", value: "DESB-WPS-009, WPS-012 (CS to SS Dissimilar), WPS-018, WPS-020" }
      ]
    },
    {
      id: "venturi-wet-gas-scrubbers",
      code: "AXN-EQ-025",
      name: "Venturi Scrubbers & Packed Bed Acid Gas Absorbers",
      category: "Clean Energy & Emission Skids",
      shortDesc: "High-energy variable-throat venturi scrubbers and counter-current packed column absorbers for SO2, HCl, SO3, and sub-micron fume removal.",
      image: "assets/images/project-ducting-lanxess-shop.jpg",
      gallery: ["assets/images/project-ducting-lanxess-shop.jpg", "assets/images/project-ioi-column-lift.jpg"],
      featured: false,
      badge: "EPA / CPCB Emission Norm",
      materials: ["SS 316L / 317L", "Hastelloy C276 Throat", "FRP / PP-FRP Lined Steel"],
      industries: ["Sulphonation Tail-Gas Scrubbing", "Chemical & Acid Pickling Lines", "Flue Gas Desulfurization (FGD)"],
      overview: "Part of our RTIC Clean Air & Emission Control portfolio. Removes 99.5%+ of acid mists and particulate matter before stack discharge.",
      specs: [
        { param: "Gas Handling Capacity", value: "2,000 Nm³/hr to 180,000 Nm³/hr" },
        { param: "Acid Gas Removal", value: "> 99.5% for HCl, SO2, NH3 & HF" },
        { param: "Liquid Recirculation", value: " Skid-Mounted Chemical Pump, Heat Exchanger & pH Dosing Control" }
      ]
    },
    {
      id: "self-supporting-steel-chimneys",
      code: "AXN-EQ-026",
      name: "Self-Supporting & Guyed Industrial Steel Chimneys",
      category: "Custom Steel Fabrication",
      shortDesc: "Aerodynamically stable industrial boiler and furnace stacks up to 65 meters height with helical strakes, aviation lights, and sampling platforms.",
      image: "assets/images/project-ioi-plant-aerial.jpg",
      gallery: ["assets/images/project-ioi-plant-aerial.jpg", "assets/images/project-ducting-lanxess-long.jpg"],
      featured: false,
      badge: "IS 6533 / ASME STS-1",
      materials: ["SA 516 Gr. 70 / S355JR", "Corten Weathering Steel", "SS 316L Flue Liner"],
      industries: ["Thermic Fluid Heaters & Boilers", "Distilleries & Cogen Plants", "Petrochemical Fired Heaters"],
      overview: "Rolled and welded in transportable flanged sections with top-third helical vortex-shedding strakes, EPA emission monitoring ports, and refractory or rockwool lining.",
      specs: [
        { param: "Stack Height", value: "15 Meters to 65 Meters" },
        { param: "Wind Load Design", value: "Up to 55 m/s Wind Speed with Dynamic Vortex Shedding Analysis" },
        { param: "Welding Code", value: "AWS D1.1 2006 (DESB-WPS-001 to 005 & WPS-025/026)" }
      ]
    },
    {
      id: "heavy-crane-girders-gantries",
      code: "AXN-EQ-027",
      name: "Heavy EOT Crane Girders, Trusses & Equipment Platforms",
      category: "Structural Steel Work",
      shortDesc: "Fabricated box-girders, heavy industrial portal frames, crane runway beams, and vibration-isolated equipment mezzanines.",
      image: "assets/images/project-steel-zamil-1.jpg",
      gallery: ["assets/images/project-steel-zamil-1.jpg", "assets/images/project-steel-ioi-1.jpg"],
      featured: false,
      badge: "Up to 100mm Plate WPS",
      materials: ["S355JR / S355J2", "IS 2062 E350", "Grade 43A Structural Steel"],
      industries: ["Steel Rolling Mills (Bahru Stainless)", "Heavy Engineering Workshops", "Power Turbine Halls"],
      overview: "Fabricated with full-penetration submerged-arc and flux-cored welds qualified up to 100.0 mm plate thickness under DESB-WPS-025 and DESB-WPS-026.",
      specs: [
        { param: "Plate Thickness Qualified", value: "Up to 100.0 mm S355JR (DESB-WPS-025 & WPS-026)" },
        { param: "Camber Tolerance", value: "CNC Pre-Cambered Box & Plate Girders per EN 1090 / AWS D1.1" },
        { param: "Surface Protection", value: "Sa 2.5 Shot Blasting + Inorganic Zinc Silicate Primer" }
      ]
    },
    {
      id: "architectural-ss-cladding-railings",
      code: "AXN-EQ-028",
      name: "Architectural SS/Brass Hand Railings, Canopies & Column Cladding",
      category: "Custom Steel Fabrication",
      shortDesc: "Precision laser-cut and satin/mirror-finished stainless steel and brass architectural railings, false column cladding, and cleanroom walkovers.",
      image: "assets/images/project-turnkey-erection.jpg",
      gallery: ["assets/images/project-turnkey-erection.jpg", "assets/images/project-ducting-lanxess-rolling.jpg"],
      featured: false,
      badge: "Architectural SS / Brass",
      materials: ["SS 304 / 316 Satin & Mirror Finish", "Architectural Brass & Copper", "Toughened Glass Infill"],
      industries: ["Corporate Campuses & Banks", "Pharmaceutical Cleanrooms", "Industrial Plant Walkways & Ladders"],
      overview: "Specialty architectural stainless steel and brass fabrication alongside industrial plant access staircases, monkey ladders, and safety handrails.",
      specs: [
        { param: "Surface Finishes", value: "#4 Satin Hairline, #8 Mirror Polish, PVD Coated Brass/Gold, Bead Blasted" },
        { param: "Fabrication Method", value: "CNC Fiber Laser Cutting, CNC Press Brake Bending & Seamless TIG Welding" }
      ]
    },
    {
      id: "simplex-duplex-basket-strainers",
      code: "AXN-EQ-029",
      name: "Simplex, Duplex & Y-Type Pipeline Basket Strainers",
      category: "Modular Process Skids",
      shortDesc: "High-flow fabricated pipeline basket strainers, temporary cone strainers, and cartridge filter housings for pump and flow-meter protection.",
      image: "assets/images/project-metering-skid-spools.jpg",
      gallery: ["assets/images/project-metering-skid-spools.jpg", "assets/images/project-metering-skid-main.jpg"],
      featured: false,
      badge: "ASME VIII / B31.3",
      materials: ["CS SA 106 Gr.B / SA 516 Gr.70", "SS 304 / 316L", "Super Duplex UNS S32760"],
      industries: ["Custody Transfer Metering Skids", "Cooling Water Intakes", "Refinery & Petrochemical Loading Arms"],
      overview: "Essential upstream protection for Coriolis and ultrasonic custody-transfer flow meters. Supplied with quick-opening davit covers and differential pressure (DP) transmitters.",
      specs: [
        { param: "Connection Size", value: "2\" NB to 36\" NB (Flanged ASME B16.5 / B16.47)" },
        { param: "Filtration Rating", value: "25 microns to 5,000 microns (Perforated + Sintered Wire Mesh)" },
        { param: "Clean Pressure Drop", value: "< 0.1 bar at Rated Design Flow" }
      ]
    },
    {
      id: "screw-belt-material-conveyors",
      code: "AXN-EQ-030",
      name: "Stainless Steel Screw Conveyors & Sanitary Belt Conveyors",
      category: "Mixing & Blending Equipment",
      shortDesc: "U-trough and tubular flighted screw augers, bucket elevators, and food/pharma-grade belt conveyors for bulk solid transfer.",
      image: "assets/images/project-ducting-lanxess-long.jpg",
      gallery: ["assets/images/project-ducting-lanxess-long.jpg", "assets/images/project-ioi-conical-vessel.jpg"],
      featured: false,
      badge: "CEMA Standard",
      materials: ["SS 304 / 316L", "Hardox Flighting", "Food-Grade PU / Modular Plastic Belts"],
      industries: ["Pharmaceuticals & Confectionery", "Food & Dairy Powder Plants", "Chemical & Polymer Pellet Handling"],
      overview: "Engineered for dust-tight horizontal and inclined conveying of powders, filter cakes, and granules between hoppers, blenders, and packaging lines.",
      specs: [
        { param: "Screw Diameter", value: "150 mm to 600 mm OD (Up to 18m Single Span)" },
        { param: "Conveying Capacity", value: "1 MT/hr to 85 MT/hr" },
        { param: "Options", value: "Heating/Cooling Trough Jacket, Split Hinged Covers & Load-Cell Weighing" }
      ]
    }
  ],

  // All 9 Real Executed Case Studies from PDF 1
  projects: [
    {
      id: "turnkey-emery-oleochemicals",
      title: "Turnkey EPC: Sulphonation Plant Additional Facilities",
      category: "Turnkey Construction",
      client: "Desmet Ballestra S.p.A.",
      endUser: "Emery Oleochemicals (M) Sdn Bhd",
      pm: "Foster Wheeler E&C (M) Sdn Bhd",
      location: "Telok Panglima Garang, Kuala Langsat, Banting, Klang, Selangor, Malaysia",
      year: "2013 – Present",
      jv: "Axon Petro Engineering",
      clientLogo: "assets/images/clients/emery-oleochemicals.png",
      partnerLogo: "assets/images/clients/foster-wheeler.png",
      mainImage: "assets/images/project-turnkey-emery-main.jpg",
      gallery: [
        "assets/images/project-turnkey-emery-main.jpg",
        "assets/images/project-turnkey-cad-1.jpg",
        "assets/images/project-turnkey-crane-vessel.jpg",
        "assets/images/project-turnkey-erection.jpg",
        "assets/images/project-turnkey-cad-2.jpg"
      ],
      scope: "Engineering, Procurement, Construction and Commissioning (EPCC) of the Additional Facilities for the Sulphonation Plant.",
      highlights: [
        "3D CAD plant modeling & multi-tier structural steel rack engineering",
        "Heavy rigging & installation of sulphonation reactors, storage tanks, and columns",
        "Full stainless steel and carbon steel process & utility piping integration",
        "Managed under Foster Wheeler E&C and Desmet Ballestra S.p.A. international standards"
      ]
    },
    {
      id: "piping-cray-valley-resins",
      title: "Mechanical, Equipment & SS 304 Process Piping Work",
      category: "Mechanical & Process Piping",
      client: "Cray Valley Resins (M) Sdn Bhd",
      endUser: "Cray Valley Resins (TotalEnergies Group)",
      pm: "Greengold Energy (JV)",
      location: "Pasir Gudang, Johor, Malaysia",
      year: "2002",
      jv: "Greengold Energy (JV)",
      clientLogo: "assets/images/clients/cray-valley.png",
      mainImage: "assets/images/project-reactor-crayvalley.jpg",
      gallery: [
        "assets/images/project-reactor-crayvalley.jpg",
        "assets/images/project-vessels-crayvalley.jpg",
        "assets/images/project-piping-manifold-ss304.jpg"
      ],
      scope: "Supply and Installation of Carbon Steel & Stainless Steel 304 Process Piping, Reactors, and Mechanical Equipment.",
      highlights: [
        "Precision installation of agitated resin reactors and receiver vessels",
        "Multi-line SS 304 and Copper/CS utility & process manifold fabrication",
        "100% pneumatic, hydrostatic, and passivation completion"
      ]
    },
    {
      id: "piping-ioi-lipid-enzymtec",
      title: "Mechanical, Equipment & Process Piping for Enzymatic Lipid Plant",
      category: "Mechanical & Process Piping",
      client: "IOI Lipid Enzymtec Sdn Bhd (IOI Group)",
      endUser: "IOI Lipid Enzymtec Sdn Bhd",
      pm: "Greengold Energy (JV)",
      location: "Pasir Gudang, Johor, Malaysia",
      year: "2011",
      jv: "Greengold Energy (JV)",
      clientLogo: "assets/images/clients/ioi-group.png",
      mainImage: "assets/images/project-ioi-silos-main.jpg",
      gallery: [
        "assets/images/project-ioi-silos-main.jpg",
        "assets/images/project-ioi-column-lift.jpg",
        "assets/images/project-ioi-conical-vessel.jpg",
        "assets/images/project-ioi-plant-aerial.jpg"
      ],
      scope: "Mechanical erection of vertical storage silos, process columns, Lipico conical vessels, and complete process piping work.",
      highlights: [
        "Heavy crane erection of multi-story process columns and vertical tank farm",
        "Precision alignment of Lipico specialty lipid processing vessels",
        "Food & oleochemical grade stainless steel process piping network"
      ]
    },
    {
      id: "piping-polymer-latex",
      title: "Plant-Wide Mechanical, Equipment & Tank Farm Piping Work",
      category: "Mechanical & Process Piping",
      client: "Polymer Latex Sdn Bhd (Synthomer)",
      endUser: "Polymer Latex / Synthomer",
      pm: "Greengold Energy (JV)",
      location: "Pasir Gudang, Johor, Malaysia",
      year: "2008",
      jv: "Greengold Energy (JV)",
      clientLogo: "assets/images/clients/synthomer-polymerlatex.png",
      mainImage: "assets/images/project-polymer-tankfarm.jpg",
      gallery: [
        "assets/images/project-polymer-tankfarm.jpg",
        "assets/images/project-polymer-aerial.jpg",
        "assets/images/project-polymer-piperack.jpg",
        "assets/images/project-polymer-agitator.jpg"
      ],
      scope: "Mechanical equipment installation (agitators, reactors, storage tanks) and interconnecting pipebridge & tank farm process piping.",
      highlights: [
        "Multi-tier overhead pipe rack spool installation across the latex complex",
        "Heavy mechanical agitator & drive assembly on polymerization reactors",
        "Interconnecting tank farm distribution manifolds and thermal insulation"
      ]
    },
    {
      id: "steel-zamil-bahru-stainless",
      title: "3,000 MT Structural Steel Erection for Stainless Steel Mill",
      category: "Structural Steel Work",
      client: "Zamil Steel Sdn Bhd",
      endUser: "Bahru Stainless Steel Sdn Bhd",
      pm: "Axon Petro / Greengold Energy (JV)",
      location: "Tanjung Langsat, Johor, Malaysia",
      year: "2010",
      jv: "Axon Petro Engineering",
      clientLogo: "assets/images/clients/zamil-steel.png",
      mainImage: "assets/images/project-steel-zamil-2.jpg",
      gallery: [
        "assets/images/project-steel-zamil-2.jpg",
        "assets/images/project-steel-zamil-1.jpg"
      ],
      scope: "Heavy Steel Structure Erection (3,000 Metric Tons) for the Bahru Stainless cold-rolling complex.",
      highlights: [
        "3,000 MT of heavy industrial portal frames, crane girders, and roof trusses",
        "Executed with multi-crane synchronized lifting and zero lost-time injury",
        "Full compliance with AWS D1.1 structural erection tolerances"
      ]
    },
    {
      id: "steel-ioi-lipid-2300mt",
      title: "2,300 MT Steel Structure Fabrication & Installation",
      category: "Structural Steel Work",
      client: "IOI Lipid Enzymtec Sdn Bhd",
      endUser: "IOI Group",
      pm: "Axon Petro Engineering",
      location: "Pasir Gudang, Johor, Malaysia",
      year: "2010",
      jv: "Axon Petro Engineering",
      clientLogo: "assets/images/clients/ioi-group.png",
      mainImage: "assets/images/project-steel-ioi-2.jpg",
      gallery: [
        "assets/images/project-steel-ioi-2.jpg",
        "assets/images/project-steel-ioi-1.jpg"
      ],
      scope: "Steel Structure Fabrication & Installation (2,300 Metric Tons) for multi-story process plant & tank farm pipe racks.",
      highlights: [
        "2,300 MT complete shop fabrication, blasting, priming, and site erection",
        "Complex multi-level equipment support platforms and pipe bridges"
      ]
    },
    {
      id: "piping-petronas-fgru-paka",
      title: "FGRU Steel Structure & Industrial Process Piping (GPPA & GPPB)",
      category: "Industrial & Process Piping",
      client: "Synerlitz (Malaysia) Sdn Bhd",
      endUser: "PETRONAS (Kompleks Industri Petroleum Petronas)",
      pm: "Greengold Energy (JV)",
      location: "GPPA & GPPB, Paka, Terengganu, Malaysia",
      year: "2012 – Present",
      jv: "Greengold Energy (JV)",
      mainImage: "assets/images/project-petronas-shop-1.jpg",
      gallery: [
        "assets/images/project-petronas-shop-1.jpg",
        "assets/images/project-petronas-fgru-site.jpg",
        "assets/images/project-petronas-shop-2.jpg",
        "assets/images/project-petronas-signboard.jpg"
      ],
      scope: "Flare Gas Recovery Unit (FGRU) — Steel Structure & High-Pressure Process Piping Work at Gas Processing Plants A & B.",
      highlights: [
        "Executed for PETRONAS Gas Processing Plants (GPPA & GPPB) in Paka, Terengganu",
        "Shop prefabrication of heavy-wall carbon and alloy steel piping spools",
        "Full ASME IX radiographic & ultrasonic weld qualification"
      ]
    },
    {
      id: "custom-ducting-lanxess-singapore",
      title: "Design, Fabrication & Installation of Large-Bore Steel Ducting",
      category: "Custom Steel Fabrication",
      client: "Lanxess Butyl Pte Ltd",
      endUser: "LANXESS (Jurong Island Butyl Rubber Plant)",
      pm: "Greengold Energy (JV)",
      location: "Jurong Island, Singapore",
      year: "2014",
      jv: "Greengold Energy (JV)",
      clientLogo: "assets/images/clients/lanxess.png",
      mainImage: "assets/images/project-ducting-lanxess-long.jpg",
      gallery: [
        "assets/images/project-ducting-lanxess-long.jpg",
        "assets/images/project-ducting-lanxess-welding.jpg",
        "assets/images/project-ducting-lanxess-shop.jpg",
        "assets/images/project-ducting-lanxess-rolling.jpg"
      ],
      scope: "Design & Build Custom Steel Ducting — Shop Fabrication, Rolling, Welding & Site Installation.",
      highlights: [
        "Precision rolling and GTAW/FCAW welding of large-diameter flanged ducting",
        "Delivered to Lanxess Butyl Pte Ltd chemical complex on Jurong Island, Singapore"
      ]
    }
  ],

  // All 26 Welding Procedure Specifications from PDF 1 Pages 7, 8, and 9
  wpsRegistry: [
    // Page 7: AWS D1.1 2006
    { no: 1, code: "AWS D1.1 2006", bm1Group: "1", bm1Spec: "43 A or Equivalent", bm2Group: "1", bm2Spec: "43 A or Equivalent", process: "SMAW", filler: "E 6013", wpsNo: "DESB-WPS-001", thickMin: "3.0mm", thickMax: "UNLIMITED", diaMin: "600mm", diaMax: "UNLIMITED" },
    { no: 2, code: "AWS D1.1 2006", bm1Group: "1", bm1Spec: "43 A or Equivalent", bm2Group: "1", bm2Spec: "43 A or Equivalent", process: "SMAW", filler: "E 6013", wpsNo: "DESB-WPS-002", thickMin: "3.0mm", thickMax: "UNLIMITED", diaMin: "600mm", diaMax: "UNLIMITED" },
    { no: 3, code: "AWS D1.1 2006", bm1Group: "1", bm1Spec: "43 A or Equivalent", bm2Group: "1", bm2Spec: "43 A or Equivalent", process: "FCAW GS", filler: "E 71T-1", wpsNo: "DESB-WPS-003", thickMin: "3.0mm", thickMax: "UNLIMITED", diaMin: "600mm", diaMax: "UNLIMITED" },
    { no: 4, code: "AWS D1.1 2006", bm1Group: "1", bm1Spec: "43 A or Equivalent", bm2Group: "1", bm2Spec: "43 A or Equivalent", process: "FCAW GS", filler: "E 71T-1", wpsNo: "DESB-WPS-004", thickMin: "3.0mm", thickMax: "UNLIMITED", diaMin: "600mm", diaMax: "UNLIMITED" },
    { no: 5, code: "AWS D1.1 2006", bm1Group: "1", bm1Spec: "43 A or Equivalent", bm2Group: "1", bm2Spec: "43 A or Equivalent", process: "SMAW", filler: "E 6013", wpsNo: "DESB-WPS-005", thickMin: "3.0mm", thickMax: "UNLIMITED", diaMin: "600mm", diaMax: "UNLIMITED" },
    { no: 6, code: "AWS D1.1 2006", bm1Group: "P1 Group II", bm1Spec: "S 355 JR", bm2Group: "P1 Group II", bm2Spec: "S 355 JR", process: "SMAW / FCAW", filler: "E7018 / E71T-1C", wpsNo: "DESB-WPS-025", thickMin: "1.5mm (SMAW) / 4.75mm (FCAW)", thickMax: "4.0mm / 100.0mm", diaMin: "610mm", diaMax: "All" },
    { no: 7, code: "AWS D1.1 2006", bm1Group: "P1 Group II", bm1Spec: "S 355 JR", bm2Group: "P1 Group II", bm2Spec: "S 355 JR", process: "SMAW / FCAW", filler: "E7018 / E71T-1C", wpsNo: "DESB-WPS-026", thickMin: "1.5mm (SMAW) / 4.75mm (FCAW)", thickMax: "4.0mm / 100.0mm", diaMin: "610mm", diaMax: "All" },
    // Page 8: ASME IX.2010
    { no: 8, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "E 316L", bm2Group: "P8 Group 1", bm2Spec: "E 316L", process: "GTAW", filler: "ER 316LTi-5 & ER 316L", wpsNo: "DESB-WPS-006", thickMin: "1.5mm", thickMax: "15.24mm", diaMin: "All", diaMax: "All" },
    { no: 9, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "SA 312 TP 316L", bm2Group: "P8 Group 1", bm2Spec: "SA 312 TP 316L", process: "GTAW", filler: "ER 316L", wpsNo: "DESB-WPS-007", thickMin: "1.5mm", thickMax: "15.4mm", diaMin: "All", diaMax: "All" },
    { no: 10, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "SS 316L", bm2Group: "P8 Group 1", bm2Spec: "SS 316L", process: "GTAW + SMAW", filler: "ER 316LTi-5", wpsNo: "DESB-WPS-008", thickMin: "1.6mm", thickMax: "10.00mm (GTAW) / 5.4mm (SMAW)", diaMin: "All", diaMax: "All" },
    { no: 11, code: "ASME IX.2010", bm1Group: "P1 Group 1", bm1Spec: "A 106 Gr.B", bm2Group: "P1 Group 1", bm2Spec: "A 106 Gr.B", process: "GTAW + SMAW", filler: "ER 70S-G / E7018", wpsNo: "DESB-WPS-009", thickMin: "1.6mm", thickMax: "8.0mm (GTAW) / 17.4mm (SMAW)", diaMin: "All", diaMax: "All" },
    { no: 12, code: "ASME IX.2010", bm1Group: "1 Group 1", bm1Spec: "A 106 Gr.B", bm2Group: "1 Group 1", bm2Spec: "A 106 Gr.B", process: "GTAW", filler: "ER 70S-G", wpsNo: "DESB-WPS-010", thickMin: "1.5mm", thickMax: "17.12mm", diaMin: "All", diaMax: "All" },
    { no: 13, code: "ASME IX.2010", bm1Group: "P1 Group 1", bm1Spec: "A 106 Gr.B", bm2Group: "P1 Group 1", bm2Spec: "A 106 Gr.B", process: "SMAW", filler: "ER7016 / E7018", wpsNo: "DESB-WPS-011", thickMin: "1.6mm", thickMax: "24.5mm", diaMin: "All", diaMax: "All" },
    { no: 14, code: "ASME IX.2010", bm1Group: "P1 Group 1", bm1Spec: "A 106 Gr.B", bm2Group: "P8 Group 1", bm2Spec: "SA 312 TP 316L", process: "SMAW", filler: "E309L-16", wpsNo: "DESB-WPS-012", thickMin: "1.5mm", thickMax: "15.24mm", diaMin: "All", diaMax: "All" },
    { no: 15, code: "ASME IX.2010", bm1Group: "P10H Group 1", bm1Spec: "UNS S32760 (Super Duplex)", bm2Group: "P10H Group 1", bm2Spec: "UNS S32760 (Super Duplex)", process: "GTAW", filler: "ER2209", wpsNo: "DESB-WPS-013", thickMin: "5mm", thickMax: "17.48mm", diaMin: "All", diaMax: "All" },
    // Page 9: ASME IX.2010
    { no: 16, code: "ASME IX.2010", bm1Group: "P42", bm1Spec: "UNS N0400 (Monel 400)", bm2Group: "P42", bm2Spec: "UNS N0400 (Monel 400)", process: "GTAW", filler: "ERNiCu-7", wpsNo: "DESB-WPS-014", thickMin: "1.5mm", thickMax: "9.6mm", diaMin: "All", diaMax: "All" },
    { no: 17, code: "ASME IX.2010", bm1Group: "P43", bm1Spec: "UNS N10276 (Hastelloy C276)", bm2Group: "P43", bm2Spec: "UNS N10276 (Hastelloy C276)", process: "GTAW", filler: "ERNiCrMo-4", wpsNo: "DESB-WPS-015", thickMin: "1.5mm", thickMax: "8mm", diaMin: "All", diaMax: "All" },
    { no: 18, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "A312 TP 317L", bm2Group: "P8 Group 1", bm2Spec: "A312 TP 317L", process: "GTAW", filler: "ER317L", wpsNo: "DESB-WPS-016", thickMin: "1.5mm", thickMax: "8mm", diaMin: "All", diaMax: "All" },
    { no: 19, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "A312 TP 317L", bm2Group: "P43", bm2Spec: "UNS N10276 (Hastelloy C276)", process: "GTAW", filler: "ERNiCrMo-4", wpsNo: "DESB-WPS-017", thickMin: "1.5mm", thickMax: "9.6mm", diaMin: "All", diaMax: "All" },
    { no: 20, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "SA 312 TP 316L", bm2Group: "P1 Group 1", bm2Spec: "A 106 Gr.B", process: "GTAW", filler: "ER309L", wpsNo: "DESB-WPS-018", thickMin: "1.5mm", thickMax: "15.24mm", diaMin: "All", diaMax: "All" },
    { no: 21, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "SA 312 TP 304L", bm2Group: "P8 Group 1", bm2Spec: "SA 312 TP 304L", process: "GTAW", filler: "ER308L", wpsNo: "DESB-WPS-019", thickMin: "1.5mm", thickMax: "15.24mm", diaMin: "All", diaMax: "All" },
    { no: 22, code: "ASME IX.2010", bm1Group: "P1 Group 1", bm1Spec: "SA 106 Gr.B", bm2Group: "P1 Group 1", bm2Spec: "SA 106 Gr.B", process: "GTAW + SMAW", filler: "ER 70S-6 / E 7018", wpsNo: "DESB-WPS-020", thickMin: "5mm", thickMax: "21.94mm", diaMin: "All", diaMax: "All" },
    { no: 23, code: "ASME IX.2010", bm1Group: "P1 Group 2", bm1Spec: "SA 516 GR 70", bm2Group: "P1 Group 2", bm2Spec: "SA 516 GR 70", process: "SMAW + FCAW", filler: "E 7016 / E71T-1C", wpsNo: "DESB-WPS-021", thickMin: "5mm", thickMax: "28mm (SMAW) / 48.2mm (FCAW)", diaMin: "All", diaMax: "All" },
    { no: 24, code: "ASME IX.2010", bm1Group: "P1 Group 2", bm1Spec: "SA 516 GR 70", bm2Group: "P1 Group 2", bm2Spec: "SA 516 GR 70", process: "FCAW", filler: "E71T-1C", wpsNo: "DESB-WPS-022", thickMin: "5mm", thickMax: "76.0mm", diaMin: "All", diaMax: "All" },
    { no: 25, code: "ASME IX.2010", bm1Group: "P1 Group 2", bm1Spec: "SA 516 GR 70", bm2Group: "P1 Group 2", bm2Spec: "SA 516 GR 70", process: "GTAW", filler: "ER70S-G", wpsNo: "DESB-WPS-023", thickMin: "1.5mm", thickMax: "12.7mm", diaMin: "All", diaMax: "All" },
    { no: 26, code: "ASME IX.2010", bm1Group: "P8 Group 1", bm1Spec: "SA 240 TP 316L", bm2Group: "P8 Group 1", bm2Spec: "SA 240 TP 316L", process: "GTAW + FCAW", filler: "R316L T1-5 / E316L T0-1(4)", wpsNo: "DESB-WPS-024", thickMin: "1.5mm", thickMax: "16.0mm", diaMin: "All", diaMax: "All" }
  ],

  // Elinta Motors /services/ Model: Ground-Up Turnkey Engineering, Prototyping & Validation
  services: [
    {
      id: "engineering-cad-cae",
      step: "01",
      title: "Process & Mechanical Engineering (3D CAD / CAE)",
      subtitle: "Ground-Up Plant Design & Stress Analysis",
      description: "Using a ground-up engineering methodology, our technical design cell translates P&IDs and process datasheets into clash-free 3D plant models, thermal ratings, and code-compliant mechanical drawings before a single plate is cut.",
      image: "assets/images/project-turnkey-cad-1.jpg",
      capabilities: [
        "3D Plant & Piping Layout Modeling (PDMS / AutoCAD Plant 3D / Tekla Structures)",
        "Pressure Vessel & Heat Exchanger Mechanical Design (PV Elite / Compress / HTRI)",
        "Piping Flexibility & Thermal Stress Analysis (CAESAR II per ASME B31.3)",
        "Finite Element Analysis (FEA) & Structural Wind/Seismic Verification (STAAD.Pro)"
      ],
      standards: ["ASME Sec VIII Div 1 & 2", "ASME B31.3 / B31.4 / B31.8", "TEMA Class R/C/B", "API 650 / 620"]
    },
    {
      id: "custom-prototyping-skids",
      step: "02",
      title: "Modular Skid Prototyping & Exotic Alloy Fabrication",
      subtitle: "Precision Shop-Floor Build & Instrumentation Integration",
      description: "In-house fabrication of complex process modules, custody-transfer metering skids, and exotic alloy vessels. Our welders are qualified across 26 WPS procedures covering Carbon Steel, Stainless 304L/316L/317L, Super Duplex S32760, Monel N0400, and Hastelloy C276.",
      image: "assets/images/project-metering-skid-main.jpg",
      capabilities: [
        "CNC 4-Roll Plate Bending & Heavy Vessel Shell Rolling up to 76 mm thickness",
        "High-Purity Orbital & Manual GTAW Root-Purged Welding for Exotic Alloys",
        "Integrated E&I Assembly: Coriolis/Ultrasonic Meters, MOVs, Transmitters & PLC Panels",
        "Dissimilar Metal Welding (CS to SS 316L & SS 317L to Hastelloy C276)"
      ],
      standards: ["ASME Section IX.2010", "AWS D1.1 2006", "NACE MR0175 / ISO 15156", "ATEX / IECEx Zone 1 & 2"]
    },
    {
      id: "testing-ndt-validation",
      step: "03",
      title: "In-House Laboratory Testing, NDT & FAT Validation",
      subtitle: "Zero-Defect Verification Before Dispatch",
      description: "Every fabricated vessel, piping spool, and modular skid undergoes rigorous non-destructive examination, Positive Material Identification (PMI), and hydrostatic/pneumatic pressure testing witnessed by third-party inspectors (TPI).",
      image: "assets/images/project-metering-skid-hydrotest.jpg",
      capabilities: [
        "Hydrostatic & Pneumatic Pressure Testing with Calibrated Chart Recorders",
        "100% Radiography Testing (RT), Ultrasonic Phased Array (UT), MT & Dye Penetrant (PT)",
        "XRF Positive Material Identification (PMI) for Alloy Verification & Ferrite Number Testing",
        "Factory Acceptance Testing (FAT), Loop Checks & Passivation Certification"
      ],
      standards: ["ASME Sec V (NDT)", "ASME PCC-2", "ISO 9001:2015 QMS", "Lloyds / TUV / DNV / BV TPI Ready"]
    },
    {
      id: "turnkey-epc-commissioning",
      step: "04",
      title: "Turnkey EPC Construction, Heavy Rigging & Commissioning",
      subtitle: "From Green-Field Foundation to Plant Handover",
      description: "Our site execution teams mobilize across India, Malaysia, and Singapore to erect multi-thousand-ton steel structures, lift heavy columns and reactors, execute golden tie-in welds, and commission complete chemical plants.",
      image: "assets/images/project-turnkey-emery-main.jpg",
      capabilities: [
        "Heavy Crane Rigging & Erection of Columns, Silos, and Reactors",
        "Structural Steel Erection up to 3,000+ MT per Single Project Site",
        "Brownfield Shutdown Tie-Ins, Hot-Tapping & Plant Revamps",
        "Pre-Commissioning Flushing, Chemical Cleaning, Nitrogen Purging & Start-Up Support"
      ],
      standards: ["ISO 45001:2018 HSE", "PETRONAS HSE Standards", "Zero LTI Execution Protocol"]
    }
  ],

  // Thermax R&D Model: Innovation Pillars in Tabs + Lab-to-Market Journey + Project Cards
  rnd: {
    intro: "Modeled on leading industrial Research, Technology & Innovation Centres (RTIC), Axonpetro's R&D wing—in strategic alliance with Greengold Energy (JV)—bridges advanced metallurgical research, modular process intensification, and clean-energy decarbonisation hardware.",
    pillars: [
      {
        id: "carbon-fgru",
        tabTitle: "Carbon Capture & FGRU Systems",
        badge: "PILLAR 01 • DECARBONISATION",
        heading: "Flare Gas Recovery (FGRU) & Industrial Carbon Capture Skids",
        description: "Advancing indigenous, modular gas recovery and CO2 scrubbing hardware tailored for refineries, gas processing plants (GPPA/GPPB), and chemical complexes. By capturing waste flare streams and upcycling flue gases, we turn emissions into high-value fuel gas and chemical feedstock.",
        image: "assets/images/project-petronas-fgru-site.jpg",
        metrics: [
          { label: "Flaring Reduction", value: "Up to 98%" },
          { label: "Sour Gas Resilience", value: "NACE MR0175 Compliant" },
          { label: "Deployment Format", value: "Modular Plug-&-Play Skids" }
        ],
        keyFocusAreas: [
          "Liquid-ring compressor & amine scrubber skid integration for zero-routine flaring",
          "Corrosion-resistant Hastelloy C276 (DESB-WPS-015) and Super Duplex (DESB-WPS-013) amine reboilers",
          "Low-pressure-drop venturi scrubbers and large-bore flue gas ducting (proven at Lanxess & Petronas)"
        ]
      },
      {
        id: "green-hydrogen-electro",
        tabTitle: "Green Hydrogen & Exotic Alloys",
        badge: "PILLAR 02 • ENERGY TRANSITION",
        heading: "Hydrogen-Ready Metallurgy & High-Purity Electrochemical Piping",
        description: "Developing welding procedures and balance-of-plant (BoP) skid packages for green hydrogen electrolyzers, compression manifolds, and waste-heat recovery loops that resist hydrogen embrittlement under cyclic high-pressure operation.",
        image: "assets/images/project-piping-manifold-ss304.jpg",
        metrics: [
          { label: "Exotic Alloy WPS", value: "Monel, Hastelloy, 317L, Duplex" },
          { label: "Weld Integrity", value: "100% Orbital GTAW Purged" },
          { label: "Operating Pressure", value: "Up to 100 bar(g) H2 Service" }
        ],
        keyFocusAreas: [
          "Low-ferrite, ultra-clean austenitic SS 316L/317L and Nickel-alloy (UNS N0400 / N10276) manifold fabrication",
          "Waste-heat integration heat exchangers coupling industrial process heat with clean energy generation",
          "Helium-leak tested high-pressure gas buffer vessels and compression skids"
        ]
      },
      {
        id: "biofuels-bioprocessing",
        tabTitle: "Biofuels & Oleochemical Reactors",
        badge: "PILLAR 03 • BIO-INNOVATION",
        heading: "Enzymatic Bioprocessing, Sulphonation & Green Surfactant Plants",
        description: "Harnessing sustainable palm/plant lipids and biomass waste streams to engineer next-generation enzymatic reactors, falling-film sulphonation units, and continuous biodiesel/bio-lubricant processing plants.",
        image: "assets/images/project-turnkey-emery-main.jpg",
        metrics: [
          { label: "Selectivity Gain", value: "+24% via Enzymatic Mixing" },
          { label: "Thermal Efficiency", value: "Low-Delta-T Limpet Coils" },
          { label: "Industrial Scale", value: "Turnkey EPCC Delivery" }
        ],
        keyFocusAreas: [
          "Low-shear hydrofoil agitation & immobilized-enzyme bed reactors (deployed at IOI Lipid Enzymtec)",
          "High-surface-area film sulphonation & neutralization skids (deployed at Emery Oleochemicals)",
          "High-vacuum fatty acid fractionation columns with minimal thermal degradation"
        ]
      },
      {
        id: "digital-twin-modular",
        tabTitle: "Modularization & Digital Twin",
        badge: "PILLAR 04 • SMART MANUFACTURING",
        heading: "3D Digital Twins & Off-Site Modular Process Intensification",
        description: "Shifting 80% of traditional site construction hours into controlled shop-floor fabrication bays through 3D CAD digital twins, automated FCAW/GTAW welding cells, and pre-commissioned super-skids.",
        image: "assets/images/project-turnkey-cad-2.jpg",
        metrics: [
          { label: "Site Schedule Saved", value: "35% Faster Commissioning" },
          { label: "Weld Defect Rate", value: "< 0.4% RT Repair Rate" },
          { label: "Max Wall Qualified", value: "100.0 mm (WPS-025/026)" }
        ],
        keyFocusAreas: [
          "Full 3D clash detection and ergonomic valve/instrument operability reviews prior to fabrication",
          "Automated flux-cored (FCAW-GS) heavy structural and vessel seam welding up to 100 mm thickness",
          "Digital weld-map tracking linking every isometric joint to welder ID, heat number, and NDT report"
        ]
      }
    ],
    labToMarket: [
      {
        step: "01",
        title: "Concept & Process Simulation",
        desc: "Thermodynamic modeling, PFD/P&ID development, and material compatibility screening for corrosive or high-pressure duties.",
        icon: "cpu"
      },
      {
        step: "02",
        title: "Metallurgy & WPS Qualification",
        desc: "Coupon welding, mechanical tensile/bend/impact testing, and PQR certification under ASME Section IX & AWS D1.1.",
        icon: "shield"
      },
      {
        step: "03",
        title: "Pilot Skid & Prototype Build",
        desc: "Shop-floor fabrication of pilot reactors, metering skids, or heat transfer modules with full E&I instrumentation.",
        icon: "wrench"
      },
      {
        step: "04",
        title: "Stress, NDT & Hydro-Validation",
        desc: "Rigorous 100% RT/UT inspection, PMI alloy verification, hydro-testing, and simulated operating stress runs.",
        icon: "activity"
      },
      {
        step: "05",
        title: "Commercial Turnkey Scale-Up",
        desc: "Full-scale EPC manufacturing, heavy crane erection, site tie-ins, and performance-guaranteed commissioning.",
        icon: "rocket"
      }
    ],
    projects: [
      {
        id: "rnd-proj-1",
        tag: "Clean Air & Gas Recovery",
        title: "High-Efficiency Flare Gas Recovery (FGRU) Module",
        partner: "Greengold Energy (JV) / Petronas Paka",
        status: "Deployed at Industrial Scale",
        summary: "Engineered modular structural and sour-service piping packages to recover waste flare gas at GPPA & GPPB, cutting carbon emissions and recovering fuel gas."
      },
      {
        id: "rnd-proj-2",
        tag: "Exotic Alloy Metallurgy",
        title: "Dissimilar Welding of Hastelloy C276 to Austenitic SS 317L",
        partner: "RTIC Welding Metallurgy Lab",
        status: "ASME IX Qualified (DESB-WPS-017)",
        summary: "Developed precision GTAW heat-input control using ERNiCrMo-4 filler metal to prevent intermetallic sigma-phase precipitation in severe acid-service chemical piping."
      },
      {
        id: "rnd-proj-3",
        tag: "Bio-Process Intensification",
        title: "Enzymatic Lipid & Sulphonation Reactor Scale-Up",
        partner: "Oleochemical EPC Division",
        status: "Commercialized",
        summary: "Optimized multi-zone limpet coil heat transfer and low-shear impeller geometry for continuous oleochemical and enzymatic lipid esterification plants."
      }
    ]
  },

  // Infrastructure, Facilities & HSE Data
  infrastructure: {
    summary: "Operating across integrated heavy fabrication workshops and regional EPC staging yards, Axonpetro combines under-one-roof vessel/skid manufacturing with high-tonnage site erection machinery.",
    facilities: [
      {
        title: "Heavy Vessel & Structural Fabrication Bay",
        metric: "25,000+ Sq. Ft. Covered Bay",
        desc: "Equipped with EOT overhead cranes, CNC plasma/oxy-fuel plate cutting, and heavy turning rolls for pressure vessels, silos, and 4.2m diameter ducting.",
        image: "assets/images/project-ducting-lanxess-shop.jpg"
      },
      {
        title: "Dedicated Stainless Steel & Exotic Alloy Clean Bay",
        metric: "Zero Carbon-Contamination Zone",
        desc: "Segregated bay for SS 304L/316L/317L, Super Duplex S32760, Monel 400, and Hastelloy C276 fabrication with high-purity argon purging and passivation tanks.",
        image: "assets/images/project-ducting-lanxess-welding.jpg"
      },
      {
        title: "Modular Skid Assembly & Hydro-Test Pad",
        metric: "Up to 250 Bar Test Pressure",
        desc: "Dedicated assembly bay for custody-transfer metering skids, valve manifolds, E&I cabling, calibrated hydro-testing, and third-party FAT inspection.",
        image: "assets/images/project-metering-skid-main.jpg"
      },
      {
        title: "Site EPC & Heavy Rigging Fleet",
        metric: "3,000+ MT Site Erection Capacity",
        desc: "Mobile cranes, hydraulic gantries, automatic orbital pipe welders, and mobile NDT/PWHT units for turnkey plant construction.",
        image: "assets/images/project-turnkey-crane-vessel.jpg"
      }
    ],
    certifications: [
      { code: "ISO 9001:2015", title: "Quality Management System (QMS) Policy", scope: "Design, Fabrication, EPC Construction & Commissioning of Process Equipment, Piping & Structural Steel" },
      { code: "ISO 45001:2018", title: "Occupational Health, Safety & Environment (HSE) Policy", scope: "Zero-LTI Safety Management System for Shop Fabrication & High-Risk Petrochemical Site Operations" },
      { code: "ASME Section IX (2010)", title: "Welding Procedure & Performance Qualification Book", scope: "19 Certified WPS/PQR Procedures (DESB-WPS-006 to 024) covering CS, SS, Super Duplex, Monel & Hastelloy" },
      { code: "AWS D1.1 (2006)", title: "Structural Welding Code — Steel Register", scope: "7 Certified Structural & Heavy Plate WPS Procedures (DESB-WPS-001 to 005, 025, 026) up to Unlimited / 100mm Thickness" }
    ],
    gallery: [
      { src: "assets/images/project-turnkey-emery-main.jpg", cat: "Turnkey Site Erection", caption: "Emery Oleochemicals Sulphonation Plant — Turnkey EPCC Aerial Overview (Banting, Selangor)" },
      { src: "assets/images/project-metering-skid-main.jpg", cat: "Metering Skids & Hydrotest", caption: "Custody Transfer Metering Skid Assembly in Shop Bay (Pasir Gudang Fabrication Bay)" },
      { src: "assets/images/project-reactor-crayvalley.jpg", cat: "Reactors & Vessels", caption: "Stainless Steel 304/316L Chemical Reactor & Process Piping Installation (Cray Valley Resins)" },
      { src: "assets/images/project-ducting-lanxess-long.jpg", cat: "Shop Floor & Rolling", caption: "Large-Bore Flanged Steel Ducting Fabricated in Shop Bay (Lanxess Butyl, Jurong Island)" },
      { src: "assets/images/project-ducting-lanxess-welding.jpg", cat: "Shop Floor & Rolling", caption: "Internal GTAW/FCAW Seam Welding on Custom Alloy Ducting (Lanxess Singapore)" },
      { src: "assets/images/project-ducting-lanxess-shop.jpg", cat: "Shop Floor & Rolling", caption: "Heavy Turning Rolls & Shell Alignment in Covered Fabrication Bay" },
      { src: "assets/images/project-ducting-lanxess-rolling.jpg", cat: "Shop Floor & Rolling", caption: "CNC 4-Roll Plate Bending of Large-Diameter Process Ducts" },
      { src: "assets/images/project-metering-skid-hydrotest.jpg", cat: "Metering Skids & Hydrotest", caption: "In-House High-Pressure Hydrostatic Testing with Calibrated Pressure Gauges" },
      { src: "assets/images/project-metering-skid-valves.jpg", cat: "Metering Skids & Hydrotest", caption: "Motor-Operated Valves (MOV) & Multi-Stream Manifold Assembly on Metering Skid" },
      { src: "assets/images/project-metering-skid-spools.jpg", cat: "Metering Skids & Hydrotest", caption: "Prefabricated ASME B31.3 Flanged Spools with Golden-Pass Weld Traceability" },
      { src: "assets/images/project-ioi-silos-main.jpg", cat: "Reactors & Vessels", caption: "Vertical Storage Silos & Multi-Story Enzymatic Lipid Plant (IOI Lipid Enzymtec)" },
      { src: "assets/images/project-ioi-conical-vessel.jpg", cat: "Reactors & Vessels", caption: "Heavy Rigging of Lipico Stainless Steel Conical Process Vessel" },
      { src: "assets/images/project-ioi-column-lift.jpg", cat: "Turnkey Site Erection", caption: "Crane Erection of Vertical Process Column & Structural Framework" },
      { src: "assets/images/project-vessels-crayvalley.jpg", cat: "Reactors & Vessels", caption: "Process Receiver Vessels & Overhead Stainless Piping Network" },
      { src: "assets/images/project-piping-manifold-ss304.jpg", cat: "Reactors & Vessels", caption: "Precision SS 304 & Copper Multi-Line Process Distribution Manifold" },
      { src: "assets/images/project-polymer-tankfarm.jpg", cat: "Turnkey Site Erection", caption: " Tank Farm & Interconnecting Pipe Bridge (Polymer Latex / Synthomer)" },
      { src: "assets/images/project-polymer-piperack.jpg", cat: "Turnkey Site Erection", caption: "Multi-Tier Overhead Process Pipe Rack Corridor" },
      { src: "assets/images/project-polymer-agitator.jpg", cat: "Reactors & Vessels", caption: "Heavy-Duty Top-Entry Reactor Agitator Drive & Gearbox Installation" },
      { src: "assets/images/project-steel-zamil-2.jpg", cat: "Turnkey Site Erection", caption: "3,000 MT Structural Steel Erection for Bahru Stainless Mill (Zamil Steel)" },
      { src: "assets/images/project-steel-zamil-1.jpg", cat: "Turnkey Site Erection", caption: "Heavy Industrial Portal Frames & Crane Runway Girders" },
      { src: "assets/images/project-steel-ioi-2.jpg", cat: "Turnkey Site Erection", caption: "2,300 MT Multi-Level Process Plant Structural Steelwork (IOI Group)" },
      { src: "assets/images/project-petronas-shop-1.jpg", cat: "Shop Floor & Rolling", caption: "Shop Prefabrication of Heavy-Wall Piping Spools for PETRONAS GPPA & GPPB" },
      { src: "assets/images/project-petronas-shop-2.jpg", cat: "Shop Floor & Rolling", caption: "Piping Fit-Up & Welding Bay for Flare Gas Recovery Unit (FGRU)" },
      { src: "assets/images/project-petronas-fgru-site.jpg", cat: "Turnkey Site Erection", caption: "FGRU Structural & Piping Erection at PETRONAS Paka, Terengganu" },
      { src: "assets/images/project-turnkey-crane-vessel.jpg", cat: "Turnkey Site Erection", caption: "Tandem Heavy Crane Lift of Horizontal Storage Vessel (Asiagroup Rigging)" },
      { src: "assets/images/project-turnkey-erection.jpg", cat: "Turnkey Site Erection", caption: "High-Elevation Pipe Bridge & Structural Truss Installation" },
      { src: "assets/images/project-turnkey-cad-1.jpg", cat: "3D CAD Models", caption: "3D Plant Layout & Clash-Free Structural/Equipment CAD Model (View 1)" },
      { src: "assets/images/project-turnkey-cad-2.jpg", cat: "3D CAD Models", caption: "3D Digital Twin of Sulphonation Plant Stairways, Vessels & Skids (View 2)" }
    ]
  },

  // Adani-Inspired Business Verticals Ecosystem (EPC, Sustainable Mobility, HVAC, Trading)
  businessVerticals: [
    {
      id: "epc",
      code: "01",
      title: "EPC & Turnkey Industrial Plants",
      subtitle: "Engineering, Procurement, Construction & Commissioning",
      badge: "CORE INDUSTRIAL CAPABILITY",
      tagline: "Heavy Engineering • Process Equipment • Structural Steel • Plant Construction",
      desc: "Delivering world-class turnkey engineering, heavy static equipment fabrication, ASME Sec VIII reactors, high-pressure process skids, and multi-thousand-ton structural steelwork with a proven zero-LTI track record across international petrochemical, energy, and oleochemical plants.",
      pillars: [
        "Turnkey Plant Engineering & EPCC Execution: Complete concept-to-commissioning plant realization, modular scheduling, and multi-disciplinary site management.",
        "ASME Sec VIII Chemical Reactors & Distillation Columns: High-pressure limpet-coil reactors, vacuum fractionating towers, and specialized alloy vessels.",
        "Modular Process & Custody-Transfer Metering Skids: Integrated plug-and-play skid modules with Coriolis meters, PLC SCADA automation, and golden-pass weld traceability.",
        "3,000+ MT Heavy Structural Steel Erection: Industrial portal frameworks, multi-story process structures, crane runways, and pipe racks with zero-LTI execution.",
        "Exotic Alloy Metallurgy (ASME IX / AWS D1.1): Precision welding of Super Duplex UNS S32760, Monel 400 (UNS N0400), and Hastelloy C276 (UNS N10276)."
      ],
      linkText: "Explore EPC Equipment & Case Studies",
      linkTarget: "products",
      image: "assets/images/project-turnkey-emery-main.jpg"
    },
    {
      id: "mobility",
      code: "02",
      title: "Sustainable Mobility",
      subtitle: "Engineering the Future of Mobility",
      badge: "ELECTRIFICATION & ADVANCED MOBILITY",
      tagline: "Electric Road Mobility • Electric Marine • Battery Integration • Smart Control Systems",
      desc: "Developing next-generation mobility solutions through advanced engineering, electrification, and intelligent technologies that accelerate industrial decarbonisation and commercial clean transport.",
      pillars: [
        "Electric Road Mobility: Heavy electric passenger coaches, zero-emission urban transit buses, commercial delivery trucks, and high-duty electrified platforms.",
        "Electric Marine Mobility: High-efficiency electric passenger ferries, commercial harbor boats, electric workboats, and specialized marine propulsion drivetrains.",
        "Energy Technologies: Advanced lithium and high-density battery pack integration, active thermal management, multi-megawatt fast-charging systems, and smart microgrids.",
        "Intelligent Mobility: Fleet telematics, remote cloud health monitoring, predictive maintenance algorithms, and integrated vehicle-to-cloud smart control loops.",
        "Advanced Vehicle Engineering: Aerodynamic drag reduction, lightweight aluminum/composite vehicle architectures, crashworthiness, and dynamic performance optimisation."
      ],
      linkText: "Explore Sustainable Mobility Architecture",
      linkTarget: "services",
      image: "assets/images/project-turnkey-cad-1.jpg"
    },
    {
      id: "hvac",
      code: "03",
      title: "HVAC & Thermal Engineering",
      subtitle: "Industrial Climate Control & Heat Recovery",
      badge: "ENERGY EFFICIENCY & CLIMATE SYSTEMS",
      tagline: "District Cooling • Industrial HVAC • Heat Recovery • Energy Efficiency",
      desc: "Specialized industrial air handling, hazardous-zone climate systems, energy-efficient district cooling networks, and high-efficiency thermal exchangers designed for extreme petrochemical, offshore, and industrial environments.",
      pillars: [
        "District Cooling & Energy-Efficient Central Networks: Centralized chilled-water distribution infrastructure reducing industrial power consumption and cooling footprints.",
        "Industrial Air Handling Units & Hazardous Zone HVAC: Explosion-proof ATEX/IECEx compliant air handlers, clean-room environmental ventilation, and positive pressure units.",
        "TEMA Class R/C/B Shell & Tube Heat Exchangers: High-temperature, high-pressure thermal exchange units engineered with HTRI ratings and zero cross-contamination.",
        "Waste Heat Recovery Units (WHRU) & Condensers: Capturing industrial exhaust flue energy to generate secondary steam, process pre-heating, and thermal cycle optimization.",
        "Large-Bore Heavy Ducting & Stack Fabrication: Custom heavy-gauge stainless and alloy exhaust ducting, flanged manifolds, and emission control stacks."
      ],
      linkText: "Explore HVAC & Thermal Solutions",
      linkTarget: "products",
      image: "assets/images/project-ducting-lanxess-shop.jpg"
    },
    {
      id: "trading",
      code: "04",
      title: "Trading & Strategic Commodities",
      subtitle: "Global Supply Chain & Material Procurement",
      badge: "GLOBAL PROCUREMENT & SOURCING",
      tagline: "Exotic Alloys • Process Hardware • Raw Materials • International Supply Chains",
      desc: "Connecting global industrial suppliers with certified raw materials, certified mill steel, exotic nickel alloy plates, titanium piping, valves, and specialized components for mission-critical engineering projects.",
      pillars: [
        "Certified Exotic Alloy Sourcing: Prime-mill plates, bars, and pipes in Hastelloy C276, Super Duplex S32760, Monel 400, Inconel 625, and high-purity SS 316L/317L.",
        "Heavy Flanges, Forgings & ASME B31.3 Piping: ASME/ANSI/DIN high-pressure flanges, forged fittings, elbows, reducers, and pre-fabricated spool packages.",
        "Industrial Valves & MOV Actuator Packages: High-pressure ball, gate, globe, check, and control valves with automated pneumatic and electric actuators.",
        "Global EPC Supply Chain Optimization: End-to-end logistics, bonded staging yards across India, Malaysia, and Singapore, and Just-In-Time (JIT) project delivery.",
        "100% Quality & Material Traceability: Certified EN 10204 3.1 & 3.2 Mill Test Certificates (MTC), independent laboratory verification, and XRF alloy PMI testing."
      ],
      linkText: "Enquire on Material Trading & Supply",
      linkTarget: "contact",
      image: "assets/images/project-metering-skid-valves.jpg"
    }
  ],

  // Centre of Excellence on Advance Engineering Research (Thermax / CoE Innovation Model)
  coeResearch: {
    title: "Centre of Excellence on Advance Engineering Research",
    tagline: "Innovation Driven. Technology Owned. Engineering Beyond Conventional Boundaries.",
    overview: "Developing advanced engineering solutions, proprietary technologies, and patentable intellectual property that drive innovation, efficiency, and sustainable industrial transformation across multiple industries.",
    coreCompetencies: [
      {
        title: "Advanced Product & Systems Engineering",
        desc: "End-to-end multi-physics modeling, finite element stress simulation, CFD thermal aerodynamics, and proprietary subsystem architecture."
      },
      {
        title: "Proprietary & Patentable Technology Development",
        desc: "Creating high-barrier intellectual property, proprietary process skids, and novel clean-tech formulations ready for commercial scale-up."
      },
      {
        title: "Research, Development & Prototyping",
        desc: "Fully equipped engineering labs for prototype assembly, exotic metallurgy qualification, electrical skid testing, and rapid iterations."
      },
      {
        title: "Engineering Design & System Integration",
        desc: "Seamless integration across mechanical hardware, battery energy storage, SCADA PLC automation, and industrial instrumentation."
      },
      {
        title: "Technology Commercialisation & Licensing",
        desc: "Accelerating laboratory-proven concepts into commercial production packages, OEM licensing models, and turnkey industrial installations."
      },
      {
        title: "Cross-Industry Technology Applications",
        desc: "One single core technology foundation deployed across mobility, marine electrification, chemical process plants, and clean energy."
      }
    ],
    industrialApplications: [
      { name: "Sustainable Mobility & Transportation", desc: "Electric road coaches, heavy commercial vehicles, and urban bus platforms.", icon: "cog" },
      { name: "Marine Engineering & Electrification", desc: "Clean electric boats, passenger ferries, and marine propulsion drivetrains.", icon: "factory" },
      { name: "Energy Systems & Infrastructure", desc: "Advanced battery storage, fast-charging integration, and smart energy hubs.", icon: "shield" },
      { name: "Industrial Engineering & Automation", desc: "High-pressure reactors, flare gas recovery (FGRU), and robotic fabrication.", icon: "flask" },
      { name: "Emerging Technology Applications", desc: "Green hydrogen piping, carbon capture skids, and bioprocess intensification.", icon: "cog" }
    ],
    partnerships: [
      { type: "Technology Development & Joint Innovation", desc: "Co-developing next-generation engineering platforms with global technology partners." },
      { type: "OEM & Manufacturing Collaborations", desc: "Scaling commercial production through specialized tier-1 manufacturing agreements." },
      { type: "Research & Academic Partnerships", desc: "Collaborating with premier technical institutes and metallurgical laboratories." },
      { type: "Intellectual Property & Technology Licensing", desc: "Monetizing patent portfolios through structured cross-industry licensing." },
      { type: "Strategic Investment & Commercialisation", desc: "Accelerating high-growth clean mobility and energy transition ventures." }
    ]
  },

  // Corporate Advisers (Adani Governance Model)
  advisers: [
    {
      name: "Senior EPC & Energy Transition Adviser",
      role: "Strategic EPC & Global Megaprojects",
      bio: "Over 35 years advising international energy conglomerates on mega-scale refinery, petrochemical, and renewable infrastructure investments across Asia-Pacific."
    },
    {
      name: "Metallurgical & Advanced Materials Adviser",
      role: "Exotic Alloys & ASME IX Code Standards",
      bio: "Former Lead Materials Specialist with top classification bodies, guiding exotic nickel metallurgy, high-temperature creep resistance, and hydrogen embrittlement research."
    },
    {
      name: "Sustainable Mobility & EV Systems Adviser",
      role: "E-Mobility Architecture & Marine Propulsion",
      bio: "Veteran automotive and marine propulsion strategist specializing in high-voltage battery architecture, electric ferry drivetrains, and telematics systems."
    }
  ],
    {
      name: "Managing Director & Chief EPC Officer",
      role: "Turnkey EPCC & Strategic Operations",
      bio: "25+ years leading heavy petrochemical construction, structural steel erection, and joint-venture execution across Malaysia, Singapore, and India."
    },
    {
      name: "Director — Technical & Static Equipment",
      role: "ASME Sec VIII / TEMA Design & Shop Manufacturing",
      bio: "Specializes in chemical reactor design, custody-transfer metering skids, and exotic alloy fabrication (Super Duplex, Hastelloy C276, Monel 400)."
    },
    {
      name: "Head of QA/QC, Welding Metallurgy & HSE",
      role: "ASME IX / AWS D1.1 Compliance & Zero-LTI Safety",
      bio: "Custodian of Axonpetro's 26 qualified WPS/PQR procedures, NDT radiography protocols, and PETRONAS/international HSE compliance."
    },
    {
      name: "Head of RTIC Research & Clean-Tech Innovation",
      role: "FGRU, Carbon Capture & Bioprocess Scale-Up",
      bio: "Leads lab-to-market pilot skid development for flare gas recovery, hydrogen-ready piping, and oleochemical process intensification."
    }
  ],

  newsMedia: [
    {
      date: "October 2026",
      category: "Digital Infrastructure",
      title: "Axonpetro Launches Interactive 30-Product Technical Catalog & Live WPS Registry",
      summary: "Procurement teams can now download instant ASME/TEMA equipment datasheets and verify all 26 qualified welding procedures online."
    },
    {
      date: "July 2026",
      category: "R&D & Clean Energy",
      title: "RTIC Expands Exotic Alloy Orbital Welding Qualification for Green Hydrogen & Sour Gas Skids",
      summary: "Qualified UNS N10276 (Hastelloy C276) and UNS S32760 (Super Duplex) procedures for next-generation decarbonisation modules."
    },
    {
      date: "March 2026",
      category: "Turnkey EPC Milestone",
      title: "Zero-LTI Safety Recognition Across Regional Petrochemical & Oleochemical Projects",
      summary: "Axon Petro Engineering & Greengold Energy (JV) celebrate continuous zero lost-time injury execution across multi-thousand-ton steel and piping sites."
    }
  ],

  clients: [
    { name: "Emery Oleochemicals", sector: "Oleochemicals & Surfactants", logo: "assets/images/clients/emery-oleochemicals.png", location: "Selangor, Malaysia" },
    { name: "PETRONAS", sector: "Oil & Gas Processing (GPPA & GPPB)", logo: "assets/images/project-petronas-signboard.jpg", location: "Terengganu, Malaysia" },
    { name: "LANXESS Butyl", sector: "Specialty Chemicals & Elastomers", logo: "assets/images/clients/lanxess.png", location: "Jurong Island, Singapore" },
    { name: "Yokogawa Electric International", sector: "Industrial Automation & Metering", logo: "assets/images/clients/yokogawa.png", location: "Singapore & Malaysia" },
    { name: "Foster Wheeler E&C", sector: "Global EPC Project Management", logo: "assets/images/clients/foster-wheeler.png", location: "Kuala Lumpur, Malaysia" },
    { name: "Cray Valley Resins", sector: "Hydrocarbon & Specialty Resins", logo: "assets/images/clients/cray-valley.png", location: "Pasir Gudang, Malaysia" },
    { name: "Synthomer / Polymer Latex", sector: "Polymers & Latex Emulsions", logo: "assets/images/clients/synthomer-polymerlatex.png", location: "Pasir Gudang, Malaysia" },
    { name: "IOI Group (Lipid Enzymtec)", sector: "Specialty Lipids & Oleochemicals", logo: "assets/images/clients/ioi-group.png", location: "Pasir Gudang, Malaysia" },
    { name: "Zamil Steel / Bahru Stainless", sector: "Structural Steel & Stainless Mill", logo: "assets/images/clients/zamil-steel.png", location: "Tanjung Langsat, Malaysia" },
    { name: "Desmet Ballestra S.p.A.", sector: "Process Engineering Licensor", logo: "", location: "Italy / Malaysia" }
  ],

  careers: [
    { id: "job-1", title: "Senior Static Equipment Design Engineer (PV Elite / ASME Sec VIII)", location: "Bengaluru, India", type: "Full-Time", exp: "6–10 Years", dept: "Engineering & Design" },
    { id: "job-2", title: "Lead Piping & Skid Project Engineer (ASME B31.3)", location: "Bengaluru / Johor Bahru", type: "Full-Time", exp: "5–8 Years", dept: "EPC Projects" },
    { id: "job-3", title: "QA/QC Welding Inspector (CSWIP 3.1 / AWS CWI)", location: "Shop Floor & Site Rotational", type: "Full-Time", exp: "4–7 Years", dept: "Quality & HSE" },
    { id: "job-4", title: "6G GTAW Exotic Alloy Welder (Super Duplex / Hastelloy / Monel)", location: "Fabrication Division", type: "Full-Time", exp: "4+ Years", dept: "Manufacturing" }
  ]
};
