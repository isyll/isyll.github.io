const FloatingImage = ({ src, alt }: { src: string; alt: string }) => {
  const randomX = Math.floor(Math.random() * 100)
  const randomY = Math.floor(Math.random() * 100)
  const randomDuration = 2

  const style = {
    left: `${randomX}%`,
    top: `${randomY}%`,
    animationDuration: `${randomDuration}s`,
  }

  return (
    <img
      width={20}
      height={20}
      src={src}
      alt={alt}
      className='floating-image'
      style={style}
    />
  )
}

export default FloatingImage
