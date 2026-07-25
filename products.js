/* ============================================================
   TECHKITCH — PRODUCT CATALOG
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Hoco W55 Plus Extra 170H Long Usage ANC Headphone",
    category: "Headphone",
    price: 1890,
    oldPrice: 1980,
    images: [
      "https://i.postimg.cc/JhrB7Pzz/Screenshot-(305).png",
      "https://i.postimg.cc/R0SnCXZ3/Screenshot-(306).png",
      "https://i.postimg.cc/0NkJ5cyK/Screenshot-(308).png"
    ],
    description: `Battery: Industry-leading 170 Hours total playback (ANC off) | USB-C fast charge.

Noise Canceling: Active Noise Cancellation (ANC) up to -28dB.

Sound: 40 mm dynamic drivers for deep bass and crisp audio.

Connectivity: Bluetooth 5.4, 3.5mm AUX, and TF card support.

Design: Lightweight, foldable, and cushioned protein-leather earcups.`,
    stock: 24,
    badge: "Best Seller"
  },

  {
    id: 2,
    name: "Hoco W103 Gaming Headphone",
    category: "Headphone",
    price: 1250.00,
    oldPrice: 1380,
    images: [
      "https://i.postimg.cc/FKGGhT0R/Screenshot-(316).png",
      "https://i.postimg.cc/cH2zNDNf/Screenshot-(317).png",
      "https://i.postimg.cc/CLHcvMdy/Screenshot-(318).png",
      "https://i.postimg.cc/W18f4pPQ/Screenshot-(314).png"
    ],
    description: `Drivers: 40mm tuned for immersive gaming audio.

Microphone: Dedicated Phi 6.0 x 2.2mm mic for clear voice chat.

Connectivity: Universal 3.5mm jack with a 1.2m durable cable (PC/Mobile/Consoles).

Comfort: Ultra-lightweight (184g) with cushioned ear pads.

Warranty: 7-day replacement warranty.`,
    stock: 15,
    badge: "New"
  },

  {
    id: 3,
    name: "Xiaomi AISOLOVE F01 Handheld Turbo Fan (2000mAh Battery) – Green Color",
    category: "Rechargeable Fan",
    price: 1220.00,
    oldPrice: 1449.00,
    images: [
      "https://i.postimg.cc/Bvr764gR/Screenshot-20260712-191830-Chrome.jpg",
      "https://i.postimg.cc/B62YPk7p/Screenshot-20260712-191814-Chrome.jpg"
    ],
    description: `Product name: Handheld Fan.
    Model: F01.
    Color: Green.
    Battery type/energy: Lithium battery/2000mAh 3.7V 4.44Wh.
    Rated voltage: 5V=.
    Rated current: 1A.
    Rated input power: 5W.
    Working time: About 1.2 – 4.2h.
    Charging time: About 2.2h.
    Product size: About 61x161x48.9mm.
    Product weight: About 125g.
    Product material: PC+ABS (V0).
    Support charging and use at the same time.
    Type-C fast charging interface.
    Five levels of wind speed control.
    Low noise.
    
    NOTE: This is a Xiaomi Ecological product and there won’t be any Xiaomi Logo on it. As a sub-brand, there will be a SOLOVE or AISOLOVE logo.`,
    stock: 8,
    badge: "New"
  },
  {
    id: 4,
    name: "JYSUPER JY-2320 Portable Handheld Mini Fan with Integrated LED light",
    category: "Rechargeable Fan",
    price: 680.00,
    oldPrice: 920.0,
    images: [
      "https://i.postimg.cc/rsDp9B7X/Screenshot-20260712-200400-Chrome.jpg",
      "https://i.postimg.cc/4NhdHTzp/Screenshot-20260712-200417-Chrome.jpg"
    ],
    description: `Product Type: Portable Handheld Mini Fan with LED Light.
    Model: JYSUPER JY-2320.
    Material: High-Quality ABS Plastic.
    Dimensions (H x W x D): 18.5 cm x 9.5 cm x 4.5 cm.
    Weight: 180 grams (approx.).
    Battery Type: Rechargeable Lithium-ion.
    Battery Capacity: 1500 mAh.
    Input Voltage: DC 5V / 1A.
    Charging Port: Micro USB.
    Charging Time: Approximately 3 hours.
    Usage Time: 2-5 hours (depending on fan speed and LED usage).
    Fan Speeds: No adjustable speeds.
    LED Light: Integrated single-mode LED.
    Color Options: White.
    Noise Level: Less than 40dB.
    Power Output: 2.5W.
    Included Accessories: USB Charging Cable.`,
    stock: 15,
    badge: "Budget"
  },
  {
    id: 5,
    name: "GearUP Air Cooler Fan With Mist Flow – White Color",
    category: "Air Cooler Fan",
    price: 1150,
    oldPrice: 1880,
    images: [
      "https://i.postimg.cc/mkf92y55/Screenshot-20260713-092850-Chrome.jpg",
      "https://i.postimg.cc/KvbT6QLG/Screenshot-20260713-092705-Chrome.jpg",
      "https://i.postimg.cc/y8YZddvf/Screenshot-20260713-092812-Chrome.jpg"
    ],
    description: `Product parameters:
    Rated voltage: 5V.
    Rated current: 2A.
    Output power: 10W.
    Charging interface: TYPE – C.
    Water tank capacity: 600ML.
    Atomization amount: 45ml/H~225ml/H.
    Gear: Three speed settings.
    21x9x26 cm.
    USB cable length: 1200mm.
    1) Three wind speed options.
    2) Spray fan.
    3) Fan increases water and ice water to accelerate cooling speed.
    4) 240 ° wide angle adjustment air outlet.
    5) Adjustable angle up and down.
    6) Spray: five spray ports.`,
    stock: 24,
    badge: "39% Discount"
  },
  {
    id: 6,
    name: "B22 to E27 LED Lamp Holder with Wireless Remote & Timer",
    category: "Lamp Holder",
    price: 550,
    oldPrice: 680,
    images: [
      "https://i.postimg.cc/yN6Y3YgL/Screenshot-20260713-205355-Chrome.jpg",
      "https://i.postimg.cc/W3RWftGZ/Screenshot-20260713-210054-Chrome.jpg",
      "https://i.postimg.cc/gjmMm5BP/Screenshot-20260713-210033-Chrome.jpg",
      "https://i.postimg.cc/Gh3MfWyv/Screenshot-20260713-210014-Chrome.jpg"
    ],
    description: `Product parameters:
    Wireless IR Remote Control (5–8m range).
    Built-in timer: 5 / 15 / 30 / 60 / 120 minutes.
    Supports E27 bulbs up to 60W.
    Converts B22 socket to E27 bulb holder.
    Plug & Play installation — no tools needed.
    Includes CR2025 battery-powered remote.
    
    How It Works:
    Screw the adapter into your B22 socket.
    Attach any compatible E27 bulb.
    Use the remote to turn on/off or set timer.
    Enjoy wireless control instantly.`,
    stock: 24,
    badge: "Smart Gadget"
  },

  {
    id: 7,
    name: "AULA F2066-II USB Wired Mechanical Gaming Keyboard — Full-Size RGB Backlit 104-Key Mechanical Keyboard with Blue Switches",
    category: "Keyboard",
    price: 2580.00,
    oldPrice: 2650,
    images: [
      "https://i.imgur.com/TwsE0MX.png",
      "https://i.imgur.com/ZWmQCvp.png",
      "https://i.imgur.com/3kO2YW9.png",
      "https://i.imgur.com/h9wR057.png"
    ],
    description: `Brand: AULA
Model: F2066-II Gaming Mechanical Keyboard.
Connection: Wired USB.
Keyboard Type: Mechanical (Blue switches).
Number of Keys: 104 (full-size).
Backlight: RGB / Rainbow effects (~20 modes).
Switch Life: ~60 million keystrokes`,
    stock: 10,
    badge: "Sale"
  },

  {
    id: 8,
    name: "AULA AC101 USB Wired Keyboard & Mouse Combo — 104-Key Keyboard with 1200 DPI Optical Mouse (Black)",
    category: "Keyboard",
    price: 900.00,
    oldPrice: 1150,
    images: [
      "https://i.imgur.com/xoAhwSB.png",
      "https://i.imgur.com/XOWwa8S.png",
      "https://i.imgur.com/eW2XGsT.png"
    ],
    description: `Brand: AULA.
Model: AC101 USB Keyboard & Mouse Combo.
Keyboard Layout: Full-size (104 keys).
Switch Type: Membrane.
Keyboard Key Life: ~10 million keystrokes.
Mouse Type: Optical.
Mouse DPI: 1200.
Mouse Buttons: 3 (Left, Right, Scroll).
Connection: USB 2.0 wired`,
    stock: 10,
    badge: "Combo"
  },

{
    id: 9,
    name: "GearUP Rounded Side Design Router Stand (Gray Colour)",
    category: "acessories",
    price: 350.00,
    oldPrice: 480,
    images: [
      "https://i.imgur.com/KfHc8zE.png",
      "https://i.imgur.com/vtnszE6.png",
      "https://i.imgur.com/MMpz7zo.png"
    ],
    description: `Product Name: GearUP Rounded Side Design Router Stand.
Brand: GearUP.
Design: Rounded Side, Modern Aesthetic.
Material: High-Quality Engineered Wood (MDF).
Finish: Smooth Laminate.
Color: Classic White.
Overall Dimensions (L x W x H): 30 cm x 18 cm x 22 cm (Approx. 11.8 x 7.1 x 8.7 inches).
Shelf Dimensions (Top): 30 cm x 18 cm (Approx. 11.8 x 7.1 inches).
Shelf Spacing (Clearance): Approx. 18 cm (7.1 inches).
Weight: Approx. 1.8 kg (4 lbs).
Assembly Required: Yes, minimal assembly.
Cable Management: Integrated slots/openings.
Ventilation: Open-shelf design for optimal airflow.
Compatibility: Most standard Wi-Fi routers, modems, small set-top boxes, etc.`,
    stock: 13
  },

 {
    id: 10,
    name: "GearUP B023 Rechargeable Ultra Slim Folding Pocket Bluetooth Keyboard",
    category: "keyboard",
    price: 1900.00,
    oldPrice: 2220,
    images: [
      "https://i.imgur.com/62oIbHq.png",
      "https://i.imgur.com/r9Calzu.png",
      "https://i.imgur.com/5f8be0U.png",
      "https://i.imgur.com/kombrkQ.png"
    ],
    description: `Brand: GearUP.
Type: Bluetooth-Compatible Wireless.
Application: Smart Phone , Desktop, Laptop, Tablet.
Keyboard Standard: 66 keys.
Language: English.
Operation Style: Capacitive.
The effective range of operation: 10m.
Continuous operation: ≥ 30 hours.
Support system: for iOS/Android/Windows.
Charging duration: <2 hours.
Lithium battery capacity: 140 mAh.
Key lifespan: >3 million times.
Standby duration: ≥ 150 days.
Standby current: 0.3 mA.
Modulation method: GFSK.
Working voltage: 3.0-4.2V.
Packaging weight: 246g.
Product size: 282.00×97.00×17.25mm/11.1×3.82×0.68inch.
Made in China`,
    stock: 18,
    badge: "Free Gift"
  },

 {
    id: 11,
    name: "GearUP WM30 Transparent Crystal 2.4G + Bluetooth Magnetic Wireless Mouse- Gray Color",
    category: "Mouse",
    price: 920.00,
    oldPrice: 1200,
    images: [
      "https://i.imgur.com/c1YvuPQ.png",
      "https://i.imgur.com/hU9JXMh.png",
      "https://i.imgur.com/my2vcM1.png",
      "https://i.imgur.com/CwYgWA6.png"
    ],
    description: `Brand: GearUP.
Model: WM30.
Features: Transparent body with a clear view of internal components, Ergonomic design with textured grip for comfortable use, Connect to up to 3 devices at the same time, Long battery life, Type-C charging port.
Product Material: ABS.
Product Weight: 76±5g.
Working Mode: 2.4G + BT1 + BT2.
Operating Current: 30mA.
Battery Capacity: 400mAh.
DPI: 800-1200-1600-2400.
Mouse Size: L113 * W57 * H25mm.`,
    stock: 13,
    badge: "Hot"
  },

   {
    id: 12,
    name: "Inphic F1 2.4G Rechargeable Wireless Mouse",
    category: "mouse",
    price: 1000.00,
    oldPrice: 0,
    images: [
      "https://i.imgur.com/pi5Vqrm.png",
      "https://i.imgur.com/4mvxmEa.png",
      "https://i.imgur.com/PtUkDgN.png"
    ],
    description: `Brand: Inphic.
Model: F1 (2.4G Version).
Connectivity: 2.4GHz Wireless (via USB Nano Receiver).
Battery Capacity: 500mAh (Rechargeable).
DPI Levels: 800 / 1200 / 1600.
Number of Keys: 6 Buttons (Left, Right, Scroll, DPI, Forward, Backward).
Dimensions: 120 x 76.5 x 40 mm.
Weight: ~95g.
Charging Interface: Micro-USB / USB-C (varies by production year).
Benefits & Usability: Eco-Friendly & Economical, No More “Low Battery” Anxiety with top-mounted power lights, Ergonomic shape for natural hand position, High Efficiency with side buttons (Forward/Back).`,
    stock: 8,
    badge: "new"
  },

{
    id: 13,
    name: "AULA AM205 Wireless USB Mouse — 2.4 GHz Compact Optical Mouse with Adjustable DPI (Black)",
    category: "mouse",
    price: 700.00,
    oldPrice: 800,
    images: [
      "https://i.imgur.com/ywjDe67.png",
      "https://i.imgur.com/Xl6aw5Q.png",
      "https://i.imgur.com/sM13oyu.png",
      "https://i.imgur.com/Oo5UbUP.png"
    ],
    description: `Brand: AULA.
Model: AM205 Wireless Mouse.
Connection: Wireless 2.4 GHz via USB dongle.
Buttons: 4 (Left, Right, Scroll, DPI).
DPI Levels: 800 / 1200 / 1600.
Wireless Range: Up to ~10 meters.
Sensor Type: Optical.`,
    stock: 13,
    badge: "Budget"
  },

   {
    id: 14,
    name: "32-in-1 Multi-Functional Cleaning Kit – White",
    category: "accessories",
    price: 1000.00,
    oldPrice: 1500,
    images: [
      "https://i.imgur.com/NeeGbFX.png",
      "https://i.imgur.com/g15ahm3.png",
      "https://i.imgur.com/EbcGOBO.png",
      "https://i.imgur.com/z8Tzfwq.png"
    ],
    description: `Material: Plastic.
Color: White.
Features: SD card storage slot, 7 days replacement warranty.
Product Size: 5.5 x 5.5 x 13.2cm.
32 Types Of Kit Included:
1. Storage body, 2. SD card storage slot, 3. SD card storage slot, 4. Game card storage slot, 5. Keyboard brush, 6. Screen cleaning cloth, 7. Screen cleaner (no liquid), 8. Capacitive pen, 9. Tweezers, 10. Extension pole, 11. Hook shaped head (charging port cleaning), 12. Mobile phone speaker hole cleaning brush, 13. Small soft bristled brush, 14. Small hard bristle brush, 15. Type-C mobile phone charging port cleaner, 16. Type-C Data Cable Cleaner, 17. Charging port cleaner for iPhone, 18. Data cable cleaner for iPhone, 19. CMOS cleaning stick, 20. Gap knife (for removing dirt from gaps), 21. Keyboard Puller, 22. Bluetooth earphone charging case flat head brush, 23. Side dust scraper, 24. Camera lens cleaning, 25. Small bend brush, 26. Retrieve card pin, 27. Bluetooth earphone charging case pointed brush, 28. Soft bristled short brush, 29. Cleaning sponge head for Bluetooth earphone charging case, 30. Earphone brush, 31. Clean pen tip, 32. Key puller.`,
    stock: 20,
    badge: "hot"
  },

{
    id: 15,
    name: "Fantech P31 Keyboard, Mouse & Mousepad Combo",
    category: "Keyboard",
    price: 2300,
    oldPrice: 2500,
    images: [
      "https://i.imgur.com/dh9DY23.png",
      "https://i.imgur.com/4QNUPUa.png"
    ],
    description: `Model: Fantech P31.
Keyboard: Backlit floating-keys multimedia gaming, 104 keys, 26 keys anti-ghosting, 10 million keystroke lifecycle, 100Hz ultra polling rate, Dimensions: 466 × 155 × 42 mm.
Mouse: On-the-fly adjustable DPI (200-8000), Huano 5 million clicks lifetime, Silicon rubber roller, 4-color RGB lighting, 60 IPS / 20G acceleration, 125Hz polling rate, 1.8m nylon braided cable, Dimensions: 128 × 68 × 41 mm.
Mouse Pad: Anti-slip design.`,
    stock: 12,
    badge: "combo"
  },

{
    id: 16,
    name: "SmarToools RB40 AA 1.5V 2600mWh Rechargeable Battery (4Pcs Set)",
    category: "Battery",
    price: 1000.00,
    oldPrice: 1200,
    images: [
      "https://i.imgur.com/Jxemjbi.png",
      "https://i.imgur.com/n84qARx.png",
      "https://i.imgur.com/EepiCKM.png"
    ],
    description: `Brand Name: SMARTOOOLS.
Model Number: RB40.
Material: Lithium-ion battery.
Charging Method: Type-C USB cable.
Charging Voltage: 5V.
Nominal Voltage: 1.5V.
Typical Capacity: 1733mAh.
Capacity: 2600mWh.
Dimensions: Diameter 13.7mm - 14.5mm, Height 49.5mm - 50.5mm.
Weight: 18.2(+-0.5)g.
Charging Time: 2 hours (+-0.5).
LED Indicators: Blink when charging, Stay on when fully charged.
Protection: Short-circuited / over-flowed / over-charged / over-discharged protection YES.`,
    stock: 24,
    badge: "Hot"
  },   
   
];

/* Store settings */
const STORE_SETTINGS = {
  storeName: "TechKitch",
  currencySymbol: "৳",
  freeShippingThreshold: 2000,
  shippingFee: 150,
  taxRate: 0.00
};

// Global safety fallback to set primary image
PRODUCTS.forEach(product => {
  if (product.images && product.images.length > 0) {
    product.image = product.images[0];
  }
});
