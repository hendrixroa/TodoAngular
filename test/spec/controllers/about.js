'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
  expect(scope.awesomeThings.length).toBe(2);
  });
});
