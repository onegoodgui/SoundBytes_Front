export function MoneyStringToCentsInt(string) {
  return parseInt(string.replace("R$ ", "").replace(",", "").replace(".", ""))
}

export function CentsIntToMoneyString(integer) {

  let MoneyString = integer.toString()
  return `R$ ${MoneyString.slice(0, -2)},${MoneyString.substring(MoneyString.length - 2)}`
}