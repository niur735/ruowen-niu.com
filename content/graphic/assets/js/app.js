
$('.project').click(
  function() {
    $(".guide").addClass('hide');
    var button = $(this).data('button');
    var result;
    var display;
      if (button == 'panorama') {
        result = '<div><div class="date">2017 November 28 </div>Design a main poster for a festival. After this, design 2 more sets of posters about the specific information that have the same style or connection with the main poster. </div>';
        display = '<div><img src="assets/img/panorama1.jpg"><img src="assets/img/panorama_poster 1.jpg"><img src="assets/img/panorama2.jpg"></div>';
    } else if (button == 'raleway') {
        result = '<div><div class="date">2017 November</div>Find a font you like and design a spicemen book for it.</div>';
        display = '<img src="assets/img/raleway1.jpg"><img src="assets/img/raleway2.jpg"><img src="assets/img/raleway3.jpg"><img src="assets/img/raleway4.jpg">';
    } else if (button == 'script') {
        result = '<div><div class="date">2017 December </div>Choose a movie as source, then design a book for its script. The style of book should match the movie.</div>';
        display = '<img src="assets/img/movie_script_2.jpg">';    
    } else if (button == 'foodwaste'){
        result = '<div><div class="date">2017 December</div>Design a info graphis for the topic that you worked on this semester.</div>';
        display='<img src="assets/img/foodwaste.jpg" width="450px" height="600px">'
    } else if (button == 'rabbithole'){
        result = '<div><div class="date">2018 March</div>Creating a brand and design VI for it.A brand is not a logo. The logo may be part of a larger brand system, but the brand doesn’t end with that simple, static mark. In this project, you will develop a fictional organization and develop a flexible brand system for it. You’ll apply this brand across various mediums and create guidelines specifying how the brand can and cannot be moved. </div>';
        display = '<video width="50%" height="50%" controls="controls"><source src="assets/img/ruowen_niu_project3_final.mov" type="video/mp4"></video><img src="assets/img/rabbithole1.jpg"><img src="assets/img/rabbithole2.jpg"><img src="assets/img/rabbithole3.jpg"><img src="assets/img/rabbithole4.jpg">'
    }else if (button == 'spritz'){
        result = '<div><div class="date">2017 December</div>Design UI for Spritz, a reading app.</div>';
        display = '<img src="assets/img/spritzuidesign.jpg">'
    }else if (button == 'hestral'){
        result = '<div><div class="date">2018 August</div>Create name and design logo for an real estate company.</div>';
        display = '<img src="assets/img/hestral-1.jpg"><img src="assets/img/hestral-2.jpg">'
    }else if (button == 'ikeaclimate'){
        result = '<div><div class="date">2018 October</div>In this brief, you will have the chance to transform a cube truck into an immersive retail/promotional experience. This vehicle will set sail upon the streets of NYC docking at various locations allowing patrons to board and purchase exclusive goods and offers.<br>Brand: IKEA<br>Topic: Climate Change</div>';
        display = '<img src="assets/img/ikeaidea.jpg"><img src="assets/img/ikea-1.jpg"><img src="assets/img/ikea3.png"><img src="assets/img/ikea4.png"><img src="assets/img/ikea-2.jpg"><img src="assets/img/ikea-3.jpg"><img src="assets/img/ikea.gif"><img src="assets/img/ikea2.gif"><img src="assets/img/ikea-5.jpg"><img src="assets/img/ikea-6.jpg"><img src="assets/img/ikea-7.jpg">'
    }else if (button == 'ocgender'){
        result = '<div><div class="date">2018 October</div>Our fashion based client Opening Ceremony has asked our studio to create a campaign that generates awareness for their latest creative collaboration with an artist/designer, or relevant topic  (think censorship, human rights, ecosystem, gender issues etc.). <br>We were chosen for our ability to question traditional responses and upend them in a fun, playful, exciting, and challenging way.</div>';
        display = '<img src="assets/img/oc1.jpg"><img src="assets/img/oc2.jpg"><img src="assets/img/oc3.jpg"><img src="assets/img/oc4.jpg"><img src="assets/img/oc5.jpg"><img src="assets/img/oc6.jpg"><img src="assets/img/oc7.gif">'
    }else if (button == 'kumo'){
        result = '<div><div class="date">2019 May</div>Sans Kumo is a typeface that design for both texting and displaying useage. <br>Kumo means cloud in Japanese. The name of Sans Kumo shows its aim of creating a light, fresh and delicate feeling. Overall, Sans Kumo is modern and concise, but also has decorative datails which makes it full of design. The main design is the curve on all vertical strokes’ top. The curve is inspired by the using of nature shape that happened during the Art Neaveau period.</div>';
        display = '<img src="assets/img/kumo01.png"><img src="assets/img/kumo02.png"><img src="assets/img/kumo03.png"><img src="assets/img/kumo04.png"><img src="assets/img/kumo05.png">'
    }else if (button == 'pasta'){
        result = '<div><div class="date">2019 October</div>Redesign the VI for Rustichella Abruzzo.</div>';
        display = '<img src="assets/img/pasta01.png"><img src="assets/img/pasta02.png"><img src="assets/img/pasta03.png"><img src="assets/img/pasta04.png"><img src="assets/img/pasta05.png"><img src="assets/img/pasta06.png"><img src="assets/img/pasta07.png"><img src="assets/img/pasta08.png">'
    }else if (button == 'three'){
        result = '<div><div class="date">2019 December</div>Creating a brand that offers coworking space for people. </div>';
        display = '<img src="assets/img/three01.png"><img src="assets/img/three02.png"><img src="assets/img/three03.png"><img src="assets/img/three04.png"><img src="assets/img/three05.png"><img src="assets/img/three06.png"><img src="assets/img/three07.png"><img src="assets/img/three08.png">'
    }else if (button == 'thesis'){
        result = '<div><div class="date">2020 May</div>In this project I attempt to deconstruct the traditional image of the book. Repurposing classic works of philosophy and fiction, I modify literary forms through erasure and concealment. Taking my inspiration from a novel A called Void, (a book written entirely without the use of the letter e), I wanted to make a statement through that which is missing.</div>';
        display = '<img src="assets/img/thesis0.JPG"><br><br><div class="addon">My first revision was of Alice in Wonderland, where I cut words from the original text to change the fantastical tale into a murder mystery. I was fascinated by the potential use of editing to subvert the meaning of this story, (absurd to begin with), into something even stranger. All that remains of the original cover illustration is the image of a rabbit, and a fragment resembling a knife.</div><img src="assets/img/thesis01.gif"><br><br><div class="addon">The second book I reworked was Being and Nothingness by Jean-Paul Sartre. Printed on translucent paper, the writing is rendered completely illegible as the text block is subsumed by the black mass below. The only possible way to read the book is to hold a white bookmark underneath each page. Meaning emerges from blankness.</div><img src="assets/img/thesis02.gif"><img src="assets/img/thesis03.gif"><div class="addon"><br><br>Thirdly, I approached Finnegans Wake — a novel many claim to be the most difficult book in the history of mankind, not only because of the stream-of-consciousness writing technique, but also because the numerous examples and metaphors in the text require the reader to have a rich background knowledge. To heighten this sense of complexity, I covered every square inch of the book with Post-Its explaining details of the narrative; digressions upon digressions.</div><br><br><br><br><img src="assets/img/thesis05.jpg"><img src="assets/img/thesis06.jpg">'
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


