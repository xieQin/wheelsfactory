const babel =  require('babel-core')
const mathPlugin =  require('../plugins/index.js')

test('5 - 3 - 3 equals -1', () => {
  const jscode = `const result = 5 - 3 - 3;`
  const result = babel.transform(jscode, {
    plugins: [mathPlugin]
  })
  expect(result.code).toBe(`const result = -1;`)
})