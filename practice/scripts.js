$(document).ready(function(){
	$("button#cactus").click(function(){
		$("ul#user").prepend("<li>cactus</li>");
    $("ul#user2").children("li").first().prepend("<li>succulents</li>");
	});

  $("button#succulents").click(function(){
    $("ul#user2").prepend("<li>are the best</li>");
    $("ul#user").prepend("<li>are spiky</li>");

	});
 });
