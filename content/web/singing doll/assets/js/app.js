var number = $(this).data('button');

$('body').click(function(){console.log(number)});


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
