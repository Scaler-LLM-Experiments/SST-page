/**
 * SST footer content, from the live SST site's footer (scaler.com/school-of-technology, read
 * 2026-10-12). Components hold no copy: everything they print is here.
 */
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterContent {
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    image: { src: string; alt: string };
    primary: FooterLink;
    secondary: FooterLink;
  };
  tagline: string;
  columns: { title: string; links: FooterLink[] }[];
  legal: string;
  backToTop: string;
  navLabel: string;
  /** Drawn in particles at the foot (decorative). */
  wordmark: string;
  /** The campus footer: the photo the footer stands on, and the short line beside the tagline. */
  campus: { image: { src: string; small: string; alt: string }; place: string };
  /** The building footer: the SSB building cut out (transparent around it), standing in front of the name. */
  building: { src: string; small: string; alt: string };
}

export const SSB_FOOTER: FooterContent = {
  cta: {
    eyebrow: 'Your next step',
    title: 'India’s Ivy League for the AI Age',
    body: 'Explore the CS & AI and AI & Business programmes and choose your best fit.',
    note: 'Applications are closed for the 2026 batch. Join the waitlist for the next one.',
    image: { src: '/sst/community/campus/campus-1.webp', alt: 'Scaler School of Technology students walking across the Bangalore campus' },
    // [CONFIRM] the live Join Waitlist and Request Callback are buttons that open the site's own forms
    primary: { label: 'Join Waitlist', href: 'https://www.scaler.com/school-of-technology/admission/' },
    secondary: { label: 'Request Callback', href: '#advisor' },
  },
  tagline: '#CreateImpact',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Why SST', href: '#why-ssb' },
        { label: 'Outcomes', href: '#outcomes' },
        { label: 'Curriculum', href: '#curriculum' },
      ],
    },
    {
      title: 'Next steps',
      links: [
        { label: 'Programmes', href: '#curriculum' },
        { label: 'Admission Process', href: '#admissions' },
        { label: 'FAQs', href: '#faq' },
      ],
    },
    {
      // the live footer's "Follow us on" (no socials field in the type: a column of links)
      title: 'Follow us on',
      links: [
        { label: 'Instagram', href: 'https://www.instagram.com/scaler_school_of_technology/' },
        { label: 'YouTube', href: 'https://www.youtube.com/@ScalerSchoolOfTechnology' },
        { label: 'LinkedIn', href: 'https://in.linkedin.com/school/scaler-school-of-technology/' },
        { label: 'Facebook', href: 'https://www.facebook.com/ScalerSchoolOfTechnology/' },
        { label: 'X', href: 'https://x.com/Scaler_SST' },
      ],
    },
  ],
  // the live footer's copyright and certificate disclaimer, as one line (no separate disclaimer field)
  legal:
    '© 2026 InterviewBit Technologies Pvt. Ltd. Scaler School of Technology offers a certificate-based program. It is not a university/college and does not confer degrees.',
  backToTop: 'Back to top',
  navLabel: 'Footer',
  wordmark: 'Scaler School of Technology',
  // SST's own campus photo (the live site's campus band); one width only
  campus: { image: { src: '/sst/community/campus/campus-1.webp', small: '/sst/community/campus/campus-1.webp', alt: 'Students on the Scaler School of Technology campus in Bangalore' }, place: 'Campus: Bangalore' },
  // [SST] no cut-out of SST's building exists: a transparent placeholder of the same size (1536 × 1024)
  // stands in, so the SSB building is not shown under SST's name
  building: { src: '/sst/footer/building-none.png', small: '/sst/footer/building-none-800.png', alt: '' },
};
