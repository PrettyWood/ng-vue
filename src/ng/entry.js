import angular from 'angular';

angular
  .module('appModule', [])
  .controller('appCtrl', ['$scope', ($scope) => {
    $scope.pokemon = 'Pikachu';
    $scope.logoUrl = require('./assets/logo.png');
  }])
  .directive('mainApp', () => ({
    template: `
      <div ng-controller="appCtrl">
        <img alt="Vue logo" src="{{ logoUrl }}" />
        <h1>Welcome {{ pokemon }} to Your Angular.js App</h1>
      </div>
    `
  }));

const root = document.getElementById('app');
root.appendChild(document.createElement('main-app'));
angular.bootstrap(root, ['appModule']);
