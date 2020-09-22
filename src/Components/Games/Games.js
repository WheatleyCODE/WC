import React from 'react';
import s from './Games.module.scss';

class Games extends React.Component {
  OnGameClik = () => {
    this.props.history.push('/daggers')
 }
  render() {
    console.log(this.props)
    return (
      <div className={s.gamesMain}>
        <div className={s.games}>Games</div>
        <div className={s.gamesCatalog}>
          <h2>Каталог игр</h2>
          <hr></hr>
          <div className={s.gamesLine}>
            <div onClick={this.OnGameClik} className={s.gameContainer}>
              <img alt='' src='https://all-t-shirts.ru/goods_images/ru111798II000ecd96d29fd5e107451acd6cd40df8a86.jpg'></img>
              <span>Крестики Нолики</span>
            </div>
            <div className={s.gameContainer}>Игра</div>
            <div className={s.gameContainer}>Игра</div>
            <div className={s.gameContainer}>Игра</div>
            <div className={s.gameContainer}>Игра</div>
          </div>
        </div>
      </div>
    );
  
  }
  
}
export default Games;