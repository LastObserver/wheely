export default class YearsController {
	static resolve = {
    	 resolvedYears($stateParams,wheelsService) {
    		return wheelsService.getAllGenerations($stateParams.make,$stateParams.model)
		}
	}
	constructor(resolvedYears){
		'ngInject'
		var vm = this;
		var list = resolvedYears;
		({generations: vm.generations, make: vm.make, model: vm.model} = list);
		vm.hasGens = list.generations.length > 0;
		if (!vm.hasGens)
			vm.generations[0] = list;
		

		// if (vm.hasGens) {
		// 	vm.generations = list.generations
		// } else {
		// 	vm.generations = [];
		// 	vm.generations[0] = list;
		// };
		// vm.make = list.make;
		// vm.model = list.model;
	}

	getBodieName(name){
		var splited = name.split('] ');
		return splited[splited.length-1]
	}
}