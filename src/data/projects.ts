export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}
export const projects: Project[] = [
  {
    id: 1,
    title: 'Shopping Cart',
    description:
      'An e-commerce interface built with React and TypeScript featuring product browsing, cart management, and routing.',
    technologies: ['React', 'TypeScript', 'React Router', 'Vitest'],
    githubUrl: 'https://github.com/julioldv/shopping-cart',
    liveUrl: 'https://shopping-cart-jcl-298d.vercel.app/',
  },
  {
    id: 2,
    title: 'Battleship',
    description:
      'A browser-based Battleship game built with JavaScript using test-driven development.',
    technologies: ['JavaScript', 'Jest', 'Webpack'],
    githubUrl: 'https://github.com/julioldv/battleship-js',
    liveUrl: 'https://julioldv.github.io/battleship-js/'
  },
  {
    id: 3,
    title: 'CV Application',
    description:
      'A React application that lets users enter, preview, and edit information for a CV.',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/julioldv/cv-application',
    liveUrl: 'https://cv-application-six-pi.vercel.app/',
  },
  {
    id: 4,
    title: 'Hotel Santa Prisca Website',
    description:
        'A responsive website built for a real hotel client, including bilingual content, image optimization, redirects, and ongoing maintenance.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/julioldv/hotel-santa-prisca',
    liveUrl: 'https://hotelsantaprisca.com.mx',
    },
]