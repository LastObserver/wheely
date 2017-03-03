// TODO: curFilter
export default class MakeController {
  static resolve = {
    resolvedMakes(wheelsService) {
      return wheelsService.getAllMakes()
    }
  }

  constructor(resolvedMakes,wheelsService) {
    'ngInject'
    this.filterTabs = wheelsService.filterTabs;
    this.makes = resolvedMakes;
    this.currentFilterKey = '';
  }
}
