export interface Subject {
  name: string;
  slug: string;
  category: string;
  levels: ('high-school' | 'college' | 'both')[];
}

export const SUBJECT_CATEGORIES: string[] = [
  'STEM',
  'Humanities',
  'Social Sciences',
  'Arts',
  'Business',
  'Health',
  'Languages',
];

export const subjects: Subject[] = [
  // ─── STEM ────────────────────────────────────────────────────────────────────
  { name: 'Algebra', slug: 'algebra', category: 'STEM', levels: ['both'] },
  { name: 'Geometry', slug: 'geometry', category: 'STEM', levels: ['high-school'] },
  { name: 'Trigonometry', slug: 'trigonometry', category: 'STEM', levels: ['high-school'] },
  { name: 'Pre-Calculus', slug: 'pre-calculus', category: 'STEM', levels: ['high-school'] },
  { name: 'Calculus', slug: 'calculus', category: 'STEM', levels: ['both'] },
  { name: 'AP Calculus', slug: 'ap-calculus', category: 'STEM', levels: ['high-school'] },
  { name: 'Statistics', slug: 'statistics', category: 'STEM', levels: ['both'] },
  { name: 'AP Statistics', slug: 'ap-statistics', category: 'STEM', levels: ['high-school'] },
  { name: 'Linear Algebra', slug: 'linear-algebra', category: 'STEM', levels: ['college'] },
  { name: 'Differential Equations', slug: 'differential-equations', category: 'STEM', levels: ['college'] },
  { name: 'Biology', slug: 'biology', category: 'STEM', levels: ['both'] },
  { name: 'AP Biology', slug: 'ap-biology', category: 'STEM', levels: ['high-school'] },
  { name: 'Chemistry', slug: 'chemistry', category: 'STEM', levels: ['both'] },
  { name: 'AP Chemistry', slug: 'ap-chemistry', category: 'STEM', levels: ['high-school'] },
  { name: 'Physics', slug: 'physics', category: 'STEM', levels: ['both'] },
  { name: 'AP Physics', slug: 'ap-physics', category: 'STEM', levels: ['high-school'] },
  { name: 'Environmental Science', slug: 'environmental-science', category: 'STEM', levels: ['both'] },
  { name: 'Earth Science', slug: 'earth-science', category: 'STEM', levels: ['high-school'] },
  { name: 'Computer Science', slug: 'computer-science', category: 'STEM', levels: ['both'] },
  { name: 'AP Computer Science', slug: 'ap-computer-science', category: 'STEM', levels: ['high-school'] },
  { name: 'Data Structures', slug: 'data-structures', category: 'STEM', levels: ['college'] },
  { name: 'Algorithms', slug: 'algorithms', category: 'STEM', levels: ['college'] },
  { name: 'Web Development', slug: 'web-development', category: 'STEM', levels: ['both'] },
  { name: 'Cybersecurity', slug: 'cybersecurity', category: 'STEM', levels: ['both'] },
  { name: 'Machine Learning', slug: 'machine-learning', category: 'STEM', levels: ['college'] },
  { name: 'Organic Chemistry', slug: 'organic-chemistry', category: 'STEM', levels: ['college'] },
  { name: 'Biochemistry', slug: 'biochemistry', category: 'STEM', levels: ['college'] },
  { name: 'Genetics', slug: 'genetics', category: 'STEM', levels: ['college'] },
  { name: 'Microbiology', slug: 'microbiology', category: 'STEM', levels: ['college'] },
  { name: 'Anatomy and Physiology', slug: 'anatomy-and-physiology', category: 'STEM', levels: ['both'] },
  { name: 'Astronomy', slug: 'astronomy', category: 'STEM', levels: ['both'] },
  { name: 'Electrical Engineering', slug: 'electrical-engineering', category: 'STEM', levels: ['college'] },
  { name: 'Mechanical Engineering', slug: 'mechanical-engineering', category: 'STEM', levels: ['college'] },
  { name: 'Civil Engineering', slug: 'civil-engineering', category: 'STEM', levels: ['college'] },
  { name: 'Chemical Engineering', slug: 'chemical-engineering', category: 'STEM', levels: ['college'] },

  // ─── Humanities ──────────────────────────────────────────────────────────────
  { name: 'English Literature', slug: 'english-literature', category: 'Humanities', levels: ['both'] },
  { name: 'AP English Literature', slug: 'ap-english-literature', category: 'Humanities', levels: ['high-school'] },
  { name: 'AP English Language', slug: 'ap-english-language', category: 'Humanities', levels: ['high-school'] },
  { name: 'World Literature', slug: 'world-literature', category: 'Humanities', levels: ['both'] },
  { name: 'American Literature', slug: 'american-literature', category: 'Humanities', levels: ['both'] },
  { name: 'British Literature', slug: 'british-literature', category: 'Humanities', levels: ['both'] },
  { name: 'Creative Writing', slug: 'creative-writing', category: 'Humanities', levels: ['both'] },
  { name: 'Technical Writing', slug: 'technical-writing', category: 'Humanities', levels: ['both'] },
  { name: 'World History', slug: 'world-history', category: 'Humanities', levels: ['both'] },
  { name: 'AP World History', slug: 'ap-world-history', category: 'Humanities', levels: ['high-school'] },
  { name: 'US History', slug: 'us-history', category: 'Humanities', levels: ['both'] },
  { name: 'AP US History', slug: 'ap-us-history', category: 'Humanities', levels: ['high-school'] },
  { name: 'European History', slug: 'european-history', category: 'Humanities', levels: ['both'] },
  { name: 'Ancient History', slug: 'ancient-history', category: 'Humanities', levels: ['both'] },
  { name: 'Art History', slug: 'art-history', category: 'Humanities', levels: ['both'] },
  { name: 'Philosophy', slug: 'philosophy', category: 'Humanities', levels: ['both'] },
  { name: 'Ethics', slug: 'ethics', category: 'Humanities', levels: ['both'] },
  { name: 'Logic', slug: 'logic', category: 'Humanities', levels: ['both'] },
  { name: 'Religious Studies', slug: 'religious-studies', category: 'Humanities', levels: ['both'] },
  { name: 'Classical Studies', slug: 'classical-studies', category: 'Humanities', levels: ['college'] },
  { name: 'Linguistics', slug: 'linguistics', category: 'Humanities', levels: ['college'] },
  { name: 'Comparative Literature', slug: 'comparative-literature', category: 'Humanities', levels: ['college'] },

  // ─── Social Sciences ──────────────────────────────────────────────────────────
  { name: 'Psychology', slug: 'psychology', category: 'Social Sciences', levels: ['both'] },
  { name: 'AP Psychology', slug: 'ap-psychology', category: 'Social Sciences', levels: ['high-school'] },
  { name: 'Sociology', slug: 'sociology', category: 'Social Sciences', levels: ['both'] },
  { name: 'Anthropology', slug: 'anthropology', category: 'Social Sciences', levels: ['both'] },
  { name: 'Economics', slug: 'economics', category: 'Social Sciences', levels: ['both'] },
  { name: 'AP Economics', slug: 'ap-economics', category: 'Social Sciences', levels: ['high-school'] },
  { name: 'Macroeconomics', slug: 'macroeconomics', category: 'Social Sciences', levels: ['both'] },
  { name: 'Microeconomics', slug: 'microeconomics', category: 'Social Sciences', levels: ['both'] },
  { name: 'Political Science', slug: 'political-science', category: 'Social Sciences', levels: ['both'] },
  { name: 'International Relations', slug: 'international-relations', category: 'Social Sciences', levels: ['college'] },
  { name: 'Geography', slug: 'geography', category: 'Social Sciences', levels: ['both'] },
  { name: 'AP Human Geography', slug: 'ap-human-geography', category: 'Social Sciences', levels: ['high-school'] },
  { name: 'Urban Studies', slug: 'urban-studies', category: 'Social Sciences', levels: ['college'] },
  { name: 'Criminal Justice', slug: 'criminal-justice', category: 'Social Sciences', levels: ['both'] },
  { name: 'Social Work', slug: 'social-work', category: 'Social Sciences', levels: ['college'] },
  { name: 'Education', slug: 'education', category: 'Social Sciences', levels: ['college'] },

  // ─── Arts ─────────────────────────────────────────────────────────────────────
  { name: 'Music Theory', slug: 'music-theory', category: 'Arts', levels: ['both'] },
  { name: 'AP Music Theory', slug: 'ap-music-theory', category: 'Arts', levels: ['high-school'] },
  { name: 'Visual Art', slug: 'visual-art', category: 'Arts', levels: ['both'] },
  { name: 'Drawing', slug: 'drawing', category: 'Arts', levels: ['both'] },
  { name: 'Painting', slug: 'painting', category: 'Arts', levels: ['both'] },
  { name: 'Sculpture', slug: 'sculpture', category: 'Arts', levels: ['both'] },
  { name: 'Photography', slug: 'photography', category: 'Arts', levels: ['both'] },
  { name: 'Film Studies', slug: 'film-studies', category: 'Arts', levels: ['both'] },
  { name: 'Theater', slug: 'theater', category: 'Arts', levels: ['both'] },
  { name: 'Dance', slug: 'dance', category: 'Arts', levels: ['both'] },
  { name: 'Graphic Design', slug: 'graphic-design', category: 'Arts', levels: ['both'] },
  { name: 'Digital Media', slug: 'digital-media', category: 'Arts', levels: ['both'] },

  // ─── Business ─────────────────────────────────────────────────────────────────
  { name: 'Introduction to Business', slug: 'introduction-to-business', category: 'Business', levels: ['both'] },
  { name: 'Marketing', slug: 'marketing', category: 'Business', levels: ['both'] },
  { name: 'Accounting', slug: 'accounting', category: 'Business', levels: ['both'] },
  { name: 'Financial Accounting', slug: 'financial-accounting', category: 'Business', levels: ['college'] },
  { name: 'Managerial Accounting', slug: 'managerial-accounting', category: 'Business', levels: ['college'] },
  { name: 'Finance', slug: 'finance', category: 'Business', levels: ['both'] },
  { name: 'Business Law', slug: 'business-law', category: 'Business', levels: ['both'] },
  { name: 'Entrepreneurship', slug: 'entrepreneurship', category: 'Business', levels: ['both'] },
  { name: 'Management', slug: 'management', category: 'Business', levels: ['college'] },
  { name: 'Supply Chain Management', slug: 'supply-chain-management', category: 'Business', levels: ['college'] },
  { name: 'Human Resources', slug: 'human-resources', category: 'Business', levels: ['college'] },
  { name: 'Business Ethics', slug: 'business-ethics', category: 'Business', levels: ['both'] },

  // ─── Health ───────────────────────────────────────────────────────────────────
  { name: 'Nutrition', slug: 'nutrition', category: 'Health', levels: ['both'] },
  { name: 'Health Education', slug: 'health-education', category: 'Health', levels: ['both'] },
  { name: 'Physical Education', slug: 'physical-education', category: 'Health', levels: ['both'] },
  { name: 'Kinesiology', slug: 'kinesiology', category: 'Health', levels: ['college'] },
  { name: 'Public Health', slug: 'public-health', category: 'Health', levels: ['college'] },
  { name: 'Sports Medicine', slug: 'sports-medicine', category: 'Health', levels: ['both'] },
  { name: 'Medical Terminology', slug: 'medical-terminology', category: 'Health', levels: ['both'] },
  { name: 'Nursing Fundamentals', slug: 'nursing-fundamentals', category: 'Health', levels: ['college'] },
  { name: 'Health Psychology', slug: 'health-psychology', category: 'Health', levels: ['college'] },

  // ─── Languages ────────────────────────────────────────────────────────────────
  { name: 'Spanish', slug: 'spanish', category: 'Languages', levels: ['both'] },
  { name: 'French', slug: 'french', category: 'Languages', levels: ['both'] },
  { name: 'German', slug: 'german', category: 'Languages', levels: ['both'] },
  { name: 'Mandarin Chinese', slug: 'mandarin-chinese', category: 'Languages', levels: ['both'] },
  { name: 'Japanese', slug: 'japanese', category: 'Languages', levels: ['both'] },
  { name: 'Arabic', slug: 'arabic', category: 'Languages', levels: ['both'] },
  { name: 'Latin', slug: 'latin', category: 'Languages', levels: ['both'] },
  { name: 'Italian', slug: 'italian', category: 'Languages', levels: ['both'] },
  { name: 'Portuguese', slug: 'portuguese', category: 'Languages', levels: ['both'] },
  { name: 'Korean', slug: 'korean', category: 'Languages', levels: ['both'] },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getAllSubjectSlugs(): { slug: string }[] {
  return subjects.map((s) => ({ slug: s.slug }));
}

export function getSubjectsByCategory(category: string): Subject[] {
  return subjects.filter((s) => s.category === category);
}

const TOP_SUBJECT_SLUGS = new Set([
  'algebra', 'calculus', 'statistics', 'biology', 'chemistry', 'physics',
  'computer-science', 'english', 'psychology', 'economics', 'history',
  'political-science', 'sociology', 'philosophy', 'accounting', 'finance',
  'nursing-fundamentals', 'spanish', 'writing', 'business-law',
]);

export const topSubjects: Subject[] = subjects.filter(
  (s) => TOP_SUBJECT_SLUGS.has(s.slug)
);
