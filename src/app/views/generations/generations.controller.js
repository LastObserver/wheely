export default class GenerationsController {
  static resolve = {
    resolvedGenerations($stateParams, wheelsService) {
      return wheelsService.getAllGenerations($stateParams.make, $stateParams.model);
    },
  }

  constructor(resolvedGenerations) {
    'ngInject';
    const vm = this;
    ({ make: vm.make, model: vm.model } = resolvedGenerations);
    vm.hasGens = resolvedGenerations.generations.length > 0;
    vm.generations = vm.hasGens ? resolvedGenerations.generations : [resolvedGenerations];
  }

  getBodieName(name) {
    const splitedName = name.split('] ');
    return splitedName[splitedName.length - 1];
  }
}
