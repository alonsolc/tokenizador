export default interface Tarjeta {
  card_number: string
  cvv?: number
  expiration_month: string
  expiration_year: string
  email: string
  token?: string
  fecha_creacion?: Date
}
