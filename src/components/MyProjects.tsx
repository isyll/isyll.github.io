import clsx from 'clsx'
import { ExternalLink } from 'lucide-react'

export default function MyProjects() {
  return (
    <div id='projects' className='pt-3'>
      <div className='my-14 mx-28 justify-between items-center overflow-hidden'>
        <h1 className='mb-4 text-xxl text-center'>My projects</h1>
        <div className='flex flex-wrap justify-between mt-14 px-8 pb-20 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={clsx(
                `group flex flex-col bg-[#171717] p-5 rounded-2xl cursor-pointer transition-all duration-300 w-[300px] hover:shadow-2xl hover:shadow-[#ff6b00]`,
                `hover:bg-[#ff6b00] hover:-translate-y-2`,
              )}
            >
              <div className='flex justify-between'>
                <p></p>
                <a href={project.url} target='_blank'>
                  <span className='group-hover:hidden'>
                    <ExternalLink />
                  </span>
                  <span className='group-hover:inline hidden'>
                    <ExternalLink color='#080808' />
                  </span>
                </a>
              </div>
              <h1 className='text-xxl mb-2 group-hover:text-secondary font-extrabold duration-500'>
                {project.name}
              </h1>
              <p className='text-xl my-2 group-hover:text-secondary duration-500'>
                {project.description}
              </p>
              <p className='mt-6 group-hover:text-secondary duration-500 flex gap-4'>
                {project.techs.map((tech, index) => (
                  <span key={index} className='opacity-50 text-sm'>
                    {tech}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    url: 'https://github.com/isyll/wave',
    name: 'Wave Clone',
    description: 'Clone of the famous Wave application.',
    link: '',
    techs: ['Dart', 'Flutter'],
  },
  {
    url: 'https://github.com/isyll/chat_app',
    name: 'Chat App',
    description: 'Mobile Chat application.',
    link: '',
    techs: ['Dart', 'Flutter'],
  },
  {
    url: 'https://github.com/isyll/isy-shop',
    name: 'IsySHOP',
    description: 'E-commerce application.',
    link: '',
    techs: ['Dart', 'Flutter'],
  },
  {
    url: 'https://github.com/isyll/chat-online',
    name: 'Chat Online',
    description: 'Web version of chat application.',
    link: '',
    techs: ['React', 'Tailwind CSS'],
  },
]
