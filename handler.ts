//import service from "./src/service";
import { handler, dynamo } from "./src/io";

const generarToken = async (event, context) => {
  const input = handler.input(event);
  console.log("input:", input);
  const result = await dynamo.put(input);
  console.log("result:", result);
  //return io.returnSuccess(result);
};

export { generarToken };
