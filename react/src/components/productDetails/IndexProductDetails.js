import React from 'react';
import HeaderComponent from '../common/header.js';
import HeaderSearch from '../common/headerSearch.js';
import FooterComponent from '../common/footer.js';
import IndexProductDetailsCotent from './IndexProductDetailsCotent.js';
export default class IndexProductDetails extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render(){
			return(
				 <div>
				  <HeaderComponent/>
				  <HeaderSearch/>
				  <IndexProductDetailsCotent id={this.props.params.id} />
				  <FooterComponent/>
			  	 </div>
		
			)
		} 
}
