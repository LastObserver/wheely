export default class NotFoundController {
	static resolve = {
		resolvedFromState($stateParams){
			return $stateParams.from
		}
	}
	constructor(resolvedFromState){
		'ngInject'
		this.from = resolvedFromState
		console.log('not found')
	}
}