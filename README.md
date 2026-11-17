# 🌶️ જય માડી મસાલા (Jay Madi Masala)

> **દરેક રસોઈમાં ઉમેરો શુદ્ધતાનો અસલ સ્વાદ!**  
> *100% શુદ્ધ અને પરંપરાગત ઘરગથ્થુ મસાલા — સમગ્ર ગુજરાતમાં હોલસેલ અને રિટેલ સપ્લાય.*

A modern, fast, responsive website for **Jay Madi Masala (જય માડી મસાલા ભંડાર)**, built using clean HTML5, CSS3, and Vanilla JavaScript with a traditional Gujarati design language.

---

## 🌟 મુખ્ય વિશેષતાઓ (Key Features)

- **Authentic Gujarati UI/UX**: Designed in pure Gujarati using Google Fonts (*Noto Sans Gujarati* & *Hind Vadodara*) with a warm spice palette (Paprika Red, Turmeric Gold, and Cream).
- **Interactive Product Catalog**: Dynamic category filtering powered by `products.js` without any framework overhead:
  - મરચું (Chilli Powder - Desi, Kashmiri, Reshampatto, Patni, Teja, Tomato)
  - હળદર (Pure Haldi Powder)
  - ધાણાજીરું (Dhana Jeera Powder)
  - ગરમ મસાલો (Authentic Garam Masala)
  - આખા મસાલા (Whole Spices)
  - અન્ય ઉત્પાદનો (Other Specialty Kitchen Spices)
- **Bulk & B2B Inquiry**: Dedicated section for grocery retailers (કરિયાણાના વેપારીઓ), hotels & restaurants, caterers, and bulk buyers without any rigid minimum quantity.
- **Grinding Service (દળવાની સેવા)**: Information on traditional on-demand spice grinding with customer-supplied raw spices.
- **3-Owner WhatsApp Contact Modal**: Direct 1-click Gujarati WhatsApp chat with all three owners:
  - **ચેતનભાઈ પટેલ**: [+91 94270 29141](https://wa.me/919427029141)
  - **નિલેશભાઈ પટેલ**: [+91 99985 83934](https://wa.me/919998583934)
  - **આલોક પટેલ**: [+91 63555 35619](https://wa.me/916355535619)
- **Google Maps Integration**: Live interactive map embed and 1-click directions link to the physical shop.
- **Form with Automated WhatsApp Generator**: Gujarati enquiry form validating 10-digit mobile numbers and auto-generating an enquiry message ready to send via WhatsApp.
- **Ultra-Fast & Mobile Friendly**: Zero heavy dependencies, optimized WebP/JPG assets, smooth CSS animations, and `prefers-reduced-motion` compliance.
- **SEO & Schema.org**: Fully structured `LocalBusiness` JSON-LD schema for local search presence across Gujarat.

---

## 📁 પ્રોજેક્ટ સ્ટ્રક્ચર (Project Structure)

```text
jay-madi-masala/
│
├── index.html           # Main semantic HTML5 webpage with JSON-LD schema
├── style.css            # Responsive CSS3 styling (desktop, tablet, mobile)
├── script.js            # Catalog rendering, WhatsApp modal, and form validation
├── products.js          # Product data catalog (categories, varieties, pack sizes)
├── images/              # High-quality spice photography assets
│   ├── red-chilli.jpg   # Chilli powder showcase
│   ├── turmeric.jpg     # Turmeric showcase
│   ├── dhana-jiru.jpg   # Coriander-cumin showcase
│   └── garam-masala.jpg # Garam masala showcase
├── .gitignore           # Git ignore rules for clean repository
└── README.md            # Project documentation and guide
```

---

## 🚀 લોકલ પ્રિવ્યુ કેવી રીતે કરવું? (How to Run Locally)

This is a static website, so you do not need Node.js or any backend server:

1. **Directly in Browser**: Double-click [index.html](file:///d:/jay%20madi%20masala%20site/index.html) to open it in any web browser (Chrome, Edge, Firefox, Safari).
2. **VS Code Live Server**:
   - Open this folder in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.
3. **Python Simple HTTP Server** (optional):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 📦 નવા પ્રોડક્ટ કેવી રીતે ઉમેરવા? (How to Add or Edit Products)

All products are defined inside [products.js](file:///d:/jay%20madi%20masala%20site/products.js). To add a new product or update pack sizes, simply edit the array:

```javascript
{
  id: "my-new-spice",
  name: "નવો મસાલો",
  category: "garam",             // mirchu | haldi | dhana | garam | akha | other
  description: "શુદ્ધ અને સ્વાદિષ્ટ મસાલો...",
  image: "images/new-spice.jpg",
  varieties: ["સ્પેશિયલ"],       // Optional variety badges
  packSizes: ["૧૦૦ ગ્રામ", "૨૫૦ ગ્રામ", "૫૦૦ ગ્રામ", "૧ કિલો"],
  bulkAvailable: true            // Shows gold 'જથ્થાબંધ ઉપલબ્ધ' badge
}
```

The website will automatically display the new card, apply category filters, and configure WhatsApp inquiry buttons without modifying HTML.

---

## 🌐 GitHub Pages પર લાઈવ હોસ્ટિંગ (Free Live Hosting)

To make your website live online for free using GitHub Pages:

1. Go to your repository on GitHub: `https://github.com/deep6161/jaymadimasala`
2. Click on **Settings** (ટેબ) > **Pages** (ડાબી બાજુ મેનૂમાં).
3. Under **Branch**, select **`main`** and folder as **`/(root)`**.
4. Click **Save**.
5. Within 1-2 minutes, your website will be live at:
   ```
   https://deep6161.github.io/jaymadimasala/
   ```

---

## 📍 સંપર્ક માહિતી (Business Contact)

- **સ્થળ**: જય માડી મસાલા ભંડાર, ગુજરાત
- **નકશો (Google Maps)**: [દિશા-નિર્દેશ મેળવો](https://maps.app.goo.gl/FH2SPqoKPusfgQY58?g_st=ic)
- **ડિલિવરી**: સમગ્ર ગુજરાતમાં સુવિધા ઉપલબ્ધ
- **સંપર્ક નંબર્સ**:
  - ચેતનભાઈ: +91 94270 29141
  - નિલેશભાઈ: +91 99985 83934
  - આલોકભાઈ: +91 63555 35619

---

## 📄 લાયસન્સ (License)

© 2026 **જય માડી મસાલા (Jay Madi Masala)**. All rights reserved.
