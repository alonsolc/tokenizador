import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

const generarToken = {
  handler: `${handlerPath(__dirname)}/handler.generarToken`,
  events: [
    {
      http: {
        method: "post",
        path: "token",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
  /*iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:PutItem"],
      Resource: [{ "Fn::GetAtt": ["TblTokenizador", "Arn"] }],
    },
  ],*/
};

const obtenerToken = {
  handler: `${handlerPath(__dirname)}/handler.obtenerToken`,
  events: [
    {
      http: {
        method: "get",
        path: "token",
      },
    },
  ],
};

export { generarToken, obtenerToken };
