import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import s from './PartFour.module.scss'
import {
  AddOneActionCreator,
  SubOneActionCreator,
  AddNumberActionCreator,
  SubNumberActionCreator,
} from '../../../Redux/ExperimentsPageCounterReducer'

class PartFour extends React.Component {
  componentDidMount() {
  }

  render() {
    const {
      counter,
      OnAdd,
      OnSub,
      OnAddNum,
      OnSubNum,
    } = this.props

    return (
      <div className={s.mainPartFour}>
        <h1>Счетчик: {counter}</h1>
        <hr />
        <div className={s.buttonDiv}>
          <div>
            <button onClick={OnAdd} type="button">Прибавить 1</button>
            <button onClick={OnSub} type="button">Вычесть 1</button>
          </div>
          <div>
            <button onClick={() => { OnAddNum(10) }} type="button">Прибавить 10</button>
            <button onClick={() => { OnSubNum(10) }} type="button">Вычесть 10</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.ExperimentsCounterData.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    OnAdd: () => dispatch(AddOneActionCreator()),
    OnSub: () => dispatch(SubOneActionCreator()),
    OnAddNum: (num) => dispatch(AddNumberActionCreator(num)),
    OnSubNum: (num) => dispatch(SubNumberActionCreator(num)),
  }
}

PartFour.propTypes = {
  counter: PropTypes.number,
  OnAdd: PropTypes.func,
  OnSub: PropTypes.func,
  OnAddNum: PropTypes.func,
  OnSubNum: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(PartFour);
