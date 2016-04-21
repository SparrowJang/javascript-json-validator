var assert = require('assert');
var requireValidator = require('../src/validators/requireValidator');
var jsonValidator = require('../src/index');

describe('requireValidator', function() {
  describe('#validate(value, specProp)', function () {
    var spec = {required:true};

    it('should return true when the value is not undefined', function() {
      assert.equal(true, requireValidator.validate(null, spec));
      assert.equal(true, requireValidator.validate(1, spec));
      assert.equal(true, requireValidator.validate(false, spec));
      assert.equal(true, requireValidator.validate('sparrow', spec));
      assert.equal(true, requireValidator.validate({}, spec));
    });

    it('should return false when the value is undefined', function() {
      var unsetValue;
      assert.equal(false, requireValidator.validate(undefined, spec));
      assert.equal(false, requireValidator.validate(unsetValue, spec));
    });

    it('should return true when the required field is false', function() {
      var ignoreSpec = {require:false};
      assert.equal(true, requireValidator.validate(undefined, ignoreSpec));
      assert.equal(true, requireValidator.validate(true, ignoreSpec));
    });

  });
});

describe('jsonValidator', function() {
  describe('#validate(inputProps, specProps)', function() {
    var spec = {
      definitions:{
        User:{
          properties:{
            id:{
              types:['string'],
              required:true
            },
            name:{
              types:['string'],
              required:true
            },
            sex:{
              types:['string'],
              enum:['man','woman','other']
            }
          }
        }
      }
    };
 
    var User = spec.definitions.User;
    var user = {
      id:'1',
      name:'Sparrow',
      sex:'man'
    };

    it('should return true when the model is legal', function() {
      assert.equal(true, jsonValidator.validate(user, User.properties).success);
    });

  });
});

