import React from 'react';
import s from './ExperimentsPage.module.scss'
import PartOne from './PartOne/PartOne'
import PartThree from './PartThree/PartThree';
import PartTwo from './PartTwo/PartTwo'


class ExperimentsPage extends React.Component {

    state = {
        showPartOne: false,
        showPartTwo: false,
        showPartThre: false,
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
    render() {

        let partOne = (this.state.showPartOne) ? <PartOne /> : undefined
        let partTwo = (this.state.showPartTwo) ? <PartTwo /> : undefined
        let partThre = (this.state.showPartThre) ? <PartThree /> : undefined
           

        return(
            <div className={s.ExperimentsPageMain}>
                <button className={s.buttonPart} onClick={this.PrintPartOne}>Show Part One</button>
                {partOne}
                <button className={s.buttonPart} onClick={this.PrintPartTwo}>Show Part Two</button>
                {partTwo}
                <button className={s.buttonPart} onClick={this.PrintPartThre}>Show Part Three</button>
                {partThre}
            </div>
        )
    }
}

export default ExperimentsPage