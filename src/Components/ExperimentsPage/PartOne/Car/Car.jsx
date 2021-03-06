import React from 'react'
import PropTypes from 'prop-types'
import s from './Car.module.scss'
// import Radium from 'radium'

class Car extends React.Component {
  // Стэйт фулл компонент наследуется от реакт компонент

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.focus()
    }
  }

  render() {
    // Вызов ошибки
    // if (Math.random() > 0.7) {
    //   throw new Error('Car random')
    // }
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
        cursor: 'pointer',
      },
    }
    return (
      <div style={style} className={s.car} >
        <h3>Бренд: {this.props.name}</h3>
        <p>Год: <strong>{this.props.year}</strong></p>
        <input
          className={arrClases.join(' ')}
          ref={(inputRef) => this.inputRef = inputRef}
          onChange={this.props.onChangeBrend}
          value={this.props.name}
          type="text"
        />

        {/* <button onClick={onChangeTitle}>Click</button> */}
        <button type="button" onClick={this.props.onClickDelete}>delete</button>
      </div>
    )
  }
}

// Проверка пропсы на тип
Car.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeBrend: PropTypes.func,
  onClickDelete: PropTypes.func,
}

Car.defaultProps = {
  index: 0,
  name: 'MyName',
  year: 1999,
  onChangeBrend: () => console.error('Ошибка'),
  onClickDelete: () => console.error('Ошибка'),
};
// let Car = ({name, year, onChangeTitle, onChangeBrend, onClickDelete}) => {
// }
export default Car
