export default (
	$rootScope,
	$http,
	CacheFactory,
	$state) => {
	'ngInject'

	$rootScope.$on('$stateChangeError',  (event, toState, toParams, fromState, fromParams, error	) => {
	  console.log(error)
	  $state.go('layout.404');
	});

	$http.defaults.cache = new CacheFactory('defaultCache', {
      storageMode: 'localStorage',
    });	
}