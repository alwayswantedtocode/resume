import { FiGithub, FiExternalLink } from "react-icons/fi";
const projects = [
  {
    title: "Social Media CRUD Web App",
    links: [
      { url: "#", label: "Client Repo", icon: <FiGithub /> },
      { url: "#", label: "Server Repo", icon: <FiGithub /> },
      { url: "#", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    achievements: [
      "Integrated Firestore for media storage",
      "Designed scalable backend with Express.js/Node.js",
      "Reduced API response times by 25% with MongoDB optimization",
      "Implemented JWT token authentication",
    ],
  },
  {
    title: "Location Pinning CRUD Web App",
    links: [
      { url: "#", label: "Client Repo", icon: <FiGithub /> },
      { url: "#", label: "Server Repo", icon: <FiGithub /> },
      { url: "#", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React", "MongoDB", "Google Maps API"],
    achievements: [
      "Integrated Google Maps API with React components",
      "Implemented geolocation with Haversine formula",
      "Improved response time by 30% through backend optimization",
    ],
  },
  {
    title: "Automobile Dynamic Web App",
    links: [
      { url: "#", label: "Client Repo", icon: <FiGithub /> },
      { url: "#", label: "Server Repo", icon: <FiGithub /> },
      { url: "#", label: "Live Demo", icon: <FiExternalLink /> },
    ],
    stack: ["React", "Firebase"],
    achievements: [
      "Built responsive SPA with dynamic image galleries",
      "Increased user session duration by 30%",
      "Reduced bundle size by 45% through code splitting",
    ],
  },
];
 export default projects;