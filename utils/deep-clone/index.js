function deepCloneSimple (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function deepClone (obj) {
  let result
  if (typeof obj === 'object') {
    result = obj instanceof Array ? [] : {}
    for (let key in obj) {
      result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]): obj[key]
    }
  } else {
    result = obj
  }
  return result
}

let obj = {
  foo: {
    a: 1
  },
  bar: [1, 2, 3],
}
let obj2 = 1
console.log(deepCloneSimple(obj))
console.log(deepClone(obj))
console.log(deepClone(obj2))