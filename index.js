// 元素渲染
import React from 'react'
import ReactDOM from 'react-dom'

// DOM是用来操纵html元素的
// <div id = "kong"></div>

react只会更新它需要的部分 
// reactdom会将元素和它的子元素  与之前的状态进行比较  并且只会进行必要的更新来使达到预期的状态
function tick() {
	const element = (
		<div>
			<h1>hello world</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
		)
		
	ReactDOM.render(element, document.getElementById('root'))
}


// 每一千毫秒调用一次
setInterval(tick, 1000);