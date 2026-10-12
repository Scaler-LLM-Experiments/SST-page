// The community and people sections, in Scaler School of Technology's copy and assets (the live
// site, scaler.com/school-of-technology, 2026-10-12; files in public/sst). A missing line shows
// as "Copy to come".

import type { ShowcasePerson } from '@/sections/faculty/PeopleShowcase';
import type { Session } from '@/sections/community/SessionCard';

type Story = { title: string; text?: string; media?: string; mediaLabel: string; kicker?: string; href?: string };

/** A company a student started or grew: one Beyond Placements card. */
export type Venture = {
  company: string;
  /** One or more people; one by full name, several by first names ("A, B & C"). */
  founders: string[];
  /** Their photos (square, in /public), in the same order; initials where there is none. */
  avatars?: (string | undefined)[];
  /** Under their names: who they are ("SST student" if unset), "Founder" / "Co-founders" for the
   *  Innovation Lab's. */
  role?: string;
  /** What it is, in about three lines (115 to 125 characters fill them on desktop). */
  description: string;
  /** Its field, on a glass chip at the photo's top left. */
  sector: string;
  /** The figure over the photo's blur: "₹1Cr+" over "ARR". None: no figure, no blur. */
  stat?: { value: string; label: string };
  /** The photo at the card's left (its smaller file for phones); the dark plate until there is one. */
  image?: string;
  imageSmall?: string;
  /** object-position, to keep the subject in the crop. */
  imagePosition?: string;
  imageAlt?: string;
  /** A wide banner (a white logo on a two-colour gradient) in place of a photo: the square takes
   *  its two colours, top and bottom, and the whole banner sits across its middle, faded in. */
  banner?: { src: string; top: string; bottom: string };
  /** Its website: an arrow beside the company's name. */
  href?: string;
};

const H = '/sst/community/headlines';

/**
 * "Beyond Placements": SST's student startups and headlines (the live site's "Headlines from SST"
 * and its "10+ Startups Founded by SST Students"). Lines and figures are the site's.
 */
export const beyondPlacements = {
  turn: {
    setup: 'Students at SST don’t wait to graduate.',
    lead: 'They build companies.',
    accent: 'companies.',
  },
  ventures: [
    {
      company: 'Percevia',
      founders: ['Tushar'],
      role: 'SST student, 2nd year',
      description:
        'AI glasses that help the visually impaired, the winner among 20,000+ entries at Samsung Solve for Tomorrow.',
      sector: 'AI · Assistive tech',
      stat: { value: '₹25L', label: 'grant, Samsung Solve for Tomorrow' },
      image: `${H}/percevia.webp`,
      imagePosition: '78% 50%',
      imageAlt: 'Tushar in a Samsung Solve for Tomorrow T-shirt',
      href: 'https://yourstory.com/socialstory/2025/11/bengaluru-student-invents-smart-glasses-visually-impaired',
    },
    {
      company: 'Ather Labs',
      founders: ['Advith', 'Arsh'],
      role: 'SST students',
      description: 'An AI-powered fintech startup that Advith and Arsh built and grew to more than ₹2 lakh in monthly recurring revenue.',
      sector: 'AI · Fintech',
      stat: { value: '₹2L+', label: 'MRR' },
      image: `${H}/ather-labs.webp`,
      imagePosition: '50% 40%',
      imageAlt: 'Advith and Arsh, the founders of Ather Labs',
      href: 'https://www.republicworld.com/initiatives/scaler-school-of-technology-hosts-student-shark-tank-young-innovators-pitch-big-idea',
    },
    {
      company: 'Trackaroo',
      founders: ['Pratyush Mishra'],
      description:
        'An auto-dealership management platform, with clients like Tata and Ather, generating revenue while he studies at SST.',
      sector: 'B2B SaaS',
      stat: { value: '₹25L', label: 'revenue' },
      image: `${H}/trackaroo.webp`,
      imagePosition: '50% 40%',
      imageAlt: 'Pratyush Mishra, the founder of Trackaroo',
      href: 'https://www.linkedin.com/posts/scaler-school-of-technology_pratyush-mishra-first-client-just-became-activity-7424093910001672192-y_6B',
    },
    {
      company: 'Build My Notes',
      founders: ['Om'],
      role: 'SST student, 2nd year',
      description: 'Om co-founded Build My Notes and cracked two internships at the same time, all in his second year at SST.',
      sector: 'EdTech',
      stat: { value: '2', label: 'internships in 2nd year' },
      image: `${H}/two-internships.webp`,
      imagePosition: '72% 50%',
      imageAlt: 'Om, co-founder of Build My Notes',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7295011234104426496/',
    },
    {
      company: 'Ninad AI',
      founders: ['SST students'],
      role: 'Builders',
      description: 'A full-duplex AI speech engine powering real-time, human-like voice interactions, built by SST students.',
      sector: 'AI · Voice',
      image: `${H}/ninad-ai.webp`,
      imageAlt: 'Ninad AI’s real-time AI voice demo',
      href: 'https://ninad.live/',
    },
    {
      company: 'NeoSapiens',
      founders: ['Dhananjay Yadav', 'Aryan'],
      role: 'Innovation Lab startup',
      description:
        'An AI-native wearable pendant, incubated at SST’s Innovation Lab, that secured funding on Shark Tank India.',
      sector: 'AI wearables',
      stat: { value: '$2M', label: 'seed funding' },
      image: `${H}/neosapiens.webp`,
      imagePosition: '80% 50%',
      imageAlt: 'NeoSapiens’ founder wearing the AI pendant',
      href: 'https://www.hindustantimes.com/genesis/scaler-innovation-lab-incubated-ai-wearable-tech-startup-neosapien-raises-2mn-seed-funding-101767074236219.html',
    },
    {
      company: 'Emergent',
      founders: ['SST students'],
      role: 'Founding engineers',
      description:
        '15+ SST students joined Emergent as founding engineers from Day Zero: not just employees, but its core building team.',
      sector: 'AI · Vibe coding',
      stat: { value: '15+', label: 'SST founding engineers' },
      image: `${H}/emergent.webp`,
      imageAlt: 'Sam Altman, CEO of OpenAI, with Mukund Jha, CEO of Emergent',
    },
  ] satisfies Venture[],
};

