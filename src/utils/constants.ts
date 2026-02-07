// Service Data Constants for Corporate Services Website

export interface ServiceItem {
  name: string;
  description?: string;
  icon?: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  description: string;
  items: ServiceItem[];
}

// Main Service Categories
export const mainServices = [
  {
    id: "secretarial",
    title: "Secretarial Services",
    icon: "mdi:file-document-edit-outline",
    description:
      "Comprehensive corporate secretarial solutions for company formation, compliance, and governance.",
    color: "primary",
  },
  {
    id: "taxation",
    title: "Taxation Services",
    icon: "mdi:calculator-variant-outline",
    description:
      "Expert tax advisory and compliance services for individuals, partnerships, and companies.",
    color: "primary",
  },
  {
    id: "accountancy",
    title: "Accounting Services",
    icon: "mdi:chart-line",
    description:
      "Professional accounting and bookkeeping services tailored to your business needs.",
    color: "primary",
  },
];

// Secretarial Services Data
export const secretarialServices: ServiceCategory[] = [
  {
    title: "Company Formation and Related Secretarial Services",
    icon: "mdi:domain",
    description: "Complete company setup and ongoing secretarial support",
    items: [
      {
        name: "Incorporation of All type of Companies Including Branch office",
      },
      { name: "Appointment of Directors" },
      { name: "Issue of Shares" },
      { name: "Address Change" },
      { name: "Annual Return Filing" },
      { name: "Changing of Articles of Association" },
      { name: "Board Minute Preparation & Other related services" },
    ],
  },
  {
    title: "Company Dissolution and Liquidation",
    icon: "mdi:file-remove-outline",
    description: "Professional guidance through the dissolution process",
    items: [
      { name: "Voluntary Liquidation Services" },
      { name: "Compliance with Legal Requirements" },
      { name: "Asset Distribution Management" },
    ],
  },
  {
    title: "Registration of Trademarks and Logos",
    icon: "mdi:trademark",
    description: "Protect your brand identity with proper registration",
    items: [
      { name: "Trademark Application Filing" },
      { name: "Logo Registration Services" },
      { name: "Intellectual Property Advisory" },
    ],
  },
  {
    title: "Company Mergers and Acquisitions (M & A)",
    icon: "mdi:handshake-outline",
    description: "Expert support for corporate restructuring",
    items: [
      { name: "Due Diligence Support" },
      { name: "Legal Documentation Preparation" },
      { name: "Regulatory Compliance Assistance" },
    ],
  },
  {
    title: "Foreign Direct Investment Advisory Services",
    icon: "mdi:earth",
    description: "Navigate foreign investment regulations with ease",
    items: [
      { name: "Investment Structuring Advice" },
      { name: "Regulatory Compliance Guidance" },
      { name: "Documentation Support" },
    ],
  },
  {
    title: "Establishment of BOI Approved Entities",
    icon: "mdi:certificate-outline",
    description: "Board of Investment of Sri Lanka approved company setup",
    items: [
      { name: "BOI Application Preparation" },
      { name: "Incentive Scheme Advisory" },
      { name: "Ongoing Compliance Support" },
    ],
  },
  {
    title: "Convening Board and Shareholder Meetings",
    icon: "mdi:account-group-outline",
    description: "Professional meeting management services",
    items: [
      { name: "Meeting Scheduling and Notices" },
      { name: "Agenda Preparation" },
      { name: "Minutes Preparing" },
    ],
  },
  {
    title: "NGO Registrations",
    icon: "mdi:charity",
    description: "Complete NGO formation and registration services",
    items: [
      { name: "NGO Application Filing" },
      { name: "Constitution Preparation" },
      { name: "Regulatory Compliance" },
    ],
  },
  {
    title: "Company File Search",
    icon: "mdi:file-search-outline",
    description: "Comprehensive company information retrieval",
    items: [
      { name: "Company Registry Searches" },
      { name: "Historical Data Retrieval" },
      { name: "Verification Services" },
    ],
  },
  {
    title: "Opening of Bank Accounts for Foreign Entities",
    icon: "mdi:bank-outline",
    description: "IIA Account setup for foreign entities and individuals",
    items: [
      { name: "Documentation Preparation" },
      { name: "Bank Liaison Services" },
      { name: "Compliance Advisory" },
    ],
  },
];

// Taxation Services Data
export const taxationServicesIndividual: ServiceItem[] = [
  {
    name: "TIN Registration for Individual",
    icon: "mdi:card-account-details-outline",
  },
  { name: "Preparation of Tax Calculation", icon: "mdi:calculator" },
  { name: "Submission of IIT Return", icon: "mdi:file-send-outline" },
  {
    name: "VAT Registration & Submission of Return (If having Business)",
    icon: "mdi:receipt-text-outline",
  },
  {
    name: "SSCL Registration & Submission of Return (If having Business)",
    icon: "mdi:shield-check-outline",
  },
  {
    name: "APIT/PAYE Registration & Submission of Return (If having Business)",
    icon: "mdi:account-cash-outline",
  },
  {
    name: "WHT Registration & Submission of Return (If having Business)",
    icon: "mdi:bank-transfer-out",
  },
  { name: "Quarterly Payments", icon: "mdi:calendar-check-outline" },
  { name: "Obtaining Clearance", icon: "mdi:check-decagram" },
];

