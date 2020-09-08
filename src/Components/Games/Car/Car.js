import React from 'react'
import s from './Car.module.scss'
// import Radium from 'radium'


class Car extends React.Component { //Стайт фулл компонент наследуется от реакт компонент

  // componentWillReceiveProps(nextProps) {
  //   console.log('Car componentWillReceiveProps', nextProps)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // Можно сделать ппроверку и проверить нужно ли перерисовывать элемент
    // Оптимизирует приложение
    console.log('Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
  }

  // // componentWillUpdate(nextProps, nextState) {
  //   console.log('Car componentWillUpdate', nextProps, nextState)
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Можно использовать для синхронизации с локальным стейтом
    console.log('Car getDerivedStateFromProps', nextProps, prevState )

    return prevState
  }

  componentDidUpdate() {
    console.log('Car componentDidUpdate')
  }

  getSnapshotBeforeUpdate() {
    // Доступ к дом дереву до обновления стейта
    console.log('Car getSnapshotBeforeUpdate')
  }

  componentWillUnmount() {
    // Когда разрушается (Удаляется из дом дерева)
    console.log('Car componentWillUnmount')
  }

  render() {
    if(Math.random > 0.7) {
      throw new Error('Car ranndom')
    }
    console.log('Car render')
    let arrClases = []
    if (this.props.name.length > 4) {
      arrClases.push(s.green)
    }

    const style = {
      boxShadow: '0px 0px 5px 0px rgb(0, 0, 0, .14)',
      border: '1px solid #ccc',
      ':hover': {
        boxShadow: '0px 0px 5px 0px rgb(0, 0, 0, .25)',
        border: '1px solid #aaa',
        cursor: 'pointer'
      }
    }
    return (
        // Деструктуризация 
      <div style={style} className={s.car} >
        <h3>Бренд: {this.props.name}</h3>
        <p>Год: <strong>{this.props.year}</strong></p>
        <input className={arrClases.join(' ')} onChange={this.props.onChangeBrend} value={this.props.name} type='text'></input>
        {/* <button onClick={onChangeTitle}>Click</button> */}
        <button onClick={this.props.onClickDelete}>delete</button>
      </div>
    )
  }
}



// let Car = ({name, year, onChangeTitle, onChangeBrend, onClickDelete}) => {
// }
 
export default Car
