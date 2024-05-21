const skills = [
  {
    name: 'HTML',
    src: 'client/styles/images/html-svgrepo-com.svg',
    alt: 'HTML logo',
  },
  {
    name: 'CSS3',
    src: 'client/styles/images/css-3-svgrepo-com.svg',
    alt: 'CSS3 logo',
  },
  {
    name: 'JavaScript',
    src: 'client/styles/images/javascript-svgrepo-com.svg',
    alt: 'JavaScript logo',
  },
  {
    name: 'React',
    src: 'client/styles/images/react-svgrepo-com.svg',
    alt: 'React logo',
  },
  {
    name: 'Git',
    src: 'client/styles/images/git-svgrepo-com.svg',
    alt: 'Git logo',
  },
  {
    name: 'GitHub',
    src: 'client/styles/images/github-142-svgrepo-com.svg',
    alt: 'GitHub logo',
  },
  {
    name: 'Node.js',
    src: 'client/styles/images/node-js-svgrepo-com.svg',
    alt: 'Node.js logo',
  },
  {
    name: 'TypeScript',
    src: 'client/styles/images/typescript-svgrepo-com.svg',
    alt: 'TypeScript logo',
  },
  {
    name: 'TailWind',
    src: 'client/styles/images/tailwind-svgrepo-com.svg',
    alt: 'TailWind logo',
  },
  {
    name: 'Vite',
    src: 'client/styles/images/vite-svgrepo-com.svg',
    alt: 'Vite logo',
  },
  {
    name: 'SQLite',
    src: 'client/styles/images/sqlite-svgrepo-com.svg',
    alt: 'SQLite logo',
  },
  {
    name: 'Express',
    src: 'client/styles/images/express-svgrepo-com.svg',
    alt: 'Express logo',
  },
  {
    name: 'Knex',
    src: 'client/styles/images/knex-svgrepo-com.svg',
    alt: 'Knex logo',
  },
  {
    name: 'Python',
    src: 'client/styles/images/python-svgrepo-com.svg',
    alt: 'Python logo',
  },
]

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 text-neutral">
      <div className="max-w-4xl px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">My Skills</h1>
        <p className="text-lg text-neutral-light mb-8">
          These skills form the foundation of my technical journey. I am passionate about expanding my knowledge and embracing new technologies as they emerge. The tech world is vast and constantly evolving.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-20 h-20 border border-neutral rounded-full"
            />
            <h2 className="text-lg mt-2">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

