/**
 * SST navbar content.
 *   SSB_NAV          the live SST nav (scaler.com/school-of-technology, read 2026-10-12): the
 *                    Programmes menu, Home · Admission & Fees · Degree · Outcomes · Campus Life ·
 *                    FAQs, then Login and Join Waitlist.
 *   SSB_NAV_CONCEPT  the two-mega-menu concept nav, in SST's copy; kept so it can be switched back.
 */
export type NavIcon = 'chart' | 'users' | 'rocket' | 'briefcase' | 'target' | 'chalkboard' | 'book' | 'sparkle' | 'compass' | 'buildings' | 'flask' | 'door';
export interface NavItem {
  title: string;
  desc: string;
  href: string;
  icon: NavIcon;
}
export interface NavMenu {
  label: string;
  groups: { title: string; items: NavItem[] }[];
  footer: { text: string; sub: string; cta: { label: string; href: string } };
}
export interface NavContent {
  menus: NavMenu[];
  links: { label: string; href: string }[];
  /** `icon: 'download'` draws it as the outline button with the download glyph; without it, a plain text link */
  secondary: { label: string; href: string; icon?: 'download' };
  primary: { label: string; href: string };
  menuLabel: string;
  closeLabel: string;
}

const APPLY = 'https://www.scaler.com/school-of-technology/admission/';
const SST = 'https://www.scaler.com/school-of-technology';

export const SSB_NAV: NavContent = {
  // The live nav's Programmes dropdown, with the live top strip's links (Our Students, Campus Tour,
  // Hire from us, Events, Guide) in its second group, as the type has no second row
  menus: [
    {
      label: 'Programmes',
      groups: [
        {
          title: 'UG programmes',
          items: [
            { title: 'Computer Science & AI', desc: 'Build real world software and advanced AI systems', href: `${SST}/cs-ai`, icon: 'book' },
            { title: 'AI & Business', desc: 'Build AI products and ship them to real users', href: `${SST}/ai-b`, icon: 'sparkle' },
          ],
        },
        {
          title: 'More from SST',
          items: [
            { title: 'Our Students', desc: 'The student directory', href: `${SST}/alum-directory/`, icon: 'users' },
            { title: 'Campus Tour', desc: 'Walk through the Bangalore campus', href: `${SST}/campus-tour`, icon: 'buildings' },
            { title: 'Hire from us', desc: 'Recruit SST students', href: `${SST}/hire-from-us`, icon: 'briefcase' },
            { title: 'Events', desc: 'Free events with industry experts', href: `${SST}/events/`, icon: 'chalkboard' },
            { title: 'Guide', desc: 'Everything about SST in one place', href: `${SST}/guide`, icon: 'compass' },
          ],
        },
      ],
      footer: { text: 'Applications are closed for the 2026 batch.', sub: '4-year UG programmes · Bangalore campus', cta: { label: 'Join Waitlist', href: APPLY } },
    },
  ],
  links: [
    { label: 'Home', href: '#top' },
    { label: 'Admission & Fees', href: `${SST}/admission/` },
    { label: 'Degree', href: `${SST}/certification` },
    { label: 'Outcomes', href: `${SST}/career-outcomes` },
    { label: 'Campus Life', href: `${SST}/campus-life` },
    { label: 'FAQs', href: `${SST}/faq/` },
  ],
  // [CONFIRM] the live Login and Join Waitlist are buttons that open the site's own forms, not links
  secondary: { label: 'Login', href: 'https://www.scaler.com/users/sign_in/' },
  primary: { label: 'Join Waitlist', href: APPLY },
  menuLabel: 'Menu',
  closeLabel: 'Close menu',
};

export const SSB_NAV_CONCEPT: NavContent = {
  menus: [
    {
      label: 'Why SST',
      groups: [
        {
          title: 'The school',
          items: [
            { title: 'Outcomes', desc: 'Placement highlights of SST’s first placement cycle', href: '#outcomes', icon: 'chart' },
            { title: 'Students', desc: 'Internships and PPOs from the 3rd year', href: '#alumni', icon: 'users' },
            { title: 'Team & mentors', desc: 'Entrepreneurs and AI builders who lead SST', href: '#founders', icon: 'rocket' },
          ],
        },
        {
          title: 'How you learn',
          items: [
            { title: 'Learn by building', desc: '50+ projects and a year of industry immersion', href: '#experience', icon: 'briefcase' },
            { title: 'Hackathons', desc: 'Monthly hackathons, ICPC and global contests', href: '#challenges', icon: 'target' },
            { title: 'Super mentors', desc: 'Built and delivered by 100+ industry leaders', href: '#people', icon: 'chalkboard' },
          ],
        },
      ],
      footer: { text: 'Applications are closed for the 2026 batch.', sub: '4-year UG programmes · Bangalore campus', cta: { label: 'Join Waitlist', href: APPLY } },
    },
    {
      label: 'Programmes',
      groups: [
        {
          title: 'Curriculum',
          items: [
            { title: 'Computer Science & AI', desc: 'Advanced CS, AI/ML and system design', href: '#curriculum', icon: 'book' },
            { title: 'AI & Business', desc: 'CS, AI/ML, product thinking and business strategy', href: '#ai', icon: 'sparkle' },
            { title: 'Career prep', desc: 'Internships from the 2nd year', href: '#career', icon: 'compass' },
          ],
        },
        {
          title: 'Beyond the classroom',
          items: [
            { title: 'Internship', desc: '96.3% of eligible students got an internship offer', href: '#internship', icon: 'buildings' },
            { title: 'Innovation lab', desc: 'India’s only deep-tech lab for undergraduates', href: '#innovation', icon: 'flask' },
            { title: 'Admissions', desc: 'How to apply and what happens next', href: '#admissions', icon: 'door' },
          ],
        },
      ],
      footer: { text: 'Explore the programmes and choose your best fit.', sub: 'Computer Science & AI · AI & Business', cta: { label: 'Explore Programmes', href: SST } },
    },
  ],
  links: [
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Admissions', href: '#admissions' },
  ],
  secondary: { label: 'Login', href: 'https://www.scaler.com/users/sign_in/' },
  primary: { label: 'Join Waitlist', href: APPLY },
  menuLabel: 'Menu',
  closeLabel: 'Close menu',
};
