import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {  
    static contextTypes = {
        store: PropTypes.object
    }
    constructor () {
        super();
        this.state = { themeColor: ''}
    }
    componentWillMount () {
        this._updateThemeColor();
    }
    _updateThemeColor () {
        const { store } = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor })
    }
    // 在数据变化的时候
    componentWillMount () {
        const { store } = this.context;
        // 获取最新的 themeColor 
        this._updateThemeColor();
        // 重新渲染组件
        store.subscribe(() => this._updateThemeColor());
    }
    render() { 
        return ( 
            <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
         );
    }
}
 
export default Header;