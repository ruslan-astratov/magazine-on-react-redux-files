import React, { Component } from "react";
import "../styles.css";

// 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
import { connect } from 'react-redux'

// 1 ) Подключаем  экшен-криейторы deleteFromCart,     удаляющий конкретный   товар из корзины 
import { deleteFromCart } from '../actions/magazineActions'

import { deleteOrDecreaseItemFromCart } from '../actions/magazineActions'

import { increaseItemInCart } from '../actions/magazineActions'






// Карточка   конкретного,  добавленного в корзину товара 
class CartItem extends Component {


  render() {
    
    const { title, price, id, deleteFromCart, deleteOrDecreaseItemFromCart , increaseItemInCart ,choosenItemPrice  } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <div className="wrapper-for-increase-decrease">
          <button onClick={ ()=> increaseItemInCart(id) } className="increase">+</button>
          <button onClick={ ()=> deleteOrDecreaseItemFromCart(id) } className="decrease">-</button>
        </div>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={ ()=> deleteFromCart(id) }>X</button>
      </div>
    );
  }
}




// 2 )  Этот метод нужен для того, чтобы взять из store какие-то данные и передать их в качестве пропсов компоненту 
// То есть здесь мы берём весь store и отрезаем от него лишь нужный нам кусочек
const mapStateToProps = store => {
  return {
    magazine: store.magazine // store.magazine - это состояние  state, которое  мы   создавали  в редюсере page (см. папку reducers и файлы page.js и index.js)
  }
}


// 2 ) этот метод нужен для того, чтобы взять экшен-креатор     deleteFromCart     и передать его  через пропсы    компоненту  CartItem
const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: id => dispatch(deleteFromCart(id)),
    deleteOrDecreaseItemFromCart: id => dispatch(deleteOrDecreaseItemFromCart(id)),
    increaseItemInCart: id => dispatch(increaseItemInCart(id)),
  }
}

// Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
//  (при помощи mapStateToPropsи mapDispatchToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem)



































// import React, { Component } from "react";
// import "../styles.css";







// // Карточка добавленного в корзину товара 
// class CartItem extends Component {
//   render() {
//     const { title, price } = this.props;
//     return (
//       <div className="cart-item">
//         <p className="cart-item__title">{title}</p>
//         <p className="cart-item__price">{price}.00$</p>
//         <button>X</button>
//       </div>
//     );
//   }
// }

// export default CartItem;
