import controller from './layout.controller'
import templateUrl from './layout.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout',{
		// url: '/hey',
	 //    abstract: true,
	    controller: controller,
	    controllerAs: '$ctrl',
	    templateUrl
	})
}