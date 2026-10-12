export type Person = { name: string; role: string };

export type FacultyMember = Person & {
  /** Portrait in /public/sst/community/mentors. Absent until a photo is supplied. */
  photo?: string;
  /** The company whose logo the card shows (the first named in `role`), a key of `companyLogos`. */
  companies: string[];
};

// SST's super mentors: the live site's "Super mentors: Built & Delivered By 100+ Industry Leaders"
// (scaler.com/school-of-technology, 2026-10-12). Roles as the site has them, the company named.

export const mentors: Person[] = [
  { name: 'Rajan Anandan', role: 'Ex VP South-East Asia, Google' },
  { name: 'Arvind N', role: 'Co-Creator GPT 3 & 4, OpenAI' },
  { name: 'Varun Mohan', role: 'Lead Engineer, Google DeepMind' },
  { name: 'Yash Kumar', role: 'Member of Technical Staff, OpenAI' },
  { name: 'Akash Saxena', role: 'CTPO, Viacom18' },
  { name: 'Rahul Chari', role: 'Co-founder, PhonePe' },
  { name: 'Amod Malviya', role: 'Ex CTO, Flipkart' },
];

// The people tabs' first group: the super mentors, with their photos (public/sst/community/mentors).
export const faculty: FacultyMember[] = [
  { name: 'Rajan Anandan', role: 'Ex VP South-East Asia, Google', photo: 'rajan-anandan', companies: ['google'] },
  { name: 'Arvind N', role: 'Co-Creator GPT 3 & 4, OpenAI', photo: 'arvind-n', companies: ['openai'] },
  { name: 'Varun Mohan', role: 'Lead Engineer, Google DeepMind', photo: 'varun-mohan', companies: ['deepmind'] },
  { name: 'Yash Kumar', role: 'Member of Technical Staff, OpenAI', photo: 'yash-kumar', companies: ['openai'] },
  { name: 'Akash Saxena', role: 'CTPO, Viacom18', photo: 'akash-saxena', companies: ['viacom18'] },
  { name: 'Rahul Chari', role: 'Co-founder, PhonePe', photo: 'rahul-chari', companies: ['phonepe'] },
  { name: 'Amod Malviya', role: 'Ex CTO, Flipkart', photo: 'amod-malviya', companies: ['flipkart'] },
];

// "Meet the Team Behind SST" (the live site's); the cards' data is in community.ts.
export const foundingTeam: Person[] = [
  { name: 'Anshuman Singh', role: 'Co-Founder of Scaler, Ex-Meta' },
  { name: 'Abhimanyu Saxena', role: 'Co-founder of Scaler, Ex-Fab.com' },
  { name: 'Vidit Jain', role: 'Head of SST, Ex-McKinsey & MPL' },
  { name: 'Manmeet Singh Akali', role: 'Programme Director SST, Ex-Founder, Klarity' },
  { name: 'Tushar Bisht', role: 'CTO, Scaler' },
  { name: 'Shivank Agrawal', role: 'Sr. VP Data Science, Scaler, Ex-Microsoft, Oracle' },
  { name: 'Amar Srivastava', role: 'AVP Product, Scaler, IIT-Delhi Alum' },
  { name: 'Shruti Sagar', role: 'Ex-LEK Consulting' },
  { name: 'Bhavik Rathod', role: 'Board Member, Built Uber India' },
  { name: 'Vadivelan Gopal', role: 'Vice President, Campus Outreach, SST' },
];
