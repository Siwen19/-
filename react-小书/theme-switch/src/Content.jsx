import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import { connect } from 'react-redux';

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
                <ThemeSwitch />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;
