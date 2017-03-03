export default class filterTabsController {
	'ngInject'
  static bindings = {
	list: '<',
	currentkey: '='
  }

  getChars() {
	this.firstLetters = [];
	this.list.forEach((element)=>{
		var chr = element.name.slice(0,1);
		if (this.firstLetters.indexOf(chr) == -1) {
			this.firstLetters.push(chr)
		}
	})
	return this.firstLetters
  }
}
