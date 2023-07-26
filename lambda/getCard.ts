import { GetCardUseCase } from '../src/card/application/usesCases/getCardUseCase'
import { MongoRepository } from '../src/card/infrastructure/database/mongoRepository'
import { getCardSchema } from './schemas/getCardSchema'

const mongoRepository = new MongoRepository()
const getCardUseCase = new GetCardUseCase(mongoRepository)

export const handler = async (event: any): Promise<object> => {
  try {
    const authHeader =
      event.headers.authorization || event.headers.Authorization
    if (
      !authHeader ||
      authHeader.substring(7, authHeader.length) !== process.env.BEARER_TOKEN
    ) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          data: '',
          message: 'No autorizado',
        }),
      }
    }

    const query = event.queryStringParameters
    const validation = getCardSchema.validate(query)
    if (validation.error != null) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          data: '',
          message: 'Error de validación',
          error: validation.error.details[0].message,
        }),
      }
    }

    const getCard = await getCardUseCase.execute(query)

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: getCard,
        message: 'Operación exitosa',
      }),
    }
  } catch (error) {
    if (error.status === 400) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          data: '',
          message: 'Error de validación',
          error: error.message,
        }),
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        data: '',
        message: 'Error en el servidor',
        error: error.stack,
      }),
    }
  }
}
