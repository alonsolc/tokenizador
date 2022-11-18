//import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
//import { formatJSONResponse } from '@libs/api-gateway';
//import { middyfy } from '@libs/lambda';
//import schema from './schema';
//import baseDynamoRepository from "../../aws/dynamo/baseDynamoRepository";
//import tokenizacionRepository from "../../aws/dynamo/tokenizacionRepository";

const generarToken = async (event) => {
  try {
    const { body } = event;
    const response = 1;
    /*const response = await tokenizacionRepository. put(
      JSON.parse(body),
      process.env.AWS_DYNAMO_TBL_TOKENIZADOR
    );*/
      console.log();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Token generado correctamente",
        data: response,
        error: "",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Hubo un error en la generación del token",
        data: "",
        error: error.stack,
      }),
    };
  }
};

const obtenerToken = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hola Alonso 2",
      input: event,
    }),
  };
};

export { generarToken, obtenerToken };

//export const main = middyfy(hello);
