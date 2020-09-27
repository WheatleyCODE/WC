import React from 'react';
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
        <Goods />
        {/* <Orders />
        <Bookmarks />
        <Mygoods /> */}
      </div>
    </div>
  );
}
export default MarketPage
