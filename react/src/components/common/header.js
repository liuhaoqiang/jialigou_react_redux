import React from 'react';
export default class HeaderComponent extends React.Component {

	render() {
		return(				
			<div className="min">
				<div className="min_header">
					<div className="min_header_left">
						<img src="./src/img/1 (1).gif" className="m1"/> <span className="m2">电话热线:</span><span className="m3">&nbsp;400-630-0077</span>
					</div>
					<div className="min_header_center">
						<a href="#">[登录]</a>
						<a href="#">[免费注册]</a>
					</div>
					<ul>
						<li><a href="#">我的嘉</a></li>
						<li><a href="#">我的订单</a></li>
						<li><a href="#">客户服务</a></li>
						<li><a href="#">电视会员激活</a></li>
						<li><img src="./src/img/1 (3).gif"/ ><a href="#">手机嘉丽购物</a></li>
					</ul>
				</div>
			</div>
			
		)
	}
}



