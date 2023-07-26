import { nanoid } from 'nanoid'
import luhn from 'luhn'
import moment from 'moment-timezone'

const generateToken = (cantidadCaracteres: number): string => {
  const token = nanoid(cantidadCaracteres)
  return token
}

const validateCardNumber = (num: string): boolean => {
  return luhn.validate(num)
}

const validateEmail = (email: string): boolean => {
  if (
    /@gmail.com\s*$/.test(email) ||
    /@hotmail.com\s*$/.test(email) ||
    /@yahoo.es\s*$/.test(email)
  ) {
    return true
  }
  return false
}

const currentDate = (): any => {
  const date = moment.tz('America/Lima')
  return date.format()
}

export { generateToken, validateCardNumber, validateEmail, currentDate }
