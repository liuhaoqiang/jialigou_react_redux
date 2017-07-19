import React from 'react';

export default class BannerNav extends React.Component{
	  constructor(props){
   	  super(props);
      }  
	render(){
		return (
			<nav>
				<div className="shop">全部商品分类</div>
				<ul>
					<li><a href="../shouye/shouye.html">首页</a></li>
					<li className="gang">|</li>
					<li><a href="#">TV直播</a></li>
					<li className="gang">|</li>
					<li><a href="#">水果生鲜</a></li>
			        <li className="gang">|</li>
					<li><a href="">家具商城</a></li>
				</ul>
				<p>订购热线 <span>&nbsp;400-630-0077</span></p>
		  </nav>
		)
	}
}
