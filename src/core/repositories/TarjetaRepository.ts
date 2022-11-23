export default interface TarjetaRepository {
  save: (payload: object) => Promise<any>
  getByToken: (token: string) => Promise<any>
  getById: (_id: string) => Promise<any>
}
