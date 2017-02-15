export default class layoutController {

	constructor($state){
		'ngInject'
		this.$state = $state
	}
	hasItems() {
		if (this.$state.current.name == 'layout.years' || this.$state.current.name == 'layout.wheels') return '_itemed'
		else return ''
	}
}