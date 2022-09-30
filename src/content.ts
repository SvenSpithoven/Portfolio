export const header = {
  homepage: null,
  title: 'Sveƞ.'
};

export const about = {
  name: 'Sven Spithoven',
  role: 'Front-end Developer',
  description:
    "I'm a communicative enthusiast who values quality and works with precision. Recently I switched from back-end to front-end development because my interest turned out to be more in the visual aspect of an application; the part the user interacts with. Within a period of 2 months I went through an intensive training program internally which enabled me to get started as a React developer. Here I can perfectly express my love for user-friendliness, puzzling and design!",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/svenspithoven/',
    github: 'https://github.com/SvenSpithoven'
  }
};

export type ProjectsType = {
  project: { name: string; description: string; stack: string[]; website?: string; sourceCode?: string };
};

export const projects = [
  {
    name: 'Unit4',
    description:
      'As a Back-end developer I worked within a Scrum team to expand an existing customer portal. Within this environment built up from microservices I developed new functionalities and worked on bug fixes.',
    stack: ['Bloomreach', 'Java'],
    website: 'https://www.unit4.com/nl'
  },
  {
    name: 'GrandVision',
    description:
      'As a Front-end developer I worked on the rollout and further development of a customer appointment tool.',
    stack: ['TypeScript', 'React', 'Redux'],
    website: 'https://www.grandvision.com/',
    sourceCode: 'https://github.com'
  }
];
