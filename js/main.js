$(document).ready(function(){

	$("#list1").click(function(){
		console.log("hejsan!");
	});


	$("#hide").hide();



	$("#show").click(function(){
		$("#hide").slideToggle("slow",function(){

		});	
	});
	//init. tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
});