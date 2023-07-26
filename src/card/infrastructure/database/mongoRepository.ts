import { CardRepository } from '../../domain/cardRepository'
import { Collection, Document, MongoClient } from 'mongodb'

export class MongoRepository implements CardRepository {
  public async saveCard(payload: object): Promise<any> {
    const collection = await this.getCollection()
    const insertOne = await collection.insertOne(payload)
    return insertOne
  }

  public async getById(id: string): Promise<any> {
    const collection = await this.getCollection()
    const findOne = await collection.findOne({ _id: id })
    return findOne
  }

  public async getCard(token: string): Promise<any> {
    const collection = await this.getCollection()
    const findOne = await collection.findOne({ token })
    return findOne
  }

  private async getCollection(): Promise<Collection<Document>> {
    const url = process.env.MONGO_URI ? process.env.MONGO_URI : ''
    const client = await MongoClient.connect(url)
    const db = client.db('reto_tecnico')
    return db.collection('tokenizacion')
  }
}
