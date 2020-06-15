import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
  //  constructor() { 
  //    super();
  //    this.content = 'Hello React'
  //  }
   state = {  }
   render() { 
     const title = 'ScriptOJ';
     const page = title;
     return ( 
       <div>
         <h1> { renderContent('Hello World, Hello React') } </h1>
         <h1 className={ title }></h1>
         <div className='content'>{ page }</div>
       </div>
     );
   }
 }

 function renderContent(content) {
   return content; 
 }
  
 export default App; 