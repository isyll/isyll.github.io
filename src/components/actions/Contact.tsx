import { Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <div className='ms-6'>
      <div className='flex gap-2 mb-4 text-blue-300'>
        <Mail />
        <a href='mailto:isyll711@gmail.com' className='hover:underline'>
          isyll711@gmail.com
        </a>
      </div>
      <div className='flex gap-2 text-blue-300'>
        <Phone />
        <a href='tel:+221785354479' className='hover:underline'>
          +221 78 535 44 79
        </a>
      </div>
    </div>
  )
}

export default Contact
