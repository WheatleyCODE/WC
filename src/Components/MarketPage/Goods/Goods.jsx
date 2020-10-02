import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import s from './Goods.module.scss';
import Offers from './Offers/Offers'
import MarketCatalogBlock from './MarketCatalogBlock/MarketCatalogBlock'
import Advantage from './Advantage/Advantage'
import InterstYou from './InterstYou/InterstYou'
import { AddMoreGoodsActionCreator } from '../../../Redux/MarketPage_Goods_Reducer'
import ModalGood from './ModalGood/ModalGood'

function Goods(props) {
  const [moreGoods, setMoreGoods] = useState([])
  const [open, setOpen] = useState(false)
  const [contentModal, setcontentModal] = useState({})
  const {
    InterestGoods,
    Goods1,
    Goods2,
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
    axios.get('https://reactfire-9a16f.firebaseio.com/goods.json')
      .then((response) => {
        const data = Object.values(response.data)
        setMoreGoods((prev) => [...prev,
          <MarketCatalogBlock key="123" OpenModal={OpenModal} Goods={data[0]} />,
        ])
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className={s.GoodsMain}>
      <ModalGood content={contentModal} closeHendler={CloseModal} open={open} />
      <Offers />
      <Advantage />
      <InterstYou OpenModal={OpenModal} InterestGoods={InterestGoods} />
      <MarketCatalogBlock OpenModal={OpenModal} Goods={Goods1} />
      <MarketCatalogBlock OpenModal={OpenModal} Goods={Goods2} />
      {moreGoods}
      <div onClick={AddMoreGoods} className={s.loader}><h4>Подгрузить ещё</h4></div>
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
    AddMoreGoods: () => dispatch(AddMoreGoodsActionCreator()),
  }
}
Goods.propTypes = {
  InterestGoods: PropTypes.array,
  Goods1: PropTypes.array,
  Goods2: PropTypes.array,
}

Goods.defaultProps = {
  InterestGoods: [],
  Goods1: [],
  Goods2: [],
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)
