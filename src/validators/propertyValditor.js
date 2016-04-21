
var propertyUtils = require('../utils/propertyUtils');
var typesValidator = require('./typesValidator');
var requireValidator = require('./requireValidator');
var enumValidator = require('./enumValidator');

propertyValidators = [
  requireValidator,
  typesValidator,
  enumValidator
];


var validate = function( inputProps, specProperties ){

  var validationResult = {};
  var success = true;
 
  propertyUtils.each(inputProps, function(inputProp, inputName){
    propertyUtils.each(specProperties, function( specProp, specPropName ){

      propertyValidators.forEach(function(validator){
        if ( validator.isRequired( specProp ) ) {
          validationResult[specPropName] = {
            value:inputProp
          };

          if ( validator.validate(inputProp, specProp) ) {
            validationResult[specPropName]['success'] = true;
          } else {
            success = false;
            validationResult[specPropName]['success'] = false;
          }
        }
      });

    })
  });

  return {
    success:success,
    validationResult:validationResult
  };
};

exports.validate = validate;