/** The industry leaders on SST's campus (the people tabs' fourth group): those who build at its
 *  Innovation Lab or have spoken to its students. */
export const investors = {
  eyebrow: 'On campus',
  title: 'Industry Leaders on Campus',
  sub: 'Founders and technologists who build at SST’s Innovation Lab and speak to its students.',
  people: [
    {
      name: 'Srikanth Vidapanakal',
      role: 'xSpecies AI · Ex-Stanford, Director AI, OLA Electric',
      image: '/sst/community/lab/srikanth-vidapanakal.webp',
    },
    {
      name: 'Gaurav Dadhich',
      role: 'Founder, Maximem · Incubated at the Innovation Lab',
      image: '/faculty/gaurav-dadhich.webp',
    },
    {
      name: 'Jacob Singh',
      role: 'Ex-CTO, Blinkit',
      image: '/faculty/jacob-singh.webp',
      logo: { name: 'Blinkit', src: '/sst/community/sessions/jacob-singh-logo.webp' },
    },
  ] satisfies ShowcasePerson[],
};

/** What industry leaders say about SST: the testimonial band's slides, by `title`. */
export const sharkTank = {
  eyebrow: 'On campus',
  title: 'What industry leaders say about SST',
  sub: 'Founders and leaders on SST’s students and curriculum.',
  stories: [
    {
      title: 'Anupam Mittal',
      text: 'SST’s curriculum and culture puts its students ahead of the curve. The industry needs such talent. I’d love to hire from SST.',
      mediaLabel: 'Photo: Anupam Mittal with SST students',
      media: '/sst/proof/testimonial/anupam-mittal.webp',
    },
  ] satisfies Story[],
};

const M = '/sst/community/mentors';
const T = '/sst/community/team';

/** The SST team (the live site's "Meet the Team Behind SST"), those running the programme; its
 *  founders and board are `foundingTeamSection`. Roles are the site's two lines, joined. */
