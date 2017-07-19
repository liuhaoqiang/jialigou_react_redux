import React from 'react';
import {Link} from 'react-router';
export default class ProductList extends React.Component {   
   constructor(props){
   	  super(props);
   	   this.state={
   	   	 floorTotalData:[],
   	   	 
   	   }
   }
   componentDidMount(){
	  fetch("./mock/productData.json").then((response)=>{
	   	   return response.json()
	  }).then((json)=>{
	   	  this.setState({
	   	  	  floorTotalData:json.floor_product
	   	  });
	   	  this.creatAdvertise();
	  })
   } 
   creatAdvertise(){
   	var secondFloor=$(".f1box").eq(1)
        secondFloor.after(`<div class="middle"><a href=""><img src="./src/img/middle.jpg"/></a></div>`)
   }
	render(){
		return (                              
			<div className="box">
			   {
				 this.state.floorTotalData.map((value,index)=>{
				 	return (				 		 
				 		 <div className="f1box" key={"product_floor"+index}>
					       	    <div className="floor1_tittle">
					    	 		<span id="">F{value.floornum}</span>
					    	 		<a href="">{value.floorname}</a>
					    	    </div>
						        <div className="floor1">
						    		 <div className="floor1_left">
						    		 	<section>
                                          {
                                          	value.f1product.map((value,index)=>{
                                          		return <a href="#" key={"floorList"+index}>{value}</a>
                                          	})
                                          }
						    		 	</section>
						    		 	<div className="f1log1">
						    		 		<a href="#"><img src={"./src/img/"+value.f1tittle}/></a>
						    		 	</div>
						    		 </div>
						    		 <div className="floor1_center">
						    		 	<img src={"./src/img/"+value.f1max}/>
						    		 </div>
						    		 <div className="floor1_right">	    		  
						    		    {
						    		      value.f1min.map((value,index)=>{
						    		      	return (
						    		      		<div className="min_show" key={"floorDetialList"+index}>
						    		      		    <Link to={"/details/"+value.src+"&class=floor_product"}>
								    		 		<img src={"./src/img/"+value.src}/>
								    		 		<p>{value.name}</p>
								    		 		<span>{value.price}</span>
								    		 		</Link>
										       </div>
						    		      	)
						    		      })
						    		    }
						    		 </div> 
						        </div>
			       		 </div>
				 		
				 	)
				 })
			   }
	        </div>
		)
	}

}