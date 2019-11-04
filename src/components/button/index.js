import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './style/index.less';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button {...this.props} className='my-btn-style'><span>{this.props.children}</span></button>);
    }
}

Button.propTypes = {};

export default Button; //这里必须export default导出