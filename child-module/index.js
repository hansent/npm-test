var cowsay = require('cowsay');

exports.test = function(text){
  return cowsay(text);
}
