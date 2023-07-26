import { CardRepository } from '../../domain/cardRepository'
import { Card } from '../../domain/entities/card'
import {
  generateToken,
  validateCardNumber,
  validateEmail,
} from '../utils/utils'
import { CodeError } from '../utils/codeError'

export class SaveCardUseCase {
  constructor(private readonly cardRepository: CardRepository) {}
  async execute(req: any): Promise<any> {
    if (!validateCardNumber(req.card_number)) {
      throw new CodeError('CardNumber is invalid', 400)
    }

    if (!validateEmail(req.email)) {
      throw new CodeError('Email is invalid', 400)
    }

    const card: Card = {
      card_number: req.card_number,
      cvv: req.cvv,
      expiration_month: req.expiration_month,
      expiration_year: req.expiration_year,
      email: req.email,
      token: generateToken(16),
      creation_date: new Date(),
    }

    const { insertedId: id } = await this.cardRepository.saveCard(card)

    if (!id) {
      const error = new Error('Internal error')
      throw error
    }

    const { token } = await this.cardRepository.getById(id)

    return token
  }
}
