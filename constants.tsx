import { Product, ServiceCategory, Project, Personnel } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Fire Detection, Alarm & Public Address",
    items: [
      "Analogue Addressable Fire Detection & Alarm System",
      "Conventional type Fire Detection & Alarm System",
      "Hybrid Fire Detection & Alarm System",
      "Public Address System",
      "Voice Alarm & Evacuation System"
    ]
  },
  {
    title: "Fire Protection & Suppression",
    items: [
      "Fire Water Pump House Equipment’s",
      "Fire Hydrant System",
      "Automatic Sprinkler System",
      "High Velocity Water Spray System",
      "Medium Velocity Water Spray System",
      "Foam System"
    ]
  },
  {
    title: "Automatic Clean Agent Gas Flooding",
    items: [
      "Inert Gas Fire Suppression System",
      "FM 200 / NOVEC Gas Fire Suppression Systems",
      "CO2 Gas Fire Suppression System"
    ]
  },
  {
    title: "Portable & Mobile Extinguishers",
    items: [
      "Water Type Fire Extinguishers",
      "Clean agent type Fire Extinguishers",
      "CO2 type Fire Extinguishers",
      "ABC/DCP type Fire Extinguishers",
      "Mechanical Foam type Fire Extinguishers",
      "Modular type Fire Extinguishers",
      "Water Mist Fire Extinguishers"
    ]
  },
  {
    title: "Electronic Security Systems",
    items: [
      "Access Control Systems",
      "CCTV Surveillance Systems",
      "Intrusion Alarm System & Perimeter Protection"
    ]
  },
  {
    title: "Passive Fire System & PPE",
    items: [
      "Fire Sealant & Fire Proof Paint",
      "Fire Suits & Safety Shoes",
      "Safety Helmet",
      "Breathing Apparatus"
    ]
  }
];

export const PERSONNEL: Personnel[] = [
  {
    name: "Rakesh Singh Bist",
    experience: "Over 25 years",
    specialization: "Design, Engineering of Fire Detection, Alarm & Fire Protection System."
  },
  {
    name: "S. Siddiqui",
    experience: "Over 25 years",
    specialization: "Design, PMC, Installation, Testing & Commissioning."
  },
  {
    name: "Dhirendra Singh Rawat",
    experience: "Over 15 years",
    specialization: "Field sourcing of material and logistics."
  },
  {
    name: "Rakesh Chamoli",
    experience: "Over 10 years",
    specialization: "Procurement of Fire Protection Equipment’s."
  },
  {
    name: "Loukesh Saxena",
    experience: "Over 20 years",
    specialization: "Project Management & Maintenance Services."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Industrial Fire Pump Systems',
    category: 'Suppression',
    description: 'High-capacity diesel and electric driven fire pump sets for main pump house applications.',
    image: 'input_file_4.png',
    features: ['Heavy duty engines', 'NFPA-20 compliant', 'Skid mounted solutions']
  },
  {
    id: 'p2',
    name: 'High Velocity Water Spray',
    category: 'Specialized',
    description: 'Specialized protection for transformers and switchyards in power substations.',
    image: 'input_file_2.png',
    features: ['Rapid response', 'Effective cooling', 'Industrial grade']
  },
  {
    id: 'p3',
    name: 'Deluge & Control Valve Station',
    category: 'Valves',
    description: 'Reliable alarm check valves and deluge systems for large industrial facility protection.',
    image: 'input_file_5.png',
    features: ['ISI certified', 'Corrosion resistant', 'Precision engineering']
  },
  {
    id: 'p4',
    name: 'Industrial Piping Infrastructure',
    category: 'Installation',
    description: 'High-rise riser and manifold systems designed for maximum pressure retention.',
    image: 'input_file_6.png',
    features: ['Grade A steel', 'Professional welding', 'UL/FM components']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Design & Engineering of Fire Fighting System for 500 KV Arghande Substation',
    location: 'Kabul, Afghanistan',
    client: 'M/s DABS'
  },
  {
    id: 'p2',
    title: 'Design & Engineering of Fire Fighting System for 765/400 KV AIS Bhadhla –II Substation',
    location: 'Jodhpur, Rajasthan',
    client: 'M/s PGCIL'
  },
  {
    id: 'p3',
    title: 'Design & Engineering of Fire Fighting System for 765/400 KV Lakadia Substation',
    location: 'Gujarat',
    client: 'M/s Adani Transmission Ltd.'
  }
];