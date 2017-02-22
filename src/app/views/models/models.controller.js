export default class getStartedController {

	constructor(list,make){
		'ngInject'
		this.models = list;
		this.make = make;
		this.curFilter = 'All';
	}
}