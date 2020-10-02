import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AddFavoriteGoodActionCreator, AddLikeGoodActionCreator } from '../../../../Redux/MarketPage_Goods_Reducer'
import './ModalGood.scss'

function ModalGood({ open, closeHendler, content, AddFavorite, Addlike }) {

  const favorite = content.isFavorite
  const like = content.like

  const MainImg = useRef(null)

  const likeStyles = like ? { color: 'red', fontWeight: 'bold' } : {}

  const favoriteStyles = favorite ? { color: '#F0BF00', fontWeight: 'bold' } : {}

  function likefn() {
    Addlike(content)
  }

  function favoritefn() {
    AddFavorite(content)
  }

  function imgChangeHandlerMain(url) {
    MainImg.current.src = url
  }

  let renderOtherImg = null
  if (content.otherImg !== undefined) {
      renderOtherImg = content.otherImg.map((url, index) => {
      return (
        <div key={index} onClick={() => {imgChangeHandlerMain(url)}} className="imgItem">
          <img src={url} alt="Картинка" />
        </div>
      )
    })
  } else {
    renderOtherImg = null
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
                  <img src={content.img} alt="Картинка" />
                </div>
                {renderOtherImg}
              </div>
              <div className="imageMain">
                <img ref={MainImg} src={content.img} alt="Картинка" />
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
                <button onClick={likefn} type="button"><i style={likeStyles} className="fa fa-heart-o" aria-hidden="true" /><span>{content.likeCount}</span></button>
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

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    AddFavorite: (obj) => dispatch(AddFavoriteGoodActionCreator(obj)),
    Addlike: (obj) => dispatch(AddLikeGoodActionCreator(obj)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalGood)
