export default class getStartedController {

	constructor(list,makeSlug,makeName){
		'ngInject'
		var it = this
		it.models = list;
		it.make = {};
		it.make['slug'] = makeSlug;
		it.make['name'] = makeName;
		it.firstLetters = [];
		it.models.forEach((element)=>{
			var chr = element.name.slice(0,1);
			console.log(it.firstLetters.indexOf(chr))
			if (it.firstLetters.indexOf(chr) == -1) {
				it.firstLetters.push(chr)
			}
		})
		it.curFilter = 'All'
	}

	activeFilter(char) {
		if (char == this.curFilter) return 'active'
		else return ''
	}
}