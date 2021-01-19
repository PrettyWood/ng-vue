if (localStorage.getItem('USE_VUE')) {
  require('./vue/entry')
} else {
  require('./ng/entry')
}
