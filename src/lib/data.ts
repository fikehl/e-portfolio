export interface SkillNode {
  name: string;
  category: "Language" | "Web" | "Tool";
  level: number;
  color: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work";
}

export const SKILLS: SkillNode[] = [
  { name: "Java", category: "Language", level: 80, color: "#0070f3" },
  { name: "REST-API & Integration", category: "Web", level: 60, color: "#0070f3" },
  { name: "Version Control", category: "Tool", level: 60, color: "#0070f3" },
  { name: "Testing & Code Quality", category: "Tool", level: 80, color: "#0070f3" },
  { name: "API security", category: "Web", level: 60, color: "#0070f3" },
];

export const PROJECTS: ProjectData[] = [
  {
    id: "project-1",
    title: "SkinMatch",
    description:
      "A skincare website that helps users determine if products are safe for their specific skin type, allergies, and physical conditions based on barcode scans and ingredient analysis.",
    techStack: ["React", "Firebase", "Web"],
    link: "https://skinmatch-59b4a.web.app/",
    imageUrl: "/images/skinmatch.png", // Added placeholder for the provided image
  },
  {
    id: "project-2",
    title: "Pong (VGA)",
    description:
      "A classic Pong game built for a VGA graphical display using C. It features X/Y ball movement, Y-axis paddle control, natural bounce physics on paddles and walls, and win state detection.",
    techStack: ["C", "Hardware", "VGA"],
    link: "https://en.wikipedia.org/wiki/Pong",
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "timeline-1",
    period: "Feb 2026 — Present",
    title: "Junior Data Specialist (Internship)",
    subtitle: "Sortrace, Stockholm",
    description:
      "Responsible for structuring and quality control of large datasets (training data for AI/ML). The work requires extreme accuracy and attention to detail to ensure correct models.",
    type: "work",
  },
  {
    id: "timeline-2",
    period: "Feb 2025 — Present",
    title: "Runner",
    subtitle: "Restaurang Prinsen, Stockholm",
    description:
      "Responsible for delivering food to guests. Developed stress resilience and the ability to work efficiently under high time pressure while maintaining service quality. Communicating adaptably in multiple languages.",
    type: "work",
  },
  {
    id: "timeline-3",
    period: "Aug 2024 — Present",
    title: "Information Technology, M.Sc. (300 hp)",
    subtitle: "KTH Royal Institute of Technology, Stockholm",
    description:
      "Master of Science in Engineering programme in Information Technology. Courses include Networking, Operating Systems, Logic, Algorithms & Data Structures, and Programming.",
    type: "education",
  },
  {
    id: "timeline-4",
    period: "Jun 2023",
    title: "Intern",
    subtitle: "Ressourcenmangel, Berlin",
    description:
      "Collected, structured and analysed market data to build advertising campaigns. Worked in an international team, strengthening analytical skills and the ability to drive a project from idea to finished result.",
    type: "work",
  },
  {
    id: "timeline-5",
    period: "Aug 2011 — Jun 2024",
    title: "Dual Diploma (Swedish & German)",
    subtitle: "Tyska Skolan Stockholm",
    description:
      "Graduated with a dual diploma — both the Swedish and German upper secondary school qualifications.",
    type: "education",
  },
];

export const ABOUT_TEXT = `I'm a Junior System Developer with a passion for building robust,
well-structured systems. With a strong foundation in Java and .NET, I enjoy tackling
complex problems and turning them into clean, efficient solutions. I thrive in
collaborative environments and am always eager to learn new technologies and approaches
to software development.`;

export const CONTACT = {
  email: "filipkehl@gmail.com",
  linkedin: "https://www.linkedin.com/in/filip-kehl-912272264/",
  github: "https://github.com",
};
