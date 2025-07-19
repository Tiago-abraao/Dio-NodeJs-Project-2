import * as cartService from "./services/cart.js";
import  { createItem } from "./services/item.js";
import { createItemDiscount } from "./services/item.js";
 


const myCart = [];
const item1Discount = await createItemDiscount("boneco", 10.99, 1);
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels la,borghini", 39.99, 1);


await cartService.addItem(myCart, item1Discount)
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);


await cartService.displaycart(myCart);




await cartService.calculateTotal(myCart);