import controller from './404.controller'
import templateUrl from './404.html'

export default ($stateProvider) => {
	'ngInject'
	$stateProvider.state('layout.404',{
		url: '/404',
		controller,
		controllerAs: '$ctrl',
		templateUrl,
		resolve: {
			from: ($stateParams) => {return $stateParams.from}
		}
	})
}