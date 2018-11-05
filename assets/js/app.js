$(".art-out").mouseenter(function(){
	$(".arthover").addClass("hovercolor")
});

$(".art-out").mouseout(function(){
	$(".arthover").removeClass("hovercolor")
});


$(".arthover").mouseenter(function(){
	$(".art-out").addClass("hovercolor")
});
$(".arthover").mouseout(function(){
	$(".art-out").removeClass("hovercolor")
});

$(".artalarm").click(function(){
	alert("not finish yet!");
})