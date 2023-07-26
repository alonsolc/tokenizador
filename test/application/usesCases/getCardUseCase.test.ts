import { GetCardUseCase } from '../../../src/card/application/usesCases/getCardUseCase'
import { MongoRepositoryMockup } from '../../../src/card/infrastructureMockup/database/mongoRepositoryMockup'

const mongoRepositoryMockup = new MongoRepositoryMockup()
const getCardUseCase = new GetCardUseCase(mongoRepositoryMockup)

describe('GetCardUseCase', () => {
  test(
    'GetCardUseCase - OK',
    async () => {
      const { card_number, expiration_month, expiration_year, email } =
        await getCardUseCase.execute('FOz9EOXsXdB770BP')
      expect(card_number).toBeTruthy()
      expect(expiration_month).toBeTruthy()
      expect(expiration_year).toBeTruthy()
      expect(email).toBeTruthy()
    },
    60000 * 5
  )
})
