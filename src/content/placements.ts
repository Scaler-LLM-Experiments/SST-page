import type { PlacementsContent } from '@/sections/placements/types';

// Section 2 content, from the live SST page's "Placement Highlights" (scaler.com/school-of-technology,
// read 2026-10-12): the first ever placement cycle's four figures, the "Companies On campus to hire"
// strip, the Internship + PPO students and the internship report. Card copy is ours, restating
// those figures.

/** The companies on the live site's "Companies On campus to hire" strip (one file each), then
 *  Emergent (15+ SST students joined it as founding engineers, the live site's headline). */
const CAMPUS = [
  { name: 'Amazon', logoUrl: '/sst/proof/campus-logos/amazon.png', ink: 0.37 },
  { name: 'Rippling', logoUrl: '/sst/proof/campus-logos/rippling.png', ink: 0.32 },
  { name: 'Media.net', logoUrl: '/sst/proof/campus-logos/media-net.png', ink: 0.39 },
  { name: '1Pharmacy Network', logoUrl: '/sst/proof/campus-logos/1pharmacy-network.png', ink: 0.22 },
  { name: 'slice', logoUrl: '/sst/proof/campus-logos/slice.png', ink: 0.43 },
  { name: 'Wealthy', logoUrl: '/sst/proof/campus-logos/wealthy.png', ink: 0.27 },
  { name: 'Tasket', logoUrl: '/sst/proof/campus-logos/tasket.png', ink: 0.4 },
  { name: 'Manifest AI', logoUrl: '/sst/proof/campus-logos/manifest-ai.png', ink: 0.44 },
  { name: 'Mamaearth', logoUrl: '/sst/proof/campus-logos/mamaearth.png', ink: 0.48 },
  { name: 'Zeta', logoUrl: '/sst/proof/campus-logos/zeta.png', ink: 0.44 },
  { name: 'Emergent', logoUrl: '/sst/proof/logos/emergent.webp', ink: 0.19 },
];

export const placements: PlacementsContent = {
  eyebrow: 'Placement Highlights',
  title: 'Offers came in, before the placement season started.',
  description: 'Top tech companies that hire from IITs & NITs are already hiring from SST.',
  // The live site's line, then ours: the showcase shows the first sentence, version C the rest.
  lead: 'Top tech companies that hire from IITs & NITs are already hiring from SST. Reported outcomes from SST’s first ever placement cycle, with offers made before the placement season officially opened.',
  // The live site's four figures and labels; the descriptions restate them.
  stats: [
    { value: '₹44L', label: 'Highest CTC via PPO', description: 'Before placement season officially opens.', icon: 'currency' },
    { value: '₹21 LPA', label: 'Average CTC', description: 'SST’s first ever placement cycle.', icon: 'trend' },
    { value: '36%', label: 'Batch obtained offers', description: 'Before the season officially opened.', icon: 'switch' },
    { value: '55%+', label: 'AI-specific roles', description: 'More than half the offers made.', icon: 'sparkle' },
  ],
  // The stories variation (no route renders it): the same claims as cards.
  stories: [
    {
      kicker: 'On campus',
      title: 'Top tech companies are on campus to hire.',
      description: 'Companies that hire from IITs & NITs are already hiring from SST.',
      logos: ['Amazon', 'Rippling', 'Media.net', 'slice', 'Zeta', 'Wealthy', 'Tasket', 'Manifest AI'],
    },
    {
      kicker: 'AI startups',
      title: '15+ SST students joined Emergent as founding engineers.',
      description: 'From Day Zero, at a startup that recently raised $70M: part of the core building team.',
      logos: ['Emergent', 'Manifest AI', 'Tasket', '1Pharmacy Network', 'Mamaearth', 'Wealthy'],
    },
    {
      kicker: 'Internship + PPO',
      title: 'Internships that turned into offers.',
      description: '3rd-year students placed through internships and pre-placement offers.',
      roles: true,
    },
    {
      kicker: 'Internship report',
      title: 'Every number, audited.',
      description: 'SST’s internship report, audited by B2K Analytics, auditor for IIM Ahmedabad, XLRI and MDI Gurgaon.',
      imageUrl: '/sst/proof/peers/classroom.webp',
      imageAlt: 'SST students at work in a classroom',
      ctaLabel: 'Download Report',
      ctaIcon: 'download',
      // PLACEHOLDER: the live site's button opens a form
      ctaHref: 'https://www.scaler.com/school-of-technology/career-outcomes/',
    },
  ],
  reportLabel: 'Download SST Internship Report 2026',
  // PLACEHOLDER: the live site's button opens a form
  reportHref: 'https://www.scaler.com/school-of-technology/career-outcomes/',
  // The cards: SST's own photos (the live site's classroom band and campus photos).
  showcases: [
    {
      label: 'On campus',
      icon: 'rocket',
      statValue: '₹44L',
      title: 'Highest CTC offered via the PPO route.',
      logos: ['Amazon', 'Rippling', 'Media.net', 'slice', 'Zeta', 'Wealthy', 'Tasket', 'Manifest AI'],
      imageUrl: '/sst/proof/peers/classroom.webp',
      imageSrcSet: '/sst/proof/peers/classroom.webp 1600w',
      imageAlt: 'SST students at work in a classroom',
      imagePosition: 'center 40%',
    },
    {
      label: 'Top tech companies',
      icon: 'globe',
      statValue: '₹21 LPA',
      title: 'Average CTC.',
      logos: ['Emergent', 'Amazon', 'Mamaearth', '1Pharmacy Network', 'Manifest AI', 'Wealthy', 'Tasket', 'Rippling'],
      imageUrl: '/sst/community/campus/campus-1.webp',
      imageSrcSet: '/sst/community/campus/campus-1.webp 1600w',
      imageAlt: 'SST students walking across the Bangalore campus',
      imagePosition: 'center 35%',
    },
    {
      label: 'AI-first roles',
      icon: 'sparkle',
      statValue: '55%+',
      title: 'Of offers in AI-specific roles.',
      roles: true,
      imageUrl: '/sst/community/campus/campus-4.webp',
      imageSrcSet: '/sst/community/campus/campus-4.webp 1600w',
      imageAlt: 'SST students working together on laptops on campus',
      imagePosition: 'center 40%',
    },
  ],
  // The live site's "Internship + PPO Highlights": 3rd-year students and the companies on their cards
  // (no role titles on the site, so each tile names the student).
  roles: [
    { role: 'Ananya Srivastava', company: 'Wealthy' },
    { role: 'Shubh Kesharwani', company: 'Tasket' },
    { role: 'Abhishek Kumar Shah', company: 'Emergent' },
    { role: 'Divyanshu Pandey', company: 'Mamaearth' },
    { role: 'Loukik Thatte', company: 'Manifest AI' },
    { role: 'Ajai Sharan Velmurugan', company: 'Wealthy' },
    { role: 'Siva Rama Gogineni', company: '1Pharmacy Network' },
    { role: 'Ayush Kesharwani', company: 'Wealthy' },
  ],
  cohorts: [],
  // Version C's card: the other two figures in place of the last showcase's.
  v3Cohorts: [
    { value: '36%', label: 'Of the batch obtained offers' },
    { value: '55%+', label: 'Offers in AI-specific roles' },
  ],
  recruitersTitle: 'Companies on campus to hire',
  // The strip's logos (trimmed, transparent), in the strip's order. No per-company hires counts.
  logos: CAMPUS,
  recruiters: CAMPUS.map((c) => c.name),
};
