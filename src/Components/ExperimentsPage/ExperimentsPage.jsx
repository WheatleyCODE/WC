import React from 'react';
import s from './ExperimentsPage.module.scss'
import PartOne from './PartOne/PartOne.jsx'
import PartThree from './PartThree/PartThree.jsx';
import PartTwo from './PartTwo/PartTwo'
import PartFour from './PartFour/PartFour'

class ExperimentsPage extends React.Component {
  state = {
    showPartOne: false,
    showPartTwo: false,
    showPartThre: false,
    showPartFour: false,
  }

  PrintPartOne = () =>{
    this.setState({
      showPartOne: !this.state.showPartOne,
    })
  }

  PrintPartTwo = () =>{
    this.setState({
      showPartTwo: !this.state.showPartTwo
    })
  }

  PrintPartThre = () =>{
    this.setState({
      showPartThre: !this.state.showPartThre
    })
  }

  PrintPartFour = () =>{
    this.setState({
      showPartFour: !this.state.showPartFour
    })
  }

  render() {

    const { showPartOne, showPartTwo, showPartThre, showPartFour } = this.state

    const partOne = (showPartOne) ? <PartOne /> : undefined
    const partTwo = (showPartTwo) ? <PartTwo /> : undefined
    const partThre = (showPartThre) ? <PartThree /> : undefined
    const partFour = (showPartFour) ? <PartFour /> : undefined
    return (
      <div className={s.ExperimentsPageMain}>
        <button type="button" className={s.buttonPart} onClick={this.PrintPartOne}>Show Part One (React Component Test)</button>
        {partOne}
        <button type="button" className={s.buttonPart} onClick={this.PrintPartTwo}>Show Part Two (Quiz)</button>
        {partTwo}
        <button type="button" className={s.buttonPart} onClick={this.PrintPartThre}>Show Part Three (Toggle Menu)</button>
        {partThre}
        <button type="button" className={s.buttonPart} onClick={this.PrintPartFour}>Show Part Four (Counter)</button>
        {partFour}
      </div>
    )
  }
}

export default ExperimentsPage