export const mentorsSection = {
  eyebrow: 'Our team',
  title: 'Meet the Team Behind SST',
  sub: 'Entrepreneurs and AI builders who’ve scaled global companies lead SST, bringing real-world insight to shape tomorrow’s tech leaders.',
  people: [
    { name: 'Manmeet Singh Akali', role: 'Programme Director SST, Ex-Founder, Klarity', image: `${T}/manmeet-singh-akali.webp` },
    { name: 'Tushar Bisht', role: 'CTO, Scaler', image: `${T}/tushar-bisht.webp` },
    { name: 'Shivank Agrawal', role: 'Sr. VP Data Science, Scaler · Ex-Microsoft, Oracle', image: `${T}/shivank-agrawal.webp` },
    { name: 'Amar Srivastava', role: 'AVP Product, Scaler · IIT Delhi Alum', image: `${T}/amar-srivastava.webp` },
    { name: 'Shruti Sagar', role: 'Ex-LEK Consulting', image: `${T}/shruti-sagar.webp` },
    { name: 'Vadivelan Gopal', role: 'Vice President, Campus Outreach, SST', image: `${T}/vadivelan-gopal.webp` },
  ] as (Omit<ShowcasePerson, 'image'> & { image?: string })[],
};
export const foundingTeamSection = {
  eyebrow: 'Leadership',
  title: 'The Founders and Board Behind SST',
  sub: 'Scaler’s co-founders, the head of SST and the board member who built Uber India.',
  people: [
    {
      name: 'Anshuman Singh',
      role: 'Co-Founder of Scaler, Ex-Meta',
      image: `${T}/anshuman-singh.webp`,
      logo: { name: 'Meta', src: '/logos/meta.svg' },
    },
    { name: 'Abhimanyu Saxena', role: 'Co-founder of Scaler, Ex-Fab.com', image: `${T}/abhimanyu-saxena.webp` },
    {
      name: 'Vidit Jain',
      role: 'Head of SST, Ex-McKinsey & MPL',
      image: `${T}/vidit-jain.webp`,
      logo: { name: 'McKinsey & Company', src: '/logos/mckinsey.svg' },
    },
    {
      name: 'Bhavik Rathod',
      role: 'Board Member, Built Uber India',
      image: `${T}/bhavik-rathod.webp`,
      logo: { name: 'Uber', src: '/logos/uber.svg' },
    },
  ] satisfies ShowcasePerson[],
};

const S = '/sst/community/sessions';

/** "Access To Industry Leaders" (the live site's): its five talks, name and role split at the
 *  title's comma, the line as written; thumbnails YouTube's, logos the site's. */
export const superMentors = {
  eyebrow: 'Industry talks',
  title: 'Access to Industry Leaders',
  sub: 'Get unparalleled access to those shaping the AI revolution.',
  sessions: [
    {
      name: 'Varun Mohan',
      role: 'Building Antigravity at Google DeepMind',
      text: 'An MIT-trained AI innovator addressed SST students on reshaping software development.',
      videoId: 'fCg1bSh1RnI',
      thumb: `${S}/varun-mohan.webp`,
      logo: { name: 'Google DeepMind', src: `${S}/varun-mohan-logo.webp` },
    },
    {
      name: 'Yash Kumar',
      role: 'Lead Engineer, OpenAI (ChatGPT Agents)',
      text: 'The creator of OpenAI’s first agent, addressed students on Commencement Day.',
      videoId: '5R95YlIdeBg',
      thumb: `${S}/yash-kumar.webp`,
      logo: { name: 'OpenAI', src: `${S}/yash-kumar-logo.webp` },
    },
    {
      name: 'Rajan Anandan',
      role: 'Ex-MD SEA, Google',
      text: 'He spoke about striving for excellence, learning from failure, and staying hungry for success.',
      videoId: 'M7H1SHc1f2Q',
      thumb: `${S}/rajan-anandan.webp`,
      logo: { name: 'Google', src: `${S}/rajan-anandan-logo.webp` },
    },
    {
      name: 'Jacob Singh',
      role: 'Ex-CTO, Blinkit, India’s Largest Q-Commerce',
      text: 'He shared deep insights on tech leadership and product thinking with the students.',
      videoId: 'QMjFvjBwuE4',
      thumb: `${S}/jacob-singh.webp`,
      logo: { name: 'Blinkit', src: `${S}/jacob-singh-logo.webp` },
    },
    {
      name: 'Rahul Chari',
      role: 'Co-Founder, PhonePe (India’s largest UPI app)',
      text: 'Rejected by Google, built a leading UPI platform: a journey of grit and innovation.',
      videoId: 'fN43OAasN5w',
      thumb: `${S}/rahul-chari.webp`,
      logo: { name: 'PhonePe', src: `${S}/rahul-chari-logo.webp` },
    },
  ] satisfies Session[],
};

const C = '/sst/community/campus';

/** "Bangalore. India's Startup Capital. Your Campus." (the live site's): the campus photos, then its
 *  amenities as the row of cards. */
