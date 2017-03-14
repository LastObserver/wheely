export default function config(
  $httpProvider,
  $locationProvider,
  $urlRouterProvider,
  $provide) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    // TODO: requireBase: true
    requireBase: true,
  });

  $urlRouterProvider.otherwise(($injector) => {
    const $state = $injector.get('$state');
    $state.go('layout.404');
  });

  $provide.factory('emptyDataInterceptor', ['$q',$q => {
    return {

      'response': function(response){
        let data = response.data
        let isEmpty = angular.equals(data,{}) || data == false;
        let defered = $q.defer();
        if (isEmpty) {
          defered.reject('Данные не найдены!')
        } else {
          defered.resolve(response)
        };
        return defered.promise
      }

    }
  }])

  $httpProvider.interceptors.push('emptyDataInterceptor')
}
