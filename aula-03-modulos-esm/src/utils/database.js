const databaseType = {
    userType: "admin",
    type: "datalocal"
}

async function connectToDatabase(dataname) { 
    console.log(`Conectando ao banco ${dataname} `)
}

async function disconnectToDatabase(dataname) {
    console.log(`Disconectando do banco ${dataname}`)
}


export {connectToDatabase,disconnectToDatabase,databaseType}