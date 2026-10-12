// SST's students in the alumni cards (scaler.com/school-of-technology). Each card reads
// "<role> at <company>" over where they are at SST.
//
// Marks are each company's own app/site icon. `fill` marks an icon that comes
// on its own coloured square (it fills the tile); the rest sit inside it.

import type { HeroLogo } from '@/sections/hero/types';

export type CompanyMark = { name: string; src: string; fill?: boolean };

export type Alumnus = {
  name: string;
  /** File in /public/sst/proof/alumni, without the extension (WebP, 948x631, the person on
   * the left, a dark blur on the right). Absent until a photo in this style is supplied. */
  photo?: string;
  /** Where they are at SST (their year). */
  before: string;
  /** Their offer, and where. */
  role: string;
  company: CompanyMark;
};

const marks = {
  wealthy: { name: 'Wealthy', src: '/sst/proof/campus-logos/wealthy.png' },
  tasket: { name: 'Tasket', src: '/sst/proof/campus-logos/tasket.png' },
  emergent: { name: 'Emergent', src: '/logos/marks/emergent.png', fill: true },
  mamaearth: { name: 'Mamaearth', src: '/sst/proof/campus-logos/mamaearth.png' },
  manifestai: { name: 'Manifest AI', src: '/sst/proof/campus-logos/manifest-ai.png' },
  onepharmacy: { name: '1Pharmacy Network', src: '/sst/proof/campus-logos/1pharmacy-network.png' },
} satisfies Record<string, CompanyMark>;

// SST's "Internship + PPO Highlights" (scaler.com/school-of-technology, 2026-10-12): eight 3rd-year
// students and the company on each card. Photos: the live site's portraits, set in the card's
// landscape style (public/sst/proof/alumni).
export const alumni: Alumnus[] = [
  { name: 'Ananya Srivastava', photo: 'ananya-srivastava', before: '3rd Year', role: 'Internship + PPO', company: marks.wealthy },
  { name: 'Shubh Kesharwani', photo: 'shubh-kesharwani', before: '3rd Year', role: 'Internship + PPO', company: marks.tasket },
  { name: 'Abhishek Kumar Shah', photo: 'abhishek-kumar-shah', before: '3rd Year', role: 'Internship + PPO', company: marks.emergent },
  { name: 'Divyanshu Pandey', photo: 'divyanshu-pandey', before: '3rd Year', role: 'Internship + PPO', company: marks.mamaearth },
  { name: 'Loukik Thatte', photo: 'loukik-thatte', before: '3rd Year', role: 'Internship + PPO', company: marks.manifestai },
  { name: 'Ajai Sharan Velmurugan', photo: 'ajai-sharan-velmurugan', before: '3rd Year', role: 'Internship + PPO', company: marks.wealthy },
  { name: 'Siva Rama Gogineni', photo: 'siva-rama-gogineni', before: '3rd Year', role: 'Internship + PPO', company: marks.onepharmacy },
  { name: 'Ayush Kesharwani', photo: 'ayush-kesharwani', before: '3rd Year', role: 'Internship + PPO', company: marks.wealthy },
];

// The second list of learner cards (the SSB page's pivots): none on the SST page, so empty.
export const pivotAlumni: Alumnus[] = [];

// "Scaler's alumni work across 1200+ companies" (the live site's eleven logos), then the companies
// on SST's campus to hire (its "Companies On campus to hire" strip), then four of Scaler's hiring
// partners from our own files, so the 24-cell grid fills. `ink` measured as CLAUDE.md, "Logos".
const A = '/sst/proof/alumni-logos';
const K = '/sst/proof/campus-logos';
export const peerCompanies: HeroLogo[] = [
  { name: 'Google', logoUrl: `${A}/google.png`, wordmark: 'Google', ink: 0.25 },
  { name: 'Microsoft', logoUrl: `${A}/microsoft.png`, wordmark: 'Microsoft', ink: 0.32 },
  { name: 'Amazon', logoUrl: `${A}/amazon.png`, wordmark: 'Amazon', ink: 0.37 },
  { name: 'Meta', logoUrl: `${A}/meta.png`, wordmark: 'Meta', ink: 0.39 },
  { name: 'Adobe', logoUrl: `${A}/adobe.png`, wordmark: 'Adobe', ink: 0.29 },
  { name: 'Flipkart', logoUrl: `${A}/flipkart.png`, wordmark: 'Flipkart', ink: 0.27 },
  { name: 'PayPal', logoUrl: `${A}/paypal.png`, wordmark: 'PayPal', ink: 0.35 },
  { name: 'Paytm', logoUrl: `${A}/paytm.png`, wordmark: 'Paytm', ink: 0.5 },
  { name: 'Razorpay', logoUrl: `${A}/razorpay.png`, wordmark: 'Razorpay', ink: 0.28 },
  { name: 'Target', logoUrl: `${A}/target.png`, wordmark: 'Target', ink: 0.43 },
  { name: 'Zomato', logoUrl: `${A}/zomato.png`, wordmark: 'Zomato', ink: 0.51 },
  { name: 'Rippling', logoUrl: `${K}/rippling.png`, wordmark: 'Rippling', ink: 0.32 },
  { name: 'Zeta', logoUrl: `${K}/zeta.png`, wordmark: 'Zeta', ink: 0.44 },
  { name: 'Media.net', logoUrl: `${K}/media-net.png`, wordmark: 'Media.net', ink: 0.39 },
  { name: 'slice', logoUrl: `${K}/slice.png`, wordmark: 'slice', ink: 0.43 },
  { name: 'Mamaearth', logoUrl: `${K}/mamaearth.png`, wordmark: 'Mamaearth', ink: 0.32 },
  { name: 'Manifest AI', logoUrl: `${K}/manifest-ai.png`, wordmark: 'Manifest AI', ink: 0.44 },
  { name: 'Wealthy', logoUrl: `${K}/wealthy.png`, wordmark: 'Wealthy', ink: 0.27 },
  { name: 'Tasket', logoUrl: `${K}/tasket.png`, wordmark: 'Tasket', ink: 0.4 },
  { name: '1Pharmacy Network', logoUrl: `${K}/1pharmacy-network.png`, wordmark: '1Pharmacy', ink: 0.22 },
  { name: 'Swiggy', logoUrl: '/logos/swiggy.svg', wordmark: 'Swiggy', ink: 0.36 },
  { name: 'PhonePe', logoUrl: '/logos/phonepe.svg', wordmark: 'PhonePe', ink: 0.33 },
  { name: 'Uber', logoUrl: '/logos/uber.svg', wordmark: 'Uber', ink: 0.38 },
  { name: 'Goldman Sachs', logoUrl: '/logos/goldman-sachs.svg', wordmark: 'Goldman Sachs', ink: 0.32 },
];
