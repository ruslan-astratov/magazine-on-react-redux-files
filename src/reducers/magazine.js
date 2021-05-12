//                                                                   Редюсер

// Импортируем ЭКШЕНЫ
import {ADD_TO_CART} from "../actions/magazineActions"

import {DELETE_FROM_CART} from "../actions/magazineActions"

import {DELETE_ALL_ITEMS_FROM_CART} from "../actions/magazineActions"

import {DELETE_OR_DECREASE_ITEM_FROM_CART} from "../actions/magazineActions"

import {INCREASE_ITEM_FROM_CART} from "../actions/magazineActions"










// Наш изначальный стейт
const initialState = {

  // Все действия с товарами будут находиться в одном редюсере 

  // СЛЕВА Список всех имеющихся в магазине  товаров  
  goods: [
      {
          id: 0,
          title: "Logitech C920 Hd Pro Webcam",
          description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
          price: 120
      },
      {
          id: 1,
          title: "Logitech USB Headset H390 with Noise Cancelling Mic",
          description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
          price: 50
      },
      {
          id: 2,
          title: "Anker PowerCore 10000 Portable Charger",
          description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
          price: 150
      }
  ],

  // СПРАВА Список всех  товаров, ДОБАВЛЕННЫХ нами в КОРЗИНУ.   По умолчанию - он пустой
  cartGoods: []

}



// РЕДЮСЕР 
export function magazineReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART:

      // Теперь по переданному id ищем в массиве  со всеми имеющимися товарами         товар (объект товара), который хотим добавить в корзину
      let choosenItem = state.goods.find( item => item.id == action.payload )

      // Цена выбранного товара
      let choosenItemPrice = choosenItem.price


      // Теперь в массиве  goods (корзина)    ищем товар с этим же id. Если мы находим, то УВЕЛИЧИВАЕМ значение цены 
      let itemInCart = state.cartGoods.find( item => item.id == action.payload )

      let indexItemInCart = state.cartGoods.findIndex( item => item.id == action.payload )


      // Если в корзине УЖЕ БЫЛ такой товар, тогда мы просто УВЕЛИЧИВАЕМ его сумму
      if(itemInCart !== undefined) {

        console.log(choosenItem)

        // Копия массива, содержащего товары в корзине
        let copyArr = state.cartGoods.slice()

        copyArr = copyArr.map( item => {
          
          if(item.id != action.payload) {
            return {
              ...item,
              choosenItemPrice: choosenItemPrice
            }
          }

          else {
            return {
              ...item,
              choosenItemPrice: choosenItemPrice,
              price: item.price + choosenItemPrice
            }
          }

        } )
        

        return { ...state,  cartGoods: copyArr }
      }

      choosenItem.choosenItemPrice = choosenItemPrice

      // Если этот товар добавляем ВПЕРВЫЕ, то
      return { ...state, choosenItemPrice: choosenItemPrice, cartGoods: state.cartGoods.concat(choosenItem) }

    




    // Экшен, который при клике на "+"  увеличивает количество товара в корзине 
    case INCREASE_ITEM_FROM_CART:

      // Ищем по id нужный нам товар и увеличиваем его совокупную стоимость price   на значение choosenItemPrice (стоимость 1 товара)
      let newArr = state.cartGoods.map( obj => {

        if(obj.id == action.payload) {

          return {

            ...obj, 
            price: obj.price + obj.choosenItemPrice

          }

        }

        else {
          return obj
        }

      } )

      return { ...state, cartGoods: newArr }








    // Экшен, который   при клике   на "-"    уменьшает количество товара или удаляет товар вовсе (если он был в одном экземпляре)
    case DELETE_OR_DECREASE_ITEM_FROM_CART:

      // Если ОБЩАЯ стоимость товара (price) равнялась цене ОДНОГО товара (choosenItemPrice), значит, у нас всего один товар. Значит, удаляем его
      // Ищем товар по id.  В targetItem будет желаемый объект
      let targetItem = state.cartGoods.find( item => {

        return item.id == action.payload

      } )

      // Проверяем - совпадают ли в этом объекте значения свойств price и choosenItemPrice. Если да, то полностью удаляем товар из корзины
      if(targetItem.price == targetItem.choosenItemPrice ) {
        // alert("Удаляем товар из корзины, так как он всего один")


        // Новый массив уже БЕЗ удалённого элемента 
        let filteredArray = state.cartGoods.filter( obj => {
          return obj.id !== action.payload
        } )

        return { ...state, cartGoods: filteredArray }
      }


      // В противном же случае мы должны уменьшить значение price  на единицу стоимости одного товара --> то есть на единицу choosenItemPrice
      targetItem.price = targetItem.price - targetItem.choosenItemPrice

      // Переберём массив cartGoods , по id найдём объект и поменяем его на targetItem
      let changedArray = state.cartGoods.map( obj => {

        if(obj.id == action.payload) {

          return {
            ...obj,
            ...targetItem
          }

        } 

        else {
          return obj
        }

      } )
      

      return { ...state, cartGoods: changedArray }














    // Когда мы нажимаем на "Х", желая удалить полностью какой-то конкретный товар
    case DELETE_FROM_CART:
      // Новый массив уже БЕЗ удалённого элемента 
      let newArrWithoutDeletedElem = state.cartGoods.filter( obj => {
        return obj.id !== action.payload
      } )

      return { ...state, cartGoods: newArrWithoutDeletedElem }









    // Если хотим удалить вообще ВСЕ товары из корзины
    case DELETE_ALL_ITEMS_FROM_CART:
      // Новый массив - полностью пустой
      let emptyArray = []

      return { ...state, cartGoods: emptyArray }
  

    default:
      return state
  }
}















