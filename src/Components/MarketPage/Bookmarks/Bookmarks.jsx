import React from 'react'
import './Bookmarks.scss'
import { connect } from 'react-redux'
import MarketCatalogBlock from '../Goods/MarketCatalogBlock/MarketCatalogBlock'

const Bookmarks = ({ GoodsData }) => {

  const favoriteGoods = []
  Object.values(GoodsData).forEach((elem) => {
    elem.forEach((obj) => {
      if (obj.isFavorite === true) {
        favoriteGoods.push(obj)
      }
    })
  })

  console.log(favoriteGoods)
  return (
    <div className="bookmarksMain">
      <div className="favoriteBlock">
        {favoriteGoods.length > 0 ? <MarketCatalogBlock Goods={favoriteGoods} /> : <h4>У вас нет закладок</h4>}
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    GoodsData: state.marketPageGoodsData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)
