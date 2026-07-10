export const CONFIG = {
  brand: "Riddhi Siddhi Properties",
  tagline: "Properties",
  contact: "Keval Gala",
  phone: "+919619422555",
  phoneDisplay: "+91 96194 22555",
  whatsapp:
    "https://wa.me/919619422555?text=Hello%2C%20I%20am%20interested%20in%20a%20property.%20Please%20assist.",
  callLink: "tel:+919619422555",
  email: "info@riddhisiddhiproperties.com",
  // TODO: Replace with actual office address when provided by client
  address: "Shahapur, Thane District, Maharashtra",
  hours: "Open All Week: 9:00 AM – 7:00 PM",
  region: "Shahapur–Asangaon, Thane",
  // TODO: Replace with actual domain when configured
  domain: "riddhisiddhiproperties.com",
  siteUrl: "https://riddhisiddhiproperties.com",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "buyer-help", label: "Buyer Help", href: "/buyer-help" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "All Projects", href: "/projects" },
    { label: "Buyer Help", href: "/buyer-help" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  buyerResources: [
    { label: "PM Awas Yojana", href: "/buyer-help/pm-awas-yojana" },
    { label: "EMI Calculator", href: "/buyer-help/emi-calculator" },
    { label: "Loan Documents", href: "/buyer-help/home-loan-documents" },
    { label: "Legal & Title Check", href: "/buyer-help/legal-title-check" },
  ],
} as const;
