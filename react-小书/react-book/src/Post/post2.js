import React, { Component } from 'react';

class Post extends Component {
    static defaultProps = {
        content: '获取文本高度'
    } 
    getTextHeight() {
        console.log(this.p.clientHeight)
    }
    render() { 
        return ( 
        <p ref={ (p) => this.p = p} onClick={ this.getTextHeight.bind(this) }> { this.props.content }</p>
         );
    }
}
 
export default Post;