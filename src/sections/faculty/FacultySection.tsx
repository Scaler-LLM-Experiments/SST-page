'use client';

import { companyLogos } from '@/content/company-logos';
import { faculty } from '@/content/people';
import { PeopleShowcase } from './PeopleShowcase';

const people = faculty
  .filter((m) => m.photo)
  .map((m) => ({
    name: m.name,
    role: m.role,
    image: `/sst/community/mentors/${m.photo}.webp`,
    logo: companyLogos[m.companies[0]],
  }));

export function FacultySection() {
  return (
    <PeopleShowcase
      id="faculty"
      eyebrow="Super mentors"
      title="Built & Delivered By 100+ Industry Leaders"
      sub="Builders from Google, OpenAI, Google DeepMind, PhonePe and Flipkart mentor SST students."
      people={people}
      itemName="faculty"
    />
  );
}
