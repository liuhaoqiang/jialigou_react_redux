import React from 'react';
import HeaderComponent from '../common/header.js';
import HeaderSearch from '../common/headerSearch.js';
import FooterComponent from '../common/footer.js';
import BannerBox from './bannerbox.js';
import HotSale from './hotsale.js';
import ProductList from './productlist.js';
export default class IndexComponent extends React.Component {
	render() {
		return (
			<div>
				<HeaderComponent/>
				<HeaderSearch/>
				<BannerBox/>
			    <div className="hot">
					<HotSale/>
					<ProductList/>
				</div>
				<FooterComponent/>
			</div>
		)
	}	
}