export default class layoutController {

	constructor($state){
		this.$state = $state
	}
	hasItems() {
		if (this.$state.current === 'layout.years' || 'layout.wheels') return '_itemed'
		else return ''
	}
}