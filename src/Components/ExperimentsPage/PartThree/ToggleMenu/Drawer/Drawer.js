import React from 'react'
import s from './Drawer.module.scss'

class Drawer extends React.Component {
render() {
    return(
        <>
            <nav className={s.navMain}>
                <ul className={s.ulDrawer}>
                    <li>Главная</li>
                    <li>Предложения</li>
                    <li>О нас</li>
                    <li>Поставщикам</li>
                    <li>Клипы</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </>
    )
}
    
}
export default Drawer