import SimularTokenizacionInteractor from './SimularTokenizacionInteractor'
import ObtenerTarjetaInteractor from './ObtenerTarjetaInteractor'
import TarjetaMongoDataSource from '../../dataSource/TarjetaMongoDataSource'

const tarjetaRepository = new TarjetaMongoDataSource()
const simularTokenizacionInteractor = SimularTokenizacionInteractor(tarjetaRepository)
const obtenerTarjetaInteractor = ObtenerTarjetaInteractor(tarjetaRepository)

export {
  simularTokenizacionInteractor,
  obtenerTarjetaInteractor
}
