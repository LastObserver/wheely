export default class getStartedController {

	constructor(list,makeSlug,modelSlug){
		'ngInject'
		this.gens = list;
		this.make = makeSlug;
		this.model = modelSlug;
	}	
	getBodieName(name){
		var splited = name.split('] ')
		return splited[splited.length-1]
	}
}