import React from 'react';
import ReactDOM from 'react-dom';

import './style/themes/default.less';
// 自定义的组件
import SDButton from './components/SDButton';

class App extends React.Component {

    render () {
        return (<div><SDButton title='这是按钮的提示'>这是一个按钮</SDButton></div>);
    }

}

ReactDOM.render(<App />, document.getElementById('app')); //app即为挂载点，在模板html中。