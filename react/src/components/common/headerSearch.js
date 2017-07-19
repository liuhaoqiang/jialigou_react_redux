import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
class HeaderSearch extends React.Component{
	constructor(props){
		super(props);
	    this.state={
	      cate_total_num:0,
	      olddata:this.props.store
	    }
	}
	componentDidMount(){
		var data=this.state.olddata;
		var num=0;
		for(var i=0;i<data.length;i++){
			num+=data[i].number;
		}
		$("#cat_num").html(num)
	}
	componentDidUpdate(){
	   var car_number=0;
	   var newdata=this.props.store;		
		if(newdata!=""){
			console.log(newdata);
			for(var i=0;i<newdata.length;i++){				
				car_number+=newdata[i].number;
			}
			$("#cat_num").html(car_number)
		}

	}

	render(){
		return (
			<div className="header_search">
					<img className="logo" src="./src/img/ladygood.png"/>
					<section className="search">
						<input type="text" placeholder="请输入商品名称或电视销售编码" />
						<button>
							<img className= "sear"src="./src/img/search.png"/>
							<span className="sear1">搜索</span>
						</button>
					</section>
					<section className="cart">
						<img src="./src/img/cart.png"/>
						<span id="cat_num">
						  {this.state.cate_total_num}
						</span>
						<Link to='/shopcardetail'>
						查看购物车
						</Link>
					</section>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return { 
		store:state.productDetailData
	}
}
export default connect(mapStateToProps)(HeaderSearch)
