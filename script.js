//-------------------------- JQuerry --------------------------------------
var $p2 = $(".side");
var pos2 = $p2.position();
var screen_position =  window.scrollY;
//$( side ).text(" top: " + position.top );

if(window.scrollY >= 0 && window.scrollY <= 680){
  $(".side").html("<div class = 'side_p'>Home</div>"); 
  $(".im1").attr({
    fill: "#1597FE"
 });
}
$(document).on("scroll", () => {
  if(window.scrollY >= 0 && window.scrollY <= 680){
    $(".side").html("<div class = 'side_p'>Home</div>"); 
    $(".im1").attr({fill: "#1597FE"});
    $(".im2").attr({fill: "black"});
    $(".im3").attr({fill: "black"});
    $(".im4").attr({fill: "black"});
  }
  if(window.scrollY >= 681 && window.scrollY <= 1317){
    $(".side").html("<div class = 'side_p'>Info</div>");
    $(".im1").attr({fill: "black"});
    $(".im2").attr({fill: "#1597FE"});
    $(".im3").attr({fill: "black"});
    $(".im4").attr({fill: "black"});
  }
  if(window.scrollY >= 1318 && window.scrollY <= 1600){
    $(".side").html("<div class = 'side_p'>Opis</div>"); 
    $(".im1").attr({fill: "black"});
    $(".im2").attr({fill: "black"});
    $(".im3").attr({fill: "#1597FE"});
    $(".im4").attr({fill: "black"});
  }
  if(window.scrollY >= 1601){
    $(".side").html("<div class = 'side_p'>Kontakt</div>"); 
    $(".im1").attr({fill: "black"});
    $(".im2").attr({fill: "black"});
    $(".im3").attr({fill: "black"});
    $(".im4").attr({fill: "#1597FE"});
  }
});
//----------------------------------------------------------------------------
  
