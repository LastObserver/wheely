export default class ModelsController {
	static resolve = {
		resolvedModels($stateParams,wheelsService) {
	    		return wheelsService.getAllModels($stateParams.make).then((models)=>{return models})
	    	},
    	resolvedMakeName($stateParams) {return $stateParams.make}
	}
	constructor(resolvedModels,resolvedMakeName,wheelsService){
		'ngInject'
		this.models = resolvedModels;
		this.make = resolvedMakeName;
		this.filterTabs = wheelsService.filterTabs;
		this.currentFilterKey = '';
	}
}