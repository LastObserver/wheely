export default class FilterTabsController {
  'ngInject'
  static bindings = {
    list: '<',
    currentKey: '=',
  }

  getChars() {
    this.firstLetters = [];
    this.list.forEach(element => {
      const chr = element.name.slice(0, 1);
      if (!this.firstLetters.includes(chr)) {
        this.firstLetters.push(chr);
      }
    });
    return this.firstLetters;
  }
}
