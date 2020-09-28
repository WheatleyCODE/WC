import React from 'react';
import PropTypes from 'prop-types'
import s from './GamesPage.module.scss';

const GamesPage = (props) => {
  console.log(props.history)
  const OnGameClik = () => {
    props.history.push('/daggers')
  }
  return (
    <div className={s.gamesMain}>
      <div className={s.games}>Games</div>
      <div className={s.gamesCatalog}>
        <h2>Каталог игр</h2>
        <hr />
        <div className={s.gamesLine}>
          <div onClick={OnGameClik} className={s.gameContainer}>
            <img alt="Картинка" src="https://all-t-shirts.ru/goods_images/ru111798II000ecd96d29fd5e107451acd6cd40df8a86.jpg" />
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
GamesPage.propTypes = {
  history: PropTypes.object,
}

GamesPage.defaultProps = {
  history: 0,
}
export default GamesPage;
