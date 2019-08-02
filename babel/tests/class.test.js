const babel = require('babel-core')
const classPlugin = require('../plugins/class.js')

test('es6 class covert to es5', () => {
  const jscode = `
  class Foo {
    constructor () {
      this.a = 1
    }

    foo () {
      console.log(this.a)
    }

    bar () {
      this.a = 2
    }
  }
  `
  const result = babel.transform(jscode, {
    plugins: [classPlugin]
  })
  const expectResult = `Foo.prototype.foo = function () {
    console.log(this.a);
  }
  Foo.prototype.bar = function () {
    this.a = 2;
  }
  function Foo() {
    this.a = 1;
  }`
  // expect(result.code).toBe(
  // `Foo.prototype.foo = function () {
  //   console.log(this.a);
  // }
  // Foo.prototype.bar = function () {
  //   this.a = 2;
  // }
  // function Foo() {
  //   this.a = 1;
  // }`)
})