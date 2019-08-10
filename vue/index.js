const Vue = require('./Vue.js')

const vue = new Vue ({
  data () {
    return {
      text: 'hello world'
    }
  }
})

vue.mount()
vue._data.text = '111'