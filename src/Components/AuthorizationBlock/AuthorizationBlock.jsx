import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './AuthorizationBlock.scss'
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'
import {
  pushUserOneActionCreator,
  pushUserTwoActionCreator,
  pushUserThreeActionCreator,
} from 'Redux/actions'

const AuthorizationBlock = (props) => {
  console.log(props)

  // Програмная навигация когда есть параметры пропс
  // const OnButtonClik = () => {
  //   props.history.push('/')
  // }

  const pushOne = () => {
    props.pushUserOne()
  }
  const pushTwo = () => {
    props.pushUserTwo()
  }
  const pushThree = () => {
    props.pushUserThree()
  }

  return (
    <div className="AuthorizationBlock">
      <div className="AuthorizationMain">
        {/* <NavLink to="/profile">Мейн</NavLink> */}
        <div className="leftPanel">
          <div className="profiles">
            <div className="profilesContainer">
              <div className="infoTextBlock"><h4>Готовые аккаунты для тестирования</h4></div>
              <div className="profile">
                <NavLink onClick={pushOne} to="/profile">
                  <img src="https://sun9-56.userapi.com/impf/c830709/v830709215/f5ab2/xBYyujDqwDc.jpg?size=200x0&quality=90&crop=100,0,1863,1864&sign=c5e26b0f8f98c0cbef9eb4e50859635f&ava=1" alt="avatar" />
                  <span>Дмитрий Бажаев</span>
                </NavLink>
              </div>
              <div className="profile">
                <NavLink onClick={pushTwo} to="/profile">
                  <img src="https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo" alt="avatar" />
                  <span>Енот Енотович </span>
                </NavLink>
              </div>
              <div className="profile">
                <NavLink onClick={pushThree} to="/profile">
                  <img src="https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg" alt="avatar" />
                  <span>Тигр Тигрович</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mobileWC">
            <div className="infoBlock">
              <h4>WCонтакте для мобильных устройств - не будет!</h4>
            </div>
            <div className="imageBlock">
              <img src="https://vk.com/images/login/compact_mobile_promo.png" alt="mobileWC"/>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <div className="logIn">
            <AuthorizationPage />
          </div>
          <div className="register"></div>
        </div>
        <div className="footer">
          <hr />
          <span>WContact</span>
          <span>WContact</span>
          <span>WContact</span>
          <span>WContact</span>
        </div>
      </div>
    </div>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    pushUserOne: () => dispatch(pushUserOneActionCreator()),
    pushUserTwo: () => dispatch(pushUserTwoActionCreator()),
    pushUserThree: () => dispatch(pushUserThreeActionCreator()),
  }
}
export default connect(null, mapDispatchToProps)(AuthorizationBlock)
