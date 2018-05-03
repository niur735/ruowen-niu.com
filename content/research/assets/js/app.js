
$('.project').hover(
  function() {
    var button = $(this).data('button');
    var result;
      if (button == '1600') {
        result = '<div>2016 December <br>By using words and grammars from class, students should describe one artwork that they choose clearly and try to analyse it. </div>';
    } else if (button == 'studio1') {
        result = '<div>2017 March <br>A group project. Students did three short interviews with neighbors of the school. Based on the information they get from the interview, each students should write one part of story, then connect them together. As final, each grounp should have a fiction that writen by three group members. </div>';
    } else if (button == '1700') {
        result = '<div>2017 April <br>This is an essay that compare Ralph Lauren and Calvin Klein in different aspects by knowing their experience.</div>';
    } else if (button == 'studio1-2'){
        result = '<div>2017 April<br>This is an essay that compare Ai Weiwei and Zhang Xiaogang from their life experience and their art styles.</div>';
    } else if (button == 'introtodesign'){
        result = '<div>2018 April<br>This is an essay that talks about the design han historical background of the Central Park and how it reflects the material culture</div>';
    } 
    else {
    	result = '<div>2017 July<br>This is essay focus on the how western feminism influence Chinese society. By analysing posters from western society and China around 1990s, author wanted to show the process of how things happened. </div>';
    }
$('.text').html(result);
});