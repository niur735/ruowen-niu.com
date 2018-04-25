$(".pdflink").click(function() {
 $(".language").removeClass('hide');
 $(".en").removeClass('hide');
});

$(".EN").click(function() {
 $(".cn").addClass('hide');
 $(".en").removeClass('hide');
});

$(".CN").click(function() {
 $(".cn").removeClass('hide');
 $(".en").addClass('hide');
});
