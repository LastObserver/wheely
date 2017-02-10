import controller from './models.controller'
import templateUrl from './models.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.models',{
		url: '/make/:makeSlug',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    params: {
	    	makeName: null
	    },
	    resolve: {
	    	list: ($stateParams,wheelsService) => {
	    		return wheelsService.getAllModels($stateParams.makeSlug).then((models)=>{return models})
	    	},
	    	makeSlug: ($stateParams) => {return $stateParams.makeSlug},
	    	makeName: ($stateParams) => {return $stateParams.makeName}
	    }
	})
}