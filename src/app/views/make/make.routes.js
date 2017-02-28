import controller from './make.controller'
import templateUrl from './make.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.make',{
		url: '/make',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: controller.resolve,
	})
}
