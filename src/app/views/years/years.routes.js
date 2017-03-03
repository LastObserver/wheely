import controller from './years.controller'
import templateUrl from './years.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.years',{
		url: '/make/:make/:model',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: controller.resolve,
	})
}