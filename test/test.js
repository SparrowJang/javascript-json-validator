var assert = require('assert');
var jsonValidator = require('../src/index');

var spec = {
  definitions:{
    User:{
      properties:{
        id:{
          types:["string"],
          required:true
        },
        name:{
          types:["string"],
          required:true
        },
        sex:{
          types:["string"],
          enum:["man","woman","other"]
        }
      }
    }
  }
};

var User = spec.definitions.User;
var user = {
  id:"1",
  name:"Sparrow",
  sex:"man"
};

console.log(jsonValidator.validate(user, User.properties));

