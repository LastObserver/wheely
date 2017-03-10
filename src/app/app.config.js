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

  $provide.factory('emptyDataInterceptor', ['$q',function($q){
    return {

      'response': function({data}){
        let isEmpty = angular.equals(data,{}) || data == false;
        let defered = $q.defer();
        if (isEmpty) {
          defered.reject('Данные не найдены!')
        } else {
          defered.resolve(data)
        };
        console.log(data)
        return defered.promise
      }

    } 
  }])

  $httpProvider.interceptors.push('emptyDataInterceptor')
}
