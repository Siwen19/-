import React, { Component } from 'react';

class Notification extends Component {
    state = { }
    getNotificationsCount(N) {
        return N > 0 ?  <span> 有(N)条未读消息 </span> : <span> 没有未读消息 </span>;
    }
    render() { 
        return ( 
            <div>
                { this.getNotificationsCount(10) }
                { this.getNotificationsCount(0) }   
            </div>
         );
    }
}
 
export default Notification;