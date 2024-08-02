import { Mail } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const onSumit = () => {
    const url = `mailto:isyll711@gmail.com?subject=${subject}&body=${message}`
    const encoded = encodeURI(url)
    const link = document.createElement('a')
    link.href = encoded
    link.style.display = 'none'
    link.click()
  }

  return (
    <div id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='text-xxl'>Contact</h1>
        <div className='flex mt-4 gap-5'>
          <a href='mailto:isyll711@gmail.com' target='_blank'>
            <button className='bg-primary p-3 px-6 flex items-center gap-1 rounded-md text-xl'>
              <Mail />
              isyll711@gmail.com
            </button>
          </a>
          <a href='https://wa.me/221785354479'>
            <button className='bg-primary p-3 px-6 flex items-center gap-1 rounded-md text-xl'>
              <img src='/whatsapp.svg' width={24} />
              +221 78 535 44 79
            </button>
          </a>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center mt-10'>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type='text'
            className='bg-opacity-0 border rounded-2xl bg-transparent border-white border-opacity-40 p-4 px-5 w-full md:w-[500px]  focus:outline-none focus:border-opacity-100'
            placeholder='Subject'
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='resize-none w-full p-4 px-5 h-[250px] md:w-[500px] bg-transparent rounded-2xl border border-white border-opacity-40 focus:outline-none focus:border-opacity-100'
            placeholder='Message'
          />
          <button
            className='bg-primary p-3 px-6 flex items-center gap-1 rounded-md text-xl disabled:cursor-not-allowed disabled:bg-opacity-55'
            onClick={onSumit}
            disabled={subject.trim().length === 0 || message.trim().length == 0}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
// https://wa.me/1XXXXXXXXXX
export default Contact
