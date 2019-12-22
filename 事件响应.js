import React from 'react'
import ReactDOM from 'react-dom'

// 关于bind.this 的网址
// https://segmentfault.com/a/1190000020408222


class Toggle extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState((state) => ({
            isToggleOn : !state.isToggleOn
        }));
    }

    render () {
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'off'}
            </button>
        );
    }

}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);