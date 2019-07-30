function* generator() {
  console.log('generator start')
  yield new Promise((resolve, reject) => {
    resolve(1)
  })
  console.log('generator 1')
  console.log('generator 1')
  yield new Promise((resolve, reject) => {
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

co(generator)