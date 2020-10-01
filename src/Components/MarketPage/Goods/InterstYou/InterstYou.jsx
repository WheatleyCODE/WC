import React from 'react';
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom';
import s from './InterstYou.module.scss';

export function renderGoods(InterestGoods, OpenModal) {

  // const [favorit, setFavorite] = useState(false)

  // const style = favorit ? { color: 'red' } : { color: 'black' }

  // function addFavoriteHandler() {
  //   setFavorite((prev)=> !prev)
  // }

  const goods = InterestGoods.map((obj, index) => {
    return (
      <div key={obj.id} className={s.good}>
        <NavLink to={`/market/${obj.name}`}>
          <img alt="Товар" src={obj.img} />
        </NavLink>
        <span><NavLink to={`/market/${obj.name}`}>{obj.name}</NavLink></span>
        <span className={s.price}>{obj.price}</span>
        <span className={s.brend}><NavLink to={`/market-${obj.brand}`}>{obj.brand}</NavLink></span>
        <span className={s.favorite}><i className="fa fa-star-o" aria-hidden="true" /></span>
        {/* <span onClick={addFavoriteHandler} className={s.favorite}><i style={style} className="fa fa-star-o" aria-hidden="true" /></span> */}
        <Route exact path={`/market/${obj.name}`} render={() => { OpenModal(obj) }} />
      </div>
    )
  })
  return goods
}

function InterstYou({ InterestGoods, OpenModal }) {
  return (
    <div className={s.InterstYouMain}>
      <div className={s.goodsStack}>
        {renderGoods(InterestGoods, OpenModal)}
      </div>
    </div>
  );
}

InterstYou.propTypes = {
  InterestGoods: PropTypes.array,
  OpenModal: PropTypes.func,
}

InterstYou.defaultProps = {
  InterestGoods: [],
  DeleteImg: () => {},
}

export default InterstYou
