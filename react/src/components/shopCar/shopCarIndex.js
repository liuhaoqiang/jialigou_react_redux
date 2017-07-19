import React from 'react';
import HeaderComponent from '../common/header.js';
import HeaderSearch from '../common/headerSearch.js';
import FooterComponent from '../common/footer.js';
import {connect} from "react-redux";
import "../../css/shopcar.css";
import {Link} from 'react-router';
class IndexShopCarDetails extends React.Component{
	constructor(props){
		super(props);
		this.state={
			catchData:this.props.store,
			totalPrice:0
		};
     console.log(this.props.store)
	}
	minuNum(index){
		if(this.state.catchData[index].number>1){
			this.state.catchData[index].number--;
		}
		var init=0;
		this.state.catchData.map((value,index)=>{
			return init += value.number*value.price
		})
		this.setState({
			catchData:this.state.catchData,
			totalPrice:init
		})
	}
	addNum(index){
		this.state.catchData[index].number++;
		var init=0;
		this.state.catchData.map((value,index)=>{
			return init += value.number*value.price
		})
		this.setState({
			catchData:this.state.catchData,
			totalPrice:init
		})
	}
	componentDidMount(){
		this.state.catchData.map((value,index)=>{
			return this.state.totalPrice += value.number*value.price
		})
		this.setState({
			totalPrice:this.state.totalPrice
		})
	}
	handleDelAll(){
		this.state.catchData=[];
		this.setState({
			catchData:this.state.catchData,
			totalPrice:0
		})
		this.props.dellAllData()
	}
	handleDelSingle(index){
		this.state.catchData.splice(index,1);
		var init=0;
		this.state.catchData.map((value,index)=>{
			return init += value.number*value.price
		})
		this.setState({
			catchData:this.state.catchData,
			totalPrice:init
		})
	}
	render(){
			return(
				 <div>
				  <HeaderComponent/>
					 <div className="header_search">
						 <img className="logo" src="./src/img/ladygood.png"/>
					 </div>
					 <h5>全部商品 <Link to="/" className="shouye">返回继续购物</Link></h5>
					 <div className="car">
					 <section className="tittle">
						 <ul>
							 <li>全选</li>
							 <li>商品名</li>
							 <li>单价（元）</li>
							 <li>数量</li>
							 <li>总价</li>
							 <li>操作</li>
						 </ul>
					 </section>
					 <section className="car_min">
						 <ul className="lst">
							 {
                              this.state.catchData.map((value,index)=>{
                              	return(
                              		<div key={index+"shopcar"}>
										<li>
											<input className="chk" type="checkbox" />
											<img  className="tu" src={"./src/img/"+value.src}/>
										</li>
										<li>{value.name}</li>
										<li>￥{value.price}</li>
										<li>
											<button className="btn_left btn" onClick={this.minuNum.bind(this,index)}>-</button>
											<span className="num">{value.number}</span>
											<button className="btn_right btn" onClick={this.addNum.bind(this,index)}>+</button>
										</li>
										<li>￥<span className="single_total">{value.number*value.price}</span></li>
										<li><a href="#">加入收藏夹</a><span className="del" onClick={this.handleDelSingle.bind(this,index)}>删除</span></li>
									</div>

								)
							  })
							 }

						 </ul>
					 </section>
					 <div className="box">
						 <div className="left">
							 <span className="del_all sup" onClick={this.handleDelAll.bind(this)}>清空购物车</span>
						 </div>
						 <div className="center">
							 <p>商品金额：<span className="money1">{this.state.totalPrice}</span>元</p>
							 <p>运费：<span className="jiaotong">0</span>元</p>
							 <p>可返积分：<span className="jifen">{this.state.totalPrice}</span>分</p>
							 <p className="last">总计：<span className="total_money">{this.state.totalPrice}</span>元</p>
						 </div>
						 <div className="right">
							 <a href="#">去结算</a>
						 </div>
					 </div>
					 </div>
				  <FooterComponent/>
			  	 </div>
		
			)
		} 
}
function mapStateToProps(state) {

	return {
		store:state.productDetailData

	}

}

function mapDispatchToProps(dispatch) {
	return {
		dellAllData:function(newdata) {
			var action = {
				type: "dellAlldata"
			};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexShopCarDetails)