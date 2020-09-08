import React, { Component } from 'react';
import s from './ExperimentsPage.module.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class ExperimentsPage extends Component {

  constructor(props) {
    console.log('constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2020},
        {name: 'Audi', year: 2018},
        {name: 'Lada', year: 2025},
        {name: 'Porshe', year: 2017},
        {name: 'Mazda', year: 2000}
      ],
      pageTitle: 'Tittle React',
      showCars: false
    }
  }

  changeTitleHandler = (newTitle) => {
    this.setState({ // Изменение состояния
      pageTitle: newTitle
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
  componentDidMount() {
    console.log('Games componentDidMount')
  }
  render() {
    console.log('Games render')
    const divStyle = {
      textAlign: 'center'
    }
    
    let cars = this.state.cars.map( (elem, index) => {
      if (this.state.showCars) {
        return (
          <ErrorBoundary  key={index}>
            <Car
              // Уникальный ключ для реакта
              name={elem.name}
              year={elem.year}
              onChangeTitle={this.changeTitleHandler.bind(this, elem.name)}
              onChangeBrend={(event) => { this.onChangeBrend(event.target.value, index) }}
              onClickDelete={() => { this.onClickDelete(index) }}
            />
          </ErrorBoundary>
        )
      } return null
    })

    return (
      <div className={s.gameMain}>
        <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          <input onChange={this.changeInputTitleHandler} ></input>
          <button
            onClick={this.clickHandler}
          >Показать/Скрыть машины</button>

          {cars}
          
        </div>
      </div>
    );
  }
}

export default ExperimentsPage;
