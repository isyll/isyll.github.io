interface MenuItem {
  url: string
  name: string
  subItems: Array<{ name: string; url: string }>
}

export default MenuItem
