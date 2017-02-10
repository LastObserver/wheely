import angular from 'angular';

import wheelsService from './wheels';

export default angular.module('Wheely.resources',[])
	.service('wheelsService', wheelsService)
	.name