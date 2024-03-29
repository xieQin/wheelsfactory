function* generator() {
  console.log('generator start')
  yield new Promise((resolve, reject) => {
    resolve(1)
  })
  console.log('generator 1')
  yield new Promise((resolve, reject) => {
    console.log('generator 2')
    resolve(2)
  })
}

function co(gen) {
  const iterator = gen();

  function autoRun(iteration) {
    if (iteration.done) {
      return iteration.value;
    }
    const anotherPromise = iteration.value;
    anotherPromise.then(x => {
      return autoRun(iterator.next(x));
    })
  }

  return autoRun(iterator.next());
}
let gen = generator()
console.log(gen.next())
// co(generator)