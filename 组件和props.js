// (1)渲染组件

// import React ,{ Component } from 'react'
// import ReactDOM from 'react-dom'

// // 执行顺序
// // 1、调用ReactDOM.render()  函数，并传入并传入 <Welcome name="Sara" /> 作为参数。
// // 2、react 调用 Welcome 组件 并将{name: 'Sara'} 作为props传入
// // 3、Welcome 组件将<h1>hello ,kongge</h1> 元素作为返回值
// // 4、reactDOM将DOM 更新为<h1>hello kongge</h1>


// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name = 'kongge' />; 


// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );


// （2）组合组件

// import React from 'react'
// import ReactDOM from 'react-dom'

// function Welcome(props){
// 	return <h1>hello, { props.name }</h1>
// }

// function App(){
// 	return(
// 		<div>
// 			<Welcome name = '123' />
// 			<Welcome name = '456' />
// 			<Welcome name = '789' />
// 		</div>
// 	);

// }


// ReactDOM.render(
// 	<App / >,
// 	document.getElementById('root')
// );


// （3）组件组合
import React from 'react'
import ReactDOM from 'react-dom'


function formatDate(date) {
	// toLocaleDateString 返回该日期对象部分的字符串
	return date.toLocaleDateString();
}

function Avatar(props) {
	return(
		<img
			className = 'Avatar'
			scr = {props.user.avatarUrl}
			//alt = {props.user.name}
		/>

		);
}

function UserInfo(props) {
	return(
		<div className = 'UserInfo'>
			<Avatar user = {props.user} />
			<div className = 'UserInfo-name'>{props.user.name}</div>
		</div>
		);
}


function Comment(props) {
	return (
		<div className = "Comment">
			<UserInfo user = {props.author} />
			<div  className = "Comment-text"> {props.text} </div>
			<div className = 'Comment-date'>
				{formatDate(props.date)}
			</div>

		</div>
		);
}

// 添加属性
const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author : {
		name :'kongge',
		avatarUrl: 'https://placekitten.com/g/64/64',
	},
};


ReactDOM.render (
<Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,

 document.getElementById('root')

)