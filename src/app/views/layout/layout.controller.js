// TODO: http://localhost:8080/make/baojun/730 - поменять поведение content
// TODO: именна классов с большой буквы
//
export default class LayoutController {
  constructor($state) {
    'ngInject'

    this.$state = $state
  }

  hasItems() {
    const condition = ['layout.years', 'layout.wheels'].includes(this.$state.current.name)

    if (condition) return '_itemed'
    else return
  }
}
