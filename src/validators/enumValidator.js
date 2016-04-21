
var _ = require('underscore');

var enumValidator = {

  isRequired:function( prop ) {
    if ( prop.enum ) return true; else return false;
  },

  validate:function( value, prop ) {

    var enumValues = prop.enum;

    if ( _.contains(enumValues, value) ) return true;

    if ( _.findWhere(enumValues, value) ) return true;

    return false;
  }

};

module.exports = enumValidator;

