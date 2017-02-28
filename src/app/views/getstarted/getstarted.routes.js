import templateUrl from './getstarted.html'

export default ($stateProvider) => {
  'ngInject'

  $stateProvider.state('layout.getstarted', {
    url: '/',
    templateUrl,
  })
}
