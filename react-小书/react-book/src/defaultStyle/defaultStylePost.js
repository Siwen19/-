import React, { Component } from 'react';

// 覆盖默认样式
const getDefaultStyledPost = (defaultStyle) => {
    return (
        class Post extends Component {
            render() {
                return (
                    <p style={this.props.style || defaultStyle}>Hello React!</p>
                );
            }
        }
    )
} 

export default getDefaultStyledPost({ color: 'red' });