export const taxationServicesPartnership: ServiceItem[] = [
  {
    name: "TIN Registration for Partnership",
    icon: "mdi:card-account-details-outline",
  },
  {
    name: "Preparation of Tax Calculation for Partnership",
    icon: "mdi:calculator",
  },
  { name: "Submission of PIT Return", icon: "mdi:file-send-outline" },
  {
    name: "VAT Registration & Submission of Return",
    icon: "mdi:receipt-text-outline",
  },
  {
    name: "SSCL Registration & Submission of Return",
    icon: "mdi:shield-check-outline",
  },
  {
    name: "APIT/PAYE Registration & Submission of Return",
    icon: "mdi:account-cash-outline",
  },
  {
    name: "WHT Registration & Submission of Return",
    icon: "mdi:bank-transfer-out",
  },
  { name: "Quarterly Payments", icon: "mdi:calendar-check-outline" },
  { name: "Obtaining Clearance", icon: "mdi:check-decagram" },
];

export const taxationServicesCompany: ServiceItem[] = [
  {
    name: "TIN Registration for Companies",
    icon: "mdi:card-account-details-outline",
  },
  {
    name: "Preparation of Tax Calculation for Companies",
    icon: "mdi:calculator",
  },
  { name: "Submission of CIT Return", icon: "mdi:file-send-outline" },
  {
    name: "VAT Registration & Submission of Return",
    icon: "mdi:receipt-text-outline",
  },
  {
    name: "SSCL Registration & Submission of Return",
    icon: "mdi:shield-check-outline",
  },
  {
    name: "APIT/PAYE Registration & Submission of Return",
    icon: "mdi:account-cash-outline",
  },
  {
    name: "WHT Registration & Submission of Return",
    icon: "mdi:bank-transfer-out",
  },
  { name: "Quarterly Payments", icon: "mdi:calendar-check-outline" },
  { name: "Obtaining Clearance", icon: "mdi:check-decagram" },
];

export const taxationServicesOther: ServiceItem[] = [
  { name: "TIN Registration", icon: "mdi:card-account-details-outline" },
  { name: "Preparation of Tax Calculation", icon: "mdi:calculator" },
  { name: "Submission of CIT Return", icon: "mdi:file-send-outline" },
  {
    name: "VAT Registration & Submission of Return (If having Business)",
    icon: "mdi:receipt-text-outline",
  },
  {
    name: "SSCL Registration & Submission of Return (If having Business)",
    icon: "mdi:shield-check-outline",
  },
  {
    name: "APIT/PAYE Registration & Submission of Return",
    icon: "mdi:account-cash-outline",
  },
  {
    name: "WHT Registration & Submission of Return",
    icon: "mdi:bank-transfer-out",
  },
  { name: "Quarterly Payments", icon: "mdi:calendar-check-outline" },
  { name: "Obtaining Clearance", icon: "mdi:check-decagram" },
];

// Accounting Services Data
export const accountancyServices: ServiceItem[] = [
  {
    name: "Preparation of Monthly Accounts",
    description: "For Individual, Partnership, Companies NGO & Association",
    icon: "mdi:calendar-month-outline",
  },
  {
    name: "Preparation of Quarterly Accounts",
    description: "For Individual, Partnership, Companies NGO & Association",
    icon: "mdi:calendar-range",
  },
  {
    name: "Preparation of Year-End Accounts",
    description: "For Individual, Partnership, Companies NGO & Association",
    icon: "mdi:calendar-end",
  },
  {
    name: "Bookkeeping Services",
    description: "For Individual, Partnership, Companies NGO & Association",
    icon: "mdi:book-open-page-variant-outline",
  },
  {
    name: "Preparation of Management Accounts",
    description: "For Facilities and Business Operations",
    icon: "mdi:chart-box-outline",
  },
];

// Navigation Links
export const navLinks = [
  { name: "Secretarial Services", href: "#secretarial" },
  { name: "Accounting Services", href: "#accountancy" },
  { name: "Taxation Services", href: "#taxation" },
];

// Company Info
export const companyInfo = {
  name: "Qualified Corporate Secretaries",
  tagline: "Your Trusted Partner in Business",
  address: "No: 44A, Dhakshinarama Road, Mount Lavinia, Sri Lanka",
  phone: "0777 611 006 / 0707 611 006",
  email: "wneranga@hotmail.com",
  socialLinks: [
    { name: "Facebook", icon: "mdi:facebook", url: "#" },
    { name: "LinkedIn", icon: "mdi:linkedin", url: "#" },
    {
      name: "WhatsApp",
      icon: "mdi:whatsapp",
      url: "https://wa.me/94777611006",
    },
  ],
};
