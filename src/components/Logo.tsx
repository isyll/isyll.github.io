function Logo({
  color = 'white',
  size = 40,
}: {
  color?: string
  size?: number
}) {
  return (
    <h1
      className={`text-${color} font-bold`}
      style={{
        fontSize: `${size}px`,
      }}
    >
      Isyll
    </h1>
  )
}

export default Logo
