export default class getStartedController {

	constructor(list,make,$rootScope){
		'ngInject'
		this.models = list;
		this.make = make
		this.curFilter = 'All'
		if ($rootScope.previousState.name != '') {
			this.isReturning = true;
			this.previous = $rootScope.previousState.name;
		}
		else {
			this.isReturning = false
			this.previous = '/';
		}
	}

	// isReturning($rootScope) {
	// 	if ($rootScope.previousState.name != '') return true
	// 	else return false
	// }
}