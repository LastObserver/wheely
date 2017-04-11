import controller from './generations.controller';
import templateUrl from './generations.html';

export default ($stateProvider) => {
  'ngInject';
  $stateProvider.state('layout.generations', {
    url: '/make/:make/:model',
    controller,
    controllerAs: '$ctrl',
    templateUrl,
    resolve: controller.resolve,
    metaTags: {
      title(resolvedGenerations) {
        'ngInject';
        return `${resolvedGenerations.make.name} ${resolvedGenerations.model.name}`;
      },
    },
  });
};
