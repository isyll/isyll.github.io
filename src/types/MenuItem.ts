interface MenuItem {
  url: string
  name: string
  subItems?: Array<{ name: string; url: string }>
}

export const hasSubItems = (item: MenuItem) =>
  item.subItems !== undefined && item.subItems.length > 0

export default MenuItem
