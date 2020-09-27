import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import s from './InterstYou.module.scss';

export function renderGoods(InterestGoods, DeleteImg) {
  const goods = InterestGoods.map((obj, index) => {
    return (
      <div key={obj.id} className={s.good}>
        <NavLink to={`/market/${obj.name}`}>
          <img alt="Товар" src={obj.img} />
        </NavLink>
        <span><NavLink to={`/market/${obj.name}`}>{obj.name}</NavLink></span>
        <span className={s.price}>{obj.price}</span>
        <span className={s.brend}><NavLink to={`/market/brand/${obj.brand}`}>{obj.brand}</NavLink></span>
        <span onClick={() => { DeleteImg(obj, obj.id) }} className={s.deleteImg}><i className="fa fa-times" aria-hidden="true"></i></span>
      </div>
    )
  })
  return goods
}

function InterstYou({ InterestGoods, DeleteImg }) {
  return (
    <div className={s.InterstYouMain}>
      <div className={s.goodsStack}>
        {renderGoods(InterestGoods, DeleteImg)}
      </div>
    </div>
  );
}

InterstYou.propTypes = {
  InterestGoods: PropTypes.array,
  DeleteImg: PropTypes.func,
}

InterstYou.defaultProps = {
  InterestGoods: [],
  DeleteImg: () => {},
}

export default InterstYou
