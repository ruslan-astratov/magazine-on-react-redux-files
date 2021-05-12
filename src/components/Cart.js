import React, { Component } from "react";
import "../styles.css";

// 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
import { connect } from 'react-redux'

// 1 ) Подключаем  экшен-криейтор deleteFromCart,     удаляющий конкретный   товар из корзины 
import { deleteAllItemsFromCart } from '../actions/magazineActions'



import CartItem from './CartItem';







class Cart extends Component {
  // state = {
  //   cartGoods: []
  // }


  getTotal() {
    // Из пропсов получает массив
    const { cartGoods } = this.props.magazine;

    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }



  render() {
    const { cartGoods } = this.props.magazine;

    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>


        { cartGoods.length > 0 ?


          <ul className="cart__list">

            {cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
            
          </ul>


          :
          <p className="cart__note">Nothing in the cart now</p>
        }

        { cartGoods.length > 0 ? <p className="cart__total">Total: {this.getTotal()}.00$</p> : null }
        
        

        { cartGoods.length > 0  ? <button onClick={this.props.deleteAllItemsFromCart}  className="clear-button">Clear curt</button> : null}

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


// ...а этот метод нужен для того, чтобы взять экшен-креатор     getPhotos     и передать его  через пропсы   КОНТЕЙНЕРУ PageContainer
const mapDispatchToProps = dispatch => {
  return {
    deleteAllItemsFromCart: () => dispatch(deleteAllItemsFromCart()),
  }
}




// Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
//  (при помощи mapStateToProps и mapDispatchToProps)
export default connect(
  mapStateToProps, mapDispatchToProps
)(Cart)

// Мы указали пустую функцию вместо mapDispatchToProps, чтобы Редакс не пропихивал в пропсы компонента Cart  свою функцию






// import React, { Component } from "react";
// import "../styles.css";

// // 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
// import { connect } from 'react-redux'

// // 1 ) Подключаем  экшен-криейтор deleteFromCart,     удаляющий конкретный   товар из корзины 
// import { deleteAllItemsFromCart } from '../actions/magazineActions'



// import CartItem from './CartItem';







// class Cart extends Component {
//   // state = {
//   //   cartGoods: []
//   // }


//   getTotal() {
//     // Из пропсов получает массив
//     const { cartGoods } = this.props.magazine;

//     return cartGoods.reduce((acc, item) => acc + item.price, 0);
//   }



//   render() {
//     const { cartGoods } = this.props.magazine;

//     return (
//       <div className="cart">
//         <h2 className="cart__title" >Shopping Cart</h2>


//         { cartGoods.length > 0 ?


//           <ul className="cart__list">

//             {cartGoods.map((item) => (
//               <li className="cart__list-item" key={item.id}>
//                 <CartItem {...item} />
//               </li>
//             ))}
            
//           </ul>


//         :
//           <p className="cart__note">Nothing in the cart now</p>
//         }
        
//         <p className="cart__total">Total: {this.getTotal()}.00$</p>

//         { cartGoods.length > 0  ? <button onClick={this.props.deleteAllItemsFromCart}  className="clear-button">Clear curt</button> : null}

//       </div>
//     );
//   }
// }



// // 2 )  Этот метод нужен для того, чтобы взять из store какие-то данные и передать их в качестве пропсов компоненту 
// // То есть здесь мы берём весь store и отрезаем от него лишь нужный нам кусочек
// const mapStateToProps = store => {
//   return {
//     magazine: store.magazine // store.magazine - это состояние  state, которое  мы   создавали  в редюсере page (см. папку reducers и файлы page.js и index.js)
//   }
// }


// // ...а этот метод нужен для того, чтобы взять экшен-креатор     getPhotos     и передать его  через пропсы   КОНТЕЙНЕРУ PageContainer
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteAllItemsFromCart: () => dispatch(deleteAllItemsFromCart()),
//   }
// }




// // Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
// //  (при помощи mapStateToProps и mapDispatchToProps)
// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(Cart)

// // Мы указали пустую функцию вместо mapDispatchToProps, чтобы Редакс не пропихивал в пропсы компонента Cart  свою функцию




