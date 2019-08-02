const babel =  require('babel-core')
const mathPlugin =  require('../plugins/index.js')

test('1 + 2 + 3 equals 6', () => {
  const jscode = `const result = 1 + 2 + 3;`
  const result = babel.transform(jscode, {
    plugins: [mathPlugin]
  })
  expect(result.code).toBe(`const result = 6;`)
})