import React, { Component } from "react";
import "../styles.css";

// 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
import { connect } from 'react-redux'

// 1 ) Подключаем экшены (экшен-криейтор getPhotos)       
import { addToCart } from '../actions/magazineActions'




// Карточка товара в СПИСКЕ ВСЕХ ДОСТУПНЫХ ТОВАРОВ (список слева)
class GoodsItem extends Component {
  render() {
    const { title, description, price, id, addToCart } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        
        <button onClick={()=> addToCart(id)} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}




// ...а этот метод нужен для того, чтобы взять экшен-креатор     getPhotos     и передать его  через пропсы   КОНТЕЙНЕРУ PageContainer
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
  }
}




// Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
//  (при помощи mapStateToPropsи mapDispatchToProps)
export default connect(
  null, mapDispatchToProps
)(GoodsItem)















// import React, { Component } from "react";
// import "../styles.css";

// // Карточка товара в СПИСКЕ ВСЕХ ДОСТУПНЫХ ТОВАРОВ (список слева)
// class GoodsItem extends Component {
//   render() {
//     const { title, description, price, id } = this.props;

//     return (
//       <div className="goods-item" key={id}>
//         <h3 className="goods-item__title">{title}</h3>
//         <p className="goods-item__price">
//           <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
//           <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
//         </p>
//         <p className="goods-item__description">{description}</p>
        
//         <button className="goods-item__add-to-card">Add to cart</button>
//       </div>
//     );
//   }
// }

// export default GoodsItem;
