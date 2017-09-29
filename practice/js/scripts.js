var vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var inputArray= [""]

var pigLatin = function(input) {
  for (var i = 0; i <input.length; i++) {
    if (vowels.includes(input.charAt(i)) {
      break;
      } else {
      var beginningArray = [input.slice(0, i+1)];
      var endArray = [input.slice(i + 1)];
    }
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var input = $("input#year").val();
    var result = pigLatin(input);
    $("#result").text(result);
  });
});
