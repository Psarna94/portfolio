'use strict';

describe('Directive: mainText', function () {

  // load the directive's module and view
  beforeEach(module('portfolioApp'));
  beforeEach(module('app/mainText/mainText.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-text></main-text>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mainText directive');
  }));
});