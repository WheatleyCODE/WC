import React from 'react'
import Drawer from './Drawer/Drawer'
import s from './ToggleMenu.module.scss'
import Backdrop from './Backdrop/Backdrop'

class ToggleMenu extends React.Component {

    state = {
        srl: ['fa fa-bars'],
        drawer: null,
        backdrop: null,
    }

    toggleOnClick = () => {
        if (this.state.srl[0] ===  'fa fa-bars') {
            this.setState({
                srl: ['fa fa-times', s.open],
                drawer: <Drawer />,
                backdrop: <Backdrop close={this.toggleOnClick} />
            })
        } else {
            this.setState({
                srl: ['fa fa-bars'],
                drawer: null,
                backdrop: null
            })
        }
    }

    render() {
        return(
            <div className={s.mainToggle}>
                <div className={s.divToggle}>
                    <i onClick={this.toggleOnClick} className={this.state.srl.join(' ')} aria-hidden="true"></i>
                    {this.state.drawer}
                    {this.state.backdrop}
                </div>
            </div>
            
        )
    }
}
export default ToggleMenu