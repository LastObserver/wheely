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

	// $urlRouterProvider.rule(($injector, $location) => {
	// 	const [path, query] = $location.url().split('?');

	// 	if (path[path.length - 1] === '/') {
	// 	  return `${path.slice(0, path.length - 1)}${query ? `?${query}` : ''}`;
	// 	}
	// });
}