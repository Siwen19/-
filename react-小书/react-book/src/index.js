import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notification from './Notification';
import * as serviceWorker from './serviceWorker';
import ClickDog from './ClickDog';
import Computer from './Computer';
import LessonsList from './LessonsList';
  
class Man extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='man'>
        Man
      </div>
     );
  }
}
  
class Dog extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='dog'>
        Dog
      </div>
     );
  }
} 

class Room extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='room'>
        <Man />
        <Dog />
        <Dog />
      </div>
     );
  }
} 

class Bathroom extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='bathroom'>
        Bathroom
      </div>
     );
  }
} 

class House extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='house'>
        <Room />
        <Bathroom />
      </div>
     );
  }
} 

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

ReactDOM.render( 
  <React.StrictMode>
    {/* <App /> */}
    {/* <Notification /> */}
    {/* <House /> */}
    {/* <ClickDog /> */}
    {/* <Computer /> */}
    <LessonsList lessons={lessons} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
