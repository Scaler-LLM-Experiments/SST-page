export type CompanyLogo = { name: string; src: string };

// The super mentors' companies, as SST's live site shows them under each mentor
// (scaler.com/school-of-technology, "Super mentors"); files in public/sst/community.
export const companyLogos: Record<string, CompanyLogo> = {
  google: { name: 'Google', src: '/sst/community/mentors/rajan-anandan-logo.webp' },
  openai: { name: 'OpenAI', src: '/sst/community/mentors/arvind-n-logo.webp' },
  deepmind: { name: 'Google DeepMind', src: '/sst/community/mentors/varun-mohan-logo.webp' },
  viacom18: { name: 'Viacom18', src: '/sst/community/mentors/akash-saxena-logo.webp' },
  phonepe: { name: 'PhonePe', src: '/sst/community/mentors/rahul-chari-logo.webp' },
  flipkart: { name: 'Flipkart', src: '/sst/community/mentors/amod-malviya-logo.webp' },
};
