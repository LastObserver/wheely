export default class yearsController {

	constructor(list){
		'ngInject'
		var vm = this;
		vm.hasGens = list.generations.length > 0;
		if (list.generations.length > 0) {
			vm.generations = list.generations
		} else {
			vm.generations = [];
			vm.generations[0] = list;
		};
		vm.make = list.make;
		vm.model = list.model;
	}	
	getBodieName(name){
		var splited = name.split('] ');
		return splited[splited.length-1]
	}
}