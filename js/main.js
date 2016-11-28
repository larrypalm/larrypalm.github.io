$(document).ready(function(){

	$("#list1").click(function(){
		console.log("hejsan!");
	});


	//cascade CV	
	$(".show").click(function(){

		$(".hide").slideToggle("slow",function(){

		});	
	});

	$(".show1").click(function(){

		$(".hide1").slideToggle("slow",function(){
			
		});	
	});

	// language toggle 
	$("#gb-flag").click(function(){
		$("#swe-flag").toggle();
		$("#gb-flag").hide();
	});

	$("#swe-flag").click(function(){
		$("#gb-flag").toggle();
		$("#swe-flag").hide();
	});


	//init. tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
});

//JavaScript

function toEnglish() {
	document.getElementById("observe").innerHTML = "<strong>Sorry!</strong> This is only a Dummy-form. It doesn't work, yet. I appreciate you've come this far though!";
  document.getElementById("name").innerHTML = "Name:";
  document.getElementById("lastname").innerHTML = "Lastname:";
  document.getElementById("question").innerHTML = "What's your question about?";
  document.getElementById("questionForm").innerHTML = "Question:";
  document.getElementById("send").innerHTML = "Send!";
  document.getElementById("cancel").innerHTML = "Cancel";
  alert("The language was changed to English");
}

function toSwedish() {
	document.getElementById("observe").innerHTML = "<strong>Sorry!</strong> Detta är dessvärre bara en Dummy-formulär. Den fungerar riktigt ännu. Kul att du ändå kom så här långt!";
  document.getElementById("name").innerHTML = "Förnamn:";
  document.getElementById("lastname").innerHTML = "Efternamn:";
  document.getElementById("question").innerHTML = "Vad handlar din fråga om?";
  document.getElementById("questionForm").innerHTML = "Fråga:";
  document.getElementById("send").innerHTML = "Skicka!";
  document.getElementById("cancel").innerHTML = "Avbryt";
  alert("Språket är ändrat till svenska");
}
