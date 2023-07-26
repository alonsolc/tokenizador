import { Card } from './entities/card'

export interface CardRepository {
  getById: (id: string) => Promise<any>
  getCard: (token: string) => Promise<Card | null>
  saveCard: (card: Card) => Promise<any>
}
