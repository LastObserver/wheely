import angular from 'angular'

export default function config(
	$httpProvider,
	$locationProvider,
	$urlRouterProvider,
	CacheFactoryProvider,
	$stateProvider) {
	'ngInject'
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	$urlRouterProvider.when('/wheely',['$state',($state)=>{
		$state.go('layout.getstarted')
	}])
	$urlRouterProvider.otherwise(($injector) => {
	    const $state = $injector.get('$state');
	    $state.go('layout.404');
  });
}