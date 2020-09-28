import React, { Component } from 'react';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.jsx';
import Counter from './Counter/Counter';

class ExperimentsPage extends Component {

  constructor(props) {
    console.log('constructor')
    super(props)

    this.state = {
      cars: [
        { name: 'Ford', year: 2020 },
        { name: 'Audi', year: '2018' },
        { name: 'Lada', year: 2025 },
        { name: 'Porshe', year: 2017 },
        { name: 'Mazda', year: 2000 }
      ],
      pageTitle: 'Tittle React',
      showCars: false,
    }
  }

  componentDidMount() {
    console.log('Games componentDidMount')
  }

  changeTitleHandler = (newTitle) => {
    this.setState({ // Изменение состояния
      pageTitle: newTitle,
    })
  }
  changeInputTitleHandler = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }
  clickHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  onChangeBrend = (value, index) => {
    let car = this.state.cars[index]
    car.name = value
    let cars = [...this.state.cars]
    this.setState({cars})
  } 
  onClickDelete = (index) => {
    let cars = [...this.state.cars]
    cars.splice(index, 1) // Удаление из массива
    this.setState({cars})
  }

  // componentWillMount() {
  //   console.log('Games componentWillMount')
  // }
  render() {
    console.log(this.props)
    const divStyle = {
      textAlign: 'center'
    }
    let cars = this.state.cars.map( (elem, index) => {
      if (this.state.showCars) {
        return (
          // Уникальный ключ для реакта
          <ErrorBoundary key={index}>
            <Car
              name={elem.name}
              year={elem.year}
              index={index}
              onChangeTitle={this.changeTitleHandler.bind(this, elem.name)}
              onChangeBrend={(event) => { this.onChangeBrend(event.target.value, index) }}
              onClickDelete={() => { this.onClickDelete(index) }}
            />
          </ErrorBoundary>
        )
      } return null
    })

    return (
      <div>
        <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          <input onChange={this.changeInputTitleHandler} />
          <button type="button" onClick={this.clickHandler}>Показать/Скрыть машины</button>

          {cars}
          <Counter />
        </div>
      </div>
    );
  }
}

export default ExperimentsPage;
