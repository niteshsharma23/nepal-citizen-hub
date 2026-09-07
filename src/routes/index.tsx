import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  EMERGENCY,
  LAND,
  LANGUAGES,
  MAP_SEARCHES,
  SERVICES,
  mapUrl,
  type Lang,
} from "@/lib/sewa-data";
import { ExtLink, InfoCard, Notice, Section } from "@/components/sewa/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "सेवा नेपाल | Sewa Nepal — Nepal Citizen Services Portal" },
      {
        name: "description",
        content:
          "Sewa Nepal is a unified directory of official Nepal citizen services: National ID, passport, driving licence, land services, emergency numbers, market prices, education and NEPSE links.",
      },
      { property: "og:title", content: "सेवा नेपाल | Sewa Nepal — Nepal Citizen Services Portal" },
      {
        property: "og:description",
        content:
          "A unified, mobile-friendly directory of official Nepal government citizen services with emergency numbers, land guidance, market prices and NEPSE links.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SewaNepal,
});

const UI: Record<
  Lang,
  {
    tagline: string;
    heroTitle: string;
    heroSub: string;
    searchPlaceholder: string;
    popular: string;
    servicesTitle: string;
    servicesSub: string;
    landTitle: string;
    landSub: string;
    checklistTitle: string;
    checklist: string[];
    landDisclaimer: string;
    emergencyTitle: string;
    emergencySub: string;
    call: string;
    mapsTitle: string;
    lpgTitle: string;
    lpgSafetyTitle: string;
    lpgSafety: string[];
    marketTitle: string;
    marketSub: string;
    eduTitle: string;
    eduSub: string;
    statsTitle: string;
    statsSource: string;
    newsTitle: string;
    newsSub: string;
    newsDisclaimer: string;
    langNotice: string;
    footerDisclaimer: string;
    footerPrivacy: string;
    govPortal: string;
    openOfficial: string;
    viewSource: string;
    madeWith: string;
  }
