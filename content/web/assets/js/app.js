
$('.project').hover(
  function() {
    var button = $(this).data('button');
    var result;
      if (button == 'labhomepage') {
        result = '<div><div class="date">2018 February 28</div>Using the existing HTML structure of our course homepage, create your own CSS file for the site. Consider how the information it contains could become more legible or useful by changing the arrangement, color, or size of the elements on the page.</div>';
    } else if (button == 'foodmap') {
        result = '<div><div class="date">2018 March</div>A group project. We made a list of restaurants that located around the New School. Ruowen did the homepage and the map page. Whole design is inspired by the Pacman game.</div>';
    } else if (button == 'doll') {
        result = '<div><div class="date">2018 May</div>A student will construct an interactive “toy” that receives input from a mouse or keyboard. The toy should either form a set of randomized outputs based on a standardized input, or precisely map expectations from input to output in a deterministic manner.</div>';
    } else if (button == 'time'){
        result = '<div><div class="date">2017 December</div>A concept album about time.</div>';
    }else if (button == 'tnsapp'){
        result = '<div><div class="date">2018 October</div>Re-design The Newschool app.</div>'; 
    }else if (button == 'calculator'){
        result = '<div><div class="date">2019 March</div>A restaurant check splitting calculator that will figure out exactly what each person dining owes plus tax and tip</div>'; 
    }else if (button == 'gifto'){
        result = '<div><div class="date">2018 December</div>A self-designed app for helping people to remind others birthday and find the gift that fits each person</div>'; 
    }else {
    	result = '<div><div class="date">2018 March</div>A secret pattern that randomized outputs through the console.</div>';
    }
$('.text').html(result);
});


