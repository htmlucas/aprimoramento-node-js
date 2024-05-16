import { connectToDatabase,disconnectToDatabase,databaseType } from "./utils/database.js";
import * as api from "./utils/api.js"

connectToDatabase('DatabaseLucas')
disconnectToDatabase('DatabaseLucas')

api.getDataFromApi()

console.log(databaseType)

console.log('Hello ECMA');