> = {
  ne: {
    tagline: "नेपाल नागरिक सेवा पोर्टल",
    heroTitle: "सरकारी सेवा, अब तपाईंको पहुँचमा।",
    heroSub:
      "राष्ट्रिय परिचयपत्र, राहदानी, सवारी अनुमतिपत्र, भूमि सेवा, आपत्कालीन सम्पर्क र अन्य आधिकारिक सेवाहरू — एकै ठाउँमा।",
    searchPlaceholder: "सेवा खोज्नुहोस्… जस्तै: पासपोर्ट, कर, मतदाता",
    popular: "लोकप्रिय:",
    servicesTitle: "नागरिक सेवा सूची",
    servicesSub: "आधिकारिक सरकारी पोर्टलहरूको विश्वसनीय सीधा लिङ्कहरू।",
    landTitle: "भूमि सेवा",
    landSub: "नक्सा, कर र विवाद समाधान सम्बन्धी आधिकारिक स्रोत र मार्गदर्शन।",
    checklistTitle: "जग्गा विवाद समाधानको साधारण चरणहरू",
    checklist: [
      "सम्बन्धित कागजातहरू संकलन गर्नुहोस् (लालपुर्जा, नक्सा, कर रसिद, सिमाना विवरण)",
      "मेरो कित्तामा नक्सा र अभिलेख जाँच्नुहोस्",
      "वडा/स्थानीय तहमा मेलमिलाप अनुरोध गर्नुहोस्",
      "सम्बन्धित मालपोत/नापी कार्यालयमा निवेदन दिनुहोस्",
      "आवश्यकता अनुसार कानुनी परामर्श वा अदालतको सहारा लिनुहोस्",
    ],
    landDisclaimer:
      "⚠️ यो सामान्य जानकारी मात्र हो — कानुनी सल्लाह होइन। निर्णयअघि अधिकृत कानुन व्यवसायीको परामर्श लिनुहोस्।",
    emergencyTitle: "आपत्कालीन सेवा",
    emergencySub: "एक-ट्यापमा फोन गर्न तलका ठूला बटनहरू प्रयोग गर्नुहोस्।",
    call: "फोन गर्नुहोस्",
    mapsTitle: "नजिकको सेवा खोज्नुहोस् (Google Maps)",
    lpgTitle: "एलपीजी ग्यास सेवा",
    lpgSafetyTitle: "ग्यास चुहावट हुँदा सुरक्षा उपाय",
    lpgSafety: [
      "तुरुन्तै नियमन नोभ (regulator) बन्द गर्नुहोस् र झ्याल-ढोका खोल्नुहोस्",
      "आगो, चिलिम वा बिजुलीको स्विच नचलाउनुहोस्",
      "सिलिन्डरलाई खुला ठाउँमा लैजानुहोस् र डिलर/दमकल (101) मा खबर गर्नुहोस्",
    ],
    marketTitle: "दैनिक बजार मूल्य",
    marketSub:
      "आधिकारिक दैनिक मूल्यका लागि तलका स्रोत हेर्नुहोस्। थोक र खुद्रा मूल्य फरक हुन सक्छ।",
    eduTitle: "संस्था र शिक्षा",
    eduSub: "सरकारी निकाय, विश्वविद्यालय र छात्रवृत्ति सम्बन्धी आधिकारिक स्रोत।",
    statsTitle: "उच्च शिक्षा तथ्याङ्क झलक",
    statsSource: "स्रोत: यूजीसी/इएमआईएस उच्च शिक्षा प्रतिवेदन २०२३/२४",
    newsTitle: "विश्व समाचार र NEPSE",
    newsSub: "आधिकारिक स्रोतका सीधा लिङ्कहरू — यहाँ लाइभ फिड वा भविष्यवाणी छैन।",
    newsDisclaimer:
      "⚠️ यो जानकारी सामान्य जागरूकताका लागि मात्र हो; लगानी सल्लाह होइन।",
    langNotice:
      "समीक्षित अनुवाद तयार गरिँदैछ; शुद्धताका लागि नेपाली सामग्री देखाइएको छ।",
    footerDisclaimer:
      "सेवा नेपाल एक सूचना निर्देशिका मात्र हो — यो आधिकारिक आवेदन-प्रशोधन प्रणाली होइन।",
    footerPrivacy:
      "गोपनीयता: यहाँ नागरिकता नम्बर, राष्ट्रिय परिचयपत्र नम्बर, OTP, पासवर्ड वा बैंक विवरण कहिल्यै नप्रविष्ट गर्नुहोस्।",
    govPortal: "नेपाल सरकारको आधिकारिक पोर्टल",
    openOfficial: "आधिकारिक साइट खोल्नुहोस्",
    viewSource: "स्रोत हेर्नुहोस्",
    madeWith: "नागरिक सूचनाका लागि बनाइएको",
  },
  en: {
    tagline: "Nepal Citizen Services Portal",
    heroTitle: "सरकारी सेवा, अब तपाईंको पहुँचमा।",
    heroSub:
      "National ID, passport, driving licence, land services, emergency contacts and other official services — all in one place.",
    searchPlaceholder: "Search services… e.g. passport, tax, voter",
    popular: "Popular:",
    servicesTitle: "Citizen Service Directory",
    servicesSub: "Trusted direct links to official government portals.",
    landTitle: "Land Services",
    landSub: "Official sources and guidance for maps, tax and dispute resolution.",
    checklistTitle: "Simple steps for resolving a land dispute",
    checklist: [
      "Collect your documents (ownership certificate, map, tax receipts, boundary details)",
      "Check the map and records on Mero Kitta",
      "Request mediation at the ward / local level",
      "File an application at the relevant land revenue / survey office",
      "Seek legal advice or court support if needed",
    ],
    landDisclaimer:
      "⚠️ This is general information only — not legal advice. Consult a licensed legal professional before making decisions.",
    emergencyTitle: "Emergency Services",
    emergencySub: "Use the large one-tap buttons below to call.",
    call: "Call",
    mapsTitle: "Find nearby services (Google Maps)",
    lpgTitle: "LPG Gas Services",
    lpgSafetyTitle: "Gas leak safety steps",
    lpgSafety: [
      "Turn off the regulator immediately and open doors and windows",
      "Do not use flames, cigarettes or electrical switches",
      "Move the cylinder to an open area and inform your dealer / Fire Brigade (101)",
    ],
    marketTitle: "Daily Market Prices",
    marketSub:
      "Check the sources below for official daily prices. Wholesale and retail prices can differ.",
    eduTitle: "Institutions & Education",
    eduSub: "Official sources on government bodies, universities and scholarships.",
    statsTitle: "Higher Education Statistics at a Glance",
    statsSource: "Source: UGC/EMIS Higher Education Report 2023/24",
    newsTitle: "World News & NEPSE",
    newsSub: "Direct links to official sources — no live feeds or predictions here.",
    newsDisclaimer:
      "⚠️ This information is for general awareness only and is not investment advice.",
    langNotice:
      "A reviewed translation is being prepared; Nepali content is displayed for accuracy.",
    footerDisclaimer:
      "Sewa Nepal is an information directory only — it is not an official application-processing system.",
    footerPrivacy:
      "Privacy: never enter your citizenship number, NID, OTP, passwords or bank details here.",
    govPortal: "Official Government of Nepal portal",
    openOfficial: "Open official site",
    viewSource: "View source",
    madeWith: "Built for citizen information",
  },
};

