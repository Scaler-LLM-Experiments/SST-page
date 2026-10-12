// SST admissions, fees and eligibility, and the FAQ: from the live site
// (scaler.com/school-of-technology "Admission Process" and FAQ, and /school-of-technology/admission/
// for the fees, captured 2026-10-12). Applications for the 2026 batch are closed, so the primary CTA is
// the waitlist.

export const admissionsCtas = {
  primary: { label: 'Join Waitlist', href: 'https://www.scaler.com/school-of-technology/admission/' },
  secondary: { label: 'Talk to Counsellor', href: '#advisor' },
};

export const eligibility =
  'Age 20 or under as of 1 July 2026, with at least 60% in Grade 12 Mathematics. Open to current Grade 12 students and pass-outs (2024 onwards) from every stream: science, commerce and arts.';

// The live site's five steps.
export const admissionSteps = [
  'Application form and video essay',
  'Book an NSET slot (₹1,000 application fee)',
  'Two 1:1 online interviews',
  'Admission decision in 7–10 days',
  'Final enrolment, with scholarships',
];

export const fastTrack =
  'Skip NSET: JEE Main 92%ile+ overall (or 95%ile+ in Maths or Physics), or SAT 1430+, takes you straight to the interviews.';

// The admission page's fee table, by year. Its two tuition tables aren't labelled by programme, so
// tuition is shown as the range across them (CS & AI / AI & B). Hostel & mess is the page's indicative figure.
export const feeColumns = ['Year', 'Hostel & mess', 'Admission fee', 'Tuition'] as const;

export const feeRows = [
  { intake: 'Year 1', deadline: '₹1.83L', application: '₹50,000', course: '₹4.5L – ₹5L' },
  { intake: 'Year 2', deadline: '₹1.83L', application: '—', course: '₹5L – ₹5.5L' },
  { intake: 'Year 3', deadline: '₹1.83L', application: '—', course: '₹5L – ₹5.5L' },
  { intake: 'Year 4', deadline: 'Optional', application: '—', course: '₹2.5L' },
  { intake: 'Total', deadline: '₹5.49L', application: '₹50,000', course: '₹17L – ₹18.5L' },
];

export const scholarships =
  'Up to 100% scholarships from the Scaler Impact Foundation, on merit (JEE, SAT, Olympiads, projects, competitive coding) or merit-cum-need. Applying early improves your chances.';

export type Faq = { question: string; answer: string; link?: { label: string; href: string } };

// The live site's six questions. Answers are placeholders until the team sends them.
export const faqs: Faq[] = [
  { question: 'How is SST different from a regular engineering college?', answer: 'Answer coming soon.' },
  { question: 'What is the difference between CS & AI and AI & Business?', answer: 'Answer coming soon.' },
  { question: 'Can I apply for both the programmes simultaneously?', answer: 'Answer coming soon.' },
  { question: 'Do I need coding experience before joining?', answer: 'Answer coming soon.' },
  { question: 'What is the NSET exam and how do I prepare for it?', answer: 'Answer coming soon.' },
  { question: 'Are scholarships available and what are the criteria to get one?', answer: 'Answer coming soon.' },
];
