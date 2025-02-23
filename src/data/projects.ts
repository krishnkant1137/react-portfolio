import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "CRM System",
    description:
      "A customer relationship management (CRM) system to streamline business operations.",
    image: "crm.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/yourusername/crm-project",
    live: "http://3.7.253.14//",
    details: {
      problem:
        "Managing customer data and interactions manually is inefficient for businesses.",
      solution:
        "Built a CRM system with role-based access, analytics, and automation to improve efficiency.",
      features: [
        "Role-based authentication",
        "Customer & lead management",
        "Automated reports & analytics",
        "Task assignment and tracking",
      ],
      impact:
        "Increased business efficiency by automating customer relationship processes.",
    },
  },
  {
    title: "Airbnb Clone",
    description:
      "A property rental platform allowing users to list, search, and book accommodations.",
    image: "airbnb-clone.png",
    tech: ["EJS", "Node.js", "MongoDB", "Express.js", "CSS"],
    github: "https://github.com/yourusername/airbnb-clone",
    live: "https://delta-project-2-4eek.onrender.com/listings",
    details: {
      problem:
        "Finding and managing short-term rental properties is often complicated and lacks transparency.",
      solution:
        "Built a rental platform with user authentication, reviews, and interactive map search.",
      features: [
        "User authentication (Login/Signup)",
        "Add, edit, and delete property listings",
        "Ratings & reviews system",
        "Interactive map search using Leaflet.js",
      ],
      impact: "Provided an easy-to-use platform for property rentals with transparent user reviews.",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "An interactive and responsive portfolio to showcase projects, skills, and experience.",
    image: "portfolio.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://react-portfolio-lyart-delta.vercel.app/",
    details: {
      problem:
        "Developers need a professional way to showcase their skills and projects to recruiters.",
      solution:
        "Designed a modern portfolio with animations, dark/light mode, and project highlights.",
      features: [
        "Dark/Light mode toggle",
        "Smooth animations and interactive UI",
        "Project showcase with GitHub links",
        "Downloadable resume section",
      ],
      impact: "Helped in personal branding and increased visibility for job opportunities.",
    },
  },
];
