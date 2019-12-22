import React from 'react'
import ReactDOM from 'react-dom'

// props 是传递给组件的（类似函数的形参）不可被修改
// state 是在组件中被组件自己管理的（类似在一个函数内声明的变量）可以修改的，可以改变的
// 什么叫异步更新
// 调用顺序
// 1、找到reactDOM
// 2、调用<clock />中的构造函数constructor（props）
// 3、调用组件的render（）方法，将第一个时间渲染出来
// 4、调用挂载方法，在这个方法中，将每一秒调用一次tick方法
// 5、在tick方法中 clock组件会调用setstate方法来进行state的更新，
//   当更新时，react会觉察到state的变化，然后重新调用render进行渲染
// 6、一旦clock组件冲DOM中被移除，react就会调用componentWillUnmount生命周期方法，这样计时器就会停止

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {date : new Date()};
	}

	
	// 挂载
	componentDidMount(){
		// setInterval 可以按照指定的周期来调用函数或者计算表达式
		this.timerID = setInterval(
			()=> this.tick(),
			1000
		);

	}


	// 卸载
	componentWillUnmount() {
		clearInterval(this.timerID);
	}



	// 调用tick() 方法
	tick() {
		this.setState(
			{
				date : new Date()
			}
		);
	}


	render() {
		return (
			<div>
				<h1>hello world</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}


ReactDOM.render (
	<Clock />,
	document.getElementById('root')
);
