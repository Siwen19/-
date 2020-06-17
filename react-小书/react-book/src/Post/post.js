import React, { Component } from 'react';


class Post extends Component {
    constructor() {
        this.state = { 
            content: ''
        }
    }
    handleRefresh() { 
        this.setState({
            content: '正在加载中...'
        })
        // getPostData 未知 只是 practice componentWillMount
        getPostData().then((postContent) => {
             this.setState({
                 content: postContent
             })
        })  
    }
    componentWillMount() {
        this.handleRefresh();
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='post-content'>
                    { this.state.content }
                </div>
                <button onClick={ this.handleRefresh.bind(this) }>刷新</button>
            </div>
         );
    }
}
 
export default Post;