import TarjetaRepository from '../core/repositories/TarjetaRepository'
import { Collection, Document, MongoClient } from 'mongodb'

export default class TarjetaMongoDataSource implements TarjetaRepository {
  public async save (payload: object): Promise<any> {
    const collection = await this.getCollection()
    const insertOne = await collection.insertOne(payload)
    return insertOne
  }

  public async getByToken (token: string): Promise<any> {
    const collection = await this.getCollection()
    const findOne = await collection.findOne({ token })
    return findOne
  }

  public async getById (id: string): Promise<any> {
    const collection = await this.getCollection()
    const findOne = await collection.findOne({ _id: id })
    return findOne
  }

  private async getCollection (): Promise<Collection<Document>> {
    const url = 'mongodb+srv://db_user_alipac:yZIJZmlKJKU7w3dl@cluster0.civgv.mongodb.net/?retryWrites=true&w=majority'
    const client = await MongoClient.connect(url)
    const db = client.db('reto_tecnico')
    return db.collection('tokenizacion')
  }
}
