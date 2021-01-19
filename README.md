# ng-vue

POC to illustrate how to dynamically switch between an AngularJS and a Vue.js entry point
By default, the Angular version will be launched.
To use the Vue one just open your console, do
```js
localStorage.setItem('USE_VUE', 1);
location.reload();
```
To switch back to Angular, simply do
```js
localStorage.clear();
location.reload();
```

## Installation
```
yarn install
```

### Run locally
```
yarn serve
```
