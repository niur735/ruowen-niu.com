
$('.project').hover(
  function() {
    var button = $(this).data('button');
    var result;
      if (button == 'labhomepage') {
        result = '<div>2018 February 28 <br>Using the existing HTML structure of our course homepage, create your own CSS file for the site. Consider how the information it contains could become more legible or useful by changing the arrangement, color, or size of the elements on the page.</div>';
    } else if (button == 'foodmap') {
        result = '<div>2018 March <br>A group project. We made a list of restaurants that located around the New School. Ruowen did the homepage and the map page. Whole design is inspired by the Pacman game.</div>';
    } else if (button == 'doll') {
        result = '<div>2018 May <br>A student will construct an interactive “toy” that receives input from a mouse or keyboard. The toy should either form a set of randomized outputs based on a standardized input, or precisely map expectations from input to output in a deterministic manner.</div>';
    } else if (button == 'time'){
        result = '<div>2017 December<br>A concept album about time.</div>';
    }else if (button == 'tnsapp'){
        result = '<div>2018 October<br>Re-design The Newschool app.</div>'; 
    }else {
    	result = '<div>2018 March<br>A secret pattern that randomized outputs through the console.</div>';
    }
$('.text').html(result);
});