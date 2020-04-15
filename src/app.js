import React from 'react';
import ReactDOM from 'react-dom';

import './style/themes/default.less';
// 自定义的组件
import { SDButton, SDTable } from './index';

class App extends React.Component {

    render () {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address'
            }
        ];
        return (
            <div>
                <SDButton
                    type='primary'
                    className='test-btn'
                    title='这是按钮的提示'
                >提示</SDButton>
                <SDTable
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('app')); //app即为挂载点，在模板html中。