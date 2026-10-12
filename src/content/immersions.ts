// SST immersions (scaler.com/school-of-technology, 2026-10-12): international internships and the
// industry year, then the live site's "Students who joined us leaving behind prestigious offers" in the
// creator cards. Images are SST's own in public/sst, reached from /immersions/ by a "../" path (the
// component prefixes /immersions/ and adds .webp).

export type Immersion = {
  title: string;
  description: string;
  /** File in /public/immersions (WebP, 948x544: the scene on the left, a blur on the right). */
  image: string;
};

export const immersions: Immersion[] = [
  {
    title: 'International internships',
    description: '12 global internships so far, in Bali, Singapore, New York, Germany and more.',
    // an SST photo (the live site's GSoC 2026 students), from public/sst
    image: '../sst/proof/career/gsoc-students',
  },
  {
    title: '1 year of industry immersion',
    // the live site's programme cards: CS & AI, 1 year; AI & B, 6 months startup + 6 months industry
    description: 'A year in industry on CS & AI (6 months on AI & B): internships, projects, real companies.',
    image: '../sst/proof/peers/classroom',
  },
];

export type Creator = {
  name: string;
  /** The first of the topics the deck lists for them. */
  niche: string;
  /** File in /public/immersions (WebP, 702x750). */
  photo: string;
  stats: { value: string; label: string }[];
};

export const creators: Creator[] = [
  {
    name: 'Karthikeya',
    niche: 'Left a JEE 98.8%ile for SST',
    photo: '../sst/proof/peers/karthikeya',
    stats: [
      { value: '98.8%', label: 'JEE' },
      { value: 'Raptor', label: 'Building' },
      { value: 'X', label: 'Featured on' },
    ],
  },
  {
    name: 'Anurag Jha',
    niche: 'Left an IIT BHU offer for SST',
    photo: '../sst/proof/peers/anurag-jha',
    stats: [
      { value: 'IIT BHU', label: 'Offer left' },
      { value: 'Voice AI', label: 'Building' },
      { value: 'YC', label: 'Pitched at' },
    ],
  },
  {
    name: 'Sourashish Sarkar',
    niche: 'Left JU and IISER offers for SST',
    photo: '../sst/proof/peers/sourashish-sarkar',
    stats: [
      { value: 'Singapore', label: 'Internship' },
      { value: '₹2L', label: 'Stipend a month' },
      { value: 'Delta', label: 'Building' },
    ],
  },
];
