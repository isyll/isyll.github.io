import { useLockBodyScroll } from '@uidotdev/usehooks'

function Overlay({ onClick }: { onClick?: () => void }) {
  useLockBodyScroll()

  return <div className='fixed inset-0 z-20 opacity-55 bg-black' onClick={onClick} />
}

export default Overlay
