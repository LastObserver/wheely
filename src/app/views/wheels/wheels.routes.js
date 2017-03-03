// TODO: getAllGenerations - разобрать что должен возвращаеть метод
//
import controller from './wheels.controller'
import templateUrl from './wheels.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.wheels',{
		url: '/make/:make/:model/:year',
	    controller,
	    controllerAs: '$ctrl',
	    templateUrl,
	    resolve: controller.resolve
	})
}
