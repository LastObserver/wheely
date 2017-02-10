import angular from 'angular';

import angularCache from 'angular-cache';
import angularRouter from 'angular-ui-router';
import config from './app.config';
import views from './views';
import services from './common/services';
import './stylesheets/application.styl';
import filters from './common/filters';


angular.module('Wheely',[
	angularCache,
	angularRouter,
	views,
	services,
	filters
])
	.config(config)
	.run(($http,$state,CacheFactory) => {
		$http.defaults.cache = CacheFactory('defaultCache',{
			storageMode: 'localStorage'
		});
		console.log($state.get())
	})

angular.bootstrap(document, ['Wheely'])