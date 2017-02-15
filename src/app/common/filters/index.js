import angular from 'angular'

const filters = angular.module('Wheely.filters',[])

filters.filter('filterList',function(){
	return function(items,char) {
		if (!char) return
		// console.log('filterList',arguments);
		var filtered = [];
		angular.forEach(items,function(item){
			var firstLetter = item.name.slice(0,1)
			if (firstLetter == char || char == 'All')  {
				filtered.push(item)
			}
		})
		return filtered;
	}
})

filters.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

filters.filter('market',function(){
	return function(value) {
		var markets = {
			"US":'США',
			'European' : 'Европы',
			'Southeast':'Юго-восточной Азии'
		}
		console.log(value)
		var marketName = value.slice(0,value.search(' '))
	return 'Внутренний рынок ' + markets[marketName]

	}
})

export default filters.name