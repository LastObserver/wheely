export default class filterTabsController {
	'ngInject'
  static bindings = {
	list: '<',
	current: '='
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

	activeFilter(char) {
		if (char == this.current) return 'active'
		else return ''
	}
}
