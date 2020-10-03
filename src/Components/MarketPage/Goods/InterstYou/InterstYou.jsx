import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom';
import s from './InterstYou.module.scss';
import { AddFavoriteGoodActionCreator } from 'Redux/actions';

export function renderGoods(InterestGoods, OpenModal, AddFavorite) {
  const goods = InterestGoods.map((obj) => {
    const favorite = obj.isFavorite
    const style = favorite ? { color: 'rgb(240, 191, 0)' } : { color: 'black' }

    function addFavoriteHandler() {
      AddFavorite(obj)
    }

    return (
      <div key={obj.id} className={s.good}>
        <NavLink to={`/market/${obj.name}`}>
          <img alt="Товар" src={obj.img} />
        </NavLink>
        <span><NavLink to={`/market/${obj.name}`}>{obj.name}</NavLink></span>
        <span className={s.price}>{obj.price}</span>
        <span className={s.brend}><NavLink to={`/market-${obj.brand}`}>{obj.brand}</NavLink></span>
        <span className={s.favorite}><i className="fa fa-star-o" aria-hidden="true" /></span>
        <span onClick={addFavoriteHandler} className={s.favorite}><i style={style} className="fa fa-star-o" aria-hidden="true" /></span>
        <Route exact path={`/market/${obj.name}`} render={() => { OpenModal(obj) }} />
      </div>
    )
  })

  return goods
}

function InterstYou({ InterestGoods, OpenModal, AddFavorite}) {
  return (
    <div className={s.InterstYouMain}>
      <div className={s.goodsStack}>
        {renderGoods(InterestGoods, OpenModal, AddFavorite)}
      </div>
    </div>
  );
}

InterstYou.propTypes = {
  InterestGoods: PropTypes.array,
  OpenModal: PropTypes.func,
  AddFavorite: PropTypes.func,
}

InterstYou.defaultProps = {
  InterestGoods: [],
  AddFavorite: () => {},
  OpenModal: () => {},
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    AddFavorite: (obj) => dispatch(AddFavoriteGoodActionCreator(obj)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InterstYou)
