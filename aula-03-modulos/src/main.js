const {getFullName} = require("./services/products")
const products = require("./services/products")
const config = require("./services/config")
const database = require('./services/database')

async function main() {
    console.log('Olá mundo')
    getFullName('403','mousepad')
    products.getProductLabel('Mouse')
    database.connectDatabase('ProductDatabase')
    database.disconnectDatabase()

    console.log(config.devArea)
}

main()