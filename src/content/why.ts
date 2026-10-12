import type { WhyContent } from '@/sections/why/types';

// Section 3, "Why SST": the breaker is Amitabh Kant's remark on Scaler, from the live SST page
// (scaler.com/school-of-technology, read 2026-10-12); the figures are the live site's (the
// internship report audited by B2K Analytics; GSoC 2026); the three chapters are the live site's
// "What makes SST India's Ivy League for the AI Age" (Learn by Building, Access to Industry Leaders,
// Innovation Focus), each proved by one SST story from its "Headlines from SST".
export const why: WhyContent = {
  quote: {
    eyebrow: 'Why engineering on old syllabi doesn’t work',
    caption:
      'Today, where even top-tier institutes like IITs are running old syllabi, Scaler does the job of producing high-quality engineers.',
    attribution: 'Amitabh Kant',
    role: 'Ex-CEO, NITI Aayog',
    // [SST] no clip of the remark: the live site's portrait of him, held as a still loop (6s, silent),
    // placed at the left as the breaker expects; its first frame the poster.
    video: '/sst/why/amitabh-kant-clip.mp4',
    poster: '/sst/why/amitabh-kant-poster.webp',
  },
  // The live site's figures. Logos are drawn white by the breaker, so the GSoC mark is a transparent
  // cut of the live site's file (public/sst/why/gsoc-logo.png).
  figures: [
    {
      value: '96.3%',
      description: 'of eligible SST students got at least one internship offer, in just their 2nd year',
      source: 'B2K Analytics',
      sourceLogo: '/sst/proof/logos/b2k-analytics.png',
      sourceLogoHeight: 28,
      sourceNote: '2026',
    },
    {
      value: '14',
      description: 'SST students selected for Google Summer of Code 2026, from 15K+ global applicants',
      source: 'Google Summer of Code',
      sourceLogo: '/sst/why/gsoc-logo.png',
      sourceLogoHeight: 18,
      sourceNote: '2026',
    },
  ],
  // The turn (hidden on /v2 for now): the live site's career outcomes for the two programmes.
  roles: {
    setup: 'He’s right about the old syllabi.',
    struck: 'old syllabi',
    lead: 'But SST prepares you for roles like',
    roles: ['AI/ML Engineer', 'Senior Software Engineer', 'AI Product Manager', 'Forward Deployed Engineer', 'Tech Founder'],
  },
  // The three chapters, each proved by one story from the live site's "Headlines from SST".
  pillars: [
    {
      icon: 'hammer',
      title: 'Build',
      description:
        'Learn by building. A curriculum co-developed with 100+ industry leaders, updated every 6 months, with AI embedded from day one.',
      story: {
        tag: 'Highlight',
        label: 'Ather Labs · Advith & Arsh',
        headline: 'Two students’ AI-powered fintech startup, at INR 2L+ MRR.',
        imageUrl: '/sst/community/headlines/ather-labs.webp',
        imageUrlSmall: '/sst/community/headlines/ather-labs.webp',
        imageAlt: 'Advith and Arsh, the founders of Ather Labs',
        imagePosition: '30% 30%',
      },
    },
    {
      icon: 'rocket',
      title: 'Learn',
      // Hidden for now (2026-10-09, the team's ask); delete this line to show the card again.
      hidden: true,
      description:
        'Access to industry leaders. Get unparalleled access to those shaping the AI revolution, from OpenAI to Google DeepMind.',
      story: {
        tag: 'Highlight',
        label: 'Emergent · Founding engineers',
        headline: '15+ SST students joined Emergent as founding engineers from Day Zero.',
        imageUrl: '/sst/community/headlines/emergent.webp',
        imageUrlSmall: '/sst/community/headlines/emergent.webp',
        imageAlt: 'Sam Altman, CEO of OpenAI, with Mukund Jha, CEO of Emergent',
        imagePosition: '50% 30%',
      },
    },
    {
      icon: 'trend-up',
      title: 'Innovate',
      description:
        'Innovation focus. Access to cutting-edge AI, robotics and drone labs led by experts, with funding support for startups.',
      story: {
        tag: 'Highlight',
        label: 'Xspecies AI · Innovation Lab',
        headline: 'A startup incubated at SST’s Innovation Lab, building India’s first humanoid robot.',
        imageUrl: '/sst/community/headlines/humanoid.webp',
        imageUrlSmall: '/sst/community/headlines/humanoid.webp',
        imageAlt: 'A student with a robotic hand in SST’s Innovation Lab',
        imagePosition: '60% 30%',
      },
    },
  ],
};
