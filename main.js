$(function() {
  

  ///////////////Fix the pluralize function...
  var pluralize = function (word, number) {
   return number===1 ? word : word + "s";
  };

  ///////////////Make getVictimInfo into a PURE function...
  var getVictimInfo = function() {
    var obj = {};

    for(i=0; i<arguments.length; i++) {
      keyName = arguments[i];
      obj[keyName] = prompt("Please enter your {0}: ".supplant([keyName]));
    };

    return obj;
  };

  // var victim = getVictimInfo("name", "phone", "street");

  // alert('Thank you! Victim entered: \n' +
  //  victim.name + ", " +
  //  victim.phone + ", " +
  //  victim.street);
  	
  /////////////This function removes "falsey" values from the given Array....
  var noFalsey = function(arr) {
    trueArray = filter(arr, function(item) {
      return item;
    });
    return trueArray;
  };

  console.log(noFalsey([0, null, "", undefined, NaN, false,1,2,3,4,5, "string", true]));
});
