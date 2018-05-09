
"use strict";
var mouseTails = document.getElementsByClassName("page-mouse-tail");
document.addEventListener("mousemove", function(event) {
  Array.prototype.forEach.call(mouseTails, function(tail) {
    tail.style.left = event.pageX + "px";
    tail.style.top = event.pageY + "px";

    //   tail.style.left = (event.pageX - 110) + "px";
    // tail.style.top = (event.pageY - 110)  + "px";
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
 $(".tail").removeClass('page-mouse-tail')
  light = true;}  
  else{
 $(".tail").addClass('page-mouse-tail')
  light = false;}
});








