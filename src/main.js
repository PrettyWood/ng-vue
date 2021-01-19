window.useVue  = () => {
  localStorage.setItem('USE_VUE', 1);
  location.reload();
}

window.useNg = () => {
  localStorage.removeItem('USE_VUE');
  location.reload();
}

const isUsingVue = () => localStorage.getItem('USE_VUE') !== null;

window.switchEntry = () => {
  if (isUsingVue()) {
    window.useNg();
  } else {
    window.useVue();
  }
}

if (isUsingVue()) {
  console.info('Using Vue.js entry point...');
  require('./vue/entry')
} else {
  console.info('Using AngularJS entry point...');
  require('./ng/entry')
}