const NAV = [
  { id: "services", ne: "सेवाहरू", en: "Services" },
  { id: "land", ne: "भूमि सेवा", en: "Land Services" },
  { id: "emergency", ne: "आपत्कालीन", en: "Emergency" },
  { id: "market", ne: "बजार मूल्य", en: "Market Prices" },
  { id: "education", ne: "शिक्षा", en: "Education" },
  { id: "nepse", ne: "NEPSE", en: "NEPSE" },
  { id: "help", ne: "सहायता", en: "Help" },
];

function SewaNepal() {
  const [langCode, setLangCode] = useState("ne");
  const lang: Lang = langCode === "en" ? "en" : "ne";
  const s = UI[lang];
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter(
      (c) =>
        c.title.ne.toLowerCase().includes(q) ||
        c.title.en.toLowerCase().includes(q) ||
        c.desc.en.toLowerCase().includes(q) ||
        c.desc.ne.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen">
      {/* Top utility strip */}
      <div className="gov-band text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs">
          <span>{s.tagline}</span>
          <label className="flex items-center gap-2">
            <span className="sr-only">Language / भाषा</span>
            <select
              aria-label="Language / भाषा"
              value={langCode}
              onChange={(e) => setLangCode(e.target.value)}
              className="h-8 rounded-md bg-primary-foreground/15 px-2 text-xs font-medium text-primary-foreground outline-none focus-visible:outline-2 [&>option]:text-foreground"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-lg text-primary-foreground" aria-hidden="true">
              🇳🇵
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight">
                सेवा नेपाल
              </span>
              <span className="block text-xs font-semibold text-muted-foreground">
                Sewa Nepal
              </span>
            </span>
          </a>
          <nav aria-label="Main" className="ml-auto w-full overflow-x-auto sm:w-auto">
            <ul className="flex items-center gap-1 text-sm font-semibold">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="block whitespace-nowrap rounded-md px-2.5 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {n[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="hero-band text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {s.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {s.heroSub}
          </p>

          <div className="mt-7 max-w-2xl">
            <label htmlFor="service-search" className="sr-only">
              {s.searchPlaceholder}
            </label>
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={s.searchPlaceholder}
              className="min-h-13 w-full rounded-xl border-2 border-transparent bg-surface px-4 py-3.5 text-base text-foreground shadow-lift placeholder:text-muted-foreground focus-visible:border-saffron"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-primary-foreground/80">{s.popular}</span>
            {[
              { href: "https://citizenportal.donidcr.gov.np/ne", ne: "राष्ट्रिय परिचयपत्र", en: "National ID" },
              { href: "https://nepalpassport.gov.np/", ne: "राहदानी", en: "Passport" },
              { href: "https://applydl.dotm.gov.np/login", ne: "सवारी अनुमतिपत्र", en: "Driving Licence" },
              { href: "https://taxpayerportal.ird.gov.np/", ne: "प्यान/कर", en: "PAN/Tax" },
            ].map((q) => (
              <a
                key={q.href}
                href={q.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-foreground/15 px-3.5 py-1.5 font-semibold transition-colors hover:bg-primary-foreground/30"
              >
                {q[lang]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {langCode !== "ne" && langCode !== "en" ? (
        <div className="mx-auto mt-6 max-w-6xl px-4">
          <Notice tone="warn">{s.langNotice}</Notice>
        </div>
      ) : null}

      {/* Services */}
      <Section id="services" title={s.servicesTitle} subtitle={s.servicesSub}>
        {filtered.length === 0 ? (
          <Notice>
            {lang === "ne"
              ? "मिल्ने सेवा भेटिएन। अर्को शब्द प्रयास गर्नुहोस्।"
              : "No matching service found. Try another word."}
          </Notice>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <InfoCard
                key={c.href + c.title.en}
                icon={c.icon}
                title={c.title[lang]}
                desc={c.desc[lang]}
                href={c.href}
                cta={s.openOfficial}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Land */}
      <div className="bg-secondary/60">
        <Section id="land" title={s.landTitle} subtitle={s.landSub}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LAND.map((c) => (
              <InfoCard
                key={c.title.en}
                icon={c.icon}
                title={c.title[lang]}
                desc={c.desc[lang]}
                href={c.href}
                cta={s.openOfficial}
              />
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold">{s.checklistTitle}</h3>
            <ol className="mt-4 space-y-3">
              {s.checklist.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-5">
              <Notice tone="warn">{s.landDisclaimer}</Notice>
            </div>
          </div>
        </Section>
      </div>

      {/* Emergency */}
      <Section id="emergency" title={s.emergencyTitle} subtitle={s.emergencySub}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {EMERGENCY.map((e) => (
            <a
              key={e.num}
              href={`tel:${e.num}`}
              className="card-base flex flex-col items-center gap-1 p-5 text-center"
            >
              <span aria-hidden="true" className="text-3xl">{e.icon}</span>
              <span className="text-sm font-bold">{lang === "ne" ? e.ne : e.en}</span>
              <span className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-destructive px-4 py-2 text-lg font-extrabold tracking-wide text-destructive-foreground">
                {s.call} {e.num}
              </span>
            </a>
          ))}
        </div>

        <h3 className="mt-8 text-base font-bold">{s.mapsTitle}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {MAP_SEARCHES.map((m) => (
            <ExtLink key={m.q} href={mapUrl(m.q)} variant="outline">
              {lang === "ne" ? m.ne : m.en}
            </ExtLink>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InfoCard
            icon="🚔"
            title="Nepal Police"
            desc={
              lang === "ne"
                ? "नेपाल प्रहरीको आधिकारिक सूचना र सेवा।"
                : "Official Nepal Police information and services."
            }
            href="https://www.nepalpolice.gov.np/"
            cta={s.openOfficial}
          />
          <InfoCard
            icon="💻"
            title="Cyber Bureau"
            desc={
              lang === "ne"
                ? "साइबर अपराध उजुरी र जानकारीका लागि आधिकारिक निकाय।"
                : "Official bureau for cybercrime complaints and information."
            }
            href="https://cyberbureau.nepalpolice.gov.np/"
            cta={s.openOfficial}
          />
        </div>
      </Section>

      {/* LPG */}
      <div className="bg-secondary/60">
        <Section id="lpg" title={s.lpgTitle}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon="🛢️"
              title={lang === "ne" ? "नेपाल आयल निगम" : "Nepal Oil Corporation"}
              desc={
                lang === "ne"
                  ? "इन्धन मूल्य, आपूर्ति र सूचना।"
                  : "Fuel prices, supply and official notices."
              }
              href="https://noc.org.np/"
              cta={s.openOfficial}
            />
            <InfoCard
              icon="🏪"
              title={lang === "ne" ? "एलपीजी डिलर सूची" : "LPG Distributor Directory"}
              desc={
                lang === "ne"
                  ? "आधिकारिक ग्यास वितरकहरूको सूची।"
                  : "Official list of LPG distributors."
              }
              href="https://noc.org.np/"
              cta={s.viewSource}
            />
            <InfoCard
              icon="📝"
              title={lang === "ne" ? "सिलिन्डर गुनासो" : "Gas Cylinder Complaint"}
              desc={
                lang === "ne"
                  ? "गुणस्तर वा तौल सम्बन्धी गुनासो अनलाइन दर्ता गर्नुहोस्। उपभोक्ता गुनासो नम्बर: 1137।"
                  : "Register quality or weight complaints online. Consumer complaint number: 1137."
              }
              href="https://monitoring.doc.gov.np/ConsumerComplaint"
              cta={lang === "ne" ? "गुनासो फारम खोल्नुहोस्" : "Open complaint form"}
            />
          </div>
          <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold">{s.lpgSafetyTitle}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed">
              {s.lpgSafety.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

      {/* Market */}
      <Section id="market" title={s.marketTitle} subtitle={s.marketSub}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon="🥬"
            title="AMPIS Nepal"
            desc={
              lang === "ne"
                ? "कृषि उपजको दैनिक आधिकारिक बजार मूल्य।"
                : "Daily official agricultural market prices."
            }
            href="https://www.ampis.gov.np/"
            cta={s.viewSource}
          />
          <InfoCard
            icon="🍎"
            title={lang === "ne" ? "कालीमाटी बजार" : "Kalimati Market"}
            desc={
              lang === "ne"
                ? "तरकारी र फलफूलको दैनिक मूल्य।"
                : "Daily vegetable and fruit prices."
            }
            href="https://kalimatimarket.gov.np/price"
            cta={s.viewSource}
          />
          <InfoCard
            icon="🏛️"
            title={lang === "ne" ? "वाणिज्य तथा उपभोक्ता हित विभाग" : "Dept. of Commerce & Consumer Protection"}
            desc={
              lang === "ne"
                ? "उपभोक्ता संरक्षण र बजार अनुगमन सम्बन्धी सूचना।"
                : "Consumer protection and market monitoring information."
            }
            href="https://monitoring.doc.gov.np/ConsumerComplaint"
            cta={s.openOfficial}
          />
        </div>
      </Section>

      {/* Education */}
      <div className="bg-secondary/60">
        <Section id="education" title={s.eduTitle} subtitle={s.eduSub}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon="🏢" title={lang === "ne" ? "सरकारी कार्यालय सूची" : "Government Offices Directory"} desc={lang === "ne" ? "मन्त्रालय, विभाग र निकायहरूको आधिकारिक सूची।" : "Official directory of ministries, departments and agencies."} href="https://www.nepal.gov.np/" cta={s.openOfficial} />
            <InfoCard icon="🤝" title={lang === "ne" ? "गैरसरकारी संस्था (NGO/INGO)" : "NGO/INGO Information"} desc={lang === "ne" ? "दर्ता भएका गैरसरकारी संस्थाको जानकारी।" : "Information on registered NGOs and INGOs."} href="https://www.swc.org.np/" cta={s.openOfficial} />
            <InfoCard icon="🎓" title={lang === "ne" ? "विश्वविद्यालय र क्याम्पस" : "Universities & Colleges"} desc={lang === "ne" ? "नेपालका विश्वविद्यालय र क्याम्पसहरूको जानकारी।" : "Information on universities and campuses in Nepal."} href="https://ugcnepal.edu.np/" cta={s.openOfficial} />
            <InfoCard icon="✅" title={lang === "ne" ? "UGC मान्यता प्राप्त संस्था" : "UGC-Accredited Institutions"} desc={lang === "ne" ? "विश्वविद्यालय अनुदान आयोग मान्यता प्राप्त उच्च शिक्षा संस्था।" : "Higher education institutions accredited by the UGC."} href="https://ugcnepal.edu.np/" cta={s.openOfficial} />
            <InfoCard icon="📚" title={lang === "ne" ? "विद्यालय र छात्रवृत्ति" : "Schools & Scholarships"} desc={lang === "ne" ? "विद्यालय शिक्षा र छात्रवृत्ति सम्बन्धी स्रोत।" : "Resources on school education and scholarships."} href="https://cehrd.gov.np/" cta={s.openOfficial} />
            <InfoCard icon="📊" title={lang === "ne" ? "राष्ट्रिय तथ्याङ्क कार्यालय" : "National Statistics Office"} desc={lang === "ne" ? "जनगणना र राष्ट्रिय तथ्याङ्कका आधिकारिक स्रोत।" : "Official source of census and national statistics."} href="https://nsonepal.gov.np/" cta={s.openOfficial} />
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold">{s.statsTitle}</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  label: lang === "ne" ? "स्नातक तहका विद्यार्थी — महिला" : "Bachelor-level students — Female",
                  value: "57.61%",
                },
                {
                  label: lang === "ne" ? "स्नातक तहका विद्यार्थी — पुरुष" : "Bachelor-level students — Male",
                  value: "42.39%",
                },
                {
                  label: lang === "ne" ? "कुल उच्च शिक्षा भर्ना" : "Total higher education enrolment",
                  value: "633,053",
                },
              ].map((st) => (
                <div key={st.label} className="rounded-lg bg-accent/70 p-4">
                  <p className="text-2xl font-extrabold text-primary">{st.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{st.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{s.statsSource}</p>
          </div>
        </Section>
      </div>

      {/* News & NEPSE */}
      <Section id="nepse" title={s.newsTitle} subtitle={s.newsSub}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard icon="🌍" title={lang === "ne" ? "विश्व समाचार" : "World News"} desc={lang === "ne" ? "Google News बाट विश्वका मुख्य समाचार।" : "Top world headlines via Google News."} href="https://news.google.com/world" cta={s.viewSource} />
          <InfoCard icon="🇳🇵" title={lang === "ne" ? "नेपाल समाचार" : "Nepal News"} desc={lang === "ne" ? "Google News बाट नेपालका समाचार।" : "Nepal headlines via Google News."} href="https://news.google.com/" cta={s.viewSource} />
          <InfoCard icon="📈" title="NEPSE" desc={lang === "ne" ? "नेपाल स्टक एक्सचेन्जको आधिकारिक बजार सूचना।" : "Official market information from Nepal Stock Exchange."} href="https://www.nepalstock.com/" cta={s.openOfficial} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { href: "https://www.nepalstock.com/today-price", ne: "आजको मूल्य", en: "Today's Price" },
            { href: "https://www.nepalstock.com/", ne: "बजार सारांश", en: "Market Summary" },
            { href: "https://www.nepalstock.com/market-depth", ne: "बजार गहिराइ", en: "Market Depth" },
            { href: "https://www.nepalstock.com/floorsheet", ne: "फ्लोर सिट", en: "Floor Sheet" },
            { href: "https://www.nepalstock.com/news/category/0", ne: "परिपत्र", en: "Circulars" },
          ].map((l) => (
            <ExtLink key={l.href + l.en} href={l.href} variant="outline">
              {l[lang]}
            </ExtLink>
          ))}
        </div>
        <div className="mt-5">
          <Notice tone="warn">{s.newsDisclaimer}</Notice>
        </div>
      </Section>

      {/* Help */}
      <div className="bg-secondary/60">
        <Section id="help" title={lang === "ne" ? "सहायता" : "Help"}>
          <Notice>
            {lang === "ne"
              ? "कुनै सेवाको बारेमा निश्चित छैन? आधिकारिक स्रोतबाट नै जानकारी पुष्टि गर्नुहोस् र हेलो सरकारमा गुनासो दर्ता गर्न सक्नुहुन्छ।"
              : "Not sure about a service? Always verify information from official sources, and you can lodge grievances via Hello Sarkar."}
          </Notice>
          <div className="mt-4 flex flex-wrap gap-2">
            <ExtLink href="https://www.nepal.gov.np/" variant="outline">
              {s.govPortal}
            </ExtLink>
            <ExtLink href="https://hellosarkar.opmcm.gov.np/" variant="outline">
              Hello Sarkar
            </ExtLink>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="gov-band text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15" aria-hidden="true">🇳🇵</span>
            <span className="font-extrabold">सेवा नेपाल · Sewa Nepal</span>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary-foreground/85">
            {s.footerDisclaimer}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-primary-foreground/85">
            {s.footerPrivacy}
          </p>
          <a
            href="https://www.nepal.gov.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4"
          >
            {s.govPortal} ↗
          </a>
          <p className="mt-6 border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/70">
            {s.madeWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
