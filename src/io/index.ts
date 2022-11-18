import { DynamoDB } from 'aws-sdk'
const db = new DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

export const dynamo = {
  put: async data => {
    const params = {
      TableName: process.env.AWS_DYNAMO_TBL_TOKENIZADOR,
      Item: data
    };
    console.log('params:', params);
    return await db.put(params).promise();
  },
};

export const handler = {
  input: x => JSON.parse(x.body),
  returnSuccess: x => ({
    statusCode: 200,
    body: JSON.stringify({
      message: x
    })
  })
}

export default {
  handler: handler,
  db: dynamo,
  events: {}
}
