var mocha = require('mocha');
var chai = require('chai');
var assert = require('chai').assert;
var goodbye = require('../src/goodbye');

describe('goodbye', function() {
  it("Returns a string of goodbye plus the name that was passed.", function() {
    var output = goodbye.sayGoodbye("Dave");
    assert.equal(output, "Goodbye Dave.");
  });
});