// Global site settings and content that appears on every page.
// Edit values here; the pages read from this file, no HTML changes needed.

const SITE = {
  name: "Sushant Jha",
  tagline:
    "Software Engineer at Wells Fargo | Internal platforms & observability | " +
    "Published computer vision researcher (ICCET '23) | NIT Nagpur",
  location: "Hyderabad, Telangana, India",

  // Swap this for the real photo later, e.g. "assets/sushant.jpg".
  photo: "assets/profile-placeholder.svg",
  photoAlt: "Photo of Sushant Jha",

  // Top navigation. "href" can be a page, an anchor, or a full URL.
  nav: [
    { label: "About", href: "index.html#about" },
    { label: "Experience", href: "index.html#experience" },
    { label: "Research", href: "research.html" },
    { label: "Skills", href: "index.html#skills" },
    { label: "Contact", href: "index.html#contact" },
  ],

  // Each string is one paragraph of the About section.
  about: [
    "I build software at Wells Fargo, mostly internal platforms that help teams see " +
      "what their systems are doing and spend less time on manual work. One of them " +
      "turned a report managers used to wait a day to get and analyze into something " +
      "they can open and act on in minutes. Another keeps monitoring data flowing with " +
      "less than two minutes of delay. What I enjoy most isn't the code itself; it's " +
      "watching a tool I built quietly become part of how a team works.",
    "Before this, I spent my college years at NIT Nagpur on computer vision " +
      "problems: building image classifiers and a scene-search engine at IvLabs, " +
      "predicting asset prices as an intern at Decimal Point Analytics, and publishing " +
      "two papers (ICCET 2023) on recovering sharp, high-frame-rate video from a " +
      "single motion-blurred frame. It was our way of getting high-speed camera " +
      "results out of ordinary footage.",
    "Along the way I helped a non-profit, Renukiran Foundation, build the backend " +
      "for its education platform connecting trainers, students, and curriculums.",
    "These days I find myself as interested in why we build things as in how. " +
      "Outside work: long-distance running (four 10Ks and counting), chess, and " +
      "badminton.",
  ],

  contact: [
    { label: "Email", value: "hello.sushant.jha@gmail.com", url: "mailto:hello.sushant.jha@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/sushant-jha", url: "https://www.linkedin.com/in/sushant-jha" },
    { label: "GitHub", value: "github.com/sushantjha78", url: "https://github.com/sushantjha78" },
    { label: "ORCID", value: "0009-0004-8951-7336", url: "https://orcid.org/0009-0004-8951-7336" },
  ],

  footerNote: "Sushant Jha",
};
