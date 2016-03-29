
exports.each = function( properties, callback ){
  for (var name in properties) {
    if ( properties.hasOwnProperty( name ) ) { 
      callback(properties[name], name);
    }   
  }
};

