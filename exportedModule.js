//This is to export

var greeting = function (name){
  console.log("Hi, thanks for importing me " + name);
  trap();
}

module.exports = greeting;


function trap(){
  return console.log("You activated my trap function that wasn't exported!");
}