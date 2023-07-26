import { SaveCardUseCase } from '../src/card/application/usesCases/saveCardUseCase'
import { MongoRepository } from '../src/card/infrastructure/database/mongoRepository'
import { saveCardSchema } from './schemas/saveCardSchema'

const mongoRepository = new MongoRepository()
const saveCardUseCase = new SaveCardUseCase(mongoRepository)

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

    const body = JSON.parse(event.body)
    const validation = saveCardSchema.validate(body)
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

    const token = await saveCardUseCase.execute(body)

    return {
      statusCode: 201,
      body: JSON.stringify({
        data: { token },
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
