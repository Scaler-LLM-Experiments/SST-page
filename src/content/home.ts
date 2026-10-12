import type { HeroContent } from '@/sections/hero/types';

/*
 * The first fold's copy, from the live SST page (scaler.com/school-of-technology, read
 * 2026-10-12): the title, "Industry Integrated UG Programmes Built by 100+ leaders from" over the
 * leaders' logos (the live hero's strip, public/sst/hero), Join Waitlist and Explore Programmes,
 * and the four USPs as the facts. The film is the live hero's loop (public/sst/hero/hero.mp4); its
 * play button (hidden on /v2 for now) opens SST's programmes film on YouTube (14:23).
 */
export const hero: HeroContent = {
  eyebrow: 'Scaler School of Technology · UG Programmes',
  title: 'India’s Ivy League for the AI Age',
  // V2's title: the lead line in the brand colour, then the leaders' line, their logos under it.
  // `title` stays for the split fold.
  titleLead: 'India’s Ivy League for the AI Age',
  leadersTitle: 'Industry Integrated UG Programmes Built by 100+ leaders from',
  description: 'Computer Science & AI · AI & Business · Bangalore campus',
  // [CONFIRM] the live Join Waitlist is a button that opens the site's own form, not a link
  primaryCta: { label: 'Join Waitlist', href: 'https://www.scaler.com/school-of-technology/admission/', icon: 'arrow' },
  secondaryCta: { label: 'Explore Programmes', href: '#curriculum', icon: 'arrow' },
  facts: [
    // As SSB's: values in one row, one with a small caption under it.
    { value: '4-year UG', caption: 'CS & AI · AI & Business', shortCaption: 'CS & AI · AI & B' },
    { value: 'Bangalore' },
    { value: '3.3% selected' },
  ],
  media: {
    videoSrc: '/sst/hero/hero.mp4',
    poster: '/sst/hero/hero-poster.jpg',
    // SST's programmes film ("Explore the programmes and choose your best fit"), 14:23
    youtubeId: 'PkXHq65A9JI',
    youtubeLength: 863,
    caption: 'Learn by building. Build alongside the people shaping the AI age.',
  },
  leadersLine: 'Built by 100+ industry leaders from',
  // [SST] the live hero names no schools the programme was built by (SSB's Oxford / HBS line), so
  // the facts box shows the four USPs alone: no schools.
  alumniLead: '',
  alumniFrom: [],
  // V5's ticker: each leader organisation's own colour icon with its name beside it.
  leaderMarks: [
    { name: 'OpenAI', mark: '/logos/marks/lead-openai.png', wordmark: true },
    { name: 'Meta', mark: '/logos/marks/lead-meta.png' },
    { name: 'Adobe', mark: '/sst/hero/mark-adobe.png' },
    { name: 'Google DeepMind', mark: '/sst/hero/mark-deepmind.png' },
    { name: 'Microsoft', mark: '/sst/hero/mark-microsoft.png' },
    { name: 'Amazon', mark: '/sst/hero/mark-amazon.png' },
  ],
  // The live hero's strip, in its order, as colour files (the ticker's one tone turns them white).
  leaders: [
    { name: 'OpenAI', logoUrl: '/logos/openai.svg', wordmark: 'OpenAI', ink: 0.35 },
    { name: 'Meta', logoUrl: '/logos/meta.svg', wordmark: 'Meta', ink: 0.39 },
    { name: 'Adobe', logoUrl: '/sst/proof/alumni-logos/adobe.png', wordmark: 'Adobe', ink: 0.55 },
    { name: 'Google DeepMind', logoUrl: '/logos/google.svg', wordmark: 'Google DeepMind', ink: 0.27 },
    { name: 'Microsoft', logoUrl: '/sst/proof/alumni-logos/microsoft.png', wordmark: 'Microsoft', ink: 0.38 },
    { name: 'Amazon', logoUrl: '/logos/amazon.svg', wordmark: 'Amazon', ink: 0.38 },
  ],
};
