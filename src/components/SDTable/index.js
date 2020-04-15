import React, { Component } from 'react';
import { Table } from 'antd';

import PropTypes from 'prop-types';
import './index.less';

class SDButton extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { className } = this.props;
        return (
            <Table
                {...this.props}
                className={`sd-table ${className}`}
            />
        );
    }
}

SDButton.propTypes = {};

export default SDButton; // 这里必须export default导出
