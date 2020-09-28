import React from 'react';
import s from './ExperimentsPage.module.scss'
import PartOne from './PartOne/PartOne.jsx'
import PartThree from './PartThree/PartThree';
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
            showPartOne: !this.state.showPartOne
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

        let partOne = (this.state.showPartOne) ? <PartOne /> : undefined
        let partTwo = (this.state.showPartTwo) ? <PartTwo /> : undefined
        let partThre = (this.state.showPartThre) ? <PartThree /> : undefined
        let partFour = (this.state.showPartFour) ? <PartFour /> : undefined
           

        return(
            <div className={s.ExperimentsPageMain}>
                <button className={s.buttonPart} onClick={this.PrintPartOne}>Show Part One (Ну и говнище)</button>
                {partOne}
                <button className={s.buttonPart} onClick={this.PrintPartTwo}>Show Part Two (Ну и говнище)</button>
                {partTwo}
                <button className={s.buttonPart} onClick={this.PrintPartThre}>Show Part Three (Ну и говнище)</button>
                {partThre}
                <button className={s.buttonPart} onClick={this.PrintPartFour}>Show Part Four (Вроде бы нормально)</button>
                {partFour}
            </div>
        )
    }
}

export default ExperimentsPage