export const campusLife = {
  eyebrow: 'Campus life',
  title: 'Bangalore. India’s Startup Capital. Your Campus.',
  sub: 'In India’s Silicon Valley, our urban campus combines cutting-edge labs with a close community, where students learn, lead clubs, run fests, and forge lifelong bonds.',
  /** The mosaic's middle photo: on desktop it arrives full-bleed and pulls back into its tile. */
  feature: { media: `${C}/campus-5.webp`, alt: 'An SST cohort together on the campus lawn', position: '50% 55%' },
  /** SST's "Amenities and Features", as the row of cards (a photo each). */
  clubsTurn: { text: 'Amenities and features, built around builders.', accent: 'Amenities and features' },
  clubs: [
    {
      name: 'Fully residential',
      tag: 'Living',
      text: 'On-campus living designed for focused building and a strong peer community.',
      media: `${C}/campus-1.webp`,
      alt: 'SST students walking across campus',
      position: '50% 50%',
    },
    {
      name: 'Scaler Innovation Lab',
      tag: 'Lab',
      text: 'India’s only deep-tech lab for undergraduates, where innovative ideas come to life.',
      media: '/sst/community/lab/humanoid.webp',
      alt: 'A student beside a robotic hand in the Innovation Lab',
      position: '40% 50%',
    },
    {
      name: 'Clubs',
      tag: 'Clubs',
      text: 'Open source, competitive programming, sports and entrepreneurship, run by students.',
      media: `${C}/campus-2.webp`,
      alt: 'Students playing basketball on the campus court',
      position: '50% 40%',
    },
    {
      name: 'Mental health support',
      tag: 'Wellbeing',
      text: 'Professional counselling through our in-house mental health counsellors.',
      media: `${C}/campus-4.webp`,
      alt: 'Students working on laptops together on the lawn',
      position: '50% 50%',
    },
  ],
  /** The campus around it, in the mosaic's order (left tall, left short, right short, right tall). */
  photos: [
    { media: `${C}/campus-1.webp`, alt: 'SST students walking across campus', position: '50% 50%' },
    { media: `${C}/campus-2.webp`, alt: 'Students playing basketball on the campus court', position: '50% 40%' },
    { media: `${C}/campus-3.webp`, alt: 'SST students together at a campus fest', position: '55% 50%' },
    { media: `${C}/campus-4.webp`, alt: 'Students working on laptops together', position: '50% 50%' },
  ],
  follow: [
    {
      handle: '@scaler_school_of_technology',
      note: 'official',
      href: 'https://www.instagram.com/scaler_school_of_technology/',
    },
  ],
};

const N = '/sst/community/news';

/** "In the News" (the live site's): its seven stories, the site's headline as each card's line. */
export const inTheNews = {
  eyebrow: 'Featured',
  title: 'In the News.',
  sub: 'What the press has written about Scaler and SST.',
  articles: [
    {
      kicker: 'Partnership',
      title: 'IIT Madras partners with SST',
      text: 'IIT Madras has partnered with Scaler School of Technology to use AI tools in its BS Data Science course.',
      media: `${N}/iit-madras.webp`,
      mediaLabel: 'IIT Madras and Scaler School of Technology',
    },
    {
      kicker: 'Partnership',
      title: 'IIT Roorkee and Scaler',
      text: 'IIT Roorkee and Scaler partner to launch high-impact AI programmes addressing talent shortages.',
      media: `${N}/iit-roorkee.webp`,
      mediaLabel: 'IIT Roorkee and Scaler',
    },
    {
      kicker: 'GovTech',
      title: 'SST & eGov launch DIGIT',
      text: 'Scaler School of Technology and eGov launch the DIGIT GovTech course to train future public-tech leaders.',
      media: `${N}/egov-digit.webp`,
      mediaLabel: 'SST and eGov',
    },
    {
      kicker: 'Students',
      title: 'SST over IIT Ropar',
      text: 'Why a CS aspirant chose Scaler SST over IIT Ropar: real-world learning tipped the scales.',
      media: `${N}/iit-ropar.webp`,
      mediaLabel: 'An SST student',
    },
    {
      kicker: 'Students',
      title: 'An AI interview companion',
      text: 'Scaler students create an AI interview companion, streamlining prep for their peers.',
      media: `${N}/ai-interview.webp`,
      mediaLabel: 'Scaler students’ AI interview companion',
    },
    {
      kicker: 'Recognition',
      title: 'TIME’s top EdTech companies',
      text: 'TIME magazine’s World’s Top EdTech Companies 2024: Scaler Academy achieved the top position.',
      media: `${N}/time-edtech.webp`,
      mediaLabel: 'TIME World’s Top EdTech Companies 2024',
    },
    {
      kicker: 'Innovation Lab',
      title: 'A deep-tech innovation lab',
      text: 'Scaler School of Technology launches a deep-tech innovation lab to foster robotics, AI and autonomous startups.',
      media: `${N}/deep-tech-lab.webp`,
      mediaLabel: 'The Scaler Innovation Lab',
    },
  ] satisfies Story[],
};
