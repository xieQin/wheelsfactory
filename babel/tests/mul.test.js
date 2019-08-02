const babel =  require('babel-core')
const mathPlugin =  require('../plugins/index.js')

test('(10 * 2 * 5 + 3 + 10 - 10 - 20) equals 83', () => {
  const jscode = `const result = 10 * 2 * 5 + 3 + 10 - 10 - 20;`
  const result = babel.transform(jscode, {
    plugins: [mathPlugin]
  })
  expect(result.code).toBe(`const result = 83;`)
})