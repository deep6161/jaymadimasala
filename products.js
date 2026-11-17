// ========================================================
// JAY MADI MASALA — PRODUCTS DATA
// કૅટેલોગ ડેટા: ૬ કેટેગરી અને તમામ અધિકૃત જાતો
// ========================================================

const products = [
  {
    id: 1,
    category: "mirchu",
    name: "લાલ મરચું પાઉડર",
    nameEn: "Red Chilli Powder",
    image: "images/red-chilli.jpg",
    desc: "ઉત્કૃષ્ટ ગુણવત્તાવાળા લાલ મરચાંમાંથી બનેલું, કુદરતી લાલ-ચટક રંગ અને તીખાશ સાથે ૧૦૦% શુદ્ધ મરચું પાઉડર.",
    sizes: ["100g", "250g", "500g", "1kg+"],
    varieties: ["દેશી", "કાશ્મીરી", "રેશમપટ્ટો", "પટણી", "તેજા", "ટોમેટો"],
    bulk: true
  },
  {
    id: 2,
    category: "haldi",
    name: "હળદર પાઉડર",
    nameEn: "Turmeric Powder",
    image: "images/turmeric.jpg",
    desc: "કુદરતી સુગંધ અને ઘેરા સોનેરી પીળા રંગથી ભરપૂર, આરોગ્યપ્રદ અને કોઈપણ જાતની ભેળસેળ રહિત શુદ્ધ હળદર.",
    sizes: ["100g", "250g", "500g", "1kg+"],
    varieties: ["રાજાપુરી", "સેલમ"],
    bulk: true
  },
  {
    id: 3,
    category: "dhana",
    name: "ધાણાજીરું પાઉડર",
    nameEn: "Coriander Cumin Powder",
    image: "images/dhana-jiru.jpg",
    desc: "ઉચ્ચ ગુણવત્તાના સાબુત ધાણા અને જીરાનું સપ્રમાણ પરંપરાગત મિશ્રણ, જે રસોઈને આપે અસલ સ્વાદ અને મહેક.",
    sizes: ["100g", "250g", "500g", "1kg+"],
    varieties: ["દેશી ધાણાજીરું"],
    bulk: true
  },
  {
    id: 4,
    category: "garam",
    name: "ગરમ મસાલો",
    nameEn: "Garam Masala",
    image: "images/garam-masala.jpg",
    desc: "ખાસ પસંદ કરેલા ખડા મસાલાઓનું અનોખું સંયોજન, જે શાક, દાળ અને પુલાવને બનાવે અત્યંત સુગંધિત અને સ્વાદિષ્ટ.",
    sizes: ["100g", "250g", "500g"],
    varieties: ["સ્પેશિયલ ગરમ મસાલો"],
    bulk: false
  },
  {
    id: 5,
    category: "akha",
    name: "આખા મસાલા",
    nameEn: "Whole Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",
    desc: "પસંદગીના શુદ્ધ અને સાફ કરેલા આખા મસાલા રોજિંદી રસોઈ, વઘાર અને પ્રસંગોચિત જમણવાર માટે.",
    sizes: ["100g", "250g", "500g", "1kg+"],
    varieties: ["રાઈ", "મેથી", "અજમો", "તલ", "વરીયાળી", "આખા ધાણા"],
    bulk: true
  },
  {
    id: 6,
    category: "other",
    name: "સ્પેશિયલ હિંગ પાઉડર",
    nameEn: "Premium Asafoetida",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&auto=format&fit=crop&q=80",
    desc: "તીવ્ર અને તાજી સુગંધ ધરાવતી ઉત્તમ હિંગ, જે થોડીક માત્રામાં પણ ભોજનને અનોખો સ્વાદ અને પાચક ગુણ આપે.",
    sizes: ["50g", "100g", "250g"],
    varieties: ["ઉચ્ચ ગુણવત્તા હિંગ"],
    bulk: false
  },
  {
    id: 7,
    category: "other",
    name: "લાલ મરચાંની ચટણી",
    nameEn: "Red Chilli Chutney",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
    desc: "પરંપરાગત દેશી પદ્ધતિથી બનાવેલી સ્વાદિષ્ટ અને ચટાકેદાર લાલ મરચાંની લસણવાળી ચટણી.",
    sizes: ["250g", "500g", "1kg"],
    varieties: ["ઘરેલું દેશી ચટણી"],
    bulk: false
  }
];
