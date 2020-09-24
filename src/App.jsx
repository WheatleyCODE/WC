import React from 'react';
import { connect } from 'react-redux';

import userConstants from './constants/user.constants';
import './App.css';

const App = ({ name, changeName }) => {
  const handleClick = () => {
    changeName('Wheatley');
  };

  return (
    <div className="App" onClick={handleClick}>
      {name}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => dispatch({ type: userConstants.ADD_USER_PHOTO, name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
