import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            number: '',
        }
    }
    handleNumberInput(event) {
        this.setState({
            number: event.target.value
        })

        if (this.props) {
            this.props.content(event.target.value);
        }
    } 
    render() { 
        return ( 
            <div>
                <input type='number' 
                onChange={ this.handleNumberInput.bind(this) }
                value={ this.state.number } />
            </div>
         );
    }
}
 
export default Input;