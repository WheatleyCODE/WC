import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import s from './Goods.module.scss';
import Offers from './Offers/Offers'
import MarketCatalogBlock from './MarketCatalogBlock/MarketCatalogBlock'
import Advantage from './Advantage/Advantage'
import { fetchGoodsActionCreator } from '../../../Redux/MarketPage_Goods_Reducer'
import ModalGood from './ModalGood/ModalGood'

function Goods(props) {
  const [open, setOpen] = useState(false)
  const [contentModal, setcontentModal] = useState({})
  const {
    AddMoreGoodsRedux,
    GoodsData,
  } = props

  function OpenModal(obj) {
    setOpen(true)
    setcontentModal(obj)
  }
  function CloseModal() {
    setOpen(false)
  }

  useEffect(() => {
    // Тут можно запросить другие карточки
  }, [])

  const AddMoreGoods = () => {
    AddMoreGoodsRedux()
  }

  const MarketBlocks = Object.values(GoodsData).map((elem, index) => {
    return <MarketCatalogBlock key={index} OpenModal={OpenModal} Goods={elem} />
  })

  console.log(MarketBlocks)

  return (
    <div className={s.GoodsMain}>
      <ModalGood content={contentModal} closeHendler={CloseModal} open={open} />
      <Offers />
      <Advantage />
      {MarketBlocks}
      <div onClick={AddMoreGoods} className={s.loader}><h4>Подгрузить ещё</h4></div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    InterestGoods: state.marketPageGoodsData.InterestGoods,
    Goods1: state.marketPageGoodsData.Goods1,
    Goods2: state.marketPageGoodsData.Goods2,
    GoodsData: state.marketPageGoodsData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    AddMoreGoodsRedux: () => dispatch(fetchGoodsActionCreator()),
  }
}
Goods.propTypes = {
  AddMoreGoodsRedux: PropTypes.func,
  GoodsData: PropTypes.object,
}

Goods.defaultProps = {
  AddMoreGoodsRedux: () => {},
  GoodsData: {},
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)
