import React, { Component } from 'react';
import { Checkbox } from 'antd';

// import PropTypes from 'prop-types';
import './index.less';

class SDCheckbox extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { className = '' } = this.props;
        return (
            <Checkbox
                {...this.props}
            >
                {this.props.children}
            </Checkbox>
        );
    }
}

SDCheckbox.propTypes = {};

export default SDCheckbox; // 这里必须export default导出

