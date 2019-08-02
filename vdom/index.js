const {
  createElement
} = require('./vdom')
const {
  diff
} = require('./diff')
const {
  patch
} = require('./patch')

let oldEle = createElement('div', { class: 'father' }, [
  createElement('h1', { style: 'color:red' }, ['son1'], 1),
  createElement('h2', { style: 'color:blue' }, ['son2'], 2),
  createElement('h3', { style: 'color:red' }, ['son3'], 3)
])

let newEle = createElement('div', { class: 'father' }, [
  createElement('h1', { style: 'color:red' }, ['son1'], 1),
  createElement('h2', { style: 'color:blue' }, [], 2)
])
console.log(oldEle.childs)
// let rootEle = oldEle.render()
// let patches = diff(newEle, oldEle)
// patch(rootEle, patches)
// console.log(patches)