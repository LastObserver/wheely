import {USER_KEY} from '../../app.constants';

export default ($http) => {
	'ngInject'

	class wheelsService {

		constructor(){}

		filterList(filter){
			return function(itm) {
				console.log(filter)
				if (filter === 'All') return true
				else return itm.name.slice(0,1) == filter
			}
		}

		getAllMakes() {
			var makes = [];
			return $http
				.get('https://api.wheel-size.com/v1/makes/',{
					cache:true, 
					params: {
						user_key: USER_KEY
					}
				})
				.then((response)=>{
					makes = response.data;
					return makes
				});
		};

		getAllModels(make) {
			var models = [];
			return $http
				.get('https://api.wheel-size.com/v1/models/',{
					cache:true, 
					params: {
						user_key: USER_KEY,
						make: make
					}
				})
				.then((response)=>{
					models = response.data;
					return models
				});
		};

		getAllGenerations(make,model) {
			var generations = [];
			return $http
				.get('https://api.wheel-size.com/v1/generations/',{
					cache:true, 
					params: {
						user_key: USER_KEY,
						make: make,
						model:model
					}
				})
				.then((response)=>{
					generations = response.data;
					return generations
				});
		};

	};
	return new wheelsService();
}