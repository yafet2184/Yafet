
$(document).ready(function(){

	// $(".popup-brand").hide();

	$(".brand1").click(function(){
		$("#popup-brand1").slideToggle('slow');
			$("#box-1").mouseover(function(){
			 $("#title-daihatsu").show();
			$("#video-daihatsu").show();
		    });
			$("#box-1").mouseleave(function(){
			 $("#title-daihatsu").hide();
			$("#video-daihatsu").hide();
			});
	});
	$(".brand2").click(function(){
		$("#popup-brand2").slideToggle('slow');
			$("#box-2").mouseover(function(){
			 $("#title-datsun").show();
			 $("#video-datsun").show()
			});
			
			$("#box-2").mouseleave(function(){
			 $("#title-datsun").hide();
			 $("#video-datsun").hide()
			});
	});
	$(".brand3").click(function(){
		$("#popup-brand3").slideToggle('slow');
			$("#box-3").mouseover(function(){
			 $("#title-honda").show();
			 $("#video-honda").show();
			});
			$("#box-3").mouseleave(function(){
			 $("#title-honda").hide();
			 $("#video-honda").hide();
			});
	});
	$(".brand4").click(function(){
		$("#popup-brand4").slideToggle('slow');
			$("#box-4").mouseover(function(){
			 $("#title-suzuki").show();
			 $("#video-suzuki").show();
			});
			$("#box-4").mouseleave(function(){
			 $("#title-suzuki").hide();
			 $("#video-suzuki").hide();

			});
	});
	$(".brand5").click(function(){
		$("#popup-brand5").slideToggle('slow');
			$("#box-5").mouseover(function(){
				$("#title-toyota").show();
				$("#video-toyota").show();
			});
			$("#box-5").mouseleave(function(){
				$("#title-toyota").hide();
				$("#video-toyota").hide();
			});
	})
	$(".brand6").click(function(){
		$("#popup-brand6").slideToggle('slow');
			$("#box-6").mouseover(function(){
				$("#title-wuling").show();
				$("#video-wuling").show();
			});
			$("#box-6").mouseleave(function(){
				$("#title-wuling").hide();
				$("#video-wuling").hide();
			});
	})
	$(".brand7").click(function(){
		$("#popup-brand7").slideToggle('slow');
			$("#box-7").mouseover(function(){
				$("#title-DFSK").show();
				$("#video-DFSK").show();
			});
			$("#box-7").mouseleave(function(){
				$("#title-DFSK").hide();
				$("#video-DFSK").hide();
			});
	})
	$(".brand8").click(function(){
		$("#popup-brand8").slideToggle('slow');
			$("#box-8").mouseover(function(){
				$("#title-MG").show();
				$("#video-MG").show();
			});
			$("#box-8").mouseleave(function(){
				$("#title-MG").hide();
				$("#video-MG").hide();
			});
	})
});



