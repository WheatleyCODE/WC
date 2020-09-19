import React from 'react';
import s from './ExperimentsPage.module.scss'
import PartOne from './PartOne/PartOne'
import PartTwo from './PartTwo/PartTwo'

class ExperimentsPage extends React.Component {

    state = {
        showPartOne: false,
        showPartTwo: false,
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
    render() {

        let partOne = (this.state.showPartOne) ? <PartOne /> : undefined
        let partTwo = (this.state.showPartTwo) ? <PartTwo /> : undefined
           

        return(
            <div className={s.ExperimentsPageMain}>
                <button className={s.buttonPart} onClick={this.PrintPartOne}>Show Part One</button>
                {partOne}
                <button className={s.buttonPart} onClick={this.PrintPartTwo}>Show Part Two</button>
                {partTwo}
            </div>
        )
    }
}

export default ExperimentsPage