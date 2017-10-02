//Back-End, Business Logic Section
var emptyArray = [""];

function pingPonger(input) {
  var inputNumber = parseInt(input)
  for (var i = inputNumber; i > 0; i = i - 1) {
    if (i % 3 === 0 && i % 15 != 0) {
      emptyArray.push("ping!")
    }else if (i % 5 === 0 && i % 15 != 0) {
      emptyArray.push("pong!")
    }else if (i % 15 === 0) {
      emptyArray.push("ping-pong!")
    }else {
    emptyArray.push(i);
    }
  }
}

//Front-End, User Interface Section
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    $("ul#output").children("li").remove();
    pingPonger(input);
    var newArray = [];
    emptyArray.forEach(function(i) {
      newArray.push("<li>" + i + "</li>");
    });
    newArray.reverse();
    $("#output").append(newArray);
    emptyArray = [""];
  });
});
