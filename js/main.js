$(document).ready(function(){
  accordeon();
  accordeon2();
});


function accordeon(){
	$(".nivo2").hide();
	$("h2").bind("click", function () {
		
		
		if($(this).hasClass("active")){
			$(this).next().hide();
			$(this).removeClass("active");
		}
		else{
			$(this).next().show();
			$(this).addClass("active");
		}
		
	});
}


function accordeon2(){
	$(".bio").click(function(event) {
		$("#bio").show();
		$("#bio").prev().addClass("active");
	
		
	});
	$(".carriere").click(function(event) {
		$("#carriere2").show();
		$("#carriere2").prev().addClass("active");

		
	});
	$(".analyses").click(function(event) {
		$("#analyses2").show();
		$("#analyses2").prev().addClass("active");
		
	});

}
	


