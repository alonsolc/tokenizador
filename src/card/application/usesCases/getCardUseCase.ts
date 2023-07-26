import { CardRepository } from '../../domain/cardRepository'
import { Card } from '../../domain/entities/card'
import { CodeError } from '../utils/codeError'

export class GetCardUseCase {
  constructor(private readonly cardRepository: CardRepository) {}

  async execute(req: any): Promise<any> {
    const response = await this.cardRepository.getCard(req.token)
    if (response === null) {
      throw new CodeError('The token does not exist or expired', 400)
    }

    const card: Card = {
      card_number: response?.card_number,
      expiration_month: response?.expiration_month,
      expiration_year: response?.expiration_year,
      email: response?.email,
    }
    return card
  }
}
