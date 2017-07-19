import React from 'react';
import{connect} from 'react-redux';
import BannerNav from './banner_nav.js';
import BannerShopList from './banner_shoplist.js';
/*React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。*/
var i=0;
export default class BannerBox extends React.Component {   
   constructor(props){
   	  super(props);	
   	  this.state=({
   	  	bannerSrc:[],
   	  	i:0
   	  })
   }  
   componentDidMount(){
   	  fetch('./mock/bannerImg.json').then((response)=>{
   	  	return response.json();
   	  	
   	  }).then((json)=>{
   	    this.setState({
   	    	bannerSrc:json.data   	    	
   	    })
   	    this.timer && clearInterval(this.timer);
   	    this.timer=setInterval($.proxy(this.move,this),1000)
   	  })
   }
   
   componentWillUnmount() {
   	this.timer && clearInterval(this.timer);
   }
    
   move(){      	
	   	$(".banner_list").eq(i).show()
		   						 .siblings().hide();		   				 
		   		$(".banner_menu").eq(i).addClass("active")
	               				 .siblings().removeClass("active");	   							
		   		i++;
		   		if(i>5){
		   			i=0;	   	
		   		};	   		
	}
   handleListhover(index){
      i=index;
      this.move();
      clearInterval(this.timer);
   }
   handleListLeave(){
   	  this.timer && clearInterval(this.timer);
   	  this.timer=setInterval($.proxy(this.move,this),1000);
   }
	render(){
		return (
			<div>			   
			     <BannerNav/>
				 <div className="banner">
				       <ul className="bmg">
					       { 
					       	this.state.bannerSrc.map((value,index)=>{
					       		return (					       			
					       			<li key={"banner_"+index} className="banner_list"><img src={value} /></li>
					       		)
					       	})
					       }
				       </ul>
				       <ol className="list">
				        { 
					       	this.state.bannerSrc.map((value,index)=>{
					       		return (					       			
					       			<li onMouseEnter={this.handleListhover.bind(this,index)}
					       				onMouseLeave={this.handleListLeave.bind(this)}
					       			key={"banner_menu"+index} className="banner_menu">{index+1}</li>
					       		)
					       	})
					    }
				       </ol>
				    <BannerShopList/>				      
			    	</div>
			</div>
		)
	}

}
