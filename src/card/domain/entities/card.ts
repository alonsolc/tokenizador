export interface Card {
  card_number: string
  cvv?: number
  expiration_month: string
  expiration_year: string
  email: string
  token?: string
  creation_date?: Date
}
