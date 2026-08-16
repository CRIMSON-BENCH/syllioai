export type GlossaryCategory =
  | "academic-policies"
  | "assessment"
  | "curriculum"
  | "student-life"
  | "classroom-management"
  | "higher-ed"
  | "k12";

export interface GlossaryCategoryMeta {
  value: GlossaryCategory;
  label: string;
}

export const GLOSSARY_CATEGORIES: GlossaryCategoryMeta[] = [
  { value: "academic-policies", label: "Academic Policies" },
  { value: "assessment", label: "Assessment" },
  { value: "curriculum", label: "Curriculum" },
  { value: "student-life", label: "Student Life" },
  { value: "classroom-management", label: "Classroom Management" },
  { value: "higher-ed", label: "Higher Education" },
  { value: "k12", label: "K-12" },
];

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  category: GlossaryCategory;
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Academic Probation",
    slug: "academic-probation",
    definition:
      "A formal warning status assigned to students whose cumulative or term GPA falls below the institution's minimum standard (typically 2.0). Students on academic probation must meet specific conditions — such as raising their GPA by the following semester — or face academic suspension. Probation periods often restrict enrollment in certain courses and may require mandatory advising.",
    category: "academic-policies",
    relatedTerms: ["academic-standing", "gpa-grade-point-average", "withdrawal-policy"],
  },
  {
    term: "Academic Standing",
    slug: "academic-standing",
    definition:
      "A student's current status at an institution based on their cumulative GPA and satisfactory academic progress. Common standings include 'Good Standing,' 'Academic Warning,' 'Academic Probation,' and 'Academic Suspension.' Standing determines eligibility for financial aid, enrollment in future semesters, and participation in certain programs.",
    category: "academic-policies",
    relatedTerms: ["academic-probation", "gpa-grade-point-average", "deans-list"],
  },
  {
    term: "Accreditation",
    slug: "accreditation",
    definition:
      "A voluntary, peer-reviewed quality assurance process through which educational institutions and programs are evaluated against established standards by recognized accrediting bodies. Regional accreditation (e.g., SACSCOC, HLC) applies to entire institutions; programmatic accreditation (e.g., AACSB for business, NCATE for education) applies to specific departments. Credits from non-accredited institutions may not transfer.",
    category: "academic-policies",
    relatedTerms: ["transfer-credit", "articulation-agreement", "transcript"],
  },
  {
    term: "Add/Drop Period",
    slug: "add-drop-period",
    definition:
      "A designated window at the beginning of each academic term during which students may add new courses to their schedule or drop courses without academic penalty (no 'W' on transcript). Deadlines vary by institution — typically one to two weeks after the semester begins. After the add/drop period, withdrawing from a course results in a 'W' or 'WF' notation.",
    category: "academic-policies",
    relatedTerms: ["withdrawal-policy", "semester", "transcript"],
  },
  {
    term: "Adjunct Professor",
    slug: "adjunct-professor",
    definition:
      "A part-time or non-tenure-track instructor hired on a contract basis to teach specific courses. Adjuncts are typically paid per course (per-credit-hour rates vary widely) and receive fewer institutional benefits than full-time faculty. They often hold professional expertise in their field and may teach at multiple institutions simultaneously.",
    category: "higher-ed",
    relatedTerms: ["graduate-assistant", "teaching-assistant-ta", "seminar"],
  },
  {
    term: "Advanced Placement (AP)",
    slug: "advanced-placement-ap",
    definition:
      "A College Board program that offers college-level courses and exams to high school students. Students who score 3, 4, or 5 on AP exams may earn college credit or placement into higher-level courses at participating colleges. AP courses are weighted more heavily than standard courses in GPA calculations at many high schools.",
    category: "k12",
    relatedTerms: ["dual-enrollment", "weighted-gpa", "college-credit", "class-rank"],
  },
  {
    term: "Articulation Agreement",
    slug: "articulation-agreement",
    definition:
      "A formal contract between two or more educational institutions that guarantees the transfer of credits from one school to another. Common between community colleges and four-year universities, articulation agreements specify which courses are equivalent and how transfer credits count toward a degree. They help students plan efficient transfer pathways.",
    category: "academic-policies",
    relatedTerms: ["transfer-credit", "accreditation", "dual-enrollment", "general-education-requirements"],
  },
  {
    term: "Assessment",
    slug: "assessment",
    definition:
      "The systematic process of gathering, analyzing, and interpreting evidence of student learning to make decisions about instruction, curriculum, and educational programs. Assessment can be formal (tests, exams, projects) or informal (observations, exit tickets). It encompasses both the evaluation of individual student progress and the broader evaluation of program effectiveness.",
    category: "assessment",
    relatedTerms: ["formative-assessment", "summative-assessment", "grading-rubric", "standards-based-grading"],
  },
  {
    term: "Assignment",
    slug: "assignment",
    definition:
      "A task or set of tasks given by an instructor to a student that is intended to assess learning, reinforce skills, or build knowledge. Assignments can take many forms including essays, problem sets, presentations, labs, and projects. They typically carry a point value, a due date, and evaluation criteria outlined in a rubric or description.",
    category: "assessment",
    relatedTerms: ["grading-rubric", "late-work-policy", "learning-objective", "formative-assessment"],
  },
  {
    term: "Asynchronous Learning",
    slug: "asynchronous-learning",
    definition:
      "A mode of instruction in which students access course content, complete assignments, and engage with the material on their own schedule, without real-time interaction with the instructor or classmates. Common in online education, asynchronous learning uses tools like pre-recorded lectures, discussion boards, and LMS platforms. Contrasted with synchronous learning.",
    category: "curriculum",
    relatedTerms: ["synchronous-learning", "learning-management-system-lms", "canvas-lms"],
  },
  {
    term: "Attendance Policy",
    slug: "attendance-policy",
    definition:
      "A formal rule established by a school, district, or individual instructor that governs how many absences are permissible before academic consequences occur. Policies vary widely: some allow a set number of unexcused absences before grade reduction; others require documentation for all absences. Chronic absenteeism (missing 10% or more of school days) is a key indicator of academic risk.",
    category: "academic-policies",
    relatedTerms: ["syllabus", "late-work-policy", "zero-tolerance-policy"],
  },
  {
    term: "Audit (Course)",
    slug: "audit-course",
    definition:
      "A registration status in which a student enrolls in a course for the purpose of learning the material without receiving academic credit or a grade. Auditors typically pay a reduced fee, may or may not complete assignments, and do not have the course appear on their transcript for credit. Policies on what auditors can participate in vary by institution.",
    category: "academic-policies",
    relatedTerms: ["credit-hour", "pass-fail", "transcript"],
  },
  {
    term: "Bell Schedule",
    slug: "bell-schedule",
    definition:
      "The daily timetable at a K-12 school that organizes instructional periods, transitions, lunch, and other activities. Bell schedules vary by model: traditional schedules may have 6-8 periods of 45-50 minutes each, while block schedules typically have 3-4 longer periods (85-100 minutes) per day. The schedule directly impacts how much instructional time teachers have and how students manage their day.",
    category: "k12",
    relatedTerms: ["pacing-guide", "unit-plan", "study-hall"],
  },
  {
    term: "Canvas LMS",
    slug: "canvas-lms",
    definition:
      "A cloud-based learning management system developed by Instructure, widely adopted by K-12 schools and higher education institutions across the United States. Canvas allows instructors to post syllabi, assignments, and grades; facilitate discussions; and communicate with students. It is the most commonly used LMS in US higher education and integrates with dozens of third-party tools.",
    category: "curriculum",
    relatedTerms: ["learning-management-system-lms", "asynchronous-learning", "synchronous-learning"],
  },
  {
    term: "Capstone Project",
    slug: "capstone-project",
    definition:
      "A culminating academic project — typically required at the end of a degree program, certificate, or major sequence — that requires students to integrate and apply knowledge and skills developed throughout their studies. Capstones may take the form of a research paper, portfolio, product, performance, or thesis defense. They are designed to demonstrate mastery of program learning outcomes.",
    category: "higher-ed",
    relatedTerms: ["thesis", "research-paper", "graduation-requirements", "major"],
  },
  {
    term: "Carnegie Unit",
    slug: "carnegie-unit",
    definition:
      "A standard unit of measurement used in U.S. secondary education that represents 120 hours of contact time — typically one year of study in a subject meeting for 1 hour per day, 5 days per week, for 24 weeks. Carnegie Units are used to determine whether students meet high school graduation requirements and for transcript evaluation in college admissions.",
    category: "k12",
    relatedTerms: ["credit-hour", "graduation-requirements", "bell-schedule"],
  },
  {
    term: "Certificate Program",
    slug: "certificate-program",
    definition:
      "A structured academic program that awards a certificate upon successful completion of a defined set of courses in a specific field or competency area. Unlike a degree, a certificate program is typically shorter in duration (months to one year) and narrower in scope. Certificates are offered at both community colleges and four-year institutions and are common in professional fields like healthcare, technology, and business.",
    category: "higher-ed",
    relatedTerms: ["credit-hour", "graduation-requirements", "major", "minor"],
  },
  {
    term: "Class Rank",
    slug: "class-rank",
    definition:
      "A relative ranking of students within their graduating class based on cumulative GPA. A student ranked 1st in their class has the highest GPA; the valedictorian is typically the student with the top class rank. Class rank is used in college admissions, scholarship determinations, and honor designations like valedictorian and salutatorian. Some schools have moved away from reporting class rank due to its competitive pressure.",
    category: "k12",
    relatedTerms: ["gpa-grade-point-average", "weighted-gpa", "honor-roll", "advanced-placement-ap"],
  },
  {
    term: "Co-curricular",
    slug: "co-curricular",
    definition:
      "Activities that are directly tied to and reinforce the academic curriculum, going beyond the formal classroom but integral to academic learning. Examples include internships for academic credit, field trips, lab research, service learning projects, and student teaching. Co-curricular activities differ from extracurricular activities in that they carry academic weight or credit.",
    category: "student-life",
    relatedTerms: ["extracurricular-activity", "service-learning", "internship", "independent-study"],
  },
  {
    term: "College Credit",
    slug: "college-credit",
    definition:
      "A unit of academic recognition awarded for completing a course of study at the college level. Credit hours are typically the standard unit, with each credit hour representing one hour of lecture per week per semester (plus 2+ hours of study). College credits accumulate toward degree requirements and can be earned through coursework, AP exams, CLEP exams, dual enrollment, and military training.",
    category: "higher-ed",
    relatedTerms: ["credit-hour", "dual-enrollment", "transfer-credit", "advanced-placement-ap"],
  },
  {
    term: "Common Core",
    slug: "common-core",
    definition:
      "A set of K-12 academic standards in English Language Arts and Mathematics developed collaboratively by states and formally adopted by most U.S. states beginning in 2010. Common Core standards define what students should know and be able to do at each grade level, emphasizing critical thinking, problem solving, and analytical skills. Adoption is voluntary but has been widespread, though politically controversial.",
    category: "k12",
    relatedTerms: ["curriculum", "standards-based-grading", "pacing-guide", "general-education-requirements"],
  },
  {
    term: "Competency-Based Education",
    slug: "competency-based-education",
    definition:
      "An educational model in which students advance by demonstrating mastery of specific knowledge or skills (competencies) rather than by completing a set amount of time in a course. Students can progress at their own pace, spending more time on difficult concepts and moving quickly through material they already know. Common in workforce training and some higher education programs.",
    category: "curriculum",
    relatedTerms: ["standards-based-grading", "learning-objective", "assessment", "differentiated-instruction"],
  },
  {
    term: "Credit Hour",
    slug: "credit-hour",
    definition:
      "The standard unit used by colleges and universities to measure the amount of academic work in a course. One credit hour generally corresponds to one hour of instruction per week over a 15-week semester (plus two hours of outside work). A typical full-time college student takes 12-18 credit hours per semester, and most bachelor's degrees require 120 credit hours for completion.",
    category: "higher-ed",
    relatedTerms: ["semester", "college-credit", "course-load", "graduation-requirements"],
  },
  {
    term: "Curriculum",
    slug: "curriculum",
    definition:
      "The totality of what is taught in a school or course, including the explicit content standards, learning objectives, instructional materials, and assessment strategies. Curriculum design involves decisions about scope (breadth of topics covered), sequence (order in which topics are taught), and alignment (ensuring instruction and assessment match stated objectives). Curriculum can be mandated by the state, district, or institution, or developed by individual teachers.",
    category: "curriculum",
    relatedTerms: ["pacing-guide", "unit-plan", "learning-objective", "syllabus", "common-core"],
  },
  {
    term: "Dean's List",
    slug: "deans-list",
    definition:
      "An academic honor awarded each semester or term to students who achieve a GPA above a specified threshold (typically 3.5 or higher) while enrolled full-time. Being placed on the Dean's List recognizes outstanding academic performance and is noted on a student's transcript. Some institutions have separate designations for different levels of achievement (e.g., Dean's List, Dean's High Honors List).",
    category: "academic-policies",
    relatedTerms: ["gpa-grade-point-average", "honor-roll", "honors-program", "academic-standing"],
  },
  {
    term: "Differentiated Instruction",
    slug: "differentiated-instruction",
    definition:
      "A teaching philosophy and practice in which educators proactively adjust curriculum, instructional methods, and assessment to accommodate learners with different needs, readiness levels, interests, and learning profiles within the same classroom. Differentiation can occur through content (what is taught), process (how it is taught), product (how students demonstrate learning), and environment (classroom climate).",
    category: "classroom-management",
    relatedTerms: ["universal-design-for-learning-udl", "iep-individualized-education-program", "learning-objective", "formative-assessment"],
  },
  {
    term: "Dual Enrollment",
    slug: "dual-enrollment",
    definition:
      "A program that allows high school students to enroll in college courses and earn both high school and college credit simultaneously. Dual enrollment courses may be held at the high school, on a college campus, or online. They provide students with early exposure to college-level work and can reduce the time and cost needed to complete a college degree.",
    category: "k12",
    relatedTerms: ["advanced-placement-ap", "college-credit", "articulation-agreement", "credit-hour"],
  },
  {
    term: "Elective",
    slug: "elective",
    definition:
      "A course that students choose to take based on personal interest or career goals, as opposed to required courses that are mandated for graduation or degree completion. Electives allow for customization of an academic program and can complement a student's major or minor. Some programs set aside a certain number of credit hours specifically for free electives.",
    category: "curriculum",
    relatedTerms: ["major", "minor", "general-education-requirements", "course-load"],
  },
  {
    term: "Extracurricular Activity",
    slug: "extracurricular-activity",
    definition:
      "Any organized activity that takes place outside the regular academic curriculum but is sponsored or recognized by the school or institution. Examples include sports teams, student clubs, drama productions, debate teams, and student government. Unlike co-curricular activities, extracurriculars typically do not carry academic credit but are important for college applications, personal development, and community building.",
    category: "student-life",
    relatedTerms: ["co-curricular", "student-government", "service-learning", "internship"],
  },
  {
    term: "Failing Grade",
    slug: "failing-grade",
    definition:
      "A grade that indicates a student did not meet the minimum requirements to pass a course. In most U.S. grading systems, a failing grade is an 'F,' corresponding to a score below 60-65%. A failing grade earns 0.0 GPA points, which significantly impacts cumulative GPA. Some institutions distinguish between 'F' (completed course, insufficient quality) and 'WF' (withdrew while failing).",
    category: "assessment",
    relatedTerms: ["gpa-grade-point-average", "academic-probation", "retake-policy", "incomplete-grade"],
  },
  {
    term: "FAFSA",
    slug: "fafsa",
    definition:
      "The Free Application for Federal Student Aid — a form completed annually by current and prospective college students in the United States to determine eligibility for federal financial aid programs including Pell Grants, Stafford Loans, and Federal Work-Study. The FAFSA collects household financial data and is used by colleges to calculate a student's Expected Family Contribution (EFC) and financial aid package.",
    category: "higher-ed",
    relatedTerms: ["tuition", "work-study-program", "financial-aid"],
  },
  {
    term: "Final Exam",
    slug: "final-exam",
    definition:
      "A comprehensive assessment administered at the end of a semester, quarter, or term that covers all or most of the material taught throughout the course. Final exams typically carry significant weight in the final course grade (often 20-40%). They may be in-person written exams, oral examinations, take-home assignments, or project presentations. Many institutions publish final exam schedules weeks in advance.",
    category: "assessment",
    relatedTerms: ["midterm", "summative-assessment", "semester", "grading-rubric"],
  },
  {
    term: "Formative Assessment",
    slug: "formative-assessment",
    definition:
      "Ongoing, low-stakes assessment used during the learning process to monitor student understanding and provide feedback that guides instruction. Examples include quizzes, exit tickets, think-pair-share activities, observations, and informal checks for understanding. Unlike summative assessments, formative assessments are primarily for informing teaching rather than assigning final grades.",
    category: "assessment",
    relatedTerms: ["summative-assessment", "assessment", "standards-based-grading", "grading-rubric"],
  },
  {
    term: "GPA (Grade Point Average)",
    slug: "gpa-grade-point-average",
    definition:
      "A numerical representation of a student's overall academic performance, calculated by dividing the total grade points earned by the total credit hours attempted. In the standard 4.0 scale, A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0.0. Most institutions require a minimum GPA (typically 2.0) for good academic standing and graduation. Graduate programs commonly require a 3.0 minimum.",
    category: "academic-policies",
    relatedTerms: ["weighted-gpa", "academic-standing", "academic-probation", "deans-list", "letter-grade"],
  },
  {
    term: "General Education Requirements",
    slug: "general-education-requirements",
    definition:
      "A set of courses outside a student's major that all students at an institution must complete to earn a degree. General education requirements are designed to provide a broad academic foundation and develop critical thinking, communication, quantitative reasoning, and cultural awareness. Categories often include English composition, mathematics, natural sciences, social sciences, humanities, and diversity requirements.",
    category: "higher-ed",
    relatedTerms: ["major", "minor", "credit-hour", "curriculum", "elective"],
  },
  {
    term: "Grade Curve",
    slug: "grade-curve",
    definition:
      "An adjustment made to raw scores on an assessment so that the distribution of grades conforms to a desired outcome — typically normalizing scores around the class average. Common curving methods include adding a set number of points to all scores, scaling scores so the highest grade becomes 100, or assigning grades based on a normal distribution. Curving is controversial because it can pit students against each other.",
    category: "assessment",
    relatedTerms: ["grading-rubric", "letter-grade", "summative-assessment", "final-exam"],
  },
  {
    term: "Grading Rubric",
    slug: "grading-rubric",
    definition:
      "A scoring guide that lists the specific criteria used to evaluate a student's work, along with descriptions of performance at each level (e.g., excellent, proficient, developing, insufficient). Rubrics make grading transparent and consistent, help students understand expectations, and provide meaningful feedback. They can be holistic (single overall score) or analytic (separate scores for each criterion).",
    category: "assessment",
    relatedTerms: ["assessment", "formative-assessment", "summative-assessment", "learning-objective"],
  },
  {
    term: "Graduate Assistant",
    slug: "graduate-assistant",
    definition:
      "A graduate student who receives a stipend and often a tuition waiver in exchange for assisting faculty with teaching, research, or administrative work. Teaching Assistants (TAs) lead sections, grade assignments, and hold office hours. Research Assistants (RAs) support faculty research projects. Graduate assistantships are competitive and a primary funding mechanism for master's and doctoral students.",
    category: "higher-ed",
    relatedTerms: ["teaching-assistant-ta", "adjunct-professor", "thesis", "seminar"],
  },
  {
    term: "Graduation Requirements",
    slug: "graduation-requirements",
    definition:
      "The total set of academic conditions a student must fulfill to receive a diploma or degree. For high school, requirements typically include a minimum number of Carnegie Units across specified subjects. For college, requirements include total credit hours, general education courses, major coursework, minimum GPA, and sometimes a capstone or thesis. Requirements are governed by the institution or state education agency.",
    category: "academic-policies",
    relatedTerms: ["credit-hour", "general-education-requirements", "major", "capstone-project", "transcript"],
  },
  {
    term: "Honor Roll",
    slug: "honor-roll",
    definition:
      "A recognition awarded to K-12 students who achieve a GPA at or above a certain threshold for a given grading period (quarter, semester, or year). Schools typically have multiple honor roll designations (e.g., Honor Roll for 3.0-3.49 GPA, High Honor Roll for 3.5+). Honor roll recognition appears on report cards and is used in college admissions as evidence of consistent academic achievement.",
    category: "k12",
    relatedTerms: ["gpa-grade-point-average", "deans-list", "class-rank", "academic-standing"],
  },
  {
    term: "Honors Program",
    slug: "honors-program",
    definition:
      "A selective academic program within a college or university that offers enhanced coursework, smaller class sizes, special advising, research opportunities, and a co-curricular community to high-achieving students. Admission typically requires a minimum GPA and/or test scores. Honors students often complete an honors thesis or capstone and may receive priority course registration.",
    category: "higher-ed",
    relatedTerms: ["deans-list", "thesis", "capstone-project", "gpa-grade-point-average"],
  },
  {
    term: "IEP (Individualized Education Program)",
    slug: "iep-individualized-education-program",
    definition:
      "A legally mandated written plan developed for each K-12 student identified as having a disability under the Individuals with Disabilities Education Act (IDEA). The IEP is created by a team that includes parents, teachers, special education staff, and the student (when appropriate). It outlines the student's current performance levels, annual goals, specific educational services, accommodations, and how progress will be measured.",
    category: "k12",
    relatedTerms: ["differentiated-instruction", "universal-design-for-learning-udl", "learning-objective", "assessment"],
  },
  {
    term: "Incomplete Grade",
    slug: "incomplete-grade",
    definition:
      "A temporary grade given to a student who has not finished all required coursework by the end of the semester due to extenuating circumstances (illness, family emergency, etc.). The 'I' grade must be replaced with a letter grade by a specified deadline — typically one semester. If not resolved, an incomplete often automatically converts to an 'F.' Policies vary widely by institution.",
    category: "academic-policies",
    relatedTerms: ["failing-grade", "withdrawal-policy", "academic-standing", "late-work-policy"],
  },
  {
    term: "Independent Study",
    slug: "independent-study",
    definition:
      "A self-directed course arrangement in which a student works one-on-one with a faculty advisor to pursue a topic of interest not offered as a standard course. The student and faculty member agree on learning objectives, required readings or projects, and a meeting schedule. Independent studies typically carry 1-3 credit hours and require department approval.",
    category: "higher-ed",
    relatedTerms: ["co-curricular", "capstone-project", "research-paper", "learning-objective"],
  },
  {
    term: "Internship",
    slug: "internship",
    definition:
      "A supervised, temporary work experience — paid or unpaid — in which students apply academic knowledge in a professional setting. Internships may be required by academic programs (especially in fields like education, social work, and engineering) or pursued voluntarily for career development. Academic internships are often co-curricular, earning credit hours that count toward graduation.",
    category: "student-life",
    relatedTerms: ["co-curricular", "service-learning", "work-study-program", "portfolio"],
  },
  {
    term: "Late Work Policy",
    slug: "late-work-policy",
    definition:
      "An instructor's or institution's stated rules governing how assignments submitted after the due date are handled. Policies range from accepting late work with no penalty, to deductions of a set percentage per day, to a strict no-late-work policy. A clear late work policy reduces grade disputes, sets expectations, and is a required element of most course syllabi.",
    category: "academic-policies",
    relatedTerms: ["syllabus", "assignment", "attendance-policy", "incomplete-grade"],
  },
  {
    term: "Learning Objective",
    slug: "learning-objective",
    definition:
      "A specific, measurable statement that describes what a student should know, understand, or be able to do upon completing a lesson, unit, or course. Well-written learning objectives use action verbs aligned with Bloom's Taxonomy (e.g., analyze, evaluate, create) and directly guide instructional design and assessment. They are distinct from broader course goals and must be observable and assessable.",
    category: "curriculum",
    relatedTerms: ["assessment", "curriculum", "unit-plan", "pacing-guide", "grading-rubric"],
  },
  {
    term: "Learning Management System (LMS)",
    slug: "learning-management-system-lms",
    definition:
      "A software platform used by educational institutions to deliver, manage, and track course content, communication, and student progress. LMS platforms host syllabi, assignments, grades, discussion boards, and announcements. Common LMS platforms include Canvas, Blackboard, Google Classroom, Schoology, Moodle, and D2L Brightspace. LMS adoption has accelerated significantly since the COVID-19 pandemic.",
    category: "curriculum",
    relatedTerms: ["canvas-lms", "asynchronous-learning", "synchronous-learning", "syllabus"],
  },
  {
    term: "Lecture",
    slug: "lecture",
    definition:
      "A structured oral presentation by an instructor to a group of students, typically the primary mode of content delivery in higher education. Lectures may be supplemented with slides, demonstrations, videos, or audience response systems. Large lecture courses (often 100-500 students) are common in introductory college courses and are frequently supported by smaller recitation or discussion sections led by teaching assistants.",
    category: "classroom-management",
    relatedTerms: ["recitation", "seminar", "teaching-assistant-ta", "synchronous-learning"],
  },
  {
    term: "Letter Grade",
    slug: "letter-grade",
    definition:
      "The traditional letter-based grading scale used in U.S. schools and colleges: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (below 60%), with plus/minus variations at many institutions. Letter grades correspond to GPA points on the 4.0 scale. They are the most widely used method of communicating student performance and appear on transcripts.",
    category: "assessment",
    relatedTerms: ["gpa-grade-point-average", "pass-fail", "grade-curve", "transcript"],
  },
  {
    term: "Liberal Arts",
    slug: "liberal-arts",
    definition:
      "A broad-based curriculum in higher education emphasizing critical thinking, communication, and exposure to a wide range of disciplines including humanities, social sciences, natural sciences, and the arts. A liberal arts education aims to develop well-rounded, adaptable graduates. Liberal arts colleges are four-year institutions focused primarily on undergraduate education in these disciplines.",
    category: "higher-ed",
    relatedTerms: ["general-education-requirements", "elective", "major", "seminar"],
  },
  {
    term: "Load (Course Load)",
    slug: "course-load",
    definition:
      "The total number of credit hours or courses a student is enrolled in during a given academic term. Full-time status is typically 12 or more credit hours per semester; part-time is fewer than 12. Financial aid eligibility, housing, and health insurance coverage often depend on maintaining full-time enrollment. Overloads (more than 18 credits) usually require academic advisor approval.",
    category: "academic-policies",
    relatedTerms: ["credit-hour", "semester", "full-time-enrollment", "academic-standing"],
  },
  {
    term: "Major",
    slug: "major",
    definition:
      "A student's primary field of academic specialization at the college level, typically requiring 30-60 credit hours of coursework in a specific discipline. Majors are declared formally (usually by the end of sophomore year) and lead to a degree designation such as B.A. in English or B.S. in Biology. The choice of major influences career opportunities, graduate school eligibility, and course registration priorities.",
    category: "higher-ed",
    relatedTerms: ["minor", "elective", "general-education-requirements", "capstone-project", "graduation-requirements"],
  },
  {
    term: "Midterm",
    slug: "midterm",
    definition:
      "An examination or major assessment administered at approximately the midpoint of a semester or academic term. Midterms typically cover material taught in the first half of the course and can represent a significant portion of the final grade (often 15-25%). In some courses, the 'midterm' is a project or paper rather than an exam. Midterm grades in college sometimes serve as an early warning system for struggling students.",
    category: "assessment",
    relatedTerms: ["final-exam", "summative-assessment", "semester", "grading-rubric"],
  },
  {
    term: "Minor",
    slug: "minor",
    definition:
      "A secondary area of academic specialization requiring fewer courses than a major, typically 15-24 credit hours. Minors allow students to complement their major with focused study in another discipline or to explore a passion without fully committing to a second major. Minors appear on a student's transcript and degree but do not result in a separate degree designation.",
    category: "higher-ed",
    relatedTerms: ["major", "elective", "credit-hour", "graduation-requirements"],
  },
  {
    term: "Office Hours",
    slug: "office-hours",
    definition:
      "Designated times during which instructors are available in their office or virtually to meet with students without an appointment. Office hours are intended for students to ask questions, seek clarification, discuss grades, or get academic support. Regular office hour attendance is associated with higher academic performance; however, many students — particularly first-generation college students — underutilize them.",
    category: "higher-ed",
    relatedTerms: ["teaching-assistant-ta", "student-success-center", "syllabus"],
  },
  {
    term: "Pass/Fail",
    slug: "pass-fail",
    definition:
      "A grading option in which students receive either a 'Pass' (P) or 'Fail' (F) rather than a letter grade or GPA points. Passing typically requires meeting a minimum threshold (often a C or 60%). Courses taken pass/fail generally do not affect GPA. Some institutions allow students to take electives pass/fail; required major courses often cannot be taken under this option.",
    category: "academic-policies",
    relatedTerms: ["letter-grade", "gpa-grade-point-average", "audit-course", "elective"],
  },
  {
    term: "Pacing Guide",
    slug: "pacing-guide",
    definition:
      "A planning document used by teachers to map out the sequence and timing of curriculum delivery across a school year or semester. Pacing guides are typically aligned to state or district standards and specify which topics to teach in each week or unit. They help ensure that all required content is covered before high-stakes assessments and support consistency across teachers in the same course or grade level.",
    category: "curriculum",
    relatedTerms: ["unit-plan", "curriculum", "syllabus", "bell-schedule"],
  },
  {
    term: "Peer Review",
    slug: "peer-review",
    definition:
      "An instructional activity in which students evaluate each other's work using specific criteria, typically prior to a final submission. Peer review develops critical thinking, writing, and analytical skills, and provides students with feedback from multiple perspectives. It is widely used in writing-intensive courses and is also the term for the scholarly process by which academic articles are reviewed before publication.",
    category: "assessment",
    relatedTerms: ["grading-rubric", "formative-assessment", "research-paper", "writing-center"],
  },
  {
    term: "Prerequisite",
    slug: "prerequisite",
    definition:
      "A course or other academic requirement that must be completed before a student may enroll in a specific course. Prerequisites ensure that students have foundational knowledge needed to succeed in more advanced coursework. Prerequisite requirements are listed in course catalogs and enforced at registration. Some courses have co-requisites — courses that must be taken simultaneously.",
    category: "academic-policies",
    relatedTerms: ["major", "credit-hour", "course-load", "general-education-requirements"],
  },
  {
    term: "Professional Development",
    slug: "professional-development",
    definition:
      "Ongoing training and education that teachers, administrators, and other educators participate in to improve their instructional skills, stay current with research, and fulfill licensure renewal requirements. Professional development can take many forms: workshops, conferences, coaching, graduate coursework, PLCs (professional learning communities), and instructional coaching. Most states require a minimum number of PD hours per year for license renewal.",
    category: "classroom-management",
    relatedTerms: ["teaching-assistant-ta", "pacing-guide", "curriculum"],
  },
  {
    term: "Quarter System",
    slug: "quarter-system",
    definition:
      "An academic calendar that divides the school year into four 10-week terms rather than two 15-week semesters. Common at large research universities (e.g., UCLA, University of Chicago), the quarter system results in more frequent enrollment and grading periods. Students typically take 3-4 courses per quarter. Transferring between quarter and semester schools requires careful credit conversion.",
    category: "academic-policies",
    relatedTerms: ["semester", "credit-hour", "transcript", "add-drop-period"],
  },
  {
    term: "Recitation",
    slug: "recitation",
    definition:
      "A smaller, discussion-based section of a large lecture course, led by a teaching assistant or instructor, in which students review lecture material, work through problems, and ask questions in a more intimate setting. Recitations are common in math, science, and economics courses with large enrollment. They typically meet once or twice per week in addition to the main lecture.",
    category: "higher-ed",
    relatedTerms: ["lecture", "teaching-assistant-ta", "seminar", "synchronous-learning"],
  },
  {
    term: "Remediation",
    slug: "remediation",
    definition:
      "Supplemental instruction provided to students who have not yet met grade-level or college-level standards in core academic areas such as reading, writing, or mathematics. In higher education, remedial (or developmental) courses do not count toward degree completion but prepare students for college-level work. In K-12, remediation may take the form of tutoring, pull-out instruction, or summer school.",
    category: "curriculum",
    relatedTerms: ["student-success-center", "academic-probation", "differentiated-instruction", "iep-individualized-education-program"],
  },
  {
    term: "Research Paper",
    slug: "research-paper",
    definition:
      "A written academic work in which a student investigates a topic by gathering, analyzing, and synthesizing information from primary and secondary sources, then presenting an original argument or finding. Research papers are assigned across disciplines and vary in length and formality. They require proper citation (APA, MLA, Chicago) and are a core component of academic writing skill development.",
    category: "assessment",
    relatedTerms: ["thesis", "capstone-project", "peer-review", "writing-center", "independent-study"],
  },
  {
    term: "Retake Policy",
    slug: "retake-policy",
    definition:
      "A school's or teacher's stated rules regarding whether and how students may retake assessments after an initial failure or unsatisfactory performance. Retake policies vary widely: some schools allow unlimited retakes with the average of both scores recorded; others allow one retake with the higher score kept; many prohibit retakes on summative assessments. Retake policies are increasingly common in standards-based grading environments.",
    category: "academic-policies",
    relatedTerms: ["summative-assessment", "failing-grade", "grading-rubric", "standards-based-grading"],
  },
  {
    term: "Rigor",
    slug: "rigor",
    definition:
      "The degree of critical thinking, depth of understanding, and complexity of skills required in an academic course or assignment. Rigor is not synonymous with difficulty or volume of work; a rigorous course requires students to apply, analyze, synthesize, and evaluate rather than merely recall information. Increasing academic rigor is a primary goal of educational reform and standards development efforts.",
    category: "curriculum",
    relatedTerms: ["learning-objective", "advanced-placement-ap", "summative-assessment", "honors-program"],
  },
  {
    term: "Rubric",
    slug: "rubric",
    definition:
      "A structured scoring tool that explicitly lists the criteria for an assignment and describes performance levels for each criterion. Rubrics can be analytic (separate scores for each criterion) or holistic (a single overall rating). They make expectations transparent to students before the assignment, ensure consistent grading across multiple evaluators, and provide substantive feedback on specific areas for improvement.",
    category: "assessment",
    relatedTerms: ["grading-rubric", "assessment", "formative-assessment", "learning-objective"],
  },
  {
    term: "SAT/ACT",
    slug: "sat-act",
    definition:
      "Standardized college admissions tests used by most U.S. colleges and universities. The SAT (Scholastic Assessment Test), developed by College Board, tests evidence-based reading, writing, and math. The ACT (American College Testing) tests English, math, reading, and science reasoning, plus an optional writing section. Both are scored on their own scales and accepted by virtually all U.S. four-year institutions, though many have moved to test-optional admissions.",
    category: "k12",
    relatedTerms: ["advanced-placement-ap", "dual-enrollment", "college-credit", "transcript"],
  },
  {
    term: "Semester",
    slug: "semester",
    definition:
      "A 15- to 18-week academic term, the most common calendar system at U.S. colleges and universities. The academic year typically consists of Fall and Spring semesters, with an optional Summer session. Semester-based schools award credit hours per semester. Students typically take 4-6 courses (12-18 credit hours) per semester. Compare to the quarter system or trimester system.",
    category: "academic-policies",
    relatedTerms: ["credit-hour", "quarter-system", "add-drop-period", "course-load"],
  },
  {
    term: "Seminar",
    slug: "seminar",
    definition:
      "A small, discussion-intensive course format common in upper-division undergraduate and graduate education, typically limited to 10-20 students. Seminars prioritize critical discussion over lecture, with students expected to complete readings and actively contribute to intellectual dialogue. Seminars often culminate in a major research paper or presentation.",
    category: "higher-ed",
    relatedTerms: ["lecture", "recitation", "socratic-seminar", "research-paper"],
  },
  {
    term: "Service Learning",
    slug: "service-learning",
    definition:
      "A pedagogical approach that integrates meaningful community service with academic instruction and reflective practice, so that students apply classroom learning in real-world contexts while also contributing to community needs. Service learning differs from volunteerism in its intentional connection to curriculum and its emphasis on student reflection. It may be required in certain courses or degree programs.",
    category: "curriculum",
    relatedTerms: ["co-curricular", "extracurricular-activity", "internship", "learning-objective"],
  },
  {
    term: "Simulation",
    slug: "simulation",
    definition:
      "An instructional activity that replicates real-world scenarios, processes, or systems to allow students to practice skills and make decisions in a low-stakes environment. Simulations are widely used in medical, nursing, legal, military, and science education. They can be physical (mannequin-based clinical simulations), role-play-based (mock trial), or computer-based (flight simulators, financial modeling).",
    category: "curriculum",
    relatedTerms: ["socratic-seminar", "service-learning", "learning-objective", "competency-based-education"],
  },
  {
    term: "Socratic Seminar",
    slug: "socratic-seminar",
    definition:
      "A structured discussion protocol in which students engage in an inquiry-based dialogue about a shared text or topic, guided by open-ended questions rather than direct instruction. Based on the Socratic method of guided questioning, the format requires students to listen actively, build on peers' ideas, and support claims with textual evidence. Socratic seminars are widely used in English, history, and philosophy courses.",
    category: "classroom-management",
    relatedTerms: ["seminar", "peer-review", "recitation", "lecture"],
  },
  {
    term: "Standards-Based Grading",
    slug: "standards-based-grading",
    definition:
      "A grading philosophy in which student performance is evaluated against clearly defined, specific learning standards rather than on an overall aggregate score or relative comparison to peers. In standards-based grading, students are assessed on their mastery of each individual standard (often on a 1-4 scale), and behavioral factors like effort or participation are reported separately. It emphasizes growth and mastery over point accumulation.",
    category: "assessment",
    relatedTerms: ["assessment", "formative-assessment", "grading-rubric", "competency-based-education", "retake-policy"],
  },
  {
    term: "STEM",
    slug: "stem",
    definition:
      "An acronym for Science, Technology, Engineering, and Mathematics — a curricular and workforce initiative that integrates these disciplines to prepare students for careers in high-growth technical fields. STEM education emphasizes applied problem-solving, critical thinking, and collaboration. Variants include STEAM (adding Arts) and STREAM (adding Reading). Federal and state funding prioritize STEM education programs.",
    category: "curriculum",
    relatedTerms: ["curriculum", "advanced-placement-ap", "capstone-project", "general-education-requirements"],
  },
  {
    term: "Student Government",
    slug: "student-government",
    definition:
      "An elected or appointed body of students that represents the student body in institutional governance, advocates for student interests, and organizes campus-wide events and initiatives. Student governments typically have executive officers (president, vice president, treasurer) and a legislative body (senate, council). Participation in student government develops leadership skills and is valued in graduate school and employment applications.",
    category: "student-life",
    relatedTerms: ["extracurricular-activity", "co-curricular", "service-learning"],
  },
  {
    term: "Student Success Center",
    slug: "student-success-center",
    definition:
      "A campus resource center that provides academic support services to help students succeed in their coursework and degree programs. Services typically include tutoring, academic advising, writing assistance, math labs, study skills workshops, and early alert programs. Student success centers are particularly important for first-generation students, students on academic probation, and students in gateway courses.",
    category: "higher-ed",
    relatedTerms: ["writing-center", "academic-probation", "remediation", "office-hours"],
  },
  {
    term: "Study Hall",
    slug: "study-hall",
    definition:
      "A supervised period during the school day — common in K-12 — set aside for students to complete homework, study, or read independently. Study halls may be supervised by a teacher or paraprofessional and can be held in classrooms, libraries, or cafeterias. In some schools, study hall is mandatory; in others, it is an elective period option for students with free periods in their schedule.",
    category: "k12",
    relatedTerms: ["bell-schedule", "homework", "extracurricular-activity"],
  },
  {
    term: "Summative Assessment",
    slug: "summative-assessment",
    definition:
      "A high-stakes assessment designed to evaluate student learning at the end of a unit, course, or instructional period — typically used to determine a final grade or proficiency level. Examples include final exams, state standardized tests, end-of-unit projects, and AP exams. Summative assessments measure the degree to which students have met learning objectives and are used to evaluate both student learning and program effectiveness.",
    category: "assessment",
    relatedTerms: ["formative-assessment", "assessment", "final-exam", "standards-based-grading"],
  },
  {
    term: "Syllabi",
    slug: "syllabi",
    definition:
      "The plural form of 'syllabus' — referring to course documents for multiple classes. In higher education, students and faculty commonly refer to course syllabi collectively when discussing expectations across a program or semester. Reviewing syllabi at the start of each term is a foundational academic planning strategy.",
    category: "curriculum",
    relatedTerms: ["syllabus", "learning-objective", "pacing-guide", "learning-management-system-lms"],
  },
  {
    term: "Syllabus",
    slug: "syllabus",
    definition:
      "A document distributed by an instructor at the beginning of a course that outlines the course description, learning objectives, required texts and materials, schedule of topics and readings, grading policies, assignment descriptions, attendance and late work policies, and academic integrity expectations. The syllabus serves as a contract between the instructor and students and is an essential reference throughout the term. In K-12 contexts, a course syllabus may be called a course outline or curriculum guide.",
    category: "curriculum",
    relatedTerms: ["learning-objective", "pacing-guide", "grading-rubric", "learning-management-system-lms", "attendance-policy"],
  },
  {
    term: "Synchronous Learning",
    slug: "synchronous-learning",
    definition:
      "A mode of instruction in which students and instructors engage in real-time, simultaneous interaction — either in-person or via live video conferencing. Synchronous sessions allow for immediate feedback, live Q&A, and peer interaction. In online education, synchronous classes occur via platforms like Zoom or Teams and are scheduled at specific times, which can limit flexibility for students in different time zones.",
    category: "curriculum",
    relatedTerms: ["asynchronous-learning", "learning-management-system-lms", "lecture", "recitation"],
  },
  {
    term: "Teaching Assistant (TA)",
    slug: "teaching-assistant-ta",
    definition:
      "A graduate or advanced undergraduate student who assists a faculty member in course delivery. TA duties may include leading discussion sections or labs, grading assignments, holding office hours, creating study materials, and monitoring exams. TAs typically receive a stipend and/or tuition remission. The role provides practical teaching experience and is a common pathway into academic careers.",
    category: "higher-ed",
    relatedTerms: ["graduate-assistant", "adjunct-professor", "recitation", "office-hours"],
  },
  {
    term: "Thesis",
    slug: "thesis",
    definition:
      "A substantial research paper produced by a student at the culmination of a degree program that presents original research, analysis, or creative work. At the undergraduate level, a honors thesis demonstrates independent research capability. At the master's level, a thesis is typically required and involves primary research and a formal defense before a committee. A doctoral dissertation is the PhD-level equivalent.",
    category: "higher-ed",
    relatedTerms: ["research-paper", "capstone-project", "independent-study", "graduate-assistant"],
  },
  {
    term: "Transcript",
    slug: "transcript",
    definition:
      "An official record issued by a school or institution that lists all courses a student has taken, the grades received, credit hours earned, and cumulative GPA. Transcripts are used in college admissions, graduate school applications, job applications, and credit transfer processes. An official transcript bears the school's seal and registrar's signature; unofficial transcripts are self-service copies used for advising.",
    category: "academic-policies",
    relatedTerms: ["gpa-grade-point-average", "credit-hour", "transfer-credit", "graduation-requirements"],
  },
  {
    term: "Transfer Credit",
    slug: "transfer-credit",
    definition:
      "Academic credit earned at one institution that is accepted by another institution toward the requirements of a degree program. Transfer credit evaluation is conducted by the receiving institution's registrar and academic departments. Factors affecting transfer credit acceptance include institutional accreditation, course equivalency, and grade minimums (often C or better). Articulation agreements formalize transfer credit policies between specific schools.",
    category: "academic-policies",
    relatedTerms: ["articulation-agreement", "accreditation", "transcript", "credit-hour"],
  },
  {
    term: "Tuition",
    slug: "tuition",
    definition:
      "The fee charged by an educational institution for instruction and enrollment in its courses, exclusive of room, board, books, and other fees. Tuition is the largest component of college cost of attendance. Public universities typically charge lower in-state tuition rates subsidized by state governments and higher out-of-state rates. Private institutions charge a single rate for all students regardless of residency.",
    category: "higher-ed",
    relatedTerms: ["fafsa", "work-study-program", "credit-hour"],
  },
  {
    term: "Unit Plan",
    slug: "unit-plan",
    definition:
      "A structured instructional framework that organizes a sequence of lessons around a central theme, concept, or set of standards over a period of one to several weeks. Unit plans include learning objectives, essential questions, instructional activities, resources, formative assessments, and a culminating summative assessment. They are more detailed than a pacing guide and less granular than individual lesson plans.",
    category: "curriculum",
    relatedTerms: ["pacing-guide", "lesson-plan", "learning-objective", "curriculum", "formative-assessment"],
  },
  {
    term: "Universal Design for Learning (UDL)",
    slug: "universal-design-for-learning-udl",
    definition:
      "A research-based instructional framework developed by CAST that guides the design of flexible learning experiences to accommodate the variability of all learners. UDL is organized around three principles: providing multiple means of representation (how content is presented), action and expression (how students demonstrate learning), and engagement (how students are motivated). UDL proactively removes barriers rather than retrofitting accommodations.",
    category: "curriculum",
    relatedTerms: ["differentiated-instruction", "iep-individualized-education-program", "accessibility", "learning-objective"],
  },
  {
    term: "Weighted GPA",
    slug: "weighted-gpa",
    definition:
      "A GPA calculation that assigns additional grade point value to grades earned in more rigorous courses such as AP, IB, honors, or dual enrollment classes. A typical weighted scale adds 0.5 points for honors courses and 1.0 point for AP/IB courses, so an 'A' in an AP course earns 5.0 points rather than 4.0. Weighted GPAs allow colleges to see that a student challenged themselves academically but can make GPA comparisons across schools difficult.",
    category: "k12",
    relatedTerms: ["gpa-grade-point-average", "advanced-placement-ap", "class-rank", "honors-program"],
  },
  {
    term: "Withdrawal Policy",
    slug: "withdrawal-policy",
    definition:
      "An institution's rules governing when and how students may drop courses after the add/drop period has passed. Most institutions allow a full withdrawal until a specified mid-semester deadline, after which a 'W' (Withdrawal) or 'WF' (Withdrawal Failing) appears on the transcript. Excessive 'W' notations can affect financial aid satisfactory academic progress requirements and may raise concerns in graduate school applications.",
    category: "academic-policies",
    relatedTerms: ["add-drop-period", "transcript", "financial-aid", "academic-standing"],
  },
  {
    term: "Work-Study Program",
    slug: "work-study-program",
    definition:
      "A federally funded financial aid program (Federal Work-Study) that provides eligible students with part-time on-campus or off-campus employment opportunities to help cover education costs. Work-study eligibility is determined by the FAFSA. Students are paid at least minimum wage, and earnings are not counted as income on the following year's FAFSA. Positions are often in campus departments, libraries, research labs, and community nonprofits.",
    category: "higher-ed",
    relatedTerms: ["fafsa", "tuition", "internship", "student-success-center"],
  },
  {
    term: "Workshop Model",
    slug: "workshop-model",
    definition:
      "An instructional framework, most commonly associated with reading and writing instruction, that structures class time into a brief mini-lesson (10-15 minutes), an extended independent or collaborative work period (35-45 minutes), and a share/debrief session (5-10 minutes). The workshop model, developed by Lucy Calkins and others, shifts from teacher-centered to student-centered learning and includes regular one-on-one teacher-student conferring.",
    category: "classroom-management",
    relatedTerms: ["differentiated-instruction", "formative-assessment", "peer-review", "writing-center"],
  },
  {
    term: "Writing Center",
    slug: "writing-center",
    definition:
      "A campus resource that provides free writing support to students at all stages of the writing process — from brainstorming and outlining to drafting, revising, and proofreading. Writing centers employ trained student tutors and professional writing consultants who work with writers in individual appointments or drop-in sessions. They serve students across all disciplines and are not just for struggling writers.",
    category: "higher-ed",
    relatedTerms: ["student-success-center", "research-paper", "peer-review", "thesis"],
  },
  {
    term: "Zero-Tolerance Policy",
    slug: "zero-tolerance-policy",
    definition:
      "A disciplinary policy in K-12 schools that mandates automatic, predetermined consequences for specific rule violations — typically related to weapons, drugs, or violence — without allowing for individualized circumstances or discretion. Originally enacted in response to school violence concerns, zero-tolerance policies have been criticized for contributing to the 'school-to-prison pipeline,' particularly as they disproportionately affect students of color and students with disabilities.",
    category: "k12",
    relatedTerms: ["attendance-policy", "iep-individualized-education-program", "academic-standing"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getAllTermSlugs(): { term: string }[] {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}
