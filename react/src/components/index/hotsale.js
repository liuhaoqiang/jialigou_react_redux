import React from 'react';
import {Link} from 'react-router';
export default class HotSale extends React.Component {   
   constructor(props){
   	  super(props);
   	  this.state={
   	  	todyTitle_img_src:"",
   	  	todySale_Data:[],
   	  	hotTitle_img_src:"",
   	  	hotSale_Data:[]
   	  }
   } 
   componentDidMount(){
   	 fetch("./mock/productData.json").then((response)=>{
   	 	return response.json()
   	 }).then((json)=>{
   	 	this.setState({
   	 		todyTitle_img_src : json.hotshow,
	   	  	todySale_Data     : json.linesshow,
	   	  	hotTitle_img_src  : json.hotal,
	   	  	hotSale_Data      : json.hotsale
   	 	})
   	 
   	 })
   }
	render(){
		return (
			<div>
			    <div className="hot_head">
		    		<a href="#" className="tody_head">今日热播</a>
		    		<a href="#">昨日热播</a>
		    	</div>
		    	
		    	<div className="tody_show">
	    			<section className="tody_show_left1">
	    			
	    			<a href="#"><img src={"./src/img/"+this.state.todyTitle_img_src}/></a>
	    			</section>
	    			
	    			{
	    				this.state.todySale_Data.map((value,index)=>{
	    					return (
	    						<div className="now_show" key={index+"_todaysale"}>
	    						    <Link to={"/details/"+value.src+"&class=linesshow"}>
					    			<span className="timer">[19:30-20:30]</span>
					    			<img src={"./src/img/"+value.src}/>
					    			<p className="tittle">{value.name}</p>
					    			<p className="price">{value.price}</p>
					    			</Link>
		    		            </div>
	    					)
	    				})
	    			}
	    			
		    	</div>
		    	
		    	<div className="hot_head">
		    			<a href="#">热销推荐</a>
		    	</div>
		    	<div className="hot_sale">
		    			<section className="tody_show_left2">
		    			<a href="#"><img src={"./src/img/"+this.state.hotTitle_img_src}/></a>
		    			</section>
		    			{
		    				this.state.hotSale_Data.map((value,index)=>{
		    					return (		    					 
		    						<div className="now_show"  key={index+"_nowsale"}>
		    							<Link to={"/details/"+value.src+"&class=hotsale"}>
						    			<img src={"./src/img/"+value.src}/>
						    			<p className="tittle">{value.name}</p>
						    			<p className="price">{value.price}</p>
						    			<span className="tol">已热销:1568件</span>
						    			</Link>
			    		         	</div>
		    					)
		    					
		    				})
		    			}
		    	</div>
			</div>
		)
	}

}