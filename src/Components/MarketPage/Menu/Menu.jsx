import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Menu.module.scss';

function Menu() {
  return (
    <div className={s.MenuMain}>
      <nav>
        <ul className={s.ulMain}>
          <li><NavLink exact activeClassName={s.active} to="/market">Товары</NavLink></li>
          <li><NavLink exact activeClassName={s.active} to="/market/my_orders">Заказы</NavLink></li>
          <li><NavLink exact activeClassName={s.active} to="/market/favorite">Закладка</NavLink></li>
          <li><NavLink exact activeClassName={s.active} to="/market/my_products">Мои товары</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu
