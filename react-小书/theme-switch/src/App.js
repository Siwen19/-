import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const makeProvider = (data) => {  
  return class Index extends Component {
    static childContextTypes = {
      username: PropTypes.string
    }
    constructor() {
      super();
      this.state = {
        username: data.name
      }
    }  

    getChildContext() {
      return { username: this.state.username }
    }
    
    render() {
      return (  
          <Post /> 
        );
    } 
  }
}  

class Post extends Component {
  static contextTypes = {
    username: PropTypes.string
  }
  render() { 
    return ( 
      <h1>{ this.context.username }</h1>
     );
  }
}    

export default makeProvider({ name: 'Jerry' });
