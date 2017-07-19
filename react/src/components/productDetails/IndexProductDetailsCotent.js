import React from 'react';
import IndexProductDetailsCotent from './IndexProductDetailsCotent.js';
import "../../css/productDetails.css";
import {connect} from "react-redux";
import {Link} from 'react-router';
class IndexProductDetails extends React.Component{
	constructor(props){
		super(props);	
		this.state={
			data:this.props.id,
			newdata:[],
			product_class:"",
			product_src:"",
			product_name:"",
			product_single_price:"",
			product_total_price:"",
			product_total_num:1
			
		}
	   
	}
	componentDidMount(){
		fetch("./mock/productData.json").then((response)=>{
			return response.json()
		}).then((json)=>{
		var	getData=this.state.data.split("&"),
		    product_src=getData[0],
		    product_class=getData[1].split("=")[1];
		    if(product_class=="floor_product"){
		         this.arr=json[product_class];
		         this.arr.map((value,index)=>{		         	
		         	value.f1min.map((value,index)=>{
		         	  	if(value.src==product_src){		    			
		    				return  this.state.newdata=value;
		    			}	  
		         	})		         	
		         })
		    }else{
		    	this.getDataClassObj=json[product_class];
		    	this.getDataClassObj.map((value,index)=>{
		    		if(value.src==product_src){		    			
		    			return  this.state.newdata=value;
		    		}	    	    	
		    	})
		    } 
		    var singlePrice=this.state.newdata.price.split("￥")[1];
		    this.setState({
		        newdata : this.state.newdata,
		        product_single_price : singlePrice,
		        product_src : this.state.newdata.src,
		        product_total_price : singlePrice,
		        product_name : this.state.newdata.name
		    })		   
		})
	}
	handleClickMinus(){		
		if(this.refs.input.value>=2){
				this.refs.input.value--;
		}
		var num=Number(this.refs.input.value);
		this.setState({
			product_total_price:(this.state.product_single_price)*num,
			product_total_num:num
		})
		
	}
	handleClickAdd(){
	   this.refs.input.value++;
	   var num=Number(this.refs.input.value);
	   this.setState({
			product_total_price:(this.state.product_single_price)*num,
			product_total_num:num
		})

	}
	handleClickAddToShopCar(){

		var newproduct={
			src:this.state.product_src,
			price:this.state.product_single_price,
			number:this.state.product_total_num,
			name : this.state.newdata.name
		}
		this.props.sendProductDataToStore(newproduct);

        this.move_cart()
	}
	move_cart(){
		var moveimg=document.createElement("img");//动态添加要添加的货物图片
		moveimg.className="move_style";
		$(".product").append(moveimg);
		var target_top=$(".cart img").offset().top;//目标top,以小车为目标
		var target_left=$(".cart img").offset().left;//目标left,以小车为目标
		var	init_left=$(".product").offset().left;//初始位置left，以商品的位置为参照物
		var	init_top=$(".product").offset().top;//初始位置left，以商品的位置为参照物

		$(moveimg).attr("src",`../src/img/${this.state.product_src}`);
		$(moveimg).css({"top":init_top,"left":init_left})
		$(moveimg).animate({"top":target_top,"left":target_left,"width":0,"height":0},1500,
			function(){
				$(moveimg).remove();
			})
	}

	render(){
			return(
				 <div className="mainbox">
					<div className="product_nav">
						<a href="#" className="tittle">商品、家居日用></a>
						<a href="#" >男士、女士></a>
						<a href="#" className="product_name"></a>
					</div>
					<div className="product_picbox">
						<div className="product">
							<img className="omg"src={"./src/img/"+this.state.newdata.src}/>
						</div>
						<div className="right">
							<h1>{this.state.newdata.name}</h1>
							<div className="right_one">
								<section className="right_one_one">
									<p ><span className="price">嘉丽价:</span><span className="iprice">￥{this.state.product_total_price}</span></p>
								    <p ><span className="code">积分:</span><span>100</span></p>
								</section>
								<section>
									<span className="taocan">套餐尺寸:</span>
									<span className="itaocan">{this.state.newdata.name}</span>
								</section>
								<section>
				
									<span className="num">数量</span>
									<button className="btn btn_left" onClick={this.handleClickMinus.bind(this)}>-</button>
									<input readOnly className="shuru" type="text" ref="input" value={this.state.product_total_num}/>
									<button className="btn btn_right" onClick={this.handleClickAdd.bind(this)}>+</button>
									<span>件</span>
						
								</section>	
								<div className="cat">
									<div className="success">
										<span className="yishi">
											添加购物成功
										</span>
									</div>
								<a  className="cat_one" >立即购买</a>
								<a  className="cat_tow" onClick={this.handleClickAddToShopCar.bind(this)}>加入购物车</a>
								<Link to="/" className="cat_three">
								   返回继续购物
								</Link>
							   </div>
							</div>
							
						</div>
					 </div>
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
		sendProductDataToStore:function(newproduct) {
			var action = {
				type: "add_prudct",
				text: newproduct
			};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexProductDetails)
