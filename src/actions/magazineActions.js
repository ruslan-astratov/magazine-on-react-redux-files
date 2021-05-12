// Экшен, добавляющий товар в корзину
export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart(id) {

  return {
    type: ADD_TO_CART,
    payload: id,
  }

}




// Экшен, который УДАЛЯЕТ конкретный товар из корзины
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export function deleteFromCart(id) {

  return {
    type: DELETE_FROM_CART,
    payload: id,
  }

}





// Экшен, который   УДАЛЯЕТ  ВСЕ   ТОВАРЫ   из корзины
export const DELETE_ALL_ITEMS_FROM_CART = 'DELETE_ALL_ITEMS_FROM_CART'

export function deleteAllItemsFromCart() {

  return {
    type: DELETE_ALL_ITEMS_FROM_CART
  }

}



// Экшен, который   при клике   на "-"    уменьшает количество товара или удаляет товар вовсе (если он в одном экземпляре)
export const DELETE_OR_DECREASE_ITEM_FROM_CART = 'DELETE_OR_DECREASE_ITEM_FROM_CART'

export function deleteOrDecreaseItemFromCart(id) {

  return {
    type: DELETE_OR_DECREASE_ITEM_FROM_CART,
    payload: id
  }

}




// Экшен, который   при клике   на "+"    увеличивает  количество конкретного  товара в корзине 
export const INCREASE_ITEM_FROM_CART = 'INCREASE_ITEM_FROM_CART'

export function increaseItemInCart(id) {

  return {
    type: INCREASE_ITEM_FROM_CART,
    payload: id
  }

}

