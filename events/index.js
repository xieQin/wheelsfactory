class Events {
  constructor () {
    this._events = this._events || new Map()
  }

  addListener (type, fn) {
    if (!this._events.get(type)) {
      this._events.set(type, fn)
    }
  }

  emit (type) {
    let handle = this._events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

const A = new Events()

A.addListener('test', (val) => {
  console.log(val)
})

A.emit('test', '111')