import { CardRepository } from '../../domain/cardRepository'

export class MongoRepositoryMockup implements CardRepository {
  public async saveCard(payload: object): Promise<any> {
    console.log('MongoRepository.saveCard.payload', payload)
    const insertOne = {
      insertedId: '64c12e897d2c0752f96db0e4',
    }
    return insertOne
  }

  public async getById(id: string): Promise<any> {
    console.log('MongoRepository.getById.id', id)
    const findOne = {
      _id: { $oid: '64c12e897d2c0752f96db0e4' },
      card_number: '30569309025904',
      cvv: '124',
      expiration_month: '1',
      expiration_year: '2023',
      email: 'alonso15101051@gmail.com',
      token: 'FOz9EOXsXdB770BP',
      creation_date: { $date: { $numberLong: '1690381960464' } },
    }
    return findOne
  }

  public async getCard(token: string): Promise<any> {
    console.log('MongoRepository.getCard.token', token)
    const findOne = {
      _id: { $oid: '64c12e897d2c0752f96db0e4' },
      card_number: '30569309025904',
      cvv: '124',
      expiration_month: '1',
      expiration_year: '2023',
      email: 'alonso15101051@gmail.com',
      token: 'FOz9EOXsXdB770BP',
      creation_date: { $date: { $numberLong: '1690381960464' } },
    }
    return findOne
  }
}
