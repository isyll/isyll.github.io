export interface Asset {
  name: string
  url: string
}

export const getAsset = (name: string): string | null =>
  assets.find((asset) => asset.name == name)?.url ?? null

const assets: Asset[] = [
  {
    name: 'noImg',
    url: '/no-img.svg',
  },
]

export default assets
