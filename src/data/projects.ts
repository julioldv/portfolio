import shoppingCartImage from "../assets/projects/shopping-cart.png";
import battleshipImage from "../assets/projects/battleship.png";
import cvApplicationImage from "../assets/projects/cv-application.png";
import hotelSantaPriscaImage from "../assets/projects/hotel-santa-prisca.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  type: "personal" | "client";
  imageFit?: "cover" | "contain";
};
export const projects: Project[] = [
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    description:
      "An e-commerce application with product browsing, cart state management, routing, quantity controls, and interaction testing.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Vitest",
      "React Testing Library",
    ],
    image: shoppingCartImage,
    imageAlt:
      "Shopping Cart application displaying a responsive product catalog",
    githubUrl: "https://github.com/julioldv/shopping-cart",
    liveUrl: "https://shopping-cart-jcl-298d.vercel.app/",
    featured: true,
    type: "personal",
    imageFit: "cover",
  },
  {
    id: "battleship",
    title: "Battleship",
    description:
      "A browser-based Battleship game developed with test-driven development, separating game logic from the user interface.",
    technologies: ["JavaScript", "Jest", "Webpack"],
    image: battleshipImage,
    imageAlt: "Battleship game showing the player fleet and enemy game boards",
    githubUrl: "https://github.com/julioldv/battleship-js",
    liveUrl: "https://julioldv.github.io/battleship-js/",
    type: "personal",
    imageFit: "contain",
  },
  {
    id: "cv-application",
    title: "CV Application",
    description:
      "A React application that lets users enter, preview, and edit CV information through an interactive form-based workflow.",
    technologies: ["React", "JavaScript", "CSS"],
    image: cvApplicationImage,
    imageAlt:
      "CV Application displaying a generated résumé preview with education and experience",
    githubUrl: "https://github.com/julioldv/cv-application",
    liveUrl: "https://cv-application-six-pi.vercel.app/",
    type: "personal",
    imageFit: "cover",
  },
  {
    id: "hotel-santa-prisca",
    title: "Hotel Santa Prisca",
    description:
      "A responsive bilingual website developed for a real hotel client, including image optimization, redirects, and ongoing maintenance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: hotelSantaPriscaImage,
    imageAlt:
      "Hotel Santa Prisca website displaying hotel information and room photography",
    githubUrl: "https://github.com/julioldv/hotel-santa-prisca",
    liveUrl: "https://hotelsantaprisca.com.mx",
    featured: true,
    type: "client",
    imageFit: "cover",
  },
];
