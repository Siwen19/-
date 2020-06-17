import React, { Component } from 'react';
import Input from './input';

class PercentageShower extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
        }
    } 
    handlePercentageChange(content) {
        if (!content) return 
        this.setState({
            content: (content * 100).toFixed(2) + '%'
        })
    }
    render() { 
        return ( 
            <div>
                <Input content={this.handlePercentageChange.bind(this)}/>
                { this.state.content }
            </div>
         );
    }
}
 
export default PercentageShower;