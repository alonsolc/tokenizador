import { ValidarNumeroTarjeta, ValidarEmail } from '../util/Validaciones'
import { generarToken } from '../util/Agregaciones'
import Tarjeta from '../entities/Tarjeta'
import TarjetaRepository from '../repositories/TarjetaRepository'
// import cryptoRandomString from 'crypto-random-string'

const SimularTokenizacionInteractor =
  (tarjetaRepository: TarjetaRepository) => async (body: any): Promise<object> => {
    if (!ValidarNumeroTarjeta(body.card_number)) {
      throw new Error('El número de tarjeta es inválido')
    }

    if (!ValidarEmail(body.email)) {
      throw new Error('El email es inválido')
    }

    const payload: Tarjeta = {
      card_number: body.card_number,
      cvv: body.cvv,
      expiration_month: body.expiration_month,
      expiration_year: body.expiration_year,
      email: body.email,
      // token: cryptoRandomString({ length: 16, type: 'alphanumeric' }),
      token: generarToken(16),
      fecha_creacion: new Date()
    }
    console.log('payload: ', payload)
    const { insertedId: id } = await tarjetaRepository.save(payload)
    const { token } = await tarjetaRepository.getById(id)

    return { token }
  }

export default SimularTokenizacionInteractor
