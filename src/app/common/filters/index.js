import angular from 'angular'

const filters = angular.module('Wheely.filters', [])

filters.filter('market', () => function (value) {
  const markets = {
    US: 'США',
    European: 'Европы',
    Southeast: 'Юго-восточной Азии',
    Japanese: 'Японии',
    Australian: 'Австралии'
  }
  const marketName = value.slice(0, value.search(' '))
  return `Внутренний рынок ${markets[marketName]}`
})

export default filters.name
