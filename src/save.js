import React from 'react'

// 0 ) Подключаем   встроенную в Redux  функцию connect, которая позволит нам присоединяться к store и   брать  оттуда нужную часть информации
import { connect } from 'react-redux'

// 1 ) Подключаем экшен (экшен-криейтор addToCart)       и         КОМПОНЕНТ , которому будем передавать данные через пропсы
import { addToCart } from '../actions/magazineActions'
// import { Page } from '../components/Page'



class PageContainer extends React.Component {
  render() {
    // 3 ) Так как теперь в props-ах PageContainer-а   стал доступен store, мы можем взять из него нужные нам данные...
    const { page, getPhotos } = this.props

    return (
      <Page
        photos={page.photos}   // 4 ) ...и передать их компоненту Page  через пропсы
        year={page.year}
        isFetching={page.isFetching}
        error={page.error}
        getPhotos={getPhotos}  // Экшн-креейтор
      />
    )
  }
}



// 2 )
// Этот метод нужен для того, чтобы взять из store какие-то данные и передать их в качестве пропсов КОНТЕЙНЕРУ PageContainerge
// То есть здесь мы берём весь store и отрезаем от него лишь нужный нам кусочек
const mapStateToProps = store => {
  return {
    page: store.page, // store.page - это состояние  state, которое  мы   создавали  в редюсере page (см. папку reducers и файлы page.js и index.js)
  }
}


// ...а этот метод нужен для того, чтобы взять экшен-креатор     getPhotos     и передать его  через пропсы   КОНТЕЙНЕРУ PageContainer
const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

// Контейнер PageContainer присоединяется к store  при помощи connect, берёт оттуда нужные данные и прокидывает их КОНТЕЙНЕРУ PageContainerge через props
//  (при помощи mapStateToPropsи mapDispatchToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
