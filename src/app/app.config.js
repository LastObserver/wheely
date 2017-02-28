export default function config(
  $httpProvider,
  $locationProvider,
  $urlRouterProvider) {
  'ngInject'

  $locationProvider.html5Mode({
    enabled: true,
    // TODO: requireBase: true
    requireBase: false,
  })

  // $urlRouterProvider.when('/wheely', ['$state', ($state) => {
    // $state.go('layout.getstarted')
  // }])

  $urlRouterProvider.otherwise(($injector) => {
    const $state = $injector.get('$state')
    $state.go('layout.404')
  })
}
