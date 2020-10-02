import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import s from './MarketCatalogBlock.module.scss';
import { renderGoods } from '../InterstYou/InterstYou'
import { AddFavoriteGoodActionCreator } from '../../../../Redux/MarketPage_Goods_Reducer';

function MarketCatalogBlock({ Goods, OpenModal, AddFavorite}) {
  return (
    <div className={s.MarketCatalogBlockMain}>
      <div className={s.goodsStack}>
        {renderGoods(Goods, OpenModal, AddFavorite)}
      </div>
    </div>
  );
}

MarketCatalogBlock.propTypes = {
  Goods: PropTypes.array,
  OpenModal: PropTypes.func,
  AddFavorite: PropTypes.func,
}

MarketCatalogBlock.defaultProps = {
  Goods: [],
  OpenModal: () => {},
  AddFavorite: () => {},
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    AddFavorite: (obj) => dispatch(AddFavoriteGoodActionCreator(obj)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MarketCatalogBlock)