// // РЕДЮСЕР 
// export function magazineReducer(state = initialState, action) {
//   switch (action.type) {

//     case ADD_TO_CART:

//       // Делаем копию массива со всеми имеющимися товарами
//       let newGoods = state.goods.slice()


//       // Теперь по переданному id ищем в этом массиве товар (объект товара), который хотим добавить в корзину
//       let choosenItem = newGoods.find( item => item.id == action.payload )

//       // Цена выбранного товара
//       let choosenItemPrice = choosenItem.price


//       // Теперь в массиве  goods (корзина)    ищем товар с этим же id. Если мы находим, то УВЕЛИЧИВАЕМ значение цены 
//       let itemInCart = state.cartGoods.find( item => item.id == action.payload )

//       let indexItemInCart = state.cartGoods.findIndex( item => item.id == action.payload )


//       // Если в корзине уже был такой товар, тогда мы УВЕЛИЧИВАЕМ сумму
//       if(itemInCart !== undefined) {

//         console.log("Такой товар уже есть в корзине. Увеличиваем цену, учитывая добавленный товар")


//         // Копия массива, содержащего товары в корзине
//         let copyArr = state.cartGoods.slice()

//         copyArr[indexItemInCart].price = copyArr[indexItemInCart].price + choosenItemPrice

//         return { ...state,  cartGoods: copyArr }
//       }


//       // Если этот товар добавляем ВПЕРВЫЕ, то
//       return { ...state, cartGoods: state.cartGoods.concat(choosenItem) }


//     default:
//       return state
//   }
// }




































































// // Импортируем ЭКШЕНЫ
// import {ADD_TO_CART} from "../actions/magazineActions"


// // Наш изначальный стейт
// const initialState = {

//   // СЛЕВА Список всех имеющихся в магазине  товаров  
//   goods: [
//       {
//           id: 0,
//           title: "Logitech C920 Hd Pro Webcam",
//           description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
//           price: 120
//       },
//       {
//           id: 1,
//           title: "Logitech USB Headset H390 with Noise Cancelling Mic",
//           description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
//           price: 50
//       },
//       {
//           id: 2,
//           title: "Anker PowerCore 10000 Portable Charger",
//           description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
//           price: 150
//       }
//   ],

//   // СПРАВА Список всех  товаров, ДОБАВЛЕННЫХ нами в КОРЗИНУ.   По умолчанию - он пустой
//   cartGoods: []

// }



// // РЕДЮСЕР 
// export function magazineReducer(state = initialState, action) {
//   switch (action.type) {

//     case ADD_TO_CART:

//       // Делаем копию массива со всеми имеющимися товарами
//       let newGoods = state.goods.slice()

//       // Теперь по переданному id ищем в этом массиве товар (объект товара), который хотим добавить в корзину
//       let choosenItem = newGoods.find( item => item.id == action.payload )

//       return { ...state, cartGoods: state.cartGoods.concat(choosenItem) }


//     default:
//       return state
//   }
// }
