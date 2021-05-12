import React, { Component } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';

// 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
import { connect } from 'react-redux'

class Goods extends Component {
  // state = {
  //   goods: [
  //     {
  //         id: 0,
  //         title: "Logitech C920 Hd Pro Webcam",
  //         description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
  //         price: 120
  //     },
  //     {
  //         id: 1,
  //         title: "Logitech USB Headset H390 with Noise Cancelling Mic",
  //         description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
  //         price: 50
  //     },
  //     {
  //         id: 2,
  //         title: "Anker PowerCore 10000 Portable Charger",
  //         description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
  //         price: 150
  //     }
  // ]
  // }


  render() {


    const {goods} = this.props.magazine

    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

// export default Goods;

// 2 )  Этот метод нужен для того, чтобы взять из store какие-то данные и передать их в качестве пропсов компоненту 
// То есть здесь мы берём весь store и отрезаем от него лишь нужный нам кусочек
const mapStateToProps = store => {
  return {
    magazine: store.magazine // store.magazine - это состояние  state, которое  мы   создавали  в редюсере page (см. папку reducers и файлы page.js и index.js)
  }
}





// Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
//  (при помощи mapStateToProps и mapDispatchToProps)
export default connect(
  mapStateToProps, function() {}
)(Goods)











// import React, { Component } from "react";
// import "../styles.css";

// import GoodsItem from './GoodsItem';

// class Goods extends Component {
//   state = {
//     goods: [
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
//   ]
//   }

  
//   render() {
//     return (
//       <div className="goods">
//         <h2 className="goods__title">Video Games</h2>
//         {this.state.goods.map(item => (
//           <ul className="goods__list">
//             <li className="goods__list-item" key={item.id}>
//               <GoodsItem {...item} />
//             </li>
//           </ul>
//         ))}
//       </div>
//     );
//   }
// }

// export default Goods;
