export default class ModelsController {
  static resolve = {
    resolvedModels($stateParams, wheelsService) {
      return wheelsService.getAllModels($stateParams.make);
    },

    resolvedMake($state, $stateParams, wheelsService) {
      return wheelsService.getAllMakes()
        .then(makesList => makesList.find(element => element.slug === $stateParams.make));
    },
  }

  constructor(resolvedModels, wheelsService, resolvedMake) {
    'ngInject';
    this.models = resolvedModels;
    this.make = resolvedMake;
    this.filterTabs = wheelsService.filterTabs;
    this.currentFilterKey = '';
  }
}
