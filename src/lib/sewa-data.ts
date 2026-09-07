export type Lang = "ne" | "en";

export const LANGUAGES: { code: string; label: string }[] = [
  { code: "ne", label: "नेपाली (Nepali)" },
  { code: "en", label: "English" },
  { code: "mai", label: "मैथिली (Maithili)" },
  { code: "bho", label: "भोजपुरी (Bhojpuri)" },
  { code: "thr", label: "थारू (Tharu)" },
  { code: "tdg", label: "तामाङ (Tamang)" },
  { code: "bjj", label: "बज्जिका (Bajjika)" },
  { code: "awa", label: "अवधी (Awadhi)" },
  { code: "new", label: "नेपाल भाषा (Nepal Bhasa)" },
  { code: "mrd", label: "मगर ढुट (Magar Dhut)" },
  { code: "dty", label: "डोटेली (Doteli)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "lif", label: "लिम्बू (Limbu)" },
  { code: "gvr", label: "गुरुङ (Gurung)" },
  { code: "mag", label: "मगही (Magahi)" },
  { code: "rai", label: "राई (Rai)" },
  { code: "xsr", label: "शेर्पा (Sherpa)" },
];

export type ServiceCard = {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  href: string;
  cta?: Record<Lang, string>;
};

const t = (ne: string, en: string) => ({ ne, en });

export const SERVICES: ServiceCard[] = [
  {
    icon: "🆔",
    title: t("राष्ट्रिय परिचयपत्र", "National ID"),
    desc: t(
      "राष्ट्रिय परिचयपत्र दर्ता, अवस्था जाँच र नागरिक पोर्टल सेवा।",
      "National ID registration, status check and citizen portal services.",
    ),
    href: "https://citizenportal.donidcr.gov.np/ne",
  },
  {
    icon: "📜",
    title: t("नागरिकता सम्बन्धी जानकारी", "Citizenship Information"),
    desc: t(
      "नागरिकता प्रमाणपत्र सम्बन्धी प्रक्रिया र गृह मन्त्रालयका सूचना।",
      "Citizenship certificate procedures and Home Ministry notices.",
    ),
    href: "https://www.nepal.gov.np/",
  },
  {
    icon: "🛂",
    title: t("राहदानी (पासपोर्ट)", "Passport"),
    desc: t(
      "ई-पासपोर्ट आवेदन, नवीकरण र आवेदनको अवस्था।",
      "E-passport application, renewal and application status.",
    ),
    href: "https://nepalpassport.gov.np/",
  },
  {
    icon: "🚗",
    title: t("सवारी चालक अनुमतिपत्र", "Driving Licence"),
    desc: t(
      "अनलाइन फारम, परीक्षा मिति र नवीकरण सेवा।",
      "Online form, exam date and licence renewal services.",
    ),
    href: "https://applydl.dotm.gov.np/login",
  },
  {
    icon: "🧾",
    title: t("प्यान र कर", "PAN and Tax"),
    desc: t(
      "प्यान दर्ता, कर विवरण दाखिला र करदाता पोर्टल।",
      "PAN registration, tax filing and taxpayer portal.",
    ),
    href: "https://taxpayerportal.ird.gov.np/",
  },
  {
    icon: "🗳️",
    title: t("मतदाता नामावली दर्ता", "Voter Registration"),
    desc: t(
      "मतदाता नामावलीमा नाम दर्ता र विवरण जाँच।",
      "Register as a voter and verify your voter details.",
    ),
    href: "https://www.nepal.gov.np/",
  },
  {
    icon: "📋",
    title: t("जन्म, विवाह, मृत्यु दर्ता", "Birth, Marriage & Death Registration"),
    desc: t(
      "व्यक्तिगत घटना दर्ता र प्रमाणपत्र सम्बन्धी जानकारी।",
      "Vital events registration and certificate information.",
    ),
    href: "https://citizenportal.donidcr.gov.np/ne",
  },
  {
    icon: "🛡️",
    title: t("सामाजिक सुरक्षा", "Social Security"),
    desc: t(
      "सामाजिक सुरक्षा भत्ता र योगदानमा आधारित सुविधा।",
      "Social security allowances and contribution-based benefits.",
    ),
    href: "https://www.nepal.gov.np/",
  },
  {
    icon: "✈️",
    title: t("वैदेशिक रोजगार", "Foreign Employment"),
    desc: t(
      "श्रम स्वीकृति, सुरक्षित आप्रवासन र गुनासो सम्बन्धी जानकारी।",
      "Labour approval, safe migration and grievance information.",
    ),
    href: "https://www.nepal.gov.np/",
  },
  {
    icon: "📱",
    title: t("नागरिक एप", "Nagarik App"),
    desc: t(
      "एकद्वार सरकारी सेवाहरूको आधिकारिक मोबाइल एप।",
      "Official one-stop mobile app for government services.",
    ),
    href: "https://nagarikapp.gov.np/",
  },
  {
    icon: "📞",
    title: t("हेलो सरकार", "Hello Sarkar"),
    desc: t(
      "सरकारी सेवा सम्बन्धी गुनासो दर्ता गर्ने प्रणाली।",
      "Grievance system for government service complaints.",
    ),
    href: "https://hellosarkar.opmcm.gov.np/",
  },
  {
    icon: "🛃",
    title: t("अध्यागमन", "Immigration"),
    desc: t(
      "भिसा, अध्यागमन नियम र विदेशी नागरिक सम्बन्धी सेवा।",
      "Visa, immigration rules and services for foreign nationals.",
    ),
    href: "https://www.immigration.gov.np/",
  },
];

export const LAND: ServiceCard[] = [
  {
    icon: "🗺️",
    title: t("मेरो कित्ता / भू-नक्सा", "Mero Kitta / Land Map"),
    desc: t(
      "कित्ता नम्बरबाट जग्गाको नक्सा र विवरण हेर्नुहोस्।",
      "View parcel maps and land details by kitta number.",
    ),
    href: "https://merokitta.dos.gov.np/application/main",
  },
  {
    icon: "💰",
    title: t("मालपोत र सम्पत्ति कर", "Land & Property Tax"),
    desc: t(
      "मालपोत तिर्ने र कर चुक्ता प्रमाणपत्र सम्बन्धी जानकारी।",
      "Land revenue payment and tax clearance certificate guidance.",
    ),
    href: "https://www.molcpa.gov.np/",
  },
  {
    icon: "⚖️",
    title: t("जग्गा विवाद सहयोग", "Land Dispute Support"),
    desc: t(
      "सिमाना, हक भोग र नामसारी विवादमा प्रक्रियागत मार्गदर्शन।",
      "Guidance for boundary, ownership and transfer disputes.",
    ),
    href: "https://www.molcpa.gov.np/",
  },
  {
    icon: "🏛️",
    title: t("भूमि व्यवस्था मन्त्रालय", "Ministry of Land Management"),
    desc: t(
      "नीति, निर्देशिका, फारम र मालपोत कार्यालयको सूची।",
      "Policies, directives, forms and land office directory.",
    ),
    href: "https://www.molcpa.gov.np/",
  },
];

export const EMERGENCY = [
  { icon: "🚓", ne: "प्रहरी", en: "Police", num: "100" },
  { icon: "🚒", ne: "दमकल", en: "Fire Brigade", num: "101" },
  { icon: "🚑", ne: "एम्बुलेन्स", en: "Ambulance", num: "102" },
  { icon: "🚦", ne: "ट्राफिक प्रहरी", en: "Traffic Police", num: "103" },
  { icon: "🧒", ne: "बाल हेल्पलाइन", en: "Child Helpline", num: "1098" },
  { icon: "🛒", ne: "उपभोक्ता गुनासो", en: "Consumer Complaint", num: "1137" },
];

export const MAP_SEARCHES = [
  { ne: "नजिकको प्रहरी चौकी", en: "Nearest police station", q: "police station near me" },
  { ne: "नजिकको एम्बुलेन्स", en: "Nearest ambulance", q: "ambulance service near me" },
  { ne: "नजिकको दमकल", en: "Nearest fire station", q: "fire station near me" },
  { ne: "नजिकको ग्यास डिलर", en: "Nearest LPG distributor", q: "LPG gas distributor near me" },
];

export const mapUrl = (q: string) =>
  `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
