export default class getStartedController {

	constructor($stateParams,wheelsService,list){
		'ngInject'
		this.wheelsService = wheelsService;
		this.makes = list;
		this.curFilter = 'All'
	}
}