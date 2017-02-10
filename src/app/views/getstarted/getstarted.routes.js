import controller from './getstarted.controller'
import templateUrl from './getstarted.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.getstarted',{
		url: '/',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    
	})
}