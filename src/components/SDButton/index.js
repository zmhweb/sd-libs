import React, { Component } from 'react';
import { Button } from 'antd';

import PropTypes from 'prop-types';
import './index.less';

class SDButton extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Button
                type='primary'
                {...this.props}
                className='sd-btn'
            >
                <span>{this.props.children}</span>
            </Button>
        );
    }
}

SDButton.propTypes = {};

export default SDButton; // 这里必须export default导出

