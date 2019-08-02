const babel =  require('babel-core')
const classPlugin =  require('./plugins/class.js')
const mathPlugin =  require('./plugins/index.js')

const jscode = `
class Foo {
  constructor () {
    this.a = 1
  }
  bar () {
    console.log(this.a)
  }
}
`

const result = babel.transform(jscode, {
  plugins: [classPlugin]
})

console.log(result.code)