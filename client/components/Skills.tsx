const skills = [
  {
    name: 'HTML',
    src: 'client/styles/images/html-5-svgrepo-com.svg',
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
    name: 'NPM',
    src: 'client/styles/images/npm-svgrepo-com.svg',
    alt: 'NPM logo',
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
    name: 'VS Code',
    src: 'client/styles/images/vscode-svgrepo-com.svg',
    alt: 'VS Code logo',
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
    <>
      <div>
        <h1>My Skills</h1>
      </div>
      <div className="bg-natural flex flex-row flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-20 h-20 border-slate-700 bg-neutral rounded-full"
            />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
