
var isType = function( val, type ){ 
  return typeof val === type;
};

var isArray = function( value ){
  return isType( value, 'object' ) && Object.prototype.toString.call(value) === '[object Array]';
};

exports.isType = isType;
exports.isArray = isArray;

