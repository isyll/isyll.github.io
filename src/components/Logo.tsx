function Logo({ color = 'white' }: { color?: string }) {
  return <h1 className={`text-xxl text-${color} font-bold`}>Isyll</h1>
}

export default Logo
