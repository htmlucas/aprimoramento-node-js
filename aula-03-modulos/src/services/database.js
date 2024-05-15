//exemplo de export default

exports.connectDatabase = async(dataName) => {
    console.log('conectando ao banco:'+dataName)
}

exports.disconnectDatabase = async() => {
    console.log('Desconectando do banco...')
}