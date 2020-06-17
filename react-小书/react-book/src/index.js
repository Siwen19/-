import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notification from './Notification';
import * as serviceWorker from './serviceWorker';
import ClickDog from './Dog/ClickDog';
import Computer from './Computer/Computer';
import LessonsList from './Lesson/LessonsList';
import PercentageApp from './Percentage/percentageApp';
import House from './House/house';
import Post from './Post/post2'
import BlackBorderContainer from './BlackBorderContainer/blackBorderContainer';
import DefaultStylePost from './defaultStyle/defaultStylePost';

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

ReactDOM.render(
  <React.StrictMode>
    {/* <PercentageApp /> */}
    {/* <LessonsList lessons={lessons}/> */}
    {/* <Computer /> */}
    {/* <ClickDog /> */}
    {/* <House /> */}
    {/* <Post /> */}
    {/* <BlackBorderContainer>
      <div className='name'>My Name: Lucy</div>
      <p className='age'>My Age: <span>12</span></p>
    </BlackBorderContainer> */}
    <DefaultStylePost />
    <DefaultStylePost style={{ color: 'blue', fontSize: '13px' }} />
    <DefaultStylePost style={{ fontSize: '12px' }} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
