$(document).ready(function(){

  /*--------------------------------
  	Skills
  --------------------------------*/

	$("#html, #css, #js").mouseenter(function(){
		$(this).animate({
			opacity:0.75,
			
		}, 200, function(){

		});
	});
	$("#html, #css, #js").mouseleave(function(){
		$(this).animate({
			opacity:1
		}, 200, function(){

		});
	});	


  /*--------------------------------
  	Om
  --------------------------------*/
	$("#gustav").mouseenter(function(){
		$(this).animate({
			opacity:0.5,
			
		}, 500, function(){

		});
	});
	$("#gustav").mouseleave(function(){
		$(this).animate({
			opacity:1
		}, 1000, function(){

		});
	});	

  /*--------------------------------
  	CV
  --------------------------------*/
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

function send(){
	$("#send").on("click", function(){
		//var name = document.getElementById("inputName").value;
		swal({
		  title: "Är du säker?",
		  text: "You will not be able to recover this imaginary file!",
		  type: "success",
		  confirmButtonColor: "#428bca",
		  confirmButtonText: "Stäng",
		  closeOnConfirm: true
		});
	});
}

function cancel(){
	$("#cancel").on("click", function(){
		//var name = document.getElementById("inputName").value;
		swal({
		  title: "Är du säker?",
		  text: "You will not be able to recover this imaginary file!",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#428bca",
		  confirmButtonText: "Stäng",
		  cancelButtonText: "Avbryt",
		  closeOnConfirm: false,
		  closeOnCancel: false
		},
		function(isConfirm){
		  if (isConfirm) {
				swal({
				  title: "Är du säker?",
				  text: "You will not be able to recover this imaginary file!",
				  type: "success",
				  confirmButtonColor: "#428bca",
				  confirmButtonText: "Stäng",
				  closeOnConfirm: true
				});
		  } else {
				swal({
				  title: "Är du säker?",
				  text: "You will not be able to recover this imaginary file!",
				  confirmButtonColor: "#428bca",
				  confirmButtonText: "Stäng",
				  closeOnConfirm: true
				});
		  }
		});
	});
}