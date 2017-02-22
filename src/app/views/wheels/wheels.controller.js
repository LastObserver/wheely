export default class getStartedController {

	constructor(list,info) {
		'ngInject'
		this.wheels = list
		this.info = info
		var sorted = {}
		this.wheels.forEach((elem,ind,arr)=>{
			if (!(elem.market.abbr in sorted)) sorted[elem.market.abbr] = [];
			sorted[elem.market.abbr].push(elem)
		})
		this.sortedList = sorted
	}

	getBodies() {
		var bodieList = []
		this.wheels.some((el,ind)=>{
			if (el.generation) {
				if (el.generation.bodies) {
					bodieList = el.generation.bodies;
					this.hasBodies = true;
					return true
				}
			} else {
				this.hasBodies = false;
			}
		});
		return bodieList
	}

}