export default class getStartedController {

	constructor(list,makeSlug,modelSlug,$rootScope){
		'ngInject'
		this.gens = list;
		this.make = makeSlug;
		this.model = modelSlug;
		console.log($rootScope.previousState)

	}	
	getBodieName(name){
		var splited = name.split('] ')
		return splited[splited.length-1]
	}
}