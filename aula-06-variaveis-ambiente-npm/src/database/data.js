async function connectToDatabase( usuario, senha) {
    if(usuario === process.env.USER_DATABASE && senha === process.env.PASSWORD_DATABASE){
        console.log('Conexão estabelecida')
    }else{
        console.log('Conexão não foi estabelecida')
    }
}

export default connectToDatabase