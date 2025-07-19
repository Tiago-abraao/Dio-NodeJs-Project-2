async function createItem(name, price, quantity) {
    return {  
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}


async function createItemDiscount(name, price, quantity) {
  return {

    name,
    price,
    quantity,
    subtotal: () => (price * quantity) * 0.90,
  }
}

export { createItem, createItemDiscount }