import React from 'react'
import { NavLink } from 'react-router-dom'
import './AuthorizationBlock.scss'
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'

const AuthorizationBlock = (props) => {
  console.log(props)

  // Програмная навигация когда есть параметры пропс
  // const OnButtonClik = () => {
  //   props.history.push('/')
  // }

  return (
    <div className="AuthorizationBlock">
      <div className="AuthorizationMain">
        {/* <NavLink to="/profile">Мейн</NavLink> */}
        <div className="leftPanel">
          <div className="profiles">
            <div className="profilesContainer">
              <div className="infoTextBlock"><h4>Недавно входили на сайт с этого компьютера</h4></div>
              <div className="profile"><NavLink to="/profile">Мейн</NavLink></div>
              <div className="profile">2</div>
              <div className="profile">3</div>
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
          <div className="register">456</div>
        </div>
        <div className="footer">
          123
        </div>
      </div>
    </div>
  )
}
export default AuthorizationBlock
