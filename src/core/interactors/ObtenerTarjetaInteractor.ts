import Tarjeta from '../entities/Tarjeta'
import TarjetaRepository from '../repositories/TarjetaRepository'

const ObtenerTarjetaInteractor =
  (tarjetaRepository: TarjetaRepository) => async (token: string): Promise<Tarjeta> => {
    const getByToken = await tarjetaRepository.getByToken(token)
    if (getByToken === null) {
      throw new Error('El token ingresado no existe o ha expirado')
    }
    console.log('getByToken: ', getByToken)
    const tarjeta: Tarjeta = {
      card_number: getByToken.card_number,
      expiration_month: getByToken.expiration_month,
      expiration_year: getByToken.expiration_year,
      email: getByToken.email
    }
    return tarjeta
  }

export default ObtenerTarjetaInteractor
