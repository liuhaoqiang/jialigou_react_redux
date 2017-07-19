var defaultState={
	productDetailData:[]

};
export default function(state=defaultState,action){

	if(action.type=="add_prudct"){
			var flag=true;
			var newproduct=action.text;
			var oldproduct=state.productDetailData;
			for(var i=0;i<oldproduct.length;i++){
				if(oldproduct[i].src==newproduct.src){
					oldproduct[i].number+=newproduct.number;
					flag=false;
					return Object.assign({},state,{
						productDetailData:[...state.productDetailData]
					})
				}
			}

		if(flag){
				return Object.assign({},state,{
					productDetailData:[...state.productDetailData,action.text]
				})
			}

	}
	if(action.type=="dellAlldata"){
		return Object.assign({},state,{
			productDetailData:[]
		})
	}
	return state;
}
