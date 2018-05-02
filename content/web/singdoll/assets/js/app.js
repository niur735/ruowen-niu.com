$(".doll1").mouseover(function() {
  $(".doll1").css('opacity','1');
});
$(".doll1").mouseout(function() {
  $(".doll1").css('opacity','0');
});

$(".doll2").mouseover(function() {
  $(".doll2").css('opacity','1');
});
$(".doll2").mouseout(function() {
  $(".doll2").css('opacity','0');
});

$(".doll3").mouseover(function() {
  $(".doll3").css('opacity','1');
});
$(".doll3").mouseout(function() {
  $(".doll3").css('opacity','0');
});

$(".doll4").mouseover(function() {
  $(".doll4").css('opacity','1');
});
$(".doll4").mouseout(function() {
  $(".doll4").css('opacity','0');
});

$(".doll5").mouseover(function() {
  $(".doll5").css('opacity','1');
});
$(".doll5").mouseout(function() {
  $(".doll5").css('opacity','0');
});

$(".doll6").mouseover(function() {
  $(".doll6").css('opacity','1');
});
$(".doll6").mouseout(function() {
  $(".doll6").css('opacity','0');
});

$(".doll7").mouseover(function() {
  $(".doll7").css('opacity','1');
});
$(".doll7").mouseout(function() {
  $(".doll7").css('opacity','0');
});





$(document).bind("mousemove", function(e){
    $(".circle").css({
       left:  e.pageX - 100,
       top:   e.pageY - 100
    });
});

var number = $(this).data('button');

var clicked = false;

$(".doll").click(function() {
  if (clicked == false) {
  var myAudio = document.getElementById("audio-"+ $(this).data('button'));
  myAudio.play();
  clicked = true; 
  }
  else{
   var myAudio = document.getElementById("audio-"+  $(this).data('button'));
  myAudio.pause();
  clicked = false;}
  });


var stand = false;
$(".doll").click(function() {
  if (stand == false) {
  $(this).addClass("ondoll"+  $(this).data('button'));
  stand = true; }
  else{$(this).removeClass("ondoll"+  $(this).data('button'));
    stand = false;}
});

$(".open").click(function(){
  $(".open1").css('left','-50vw');
  $(".open2").css('right','-50vw');
});


var light = false;
$(".on").click(function(){
if(light == false) {
 $(".curtain").css('background-color','white');
 $(".lead").html('Turn the light off!');
 $(".doll").css('opacity','1');
  light = true;}  
  else{
 $(".curtain").css('background-color','black');
 $(".lead").html('Turn the light on!');
 $(".doll").css('opacity','0');
  light = false;}
});




