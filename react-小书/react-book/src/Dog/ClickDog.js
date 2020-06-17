import React, { Component } from 'react';

class ClickDog extends Component {
    constructor() {
        super();
        this.state = {
            isBarking: true,
            isRunning: true
        }
    }  

    bark() {
        setTimeout(() => {
            this.setState({
                isBarking: false,
                isRunning: false 
            })
            console.log(this.state.isRunning)
        }, 20 + (Math.random()*30));
        console.log('bark');    
        this.run();
    }

    run() {
        console.log('run'); 
    } 

    render() { 
        return ( 
            <div onClick={ this.bark.bind(this) }>
                DOG
            </div>
         );
    }
}
 
export default ClickDog;