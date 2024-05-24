import getBaseEmail from "./services/email"

const main = async () => {
    const messageEmail = await getBaseEmail('Lucas Martins de Freitas')
    console.log(messageEmail)
    console.log('Olá mundo')

    console.log('Finalizado')
    console.log('....')
}

main()

