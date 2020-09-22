import React from 'react'
import s from './Backdrop.module.scss'

const Backdrop = props => <div onClick={props.close} className={s.backdrop}></div>

export default Backdrop