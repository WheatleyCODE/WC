import React from 'react';
import PropTypes from 'prop-types'
import s from './MarketCatalogBlock.module.scss';
import { renderGoods } from '../InterstYou/InterstYou'

function MarketCatalogBlock({ Goods, OpenModal }) {

  return (
    <div className={s.MarketCatalogBlockMain}>
      <div className={s.goodsStack}>
        {renderGoods(Goods, OpenModal)}
      </div>
    </div>
  );
}

MarketCatalogBlock.propTypes = {
  Goods: PropTypes.array,
  DeleteImg: PropTypes.func,
}

MarketCatalogBlock.defaultProps = {
  Goods: [],
  DeleteImg: () => {},
}
export default MarketCatalogBlock
