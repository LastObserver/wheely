import {USER_KEY} from '../../app.constants';

export default ($http,$sce) => {
	'ngInject'

	class wheelsService {

		constructor(){}

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

		getAllGenerations(make,model,year) {
			var generations = [];
			var yearUrl = year ? year + '/' : ''
			return $http
				.get('https://api.wheel-size.com/v1/models/'+make+'/'+model+'/'+yearUrl,{
					cache:true,
					params: {
						user_key: USER_KEY,
					}
				})
				.then((response)=>{
					generations = response.data;
					return generations
				});
		};

		getAllWheels(make,model,year) {
			var wheels = [];
			return $http
				.get('https://api.wheel-size.com/v1/search/by_model/',{
					cache:true,
					params: {
						user_key: USER_KEY,
						make: make,
						model:model,
						year:year
					}
				})
				.then((response)=>{
					wheels = response.data;
					return wheels
				});
		};


	};
	return new wheelsService();
}
