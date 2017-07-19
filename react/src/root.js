
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import IndexComponent from './components/index/index.js';
import IndexProductDetails from './components/productDetails/IndexProductDetails.js';
import IndexShopCarDetails from './components/shopCar/shopCarIndex.js';
import {createStore} from "redux";
import reducer from './reducer.js';//主路由引入总数接口
import {Provider} from 'react-redux';//引入Provider；React-Redux 提供Provider组件，可以让容器组件拿到state。
import $ from '../node_modules/jquery/dist/jquery.min.js';
var store=createStore(reducer);
window.$ = $;
class Root extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={IndexComponent}></Route>
					<Route path='/details(/:id)' component={IndexProductDetails}></Route>
					<Route path='/shopcardetail' component={IndexShopCarDetails}></Route>	
				</Router>
			</Provider>
		)
	}


}

ReactDom.render(<Root />, document.querySelector("#root"));