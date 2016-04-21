
var utils = require('../utils/utils');

var requireValidator = {

  isRequired:function( prop ) {
    return !!prop.required;
  },

  validate:function( value, prop ){

    if ( prop.required ) return !utils.isType(value, 'undefined');

    return true;
  }
};

module.exports = requireValidator;

