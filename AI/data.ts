// AI/data.ts
import { CompanyInfo, InsuranceProduct } from './types';

export const companyInfo: CompanyInfo = {
  name: "Sioufi & Co",
  locations: [
    {
      address: "Factory 4376 bldg. | Block B | 2nd floor | Corniche du Fleuve | SoHo | Beirut | Lebanon",
      postalCode: "P.O.Box 55-662 Sin El Fil"
    },
    {
      address: "Jal El Dib, main road, societe Michel Sioufi, 6th floor"
    }
  ],
  contact: {
    phones: ["+961 81 641 000", "+961 1 424 299"]
  },
  about: {
    founded: 1954,
    founder: "Michel Sioufi",
    vision: "To build a company that relies on strong partnerships and strong commitments towards their clients",
    history: "Founded in 1954 by Mr. Michel Sioufi, a pioneer in the Lebanese insurance market. His legacy continues through his children, who manage Sioufi & Co today."
  },
  values: {
    innovation: {
      title: "INNOVATION",
      description: "Committed to continuous development in creating new ideas and pragmatic solutions that anticipates the client's needs and solves business challenges."
    },
    loyalty: {
      title: "LOYALTY",
      description: "The client is at the heart of the process, with most clientele present since the company's inception."
    },
    professionalism: {
      title: "PROFESSIONALISM",
      description: "65 years of experience, excellence, and commitment to distinctive client service."
    }
  },
  methodology: {
    steps: [
      {
        name: "Listen & Analyze",
        description: "We understand you, your family, your business, and your needs to find the best solution."
      },
      {
        name: "Develop",
        description: "We work together to define your needs and create the best insurance plan for your profile and budget."
      },
      {
        name: "Deliver",
        description: "We execute with excellence and ensure continuous support through every situation."
      }
    ]
  }
};

export const insuranceProducts: { [key: string]: InsuranceProduct } = {
  health: {
    title: "Health Insurance",
    features: [
      "Comprehensive financial coverage for healthcare needs",
      "Extended home care benefits",
      "Complete maternity coverage from first renewal",
      "Full coverage for accidents and emergencies",
      "Unlimited financial coverage",
      "All diagnostic and surgical procedures",
      "Physiotherapy treatment coverage",
      "Radiotherapy and chemotherapy coverage"
    ],
    additionalInfo: {
      covid19: "Coverage for pandemic diseases (effective May 2020)",
      foreignWorkers: "Comprehensive coverage for foreigners working in Lebanon"
    }
  },
  life: {
    title: "Life Insurance",
    description: "Guarantee your loved ones' financial security and maintain peace of mind",
    features: [
      "Critical Illnesses coverage",
      "Passive War Risks and terrorism coverage",
      "Partial and Permanent Disability coverage",
      "Waiver of Premium in case of Total Disability"
    ]
  },
  motor: {
    title: "Motor Insurance",
    description: "Mandatory insurance for all vehicles in Lebanon",
    features: [
      "Compulsory third-party liability coverage",
      "Optional comprehensive coverage",
      "Natural disasters and hail coverage available",
      "Theft and damage protection"
    ],
    additionalInfo: {
      vehicleTypes: ["Car", "Bus", "Truck", "Van", "Pick-up", "Motorcycle"]
    }
  },
  travel: {
    title: "Travel Insurance",
    description:
      "Enjoy your trip with peace of mind knowing you are protected against unforeseen events.",
    features: [
      "Emergency medical expenses coverage",
      "Trip cancellation and interruption coverage",
      "Baggage loss or delay coverage",
      "24/7 travel assistance services",
      "Personal liability coverage",
      "Coverage for COVID-19 related medical expenses",
    ],
    additionalInfo: {
      schengenVisa:
        "Meets Schengen Visa requirements for medical expenses coverage",
      worldwide: "Coverage available for travel worldwide",
    },
  },
  home: {
    title: "Home Insurance",
    description:
      "Protect your home and belongings against various risks and damages.",
    features: [
      "Fire and lightning coverage",
      "Theft and burglary coverage",
      "Water damage coverage",
      "Earthquake and natural disasters coverage",
      "Third-party liability coverage",
      "Temporary accommodation coverage in case of damage",
    ],
    additionalInfo: {
      contents: "Coverage for your furniture, appliances, and personal belongings",
      building: "Coverage for the structure of your home",
    },
  },
  personalAccident: {
    title: "Personal Accident Insurance",
    description:
      "Secure financial protection in case of accidental injuries or death.",
    features: [
      "Accidental death benefit",
      "Permanent total disability benefit",
      "Permanent partial disability benefit",
      "Temporary total disability benefit",
      "Medical expenses coverage due to an accident",
      "24/7 worldwide coverage",
    ],
    additionalInfo: {
      familyPlan: "Option to cover your family members under one policy",
      customizable: "Ability to choose the level of coverage based on your needs",
    },
  },
  workmenCompensation: {
    title: "Workmen's Compensation Insurance",
    description:
      "Legally required insurance to protect your employees in case of work-related injuries or illnesses.",
    features: [
      "Coverage for medical expenses",
      "Compensation for lost wages",
      "Death benefits in case of fatal accidents",
      "Compliance with Lebanese labor law",
    ],
    additionalInfo: {
      mandatory: "Required by law for all employers in Lebanon",
      allProfessions:
        "Coverage for all types of professions and industries",
    },
  },
  marineCargo: {
    title: "Marine Cargo Insurance",
    description:
      "Protect your goods during transportation by sea, air, or land.",
    features: [
      "Coverage for loss or damage to cargo",
      "General average coverage",
      "War and strikes coverage (optional)",
      "All risks coverage",
      "Warehouse to warehouse coverage",
    ],
    additionalInfo: {
      allCargoTypes: "Coverage for various types of cargo including goods and machinery",
      globalCoverage: "Coverage for international shipments",
    },
  },
  yacht: {
    title: "Yacht Insurance",
    description: "Comprehensive coverage for your yacht or boat.",
    features: [
      "Hull and machinery coverage",
      "Third-party liability coverage",
      "Personal accident coverage for crew and passengers",
      "Salvage charges coverage",
      "Protection and indemnity coverage",
      "Uninsured boater coverage"
    ],
    additionalInfo: {
      navigationLimits: "Coverage within specified navigational limits",
      racingRisks: "Optional coverage for racing risks"
    }
  },
  propertyAllRisks: {
    title: "Property All Risks Insurance",
    description: "Extensive coverage for your business property against a wide range of risks.",
    features: [
        "Fire, lightning, and explosion coverage",
        "Natural disasters coverage (earthquake, storm, flood)",
        "Theft and burglary coverage",
        "Machinery breakdown coverage",
        "Business interruption coverage",
        "Public liability coverage"
    ],
    additionalInfo: {
        industrial: "Suitable for factories, warehouses, and other industrial properties",
        commercial: "Suitable for offices, shops, and other commercial properties"
    }
},
liability: {
    title: "Liability Insurance",
    description: "Protect your business from financial losses arising from legal liabilities.",
    features: [
        "Public liability coverage",
        "Product liability coverage",
        "Professional indemnity coverage",
        "Directors and officers liability coverage",
        "Employers' liability coverage",
        "Legal defense costs coverage"
    ],
    additionalInfo: {
        customizable: "Tailored to your specific business needs and industry",
        globalCoverage: "Optional coverage for international operations"
    }
}
};

export const INITIAL_GREETING = "Hello! I am your AI insurance assistant for Sioufi & Co. How can I help you today?";