// TODO: curFilter
export default class getStartedController {
  static resolve = {
    resolvedMakes(wheelsService) {
      return wheelsService.getAllMakes()
    },
  }

  constructor(resolvedMakes) {
    'ngInject'

    this.makes = resolvedMakes
    this.curFilter = 'All'
  }
}
