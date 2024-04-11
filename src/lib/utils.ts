import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function explodeByDash(str: string, atPos?: number) {
  const items = str.split('-')
  if (atPos !== undefined) {
    return items[atPos]
  }
  return items
}
