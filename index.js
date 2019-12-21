import React from 'react'
import ReactDOM from 'react-dom'

// 函数会在return处停止运行
function getGreet(user){
	if(user){
		// 像 "<h1>hello {format(user)}<h1>"  这种JSX代码可以在if语句或者在for语句中进行执行  
		return <h1>hello {format(user)}</h1>;
	}
	return <h1>hello ，stranger </h1>

}

function format(user){
	return user.fristName + '' + user.lastName;
}

const user = {
	fristName : 'kongge',
	lastName  : 'kongge',
};

const element = (
	<div>
	<h1>
		{ getGreet(user)}
	</h1>
		<h1>这是一个一级标题</h1>
		<h2>这是一个二级标题</h2>
	</div>
	
	);


// DOM的作用就是为了操作html中的元素

ReactDOM.render(
	element,
	document.getElementById('root')
);