import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];

const item = await createItem('Sabonete',4.90,3)
const item2 = await createItem('Salgadinho',7.90,2)

await cartService.addItem(cart,item)
await cartService.addItem(cart,item2)
//await cartService.deleteItem(cart,item2.name)
//const total = await cartService.calculateTotal(cart)
await cartService.removeItem(cart,item2)
await cartService.displayCart(cart)