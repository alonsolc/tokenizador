import cryptoRandomString from 'crypto-random-string'

const generarToken = (cantidadCaracteres: number): string => {
  const token = cryptoRandomString({ length: cantidadCaracteres, type: 'alphanumeric' })
  return token
}

export {
  generarToken
}
