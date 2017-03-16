export default class WheelsController {
  static resolve = {

    resolvedWheels($stateParams, wheelsService) {
      return wheelsService.getAllWheels(
        $stateParams.make,
        $stateParams.model,
        $stateParams.year
      );
    },
    resolvedModelInfo($stateParams, wheelsService) {
      return wheelsService.getAllGenerations(
        $stateParams.make,
        $stateParams.model
      );
    },
  }

  constructor(resolvedWheels, resolvedModelInfo, $stateParams) {
    'ngInject';
    this.year = $stateParams.year;
    this.wheels = resolvedWheels;
    this.info = resolvedModelInfo;
  }
}
