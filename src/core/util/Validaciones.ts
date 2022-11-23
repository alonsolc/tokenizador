const ValidarNumeroTarjeta = (num: string): boolean => {
  const arr = (num + '')
    .split('')
    .reverse()
    .map((x) => parseInt(x))
  const lastDigit = arr.splice(0, 1)[0]
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  )
  sum += lastDigit
  return sum % 10 === 0
}

const ValidarEmail = (email: string): boolean => {
  if (/@gmail.com\s*$/.test(email) || /@hotmail.com\s*$/.test(email) || /@yahoo.es\s*$/.test(email)) {
    return true
  }
  return false
}

export {
  ValidarNumeroTarjeta,
  ValidarEmail

}
