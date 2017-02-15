import controller from './models.controller'
import templateUrl from './models.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.models',{
		url: '/make/:make',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    params: {
	    	makeName: null
	    },
	    resolve: {
	    	list: ($stateParams,wheelsService) => {
	    		return wheelsService.getAllModels($stateParams.make).then((models)=>{return models})
	    	},
	    	make: ($stateParams) => {return $stateParams.make}
	    }
	})
}