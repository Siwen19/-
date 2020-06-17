import React, { Component } from 'react';

class Computer extends Component { 
    static defaultProps = {
        on: '显示器亮了',
        off: '显示器关了'
    } 
    constructor() {
        super();
        this.state = {
            status: false
        }  
    } 
    handleClickOnButton() { 
        this.setState({
            status: !this.state.status
        })  
    }
    render() {  
        return ( 
            <div>
                <button onClick={ this.handleClickOnButton.bind(this) }>开关</button>
                <Screen showContent={ this.state.status? this.props.on:this.props.off }/>
            </div>
         );
    }
}

class Screen extends Component { 
    state = {  }
    render() { 
        return ( 
            <div className='screen'> 
            { this.props.showContent }
            </div>
         );
    }
} 
 
export default Computer;