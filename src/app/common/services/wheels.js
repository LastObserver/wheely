import angular from 'angular';
import { USER_KEY } from '../../app.constants';

export default ($http) => {
  'ngInject';


  class WheelsService {

    appendTransform(defaults, transform) {
      const defaultsTransform = angular.isArray(defaults) ? defaults : [defaults];
      return defaultsTransform.concat(transform);
    }

    transformWheelsResponse(data) {
      const wheels = data;
      const grouped = {
        markets: {},
        carBodies: [],
      };

      wheels.forEach(element => {
        if (!(element.market.abbr in grouped)) {
          grouped.markets[element.market.abbr] = [];
        }
        grouped.markets[element.market.abbr].push(element);

        if (grouped.carBodies.length === 0 && element.generation) {
          const bodies = element.generation.bodies;
          if (bodies && bodies.length > 0) {
            grouped.carBodies = bodies;
          }
        }
      });

      return grouped;
    }

    filterTabs(filterKey) {
      return (item) => {
        const firstLetter = item.name.slice(0, 1);
        return (filterKey === firstLetter || filterKey === '');
      };
    }


    getAllMakes() {
      return $http
        .get('https://api.wheel-size.com/v1/makes/', {
          cache: true,
          // params: {
          //   user_key: USER_KEY,
          // },
        })
        .then(({ data }) => data);
    }

    getAllModels(make) {
      return $http
        .get('https://api.wheel-size.com/v1/models/', {
          cache: true,
          params: {
            user_key: USER_KEY,
            make,
          },
        })
        .then(({ data }) => data);
    }

    getAllGenerations(make, model) {
      return $http
        .get(`https://api.wheel-size.com/v1/models/${make}/${model}/`, {
          cache: true,
          params: {
            user_key: USER_KEY,
          },
        })
        .then(({ data }) => data);
    }

    getAllWheels(make, model, year) {
      return $http
        .get('https://api.wheel-size.com/v1/search/by_model/', {
          cache: true,
          params: {
            user_key: USER_KEY,
            make,
            model,
            year,
          },
          transformResponse: this.appendTransform(
            $http.defaults.transformResponse,
            data => this.transformWheelsResponse(data)
          ),
        })
        .then(({ data }) => data);
    }


    }
  return new WheelsService();
};
