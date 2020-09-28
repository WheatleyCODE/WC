import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import s from './PartFour.module.scss'
import {
  AddOneActionCreator,
  SubOneActionCreator,
  AddNumberActionCreator,
  SubNumberActionCreator,
  AddAsyncActionCreator,
} from '../../../Redux/ExperimentsPageCounterReducer'

const PartFour = (props) => {
  const {
    counter,
    OnAdd,
    OnSub,
    OnAddNum,
    OnSubNum,
    OnSyncAdd,
  } = props

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
          <button onClick={() => { OnSyncAdd(100) }} type="button">Добавить 100 через 3с</button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.experimentsCounterData.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    OnAdd: () => dispatch(AddOneActionCreator()),
    OnSub: () => dispatch(SubOneActionCreator()),
    OnAddNum: (num) => dispatch(AddNumberActionCreator(num)),
    OnSubNum: (num) => dispatch(SubNumberActionCreator(num)),
    OnSyncAdd: (num) => dispatch(AddAsyncActionCreator(num)),
  }
}

PartFour.propTypes = {
  counter: PropTypes.number,
  OnAdd: PropTypes.func,
  OnSub: PropTypes.func,
  OnAddNum: PropTypes.func,
  OnSubNum: PropTypes.func,
  OnSyncAdd: PropTypes.func,
}

PartFour.defaultProps = {
  counter: 0,
  OnAdd: () => console.error('Ошибка'),
  OnSub: () => console.error('Ошибка'),
  OnAddNum: () => console.error('Ошибка'),
  OnSubNum: () => console.error('Ошибка'),
  OnSyncAdd: () => console.error('Ошибка'),
}

export default connect(mapStateToProps, mapDispatchToProps)(PartFour);
