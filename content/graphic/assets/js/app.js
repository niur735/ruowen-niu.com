
$('.project').click(
  function() {
    $(".guide").addClass('hide');
    var button = $(this).data('button');
    var result;
    var display;
      if (button == 'panorama') {
        result = '<div>2017 November 28 <br>Design a main poster for a festival. After this, design 2 more sets of posters about the specific information that have the same style or connection with the main poster. </div>';
        display = '<div><img src="assets/img/panorama1.jpg"><img src="assets/img/panorama_poster 1.jpg"><img src="assets/img/panorama2.jpg"></div>';
    } else if (button == 'raleway') {
        result = '<div>2017 November<br>Find a font you like and design a spicemen book for it.</div>';
        display = '<img src="assets/img/raleway1.jpg"><img src="assets/img/raleway2.jpg"><img src="assets/img/raleway3.jpg"><img src="assets/img/raleway4.jpg">';
    } else if (button == 'script') {
        result = '<div>2017 December <br>Choose a movie as source, then design a book for its script. The style of book should match the movie.</div>';
        display = '<img src="assets/img/movie_script_2.jpg">';    
    } else if (button == 'foodwaste'){
        result = '<div>2017 December<br>Design a info graphis for the topic that you worked on this semester.</div>';
        display='<img src="assets/img/foodwaste.jpg" width="450px" height="600px">'
    } else if (button == 'rabbithole'){
        result = '<div>2018 March<br>Creating a brand and design VI for it.A brand is not a logo. The logo may be part of a larger brand system, but the brand doesn’t end with that simple, static mark. In this project, you will develop a fictional organization and develop a flexible brand system for it. You’ll apply this brand across various mediums and create guidelines specifying how the brand can and cannot be moved. </div>';
        display = '<video width="50%" height="50%" controls="controls"><source src="assets/img/ruowen_niu_project3_final.mov" type="video/mp4"></video><img src="assets/img/rabbithole1.jpg"><img src="assets/img/rabbithole2.jpg"><img src="assets/img/rabbithole3.jpg"><img src="assets/img/rabbithole4.jpg">'
    }else if (button == 'spritz'){
        result = '<div>2017 December<br>Design UI for Spritz, a reading app.</div>';
        display = '<img src="assets/img/spritzuidesign.jpg">'
    }else if (button == 'hestral'){
        result = '<div>2018 August<br>Create name and design logo for an real estate company.</div>';
        display = '<img src="assets/img/hestral-1.jpg"><img src="assets/img/hestral-2.jpg">'
    }else if (button == 'ikeaclimate'){
        result = '<div>2018 October<br>In this brief, you will have the chance to transform a cube truck into an immersive retail/promotional experience. This vehicle will set sail upon the streets of NYC docking at various locations allowing patrons to board and purchase exclusive goods and offers.<br>Brand: IKEA<br>Topic: Climate Change</div>';
        display = '<img src="assets/img/ikeaidea.jpg"><img src="assets/img/ikea-1.jpg"><img src="assets/img/ikea3.png"><img src="assets/img/ikea4.png"><img src="assets/img/ikea-2.jpg"><img src="assets/img/ikea-3.jpg"><img src="assets/img/ikea.gif"><img src="assets/img/ikea2.gif"><img src="assets/img/ikea-5.jpg"><img src="assets/img/ikea-6.jpg"><img src="assets/img/ikea-7.jpg">'
    }else if (button == 'ocgender'){
        result = '<div>2018 October<br>Our fashion based client Opening Ceremony has asked our studio to create a campaign that generates awareness for their latest creative collaboration with an artist/designer, or relevant topic  (think censorship, human rights, ecosystem, gender issues etc.). <br>We were chosen for our ability to question traditional responses and upend them in a fun, playful, exciting, and challenging way.</div>';
        display = '<img src="assets/img/oc1.jpg"><img src="assets/img/oc2.jpg"><img src="assets/img/oc3.jpg"><img src="assets/img/oc4.jpg"><img src="assets/img/oc5.jpg"><img src="assets/img/oc6.jpg"><img src="assets/img/oc7.gif">'
    }

    else {
    	result = '<div>2018 February<br>You will chose a topic that interesting to you and find three essays that are related to that topic.You will then set each essay into its own individually designed booklet, creating a series of three. Each booklet must be a different size and use a different layout but connected through a unified type system and grid. You may not use any images, so think about how you can use typography to add interest, texture, and variety.</div>';
        display='<img src="assets/img/magazine1-1.jpg"><img src="assets/img/magazine1-2.jpg"><img src="assets/img/magazine2-1.jpg"><img src="assets/img/magazine2-2.jpg"><img src="assets/img/magazine3-1.jpg">';
    }
$('.description').html(result);
$(".displaybox").html(display);
});




// $('.project').click(
//   function() {
//     var button = $(this).data('button');
//     var display;
//   if (button == 'panorama') {
//         result = '<div>2018 February 28 <br>Using the existing HTML structure of our course homepage, create your own CSS file for the site. Consider how the information it contains could become more legible or useful by changing the arrangement, color, or size of the elements on the page.</div>';
//     } else if (button == 'raleway') {
//         result = '<div>2018 March <br>A group project. We made a list of restaurants that located around the New School. Ruowen did the homepage and the map page. Whole design is inspired by the Pacman game.</div>';
//     } else if (button == 'script') {
//         result = '<div>2018 May <br>A student will construct an interactive “toy” that receives input from a mouse or keyboard. The toy should either form a set of randomized outputs based on a standardized input, or precisely map expectations from input to output in a deterministic manner.</div>';
//     } else if (button == 'foodwaste'){
//         result = '<div>2017 December<br>A concept album about time.</div>';
//     } else if (button == 'rabbithole'){
//         result = '<div>2017 December<br>A concept album about time.</div>';
//     }else {
//         result = '<div>2018 March<br>A secret pattern that randomized outputs through the console.</div>';
//     }
//   });


