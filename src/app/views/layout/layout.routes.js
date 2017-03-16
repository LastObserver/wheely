import templateUrl from './layout.html';

export default ($stateProvider) => {
  'ngInject';

  $stateProvider.state('layout', {
    abstract: true,
    templateUrl,
  });
};
