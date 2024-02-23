import { API_KEY } from './constants'

const ROOT_URL = 'https://api.coingecko.com/api/v3'
const URL_PARAMETER = '&x_cg_demo_api_key='
const SPARK_LINE = false

export const getUrlAPI = (pageLimit: number) => {
  return `${ROOT_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${pageLimit}&page=1&sparkline=${SPARK_LINE}&locale=en${URL_PARAMETER}${API_KEY}`
}
