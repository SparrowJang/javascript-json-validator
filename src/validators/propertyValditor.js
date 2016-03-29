
var propertyUtils = require('../utils/propertyUtils');
var utils = require('../utils/utils');

var typesValidator = (function(){

  var _validatorMap = {

    number: function( value ){
      return utils.isType( value, 'number' );
    },

    integer: function( value ){
      return this.number( value ) && !/\./.test( value );
    },

    string: function( value ){
      return utils.isType( value, 'string' );
    },

    boolean:function( value ){
      return utils.isType( value, 'boolean' );
    },

    object: function( value ){
      return utils.isType( value, 'object' );
    },

    array:  function( value ){
      return utils.isArray( value );
    }
  };

  var _getValidtor = function( type ){
    return _validatorMap[type];
  };

  return {

    isRequired:function( prop ){
      return !!prop.types;
    },

    validate: function( value, prop ){
      var types = prop.types;
      var valid;
      var validateType;
      var type;

      for (var index in types) {
        type = types[index];
        validateType = _getValidtor( type );
        valid = false;

        if ( !validateType ) throw Exception('The "' + type + '" type is not support!');

        if ( validateType( value ) ) {
          valid = true;
          break;
        }
      }

      return valid;
    }
  };
})();


var requireValidator = {

  isRequired:function( prop ) {
    return !!prop.required;
  },

  validate:function( value, prop ){

    if ( prop.required ) return !utils.isType(value, 'undefined');

    return true;
  }
};

propertyValidators = [
  requireValidator,
  typesValidator
];


var validate = function( inputProps, properties ){
 
  propertyUtils.each(inputProps, function(inputProp, inputName){
    propertyUtils.each(properties, function( prop, propName ){
      console.log(prop, propName);
      propertyValidators.forEach(function(validator){
        if ( validator.isRequired( prop ) )
        console.log(validator.validate(inputProp, prop));
      });
    })
  });
};

exports.validate = validate;

