class Events {
  constructor () {
    this._events = this._events || new Map()
  }

  on (type, fn) {
    if (!this._events.get(type)) {
      this._events.set(type, fn)
    }
  }

  emit (type) {
    let handle = this._events.get(type)
    if (handle) {
      handle.apply(this, [...arguments].slice(1))
    }
  }

  off (type) {
    if (this._events.get(type)) {
      this._events.set(type, null)
    }
  }
}

const A = new Events()

A.on('test', (val) => {
  console.log(val)
})

A.on('test2', (val) => {
  console.log(val)
})

A.off('test2')

A.emit('test', '111')

A.emit('test2', '222')
