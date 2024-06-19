import { useState } from 'react'

const skills = [
  {
    name: 'HTML',
    src: 'client/styles/images/skills/html-svgrepo-com.svg',
    alt: 'HTML logo',
  },
  {
    name: 'CSS3',
    src: 'client/styles/images/skills/css-3-svgrepo-com.svg',
    alt: 'CSS3 logo',
  },
  {
    name: 'JavaScript',
    src: 'client/styles/images/skills/javascript-svgrepo-com.svg',
    alt: 'JavaScript logo',
  },
  {
    name: 'React',
    src: 'client/styles/images/skills/react-svgrepo-com.svg',
    alt: 'React logo',
  },
  {
    name: 'Git',
    src: 'client/styles/images/skills/git-svgrepo-com.svg',
    alt: 'Git logo',
  },
  {
    name: 'GitHub',
    src: 'client/styles/images/skills/github-142-svgrepo-com.svg',
    alt: 'GitHub logo',
  },
  {
    name: 'Node.js',
    src: 'client/styles/images/skills/node-js-svgrepo-com.svg',
    alt: 'Node.js logo',
  },
  {
    name: 'TypeScript',
    src: 'client/styles/images/skills/typescript-svgrepo-com.svg',
    alt: 'TypeScript logo',
  },
  {
    name: 'TailWind',
    src: 'client/styles/images/skills/tailwind-svgrepo-com.svg',
    alt: 'TailWind logo',
  },
  {
    name: 'Vite',
    src: 'client/styles/images/skills/vite-svgrepo-com.svg',
    alt: 'Vite logo',
  },
  {
    name: 'SQLite',
    src: 'client/styles/images/skills/sqlite-svgrepo-com.svg',
    alt: 'SQLite logo',
  },
  {
    name: 'Express',
    src: 'client/styles/images/skills/express-svgrepo-com.svg',
    alt: 'Express logo',
  },
  {
    name: 'Knex',
    src: 'client/styles/images/skills/knex-svgrepo-com.svg',
    alt: 'Knex logo',
  },
  {
    name: 'Python',
    src: 'client/styles/images/skills/python-svgrepo-com.svg',
    alt: 'Python logo',
  },
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredSkill(index)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <div className="no-select flex flex-col items-center justify-center min-h-1/2 m-8 text-neutral
    lg:m-12 md:m-10 sm:m-8">
      <div className="max-w-5xl px-4">
        <h1 className="text-3xl text-green font-bold mb-3">My Skills</h1>
        <p className="text-lg text-neutral mb-8">
          These skills form the foundation of my technical journey. I am
          passionate about expanding my knowledge and embracing new technologies
          as they emerge. The tech world is vast and constantly evolving, and I
          am committed to continually learning and growing in my field.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-1/2 pb-10 text-neutral">
        <div className="flex flex-wrap justify-center gap-14 bg-slate-700 p-10 max-w-[800px] rounded-2xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className={`w-20 h-20 p-2 border border-neutral rounded-full transition-transform duration-300 ${
                  hoveredSkill === index ? 'spin' : ''
                }`}
              />
              <h2 className="text-lg mt-2">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
