import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import s from './Goods.module.scss';
import Offers from './Offers/Offers'
import MarketCatalogBlock from './MarketCatalogBlock/MarketCatalogBlock'
import Advantage from './Advantage/Advantage'
import InterstYou from './InterstYou/InterstYou'
import { deleteImgGActionCreator, AddMoreGoodsActionCreator } from '../../../Redux/MarketPage_Goods_Reducer'

function Goods(props) {
  const {
    InterestGoods,
    Goods1,
    Goods2,
    DeleteImg,
  } = props

  return (
    <div className={s.GoodsMain}>
      <Offers />
      <Advantage />
      <InterstYou DeleteImg={DeleteImg} InterestGoods={InterestGoods} />
      <MarketCatalogBlock DeleteImg={DeleteImg} Goods={Goods1} />
      <MarketCatalogBlock DeleteImg={DeleteImg} Goods={Goods2} />
      <div className={s.loader}><h4>Подгрузить ещё</h4></div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    InterestGoods: state.marketPageGoodsData.InterestGoods,
    Goods1: state.marketPageGoodsData.Goods1,
    Goods2: state.marketPageGoodsData.Goods2,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    DeleteImg: (ojc, id) => dispatch(deleteImgGActionCreator(ojc, id)),
    AddMoreGoods: () => dispatch(AddMoreGoodsActionCreator()),
  }
}
Goods.propTypes = {
  InterestGoods: PropTypes.array,
  Goods1: PropTypes.array,
  Goods2: PropTypes.array,
  DeleteImg: PropTypes.func,
}

Goods.defaultProps = {
  InterestGoods: [],
  Goods1: [],
  Goods2: [],
  DeleteImg: () => {},
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)
