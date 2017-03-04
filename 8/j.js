// tab_1


$(function(){

	
   $(".a_tab_1").click(function(e)
					  {
	    e.preventDefault();
	   $('.default').show();
	  
})
   });	

// tab_2
$(function(){

   $(".a_tab_2").click(function(e)
					  {
	    e.preventDefault();
	   $('.custom').show();
	    $('.default').hide();
	  
})
   });	

// tab_3

$(function(){

   $(".a_tab_3").click(function(e)
					  {
	    e.preventDefault();
	     $('.custom').hide();
	      $('.default').hide();
	        $('.custom_content').show();
	  
})
   });
$(function(){

	
   $(".vena").hover(function(e)
					  {
	    e.preventDefault();
         $('.vena2').show();
	   
   })
   });
$(function(){

   $(".vena").mouseover(function(e)
					  {
	    e.preventDefault();
         $('.vena2').show();
	   
   })
   });
$(function(){

	
   $(".vena").mouseout(function(e)
					  {
	    e.preventDefault();
          $('.vena2').hide();
	   
   })
   });

// tab_4

$(function(){

	
   $(".a_tab_4").click(function(e)
					  {
	    e.preventDefault();
	   $('.custom').hide();
	     $('.default').show();
	       $('.custom_content').hide();
	  
})
   });	

// tab_5

$(function(){

	
   $(".a_tab_5").click(function(e)
					  {
	    e.preventDefault();
	   $('.custom').hide();
	     $('.default').hide();
	       $('.custom_content').hide();
	         $('.forms').show();
	  
})
   });	
$(function(){

	
   $(".text1").mouseover(function(e)
					  {
	    e.preventDefault()
	 $('.text1').append('<div>Please provide your first name</div>');
	  
})
   });
$(function(){

	
   $(".text1").mouseout(function(e)
					  {
	    e.preventDefault();
	 	  
})
   });	

// tab_6

$(function(){

	
   $(".a_tab_6").click(function(e)
					  {
	    e.preventDefault();
	   $('.custom').hide();
	    $('.default').show();
	      $('.custom_content').hide();
	       $('.forms').hide();
	  
})
   });	

// tab_7

$(function(){

	
   $(".a_tab_7").click(function(e)
					  {
	    e.preventDefault();
	   $('.custom').hide();
	     $('.default').hide();
	      $('.custom_content').hide();
	       $('.forms').hide();
	         $('.video').show();
	  
})
   });	
$(function(){
      $('.a1').mousemove(function (e) {
		    e.preventDefault();
          $data_tooltip = $('.a1').attr("data-tooltip");
          $(".tooltip").text($data_tooltip)
             .css({ 
                marginLeft:'10px',
                marginTop:'50px',
              }) 
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip").hide();
           
            
      });
});

$(function(){
      $('.a2').mousemove(function (e) {
		    e.preventDefault();
          $data_tooltip2 = $('.a2').attr("data-tooltip2");
          $(".tooltip2").text($data_tooltip2)
              .css({ 
                marginLeft:'100px',
                marginTop:'150px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip2").hide();
           
            
      });
});

$(function(){
      $('.default input').mousemove(function () {
		
          $data_tooltip3 = $('.default input').attr("data-tooltip3");
          $(".tooltip3").text($data_tooltip3)
              .css({ 
                marginLeft:'100px',
                marginTop:'280px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip3").hide();
           
            
      });
});
$(function(){
      $('.a4').mousemove(function (e) {
		    e.preventDefault();
          $data_tooltip4 = $('.a4').attr("data-tooltip4");
          $(".tooltip4").text($data_tooltip4)
              .css({ 
                marginLeft:'100px',
                marginTop:'150px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip4").hide();
           
            
      });
});
$(function(){
      $('.a5').mousemove(function (e) {
		    e.preventDefault();
          $data_tooltip5 = $('.a5').attr("data-tooltip5");
          $(".tooltip5").text($data_tooltip5)
              .css({ 
                marginLeft:'150px',
                marginTop:'150px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip5").hide();
           
            
      });
});
$(function(){
      $('.a6').mousemove(function (e) {
		    e.preventDefault();
          $data_tooltip6 = $('.a6').attr("data-tooltip6");
          $(".tooltip6").text($data_tooltip6)
              .css({ 
                marginLeft:'100px',
                marginTop:'190px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip6").hide();
           
            
      });
});
$(function(){
      $('input[name="text1"]').mousemove(function () {
		
          $data_tooltip7 = $('input[name="text1"]').attr("data-tooltip7");
          $(".tooltip7").text($data_tooltip7)
              .css({ 
                marginLeft:'290px',
                marginTop:'100px',
			  width:'150px',
              })
              .show();
          }).mouseout(function () {
	
            $(".tooltip7").hide();
           
            
      });
});
$(function(){
      $('input[name="text2"]').mousemove(function () {
		
          $data_tooltip8 = $('input[name="text2"]').attr("data-tooltip8");
          $(".tooltip8").text($data_tooltip8)
              .css({ 
                marginLeft:'290px',
                marginTop:'150px',
			  width:'180px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip8").hide();
           
            
      });
});
$(function(){
      $('input[name="text3"]').mousemove(function () {
		
          $data_tooltip9 = $('input[name="text3"]').attr("data-tooltip9");
          $(".tooltip9").text($data_tooltip9)
              .css({ 
                marginLeft:'290px',
                marginTop:'190px',
			  width:'180px',
              })
              .show();
          }).mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip9").hide();
           
            
      });
});

