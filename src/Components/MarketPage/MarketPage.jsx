import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import s from './MarketPage.module.scss';
import Search from './SearchPanel/SearchPanel'
import Menu from './Menu/Menu'
import Goods from './Goods/Goods'
import Bookmarks from './Bookmarks/Bookmarks'
import Orders from './Orders/Orders'
import MyGoods from './MyGoods/MyGoods'

function MarketPage() {
  return (
    <div className={s.marketPageMain}>
      <Search />
      <Menu />
      <div className={s.resultColumn}>
        <Switch>
          <Route exact path="/market/my_orders" render={() => <Orders />} />
          <Route exact path="/market/favorite" render={() => <Bookmarks />} />
          <Route exact path="/market/my_products" render={() => <MyGoods />} />
          <Route path="/market" component={Goods} />
          <Redirect to="/market" />
        </Switch>
      </div>
    </div>
  );
}
export default MarketPage
