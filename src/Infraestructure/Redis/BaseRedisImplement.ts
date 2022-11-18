import {}
import cryptoRandomString from "crypto-random-string";

export default abstract class baseDynamoRepository {
  protected tableName: string | undefined = "";

  private dynamoDbClient;

  constructor() {
    this.dynamoDbClient = baseDynamoRepository.instanceDynamoClient();
  }

  protected async put(row) {
    //const id = cryptoRandomString({ length: 16, type: "alphanumeric" });
    //row.id = id;
    const putParams = {
      TableName: this.tableName, //this.tableName,
      Item: row,
    };
    console.log("putParams:", putParams);
    return await this.dynamoDbClient
      .put(putParams)
      .promise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(`Error en baseDynamoRepository.put: ${error}`);
        throw error;
      });
  }

  static instanceDynamoClient() {
    return new DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    });
  }
}
