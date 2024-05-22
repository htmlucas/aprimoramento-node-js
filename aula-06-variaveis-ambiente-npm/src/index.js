import connectToDatabase from "./database/data.js"

console.log('Olá mundo');

(async function main(){
    await connectToDatabase(process.env.USER_DATABASE,process.env.PASSWORD_DATABASE)
})()


