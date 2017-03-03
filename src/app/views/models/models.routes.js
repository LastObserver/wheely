import controller from './models.controller'
import templateUrl from './models.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.models',{
		url: '/make/:make',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: controller.resolve
	})
}