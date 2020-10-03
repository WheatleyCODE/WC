import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import s from './MarketPage.module.scss';
import Search from './SearchPanel/SearchPanel'
import Menu from './Menu/Menu'
import Goods from './Goods/Goods'

function MarketPage() {
  return (
    <div className={s.marketPageMain}>
      <Search />
      <Menu />
      <div className={s.resultColumn}>
        <Switch>
          <Route exact path="/market/my_orders" render={() => <div>my_orders</div>} />
          <Route exact path="/market/favorite" render={() => <div>favorite</div>} />
          <Route exact path="/market/my_products" render={() => <div>my_products</div>} />
          <Route path="/market" component={Goods} />
          <Redirect to="/market" />
        </Switch>
        {/* <Orders />
        <Bookmarks />
        <Mygoods /> */}
      </div>
    </div>
  );
}
export default MarketPage
