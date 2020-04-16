import React, { Component } from 'react';
import { Button } from 'antd';

// import PropTypes from 'prop-types';
import './index.less';

class SDButton extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { className = '' } = this.props;
        return (
            <Button
                {...this.props}
                className={`sd-btn ${className}`}
            >
                {this.props.children}
            </Button>
        );
    }
}

SDButton.propTypes = {};

export default SDButton; // 这里必须export default导出

