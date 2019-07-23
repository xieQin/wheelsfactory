function MyPromise (executor) {
  let _self = this;
  _self.status = 'pending';
  _self.value = undefined;
  _self.reason = undefined;
  _self.onResolvedCallbacks = [];
  _self.onRejectedCallbacks = [];

  function resolve (result) {
    if (_self.status === 'pending') {
      _self.status = 'fulfilled';
      _self.value = result;
      _self.onResolvedCallbacks.forEach(function( func ) {
        func(result)
      })
    }
  }

  function reject (reason) {
    if (_self.status === 'pending') {
      _self.status = 'rejected';
      _self.reason = reason;
      _self.onRejectedCallbacks.forEach(function( func ) {
        func(reason)
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error) 
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) {
    return value
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
    return err
  }
  let _self = this;
  let promise;

  function resolvePromise (promise, data, resolve, reject) {

  }

  if (_self.status === 'fulfilled') {
    promise = new MyPromise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onFulfilled(_self.value);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error)
        }
      })
    });
  }

  if (_self.status === 'rejected') {
    promise = new MyPromise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onRejected(_self.reason);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error)
        }
      })
    });
  }

  if (_self.status === 'pending') {
    promise = new MyPromise(function(resolve, reject) {
      _self.onResolvedCallbacks.push(function () {
        setTimeout(function() {
          try {
            let x = onFulfilled(_self.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        })
      });

      _self.onRejectedCallbacks.push(function () {
        setTimeout(function() {
          try {
            let x = onRejected(_self.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        })
      });
    })
  }

  return promise
}

MyPromise.prototype.catch = function(callback) {
  return this.then(null, callback);
}

MyPromise.prototype.all = function(promises) {
  return new MyPromise(function(resolve, reject) {
    let arr = [], count = 0;
    promises.forEach(function(p) {
      p.then(function(y) {
        arr.push(y);
        count ++;
        if (count === promises.length) {
          resolve(arr);
        }
      }, reject)
    })
  })
}

MyPromise.prototype.race = function(promises) {
  return new MyPromise(function(resolve, reject) {
    promises.forEach((p) => {
      p.then(resolve, reject);
    })
  })
}

MyPromise.resolve = function(value) {
  return new MyPromise(function(resolve, reject) {
    resolve(value);
  })
}

MyPromise.reject = function(reason) {
  return new MyPromise(function(resolve, reject) {
    reject(reason);
  })
}

