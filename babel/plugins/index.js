const babel = require('babel-core')
const types = require('babel-types')

const visitor = {
  BinaryExpression(path) {
    const node = path.node
    let result
    if( types.isNumericLiteral(node.left) && types.isNumericLiteral(node.right)) {
      switch(node.operator) {
        case '+':
          result = node.left.value + node.right.value
          break;
        case '-':
          result = node.left.value - node.right.value
          break;
        case '*':
          result = node.left.value * node.right.value
          break;
        case '/':
          result = node.left.value / node.right.value
          break;
        case '**':
          let i = node.right.value
          while( --i ) {
            result = result || node.left.value
            result = result * node.left.value
          }
          break;
        default:
      }
    }
    if (result) {
      path.replaceWith(types.numericLiteral(result))
      let parentPath = path.parentPath

      parentPath && visitor.BinaryExpression.call(this, parentPath)
    }
  }
}

module.exports = function (babel) {
  return {
    visitor
  }
}