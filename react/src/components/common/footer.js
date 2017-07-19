import React from 'react';

export default class FooterComponent extends React.Component {
	
    handleClickCloseAdvertise(){
    	var Advertise=$(".gao");
    	Advertise.hide();
    	
    }
	render() {
		return(
			 <div>
			 <footer>
		    	<div className="footer1"></div>
		    	<div className="footer2">
		    		<img className="sou" src="./src/img/erweima.jpg"/>
		    		<div className="company">
		    			<ul>
		    				<li>购物指南</li>
		    				<li><a href="#">新用户注册/激活</a></li>
		    				<li><a href="#">如何订购</a></li>
		    				<li><a href="#">常见问题</a></li>
		    			</ul>
		    			<ul>
		    				<li>会员中心</li>
		    				<li><a href="#">会员权益</a></li>
		    				<li><a href="#">美丽积分</a></li>
		    				<li><a href="#">订单查询</a></li>
		    				<li><a href="#">找回密码</a></li>
		    				<li><a href="#">配送服务</a></li>
		    			</ul>
		    			<ul>
		    				<li>配送服务</li>
		    				<li><a href="#">物流跟踪</a></li>
		    				<li><a href="#">免费政策</a></li>
		    			</ul>
		    			<ul>
		    				<li>支付说明</li>
		    				<li><a href="#">货到付款</a></li>
		    				<li><a href="#">在线支付</a></li>
		    			</ul>
		    			<ul>
		    				<li>售后服务</li>
		    				<li><a href="#">退换货政策</a></li>
		    				<li><a href="#">退换货流程</a></li>
		    				<li><a href="#">安全与保密</a></li>
		    			</ul>
		    		</div>
		    		<img className="call" src="./src/img/call_rz.jpg" />
		    	</div>
		    	<div className="footer3">
		    		<p className="hezuo">
			    		  <a href="#">商城首页</a>|
			    		  <a href="#">官网首页</a>|
			    		  <a href="#">供应商登录</a>|
			    		  <a href="#"> 收藏我们</a>|
			    		  <a href="#">公司简介</a>|
			    		  <a href="#"> 媒体报道</a>|
			    		  <a href="#">嘉丽购招聘</a>|
			    		  <a href="#">官方微博</a>|
			    		  <a href="#">合作网站:范游网</a>	
			    	</p>
		    	    <p>嘉丽购物有限责任公司 Copyright 2010-2014 jialigou.All Rights Reserved</p>
		          	<p>国家广电总局批号：广局[2010] 278号湘ICP备10203162号-3</p>
			    	<div className="footer3_img">
				    		<img src="./src/img/1 (5).gif"/>
				    		<img src="./src/img/1 (6).gif"/>
				    		<img src="./src/img/1 (7).gif"/>
				    		<img src="./src/img/1 (8).gif"/>
			    	</div>
		    	</div>   	
	    </footer>  
	    <section className="gao">
	    	<img src="./src/img/ad.png"/>
	    	<span className="cc" onClick={this.handleClickCloseAdvertise.bind(this)}>x</span>
	    </section>			 
		</div>
		)
	}


}