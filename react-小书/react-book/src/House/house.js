import React, { Component } from 'react';

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

  export default House