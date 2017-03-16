import angular from 'angular';

export default function config(
  $httpProvider,
  $locationProvider,
  $urlRouterProvider,
  CacheFactoryProvider,
  UIRouterMetatagsProvider,
  $provide) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true,
  });

  $urlRouterProvider.otherwise(($injector) => {
    const $state = $injector.get('$state');
    $state.go('layout.404');
  });

  UIRouterMetatagsProvider
    .setTitleSuffix(' | Wheely')
    .setDefaultTitle('Wheely')
    .setOGURL(false);

  angular.extend(CacheFactoryProvider.defaults, {
    storageMode: 'localStorage',
  });


  $provide.factory('emptyDataInterceptor', ['$q', $q => ({
    response(response) {
      const data = response.data;
      const isEmpty = !data || angular.equals(data, {}) || data.length === 0;
      const defered = $q.defer();
      if (isEmpty) {
        defered.reject('Данные не найдены!');
      } else {
        defered.resolve(response);
      }
      return defered.promise;
    },
  })]);

  $httpProvider.interceptors.push('emptyDataInterceptor');
}
