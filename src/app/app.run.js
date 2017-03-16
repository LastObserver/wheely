export default (
  $rootScope,
  $state) => {
  'ngInject';

  $rootScope.$on('$stateChangeError', () => {
    $state.go('layout.404');
  });
};
