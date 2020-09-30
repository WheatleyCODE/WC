import React from 'react'
import { useState } from 'react'
import './React_Learn.scss'
// Библеотека для анимаций
import { Transition } from 'react-transition-group'

const React_Learn = () => {

  const [bool, setBool] = useState(false)
  const [bool2, setBool2] = useState(false)
  // Инлайн стили.
  const styles = {
    border: '1px solid black',
  }
  // Динамические классы
  const classes = ['reactLearnBlock']
  if (bool) {
    classes.push('done')
  }
  const OnClickHandler = () => {
    setBool((prev) => !prev)
  }
  const OnClickHandler2 = () => {
    setBool2((prev) => !prev)
  }

  // 1) Почекать контекст
  // 2) Я знаю все нужна практика!

  /* //////////////////////////////////////// */

  return (
    <div className="reactLearnMain">
      <h1>React TotoriaL</h1>
      <div style={styles} className="reactLearnBlock">
        <h3>Click</h3>
        <button onClick={OnClickHandler} type="button">Клац orange</button>
        <button onClick={OnClickHandler2} type="button">Клац lightBlue</button>
        {/* Анимация Transition */}
        <Transition
          in={bool}
          timeout={{ enter: 500, exit: 300 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{backgroundColor: 'orange'}} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
        <Transition
          in={bool2}
          timeout={{ enter: 500, exit: 300 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{backgroundColor: 'lightblue'}} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
        <Transition
          in={bool}
          timeout={{ enter: 500, exit: 300 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{backgroundColor: 'orange'}} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
        <Transition
          in={bool2}
          timeout={{ enter: 500, exit: 300 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{backgroundColor: 'lightblue'}} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
      </div>

      {/* <div className={classes.join(' ')}><h3>Block</h3></div> */}
    </div>
  )
}
export default React_Learn
