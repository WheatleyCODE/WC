import React from 'react';
import s from './ExperimentsPage.module.scss'
import PartOne from './PartOne/PartOne'

class ExperimentsPage extends React.Component {

    state = {
        showPartOne: false,
        showPartTwo: false,
    }

    PrintPartOne = () =>{
        this.setState({
            showPartOne: !this.state.showPartOne
          })
        console.log(this.state)
    }
    PrintPartTwo = () =>{
        this.setState({
            showPartTwo: !this.state.showPartTwo
          })
        console.log(this.state)
    }
    render() {

        let partOne = (this.state.showPartOne) ? <PartOne /> : undefined
        let partTwo = (this.state.showPartTwo) ? <PartOne /> : undefined
           

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