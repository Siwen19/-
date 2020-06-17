import React, { Component } from 'react';
import './blackBorderContainer.css'

class BlackBorderContainer extends Component {
    state = {}
    render() {
        return (
            <div> 
                    {this.props.children}     
            </div>
        );
    }
}

export default BlackBorderContainer;