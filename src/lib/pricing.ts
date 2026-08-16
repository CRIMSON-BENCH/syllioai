export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  annualMonthlyEquivalent: number;
  audience: "students" | "teachers" | "both" | "institutional";
  isNew: boolean;
  isPopular: boolean;
  includesEverythingFrom?: string;
  features: string[];
  stripePriceId?: string;
  stripePriceIdAnnual?: string;
}

export interface OneTimeProduct {
  id: string;
  name: string;
  tagline: string;
  price: number;
  isNew: boolean;
  features: string[];
  stripePriceId?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "For testing the waters",
    monthlyPrice: 0,
    annualPrice: 0,
    annualMonthlyEquivalent: 0,
    audience: "students",
    isNew: false,
    isPopular: false,
    features: [
      "Unified master calendar",
      "Join unlimited clubs",
      "Up to 2 syllabus scans per semester",
      "Manual task tracking",
      "Add to home screen (PWA)",
    ],
  },
  {
    id: "ai-pro-student",
    name: "AI Pro Student",
    tagline: "Academic automation",
    monthlyPrice: 4.99,
    annualPrice: 39.99,
    annualMonthlyEquivalent: 3.33,
    audience: "students",
    isNew: false,
    isPopular: true,
    includesEverythingFrom: "free",
    features: [
      "Everything in Free",
      "Unlimited AI syllabus scans",
      "LMS sync (Canvas, Blackboard, Google Classroom)",
      "Burnout Radar™ predictive load alerts",
    ],
  },
  {
    id: "os-student",
    name: "OS Student",
    tagline: "The Career Architect",
    monthlyPrice: 9.99,
    annualPrice: 79.99,
    annualMonthlyEquivalent: 6.67,
    audience: "students",
    isNew: false,
    isPopular: false,
    includesEverythingFrom: "ai-pro-student",
    features: [
      "Everything in AI Pro Student",
      "4-year automated portfolio (link-in-bio)",
      "Long-term goal & milestone tracking",
      "Verified club leadership badges",
      "Club Officer OS (mass push & PDF rosters)",
    ],
  },
  {
    id: "teacher-starter",
    name: "Teacher Starter",
    tagline: "AI tools for educators",
    monthlyPrice: 5.99,
    annualPrice: 49.99,
    annualMonthlyEquivalent: 4.17,
    audience: "teachers",
    isNew: true,
    isPopular: false,
    features: [
      "AI Syllabus Builder (unlimited)",
      "AI Lesson Planner (10 per month)",
      "PDF & DOCX export",
      "Class code — students auto-import deadlines",
      "1 class",
    ],
  },
  {
    id: "teacher-pro",
    name: "Teacher Pro",
    tagline: "Your full AI classroom OS",
    monthlyPrice: 11.99,
    annualPrice: 99.99,
    annualMonthlyEquivalent: 8.33,
    audience: "teachers",
    isNew: true,
    isPopular: false,
    includesEverythingFrom: "teacher-starter",
    features: [
      "Everything in Teacher Starter",
      "Unlimited lesson plans",
      "AI Assignment & Rubric Generator",
      "Canvas & Google Classroom export",
      "Unlimited classes",
      "Student join dashboard — see who scanned",
    ],
  },
  {
    id: "teacher-student-bundle",
    name: "Teacher + Student Bundle",
    tagline: "One plan, both sides of the room",
    monthlyPrice: 14.99,
    annualPrice: 119.99,
    annualMonthlyEquivalent: 10.0,
    audience: "both",
    isNew: true,
    isPopular: false,
    features: [
      "Everything in Teacher Pro",
      "Everything in OS Student",
      "Single subscription for one teacher and their personal student account",
    ],
  },
  {
    id: "school-plan",
    name: "School Plan",
    tagline: "For departments and schools",
    monthlyPrice: 49.99,
    annualPrice: 449.99,
    annualMonthlyEquivalent: 37.5,
    audience: "institutional",
    isNew: true,
    isPopular: false,
    features: [
      "5 teacher seats (Teacher Pro level)",
      "Student analytics dashboard",
      "Admin controls",
      "Bulk onboarding",
      "Priority email support",
    ],
  },
  {
    id: "district-plan",
    name: "District Plan",
    tagline: "Enterprise-scale education OS",
    monthlyPrice: 199.0,
    annualPrice: 0,
    annualMonthlyEquivalent: 0,
    audience: "institutional",
    isNew: true,
    isPopular: false,
    features: [
      "25+ teacher seats",
      "SAML SSO",
      "Custom branding",
      "Usage reports",
      "Priority support",
      "Contact for annual pricing",
    ],
  },
];

export const oneTimeProducts: OneTimeProduct[] = [
  {
    id: "syllabus-template-pack",
    name: "Syllabus Template Pack",
    tagline: "100+ ready-to-use syllabi by subject",
    price: 4.99,
    isNew: true,
    features: [
      "100+ professionally designed syllabus templates",
      "Organized by subject area and grade level",
      "Fully editable in Syllio's AI Syllabus Builder",
      "Covers K-12 and higher education formats",
      "Includes Common Core-aligned and standards-based templates",
    ],
  },
  {
    id: "extra-ai-scan-credits",
    name: "Extra AI Scan Credits",
    tagline: "30 additional AI scans for Free users",
    price: 2.99,
    isNew: true,
    features: [
      "30 additional AI syllabus scans",
      "Credits never expire",
      "Available for Free tier users only",
      "Scans support PDF, image, and URL input",
    ],
  },
];

export function getPricingTierById(id: string): PricingTier | undefined {
  return pricingTiers.find((tier) => tier.id === id);
}

export function getPricingTiersByAudience(
  audience: PricingTier["audience"]
): PricingTier[] {
  return pricingTiers.filter((tier) => tier.audience === audience);
}

export function getStudentTiers(): PricingTier[] {
  return pricingTiers.filter(
    (tier) => tier.audience === "students" || tier.audience === "both"
  );
}

export function getTeacherTiers(): PricingTier[] {
  return pricingTiers.filter(
    (tier) => tier.audience === "teachers" || tier.audience === "both"
  );
}

export function getInstitutionalTiers(): PricingTier[] {
  return pricingTiers.filter((tier) => tier.audience === "institutional");
}
