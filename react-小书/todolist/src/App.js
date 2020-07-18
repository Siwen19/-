import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/todolist/toDoList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleInputText } from './components/actions/actions'; 

function App(props) { 
  const { dispatch } = props;

  const ipt = useMemo(() => {
    return bindActionCreators({
      handleInputText
    }, dispatch)
  }, [])
  return (
    <div className='App'>
      <ToDoList {...props} {...ipt} />
    </div>
  );
}

export default connect(function mapStateToProps(state) { 
  return state;
}, function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
})(App);
