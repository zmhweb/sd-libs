import React, { Component } from 'react';
import { Input } from 'antd';

// import PropTypes from 'prop-types';
import './index.less';

class SDInput extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { className = '' } = this.props;
        return (
            <Input
                {...this.props}
            />
        );
    }
}

SDInput.propTypes = {};

export default SDInput; // 这里必须export default导出

