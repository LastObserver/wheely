import controller from './make.controller'
import templateUrl from './make.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.make',{
		url: '/make',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: {
	    	list: (wheelsService) => {return wheelsService.getAllMakes().then((makes)=>{return makes})}
	    }
	})
}