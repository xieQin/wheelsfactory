class VElement {
  constructor(tag, props, childs, key) {
    this.tag = tag
    this.props = props
    if (Array.isArray(childs)) {
      this.childs = childs
    } else if (typeof childs === 'string') {
      this.key = childs
      this.childs = null
    }
    if (key) this.key = key
  }

  setAttr (el, key, val) {
    switch (key) {
      case 'style':
        el.css.styText = val
        break
      case 'value':
        let name = key.toLowerCase()
        if (name == 'input' || name == 'textarea') {
          ele.value = val
        } else {
          el.setAttribute(key, val)
        }
        break
      default:
        el.setAttribute(key, val)
        break
    }
  }

  createElement () {
    let tag = this.tag, props = this.props, childs = this.childs, key = this.key
    let el = document.createElement(tag)
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        el.setAttribute(el, key, props[key])
      }
    }
    if (key) el.setAttribute('key', props[key])
    if (childs) {
      childs.forEach(element => {
        let child
        child = element instanceof VElement ? element.create(): document.createTextNode(element)
        el.appendChild(child)
      })
    }
  }

  render () {
    let ele = this.createElement(
      this.tag,
      this.props,
      this.childs,
      this.key
    )
    return ele
  }

  create () {
    return this.createElement()
  }
}

const createElement = (...args) => {
  return new VElement(...args)
}

module.exports = {
  createElement
}