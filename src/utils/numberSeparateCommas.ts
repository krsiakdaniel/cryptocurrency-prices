export const numberSeparateCommas = (coinValue: number) => {
  return coinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
