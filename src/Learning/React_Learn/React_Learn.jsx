import React, { useState } from 'react'
import './React_Learn.scss'
import List from './List'
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

  /* //////////////////////////////////////// */

  const [items, setItems] = useState([
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    {id: 3, title: 'Item 3'},
  ])


  const removeItem = id => setItems(items.filter(i => i.id !== id))

  const addItem = () => {
    const title = prompt('Enter item title')
    const id = Date.now()

    setItems(items.concat([{title, id}]))
  }
  return (
    <div className="reactLearnMain">
      <h1>React TotoriaL</h1>
      <div style={styles} className="reactLearnBlock">
        <h3>Click</h3>
        <button onClick={OnClickHandler} type="button">Клац orange</button>
        <button onClick={OnClickHandler2} type="button">Клац lightBlue</button>
        {/* Анимация Transition */}
        <Transition
          in={bool} // Флаг отображения
          timeout={{ enter: 500, exit: 1000 }} // Тайминги должы быть равны таймингам CSS анимации
          mountOnEnter // добавить элемент и начать анимацию
          unmountOnExit // Удалить после конца анимации
          onEnter={() => console.log('onEnter')} // Вызывает функции на стадии анимации
          onEntering={() => console.log('onEntering')}
          onEntered={() => OnClickHandler2()}
          onExiting={() => console.log('onExiting')}
          onExited={() => OnClickHandler2()}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{ backgroundColor: 'orange' }} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
        {/* Так же такие анимации можно делать через CSSTransition (Тоже самое только через ксс классы а не анимации.) */}
        <Transition
          in={bool2}
          timeout={{ enter: 500, exit: 1000 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          onExit={() => console.log('onExit')}
        >
          {(state) => <div style={{ backgroundColor: 'lightblue' }} className={`learnBlock ${state}`}><h3>{state}</h3></div>}
        </Transition>
        <button type="button" onClick={addItem}>Add item</button>
        <List items={items} onRemove={removeItem} />
      </div>

      {/* <div className={classes.join(' ')}><h3>Block</h3></div> */}
    </div>
  )
}
export default React_Learn
