import { simularTokenizacionInteractor, obtenerTarjetaInteractor } from '../core/interactors'

const simularTokenizacion = async (event: any): Promise<object> => {
  try {
    console.log('event: ', JSON.parse(event.body))
    const { body, headers: { Authorization } } = event

    if (!Authorization || Authorization !== 'Bearer pk_test_ffuSuv4899sKAHjE') {
      return {
        statusCode: 401,
        body: JSON.stringify({ data: '', message: 'PK inválida', error: '' })
      }
    }
    const bodyParse = JSON.parse(body)
    const res = await simularTokenizacionInteractor(bodyParse)
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res, message: 'Los datos de la tarjeta se almacenaron correctamente', error: '' })
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: '', message: 'Hubo un error en el servidor', error: err.stack })
    }
  }
}

const obtenerTarjeta = async (event: any): Promise<object> => {
  try {
    console.log('event: ', event)
    const { queryStringParameters: query, headers: { Authorization } } = event

    if (!Authorization || Authorization !== 'Bearer pk_test_ffuSuv4899sKAHjE') {
      return {
        statusCode: 401,
        body: JSON.stringify({ data: '', message: 'PK inválida', error: '' })
      }
    }

    const { token } = query
    const res = await obtenerTarjetaInteractor(token)
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res, message: 'Los datos de la tarjeta fueron obtenidos', error: '' })
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: '', message: 'Hubo un error en el servidor', error: err.stack })
    }
  }
}

export {
  simularTokenizacion,
  obtenerTarjeta
}
