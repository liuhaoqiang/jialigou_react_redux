import React from 'react';

export default class BannerShopList extends React.Component{
	constructor(props){
   	  super(props);  	
   	  this.state=({
   	  	data:[]
   	  	
   	  })
   }  
   componentDidMount(){
   	 
   	  fetch('./mock/list.json').then((response)=>{
   	  	
   	  	return response.json();
   	  	
   	  }).then((json)=>{
   	    this.setState({	   
   	    	
   	    	data:json.data    	
   	    	
   	    }) 
   	  });
   	 
   }  
   handleOnmouseEnter(index){   	
               $(".yin_nav").show();
               $(".product_list").eq(index).show()
	                                 .siblings().hide();
   }
   handleOnMouseLeave(){
   	$(".yin_nav").hide();
   }   
  
	render(){
		return (
			<div className="nav_boss">
		       <div className="navbox" onMouseLeave={this.handleOnMouseLeave.bind(this)}>
			       	 <div className="product_class">		       	 	
				        {	
				        	this.state.data.map((value,index)=>{		        		
					        	return (
					        		<div className="minbox" onMouseEnter={this.handleOnmouseEnter.bind(this,index)} key={index+"fist_list"}>
						            <h3><a href="#">{value.fist_title}</a></h3>
						       	  	<div className="cat">
						       	  	{
						       	  	  value.second_data.map((value,index)=>{
						       	  	  	return (
						       	  	  		<a href="#"  key={index+"fist_list_1"} >{value.second_title}</a>
						       	  	  	)
						       	  	  })
						       	  	}
						       	  	</div>
						        	</div>
					        	)	
				        	})
				        }
			  		 </div>
			         <div className="yin_nav">
			         {
			         	this.state.data.map((value,index)=>{					         		
			         		return (
			         			<ul className="product_list" key={index+"second_list_1"}>
			         			  {
				         			 value.second_data.map((value,index)=>{
							         		return(					         			 
							                        <li key={index+"second_list_2"}>
							                        <a href="#" className="tp" >{value.second_title}&gt;</a>
							                        {
							                          value.second_data.map((value,index)=>{
							                          	return(
							                          		<a href="" className="product" key={index+"second_list_3"}>{value}</a>
							                          	)
							                          })
							                        }
							                        </li>										              		
							         		)
						         	})	         		 	  
			         			  }     			
			         			 </ul>
			         		)
			         	})						         	
			         }						             
			        </div>
				 </div>
			 </div>
		)
	}
}
