const getBaseEmail = async(senderName: string): Promise<string> => {
    let base = await getHeaderText()
    base += `Olá ${senderName} gostaria de me inscrever para uma vaga!`
    base += "\n estou deixando o meu curriculo";
    return base
}

const getHeaderText = async (): Promise<string> => {
    return "Email para você"
}

export default getBaseEmail