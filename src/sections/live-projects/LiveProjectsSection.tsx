'use client';
/**
 * Live consulting projects: one photo card per company brief, in the faculty section's
 * frame (PeopleShowcase's: the same header, arrows, looping row with progress dots,
 * the swipeable card stack on phones and the entrance; ../SSB---Page, read in place).
 * The card follows scaler.com/online-pgp-in-business-and-ai's case cards: the
 * photo fills it, the company sits on the photo's dark base over a hairline, the brief
 * under it. Content from the SSB concept site (ssb-school-concept.vercel.app, "Live
 * projects"). A card shows its photo when `image` names a file in public/live-projects: the
 * photos are generated stand-ins (Magnific, 2026-10-06), one still life per brief, no people and
 * no brand marks, until brand imagery is supplied.
 */
import * as React from 'react';
import { Container, Heading, Section, Text } from '@kishanscaler/ssx-ui';
import { HScrollerTrack, useHScroller } from '@/sections/faculty/HScroller';
import { useSectionEntrance } from '@/sections/faculty/useSectionEntrance';
import { CardStack } from '@/sections/shared/CardStack';
import { ScrollDots } from '@/sections/shared/ScrollDots';
import '@/sections/faculty/story-card.css';
import './live-projects.css';

const PROJECTS: Project[] = [
  { company: 'Year 1 · Flagship', title: 'E-commerce Challenge', desc: 'Build and scale a tech-enabled e-commerce business.', image: 'ajio' },
  { company: 'Year 1', title: 'Database schema design', desc: 'Design the database schema for apps like Instagram, Amazon or MakeMyTrip.', image: 'mokobara' },
  { company: 'Year 2 · Flagship', title: 'Startup Weekend Challenge', desc: 'Build and ship a working product in 48 hours.', image: 'meolaa' },
  { company: 'Year 2', title: 'IPL performance prediction', desc: 'Use statistical methods to predict player performance.', image: 'stockgro' },
  { company: 'Year 3 · Flagship', title: 'Real-world industry projects', desc: 'Solve real business problems of companies using AI.', image: 'practo' },
  { company: 'Year 3', title: 'GTM Strategy Challenge', desc: 'Launch a real tech product and take it to market.', image: 'quenzy' },
];

type Project = { company: string; title: string; desc: string; /** a file name in public/live-projects, without the extension */ image?: string };

/** The generated stand-in photos, on (back on 2026-10-06, the team's call). false: each card stands
 * on a green ground instead. */
const SHOW_PHOTOS = true;

function ProjectCard({ project: p, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="ssx-card lp-card" data-align="start" data-photo={SHOW_PHOTOS && p.image ? '' : undefined}>
      {SHOW_PHOTOS && p.image ? (
        <div className="ssx-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/live-projects/${p.image}.jpg`} alt="" width={720} height={960} loading={priority ? 'eager' : 'lazy'} decoding="async" data-part="photo" />
          {/* the same photo again, blurred and shown only towards the foot: the progressive blur the text stands on */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lp-soft" src={`/live-projects/${p.image}.jpg`} alt="" width={720} height={960} loading="lazy" decoding="async" aria-hidden="true" />
        </div>
      ) : null}
      <div className="lp-content">
        {/* the company where the faculty card has its logo: first, over a hairline */}
        <p className="lp-company" data-part="title">
          {p.company}
        </p>
        <h3 className="lp-title" data-part="title">
          {p.title}
        </h3>
        <p className="lp-desc" data-part="description">
          {p.desc}
        </p>
      </div>
    </article>
  );
}

export function LiveProjectsSection() {
  const { ref, goTo } = useHScroller();
  const sectionRef = React.useRef<HTMLElement>(null);
  useSectionEntrance(sectionRef);
  // a short list needs a third copy for the ticker to wrap seamlessly (as PeopleShowcase does)
  const copies = PROJECTS.length < 8 ? 3 : 2;

  return (
    <Section ref={sectionRef} id="live-projects" density="roomy" aria-labelledby="live-projects-title" className="overflow-x-clip">
      <Container>
        <div data-enter="header" className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-(--size-measure-max) flex-col gap-3">
            <Heading as="p" size="eyebrow" className="text-content-brand" data-enter="eyebrow">
              Live projects
            </Heading>
            <Heading as="h2" size="display" id="live-projects-title" data-enter="headline">
              50+ Real-World Projects Across 4 Years.
            </Heading>
            <Text size="lg" tone="secondary" data-enter="sub">
              Build products, ship them to real users and solve industry-sourced problems, from your first business to AI systems for real companies.
            </Text>
          </div>
        </div>
      </Container>

      {/* Phones: the card stack. */}
      <Container className="sm:hidden">
        <CardStack
          items={PROJECTS}
          getKey={(p) => p.company}
          label="Live projects"
          itemName="project"
          announce={(p) => `${p.company}, ${p.title}`}
          dots
          renderCard={(p, i) => <ProjectCard project={p} priority={i === 0 || i === 1 || i === PROJECTS.length - 1} />}
        />
      </Container>

      {/* Tablet and up: the looping ticker row. */}
      <HScrollerTrack trackRef={ref} label="Live projects">
        {/* The ticker loops through copies of the list; only the first is real. */}
        {Array.from({ length: copies }, (_, c) =>
          PROJECTS.map((p, i) => {
            const copy = c > 0;
            return (
              <li key={`${c}-${p.company}`} data-copy={copy || undefined} aria-hidden={copy || undefined} inert={copy || undefined}>
                <ProjectCard project={p} priority={!copy && i < 5} />
              </li>
            );
          }),
        )}
      </HScrollerTrack>
      <div className="hidden sm:block">
        <ScrollDots scroller={ref} count={PROJECTS.length} itemName="project" onSelect={goTo} />
      </div>
    </Section>
  );
}
