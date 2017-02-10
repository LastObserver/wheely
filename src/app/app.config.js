import angular from 'angular'

export default function config(
	$httpProvider,
	$locationProvider,
	$urlRouterProvider,
	CacheFactoryProvider,
	$stateProvider) {
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	// var states = [
	// 	{
	// 		name: 'layout',
	// 		url: '/',
	// 	    abstract: true,
	// 	    templateUrl: './views/layout/layout.html'
	// 	},
	// 	// {
	// 	// 	name: 'make',
	// 	// 	url: '/make',
	// 	// 	component: 'make',
	// 	// 	resolve: {
	// 	// 		makes: function(wheelyService) {
	// 	// 			return wheelyService.getAllMakes()
	// 	// 		}
	// 	// 	}
	// 	// }
	// ];
	// states.forEach(function(state){
	// 	$stateProvider.state(state);
	// })
}