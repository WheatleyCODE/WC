import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './ModalGood.scss'

export default function ModalGood({open, closeHendler, content}) {

  const MainImg = useRef(null)

  const [like, setLike] = useState(false)
  const likeStyles = like ? { color: 'red', fontWeight: 'bold' } : {}

  const [favorite, setfavorite] = useState(false)
  const favoriteStyles = favorite ? { color: '#F0BF00', fontWeight: 'bold' } : {}

  function likefn() {
    setLike((prev) => !prev)
  }

  function favoritefn() {
    setfavorite((prev) => !prev)
  }

  function imgChangeHandler() {
    MainImg.current.src = 'https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg'
  }

  function imgChangeHandlerMain(url) {
    MainImg.current.src = url
  }

  if (open) {
    return (
      <>
      <NavLink to="/market"><div onClick={closeHendler} className="backDrop" /></NavLink>
        <div className="modalGoodMain">
          <div className="modalGoodContend">
            {/* {JSON.stringify(content)} */}
            <div className="modalBox">
              <div className="imageColumn">
                <div onClick={() => {imgChangeHandlerMain(content.img)}} className="imgItem">
                  <img src={content.img} alt="Картинка"/>
                </div>
                <div onClick={imgChangeHandler} className="imgItem">
                  <img src='https://lediiks.ru/wp-content/uploads/2019/04/39a3d819364039ea450f4a198e7db866.jpg' alt="Картинка"/>
                </div>
              </div>
              <div className="imageMain">
                <img ref={MainImg} src={content.img} alt="Картинка"/>
              </div>
              <div className="nameGoodColumn">
                <NavLink to={`/market-${content.brand}`}>
                  <div className="brandMarket">
                    <div className="brandLogo"><img src="https://media.licdn.com/dms/image/C4D0BAQGJo5k3OFgFtw/company-logo_200_200/0?e=2159024400&v=beta&t=U6Gv9MZD5MhcMeoFs9n_eU6-s0hFXeQms0Cu2XwIm5Q" alt="logos" />
                      <span>{content.brand}</span>
                    </div>
                  </div>
                </NavLink>
                <h3>{content.name}</h3>
                <span className="spanPrice">{content.price}</span>
                <span className="doodsDiscription">{content.discription}</span>
                <button type="button">Добавить в корзину</button>
                <button type="button">Написать продавцу</button>
              </div>
            </div>
            <div className="modalFooter">
              <div className="likePanel">
                <button onClick={likefn} type="button"><i style={likeStyles} className="fa fa-heart-o" aria-hidden="true" /></button>
                <button type="button"><i className="fa fa-reply" aria-hidden="true" /></button>
                <button onClick={favoritefn} type="button"><i style={favoriteStyles} className="fa fa-star-o" aria-hidden="true" /></button>
                <button type="button">Ещё</button>
              </div>
              <div className="modalDiscrioption">
                <p> Проблема решается вставкой в него последовательности «рыбных» фраз. Традиционно для этого используется многократно искаженный отрывок из сочинений Цицерона, написанный на латинском языке. </p>
              </div>
            </div>
          </div>
          <NavLink to="/market"><span onClick={closeHendler} className="closeModalCross"><i className="fa fa-times" aria-hidden="true" /></span></NavLink>
        </div>
      </>
    )
  } else {
    return (null)
  }
}