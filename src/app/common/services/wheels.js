import angular from 'angular'
import {USER_KEY} from '../../app.constants';

export default ($http,$sce,$q) => {
    'ngInject'

    class WheelsService {

        constructor(){}

        filterTabs(filterKey) {
          return (item) => {
            const firstLetter = item.name.slice(0,1);
            return (filterKey === firstLetter || filterKey === '')
          }
        }


        getAllMakes() {
            return $http
                .get('https://api.wheel-size.com/v1/makes/',{
                    cache:true,
                    params: {
                        user_key: USER_KEY
                    }
                })
                .then(({data}) => data);
        };

        getAllModels(make) {
            return $http
                .get('https://api.wheel-size.com/v1/models/',{
                    cache:true,
                    params: {
                        user_key: USER_KEY,
                        make: make
                    }
                })
                .then(({data}) => data);
        };

        getAllGenerations(make,model,year) {
            var yearUrl = year ? year + '/' : ''
            return $http
                .get('https://api.wheel-size.com/v1/models/'+make+'/'+model+'/'+yearUrl,{
                    cache:true,
                    params: {
                        user_key: USER_KEY,
                    }
                })
                .then((response)=>{
                    generations = response.data;
                    // использовать $q.defer()
                    // или использовать $q как конструктор
                    return new $q((resolve,reject)=>{
                        let isEmpty = angular.equals(generations,{}) || !generations;
                        if (isEmpty) {
                            reject(new Error('Данные не найдены!'))
                        } else {
                            resolve(generations)
                        };
                    });
                    // или можно просто возвращать соответствующие методы 
                    let isEmpty = angular.equals(generations,{}) || !generations;
                    if (isEmpty) {
                        return $q.reject(new Error('Данные не найдены!'))
                    } else {
                        return $q.resolve(generations)
                    };

                });
        };

        getAllWheels(make,model,year) {
            return $http
                .get('https://api.wheel-size.com/v1/search/by_model/',{
                    cache:true,
                    params: {
                        user_key: USER_KEY,
                        make: make,
                        model:model,
                        year:year
                    }
                })
                .then(({data}) => data);
        };


    };
    return new WheelsService();
}
