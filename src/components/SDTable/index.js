import React, { Component } from 'react';
import { Table } from 'antd';

import PropTypes from 'prop-types';
import './index.less';

class SDTable extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { className } = this.props;
        return (
            <div>测试多组件打包</div>
            // <Table
            //     {...this.props}
            //     className={`sd-table ${className}`}
            // />
        );
    }
}

SDTable.propTypes = {};

export default SDTable; // 这里必须export default导出

