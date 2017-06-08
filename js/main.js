
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 600) {
			$('#nav a').css('color','#63c2f8');
		}	else {
			$('#nav a').css('color','#091727');
		}
	});


	$(function(){
   $('a[href^="#"]').on('click', function(){
      var speed = 400;
      var href= $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
	   });
	});

	$(function(){
	  $(window).scroll(function (){
	    var scroll = $(window).scrollTop();
	    var windowHeight = $(window).height();
	    if(scroll >= windowHeight/6) {
	      $('#main-text').fadeOut();
	    } else {
	      $('#main-text').fadeIn();
	    }
	  });
	});

	$(".s-title1, .s-title2, .s-title3").children().addBack().contents().each(function(){
  		if (this.nodeType == 3) {
     		var $this = $(this);
     		$this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
  		}
		});

	$(function(){
	  $('.s-title1').css("opacity","0");
	  $(window).scroll(function (){
	    $(".s-title1").each(function(){
	      var imgPos = $(this).offset().top;    
	      var scroll = $(window).scrollTop();
	      var windowHeight = $(window).height();
	      if (scroll > imgPos - windowHeight + windowHeight/2){
	        $(".s-title1").css("opacity","1" );
	      } else {
	        $(".s-title1").css("opacity","0" );
	      }
	    });
	  });
	});

	$(function(){
	  $('.s-title2').css("opacity","0");
	  $(window).scroll(function (){
	    $(".s-title2").each(function(){
	      var imgPos = $(this).offset().top;    
	      var scroll = $(window).scrollTop();
	      var windowHeight = $(window).height();
	      if (scroll > imgPos - windowHeight + windowHeight/2){
	        $(".s-title2").css("opacity",".15" );
	      } else {
	        $(".s-title2").css("opacity","0" );
	      }
	    });
	  });
	});

	$(function(){
	  $('.s-title3').css("opacity","0");
	  $(window).scroll(function (){
	    $(".s-title3").each(function(){
	      var imgPos = $(this).offset().top;    
	      var scroll = $(window).scrollTop();
	      var windowHeight = $(window).height();
	      if (scroll > imgPos - windowHeight + windowHeight/2){
	        $(".s-title3").css("opacity","1" );
	      } else {
	        $(".s-title3").css("opacity","0" );
	      }
	    });
	  });
	});

	$(function(){
	  $('.date1, .date2, .date3, .date4, .date5, .date6').css("height","0%");
	  $(window).scroll(function (){
	    $(".date1").each(function(){
	      var imgPos = $(this).offset().top;    
	      var scroll = $(window).scrollTop();
	      var windowHeight = $(window).height();
	      if (scroll > imgPos - windowHeight + windowHeight/5){
	        $(".date1").css("height","95%" );
	        $(".date2").css("height","90%" );
	        $(".date3").css("height","70%" );
	        $(".date4").css("height","60%" );
	        $(".date5").css("height","60%" );
	        $(".date6").css("height","25%" );
	      } else {
	        $(".date1, .date2, .date3, .date4, .date5, .date6").css("height","0%" );
	      }
	    });
	  });
	});

	$('[data-remodal-id=work-01]').remodal();

	$('[data-remodal-id=work-02]').remodal();

	$('[data-remodal-id=work-03]').remodal();

