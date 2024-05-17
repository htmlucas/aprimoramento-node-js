//acoes do carrinho
// adicionar item doc arrinho
// deletar item do carrinho
// remover um item
// calcular o total


async function addItem(userCart, item){
    userCart.push(item)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index,1);
    }

    console.log(userCart)
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(indexFound == -1){
        console.log("Item não encontrado")
        return ;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return ;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1)
        return ;
    }
}

async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(),0)
}

async function displayCart(userCart){
    console.log("\n Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} x | Subtotal ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart
}
