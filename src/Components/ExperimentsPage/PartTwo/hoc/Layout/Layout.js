import React from 'react'
import s from './Layout.module.scss'

class Layout extends React.Component {
    render() {
        return(
            <div className={s.divLayout}>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout