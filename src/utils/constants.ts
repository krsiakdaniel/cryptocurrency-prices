// INSERT YOUR API KEY HERE
export const API_KEY = 'CG-ih8zbzkLnqwd6nYkJDbCwVeR'

export const PAGE_WIDTH = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

export interface CoinType {
  id: string
  image: string
  name: string
}

export interface CoinTypeMarket {
  id: string
  image: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}
