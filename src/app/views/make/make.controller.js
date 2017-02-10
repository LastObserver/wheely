export default class getStartedController {

	constructor($stateParams,wheelsService,list){
		'ngInject'
		this.wheelsService = wheelsService;
		this.makes = list;
		// console.log(list)
	}
	// getdata() {
	// 	this.wheelsService.getAllMakes().then((makes)=>{
	// 		this.makes = makes
	// 	});
	// 	console.log(this.makes)
	// }
}