import templateUrl from './404.html';

export default ($stateProvider) => {
  'ngInject';
  $stateProvider.state('layout.404', {
    url: '/404',
    templateUrl,
    metaTags: {
      title: '404',
    },
  });
};
