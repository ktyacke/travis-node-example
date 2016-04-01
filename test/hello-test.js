var mocha = require('mocha');
var chai = require('chai');
var assert = require('chai').assert;
var hello = require('../src/hello');

describe('hello', function() {
  it("Returns a string of hello plus the name that was passed.", function() {
    var output = hello.sayHello("Dave");
    assert.equal(output, "Hello Dave.");
  });
});
