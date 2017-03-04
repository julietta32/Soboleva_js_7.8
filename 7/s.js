

$(function(){

	
   $(".a_nunc").click(function(e)
					  {
	    e.preventDefault();

	  $('.first_nunc').show(); 
	    $('.first_proin').hide(); 
	     $('.first_aen').hide();
	      $('.nunc').css('background-color', 'dodgerblue');
	       $('.proin').css('background-color', 'white');
	        $('.aen').css('background-color', 'white');  
	         $('.a_nunc').css('color', 'white');
	          $('.a_proin').css('color', 'cornflowerblue');
	           $('.a_aen').css('color', 'cornflowerblue');
	            $('.a_slow').css('color', 'cornflowerblue');
	              $('.slow').css('background-color', 'white');
                   $('.a_broken').css('color', 'cornflowerblue');	   
	                $('.broken').css('background-color', 'white');  
   })
   });

$(function(){

	
   $(".a_proin").click(function(e)
					  {
	    e.preventDefault();
	   

	 $('.first_proin').show();
	  $('.first_nunc').hide();
	   $('.first_aen').hide(); 
	    $('.nunc').css('background-color', 'white');
	      $('.proin').css('background-color', 'dodgerblue');
	       $('.aen').css('background-color', 'white');
	        $('.a_nunc').css('color', 'cornflowerblue');
	          $('.a_proin').css('color', 'white');
	           $('.a_aen').css('color', 'cornflowerblue');
	            $('.a_slow').css('color', 'cornflowerblue');
	             $('.slow').css('background-color', 'white');
	              $('.a_broken').css('color', 'cornflowerblue');
	               $('.broken').css('background-color', 'white');  
   })
   });

  $(function(){

	
   $(".a_aen").click(function(e)
					  {
	    e.preventDefault();
	   
        $('.nunc').css('background-color', 'white');
	      $('.proin').css('background-color', 'white');
	       $('.aen').css('background-color', 'dodgerblue');
	        $('.a_nunc').css('color', 'cornflowerblue');
	          $('.a_proin').css('color', 'cornflowerblue');
	           $('.a_aen').css('color', 'white');
	            $('.a_slow').css('color', 'cornflowerblue');
	             $('.slow').css('background-color', 'white');
	              $('.a_broken').css('color', 'cornflowerblue');
		           $('.first_aen').show();
	                $('.first_proin').hide();
	                 $('.first_nunc').hide();
	                  $('.broken').css('background-color', 'white');     
	})
   });   
	 
	   
	   $(function(){

	
   $(".a_slow").click(function(e)
					  {
	    e.preventDefault();

	 
	   $('.nunc').css('background-color', 'white');
	    $('.proin').css('background-color', 'white');
	     $('.aen').css('background-color', 'white');  
	      $('.slow').css('background-color', 'dodgerblue');
	      $('.a_nunc').css('color', 'cornflowerblue');
	       $('.a_proin').css('color', 'cornflowerblue');
	        $('.a_aen').css('color', 'cornflowerblue');
	         $('.broken').css('background-color', 'white');  
	          $('.a_slow').css('color', 'white');
	            $('.a_broken').css('color', 'cornflowerblue');
	             $('.first_slow').show();
	              $('.first_broken').hide();
	               $('.first_aen').hide();
	                $('.first_proin').hide();
	                 $('.first_nunc').hide();
	 
	   
   })
   });
	   $(function(){

	
   $(".a_broken").click(function(e)
					  {
	    e.preventDefault();

	
	$('.first_broken').show(); 
	   $('.first_slow').hide();
	    $('.first_aen').hide(); 
	     $('.first_proin').hide();
	      $('.first_nunc').hide();
	 	   $('.nunc').css('background-color', 'white');
	        $('.proin').css('background-color', 'white');
	         $('.aen').css('background-color', 'white');  
	          $('.slow').css('background-color', 'white');
	           $('.broken').css('background-color', 'dodgerblue');
	            $('.a_nunc').css('color', 'cornflowerblue');
	             $('.a_proin').css('color', 'cornflowerblue');
	              $('.a_aen').css('color', 'cornflowerblue');
	               $('.a_slow').css('color', 'cornflowerblue');
	                 $('.a_broken').css('color', 'white');
	         
	      
	   

	   
   })
   });
	   
	   
	   $('.nunc').css('background-color', 'white');
	    $('.proin').css('background-color', 'white');
	     $('.aen').css('background-color', 'dodgerblue');
	      $('.a_nunc').css('color', 'cornflowerblue');
	       $('.a_proin').css('color', 'cornflowerblue');
	        $('.a_aen').css('color', 'white');
	  



// tab_1


$(function(){

	
   $(".a_tab_1").click(function(e)
					  {
	    e.preventDefault();

         $('.title').hide(); 	
	      $('.add').hide();
	       $('.tab_data').hide();
	       $('.broken').hide(); 
	        $('.slow').hide();
	         $('.nunc').show();
	          $('.proin').show();
	           $('.aen').show();
	            $('.a_proin').text('Proin dolor');
	             $('.a_aen').text('Aenean Iacinia');
	   var $links1= $('.nunc');
	     $links1.css({
	      width: '160px',
	  })
	 var $links2= $('.proin');
	   $links2.css({
		 width: '160px',
	  })
	   var $links3= $('.aen');
	    $links3.css({
		 width: '160px',
	  }) 
	   
})
   });	

// tab_2

$(function(){

	
   $('.a_tab_2').one('click',function(e)
					  {
	  
             e.preventDefault();
	  
	  	  $('.title').show();
	        $('.add').hide();
		      $('.tab_data').hide();
	          $('.broken').hide(); 
	           $('.slow').hide();
	            $('.a_proin').text('Proin dolor');
	              $('.a_aen').text('Aenean Iacinia');
	   var $links1= $('.nunc');
	    $links1.css({
	      width: '160px',
	  })
	 var $links2= $('.proin');
	   $links2.css({
		 width: '160px',
	  })
	   var $links3= $('.aen');
	   $links3.css({
		 width: '160px',
	  }) 
})
   });	

// tab_3

$(function(){

	
   $(".a_tab_3").click(function(e)
					  {
	 e.preventDefault();
	
     $('.title').hide();
	  $('.broken').show(); 
	   $('.slow').show();
	   var $links1= $('.nunc');
	     $links1.css({
	       width: '80px',
	  })
	 var $links2= $('.proin');
	   $links2.css({
		 width: '80px',
	  })
	   var $links3= $('.aen');
	   $links3.css({
		 width: '80px',
	  }) 
	   var $links4= $('.slow');
	   $links4.css({
		 width: '80px',
	  })
	   var $links5= $('.broken');
	   $links5.css({
		 width: '80px',
	  })
$('.a_nunc').text('Preloaded');
	  
	

   $('.a_proin').text('Tab 1');
	$('.a_aen').text('Tab 2');
	 $('.add').hide();
	  $('.tab_data').hide();
	   $('.broken').show(); 
	   $('.slow').show();
	  
  })
   });

// tab_4

$(function(){

	
   $(".a_tab_4").click(function(e)
					  {
	    e.preventDefault();
	$('.title').hide();  
	   
	   var $links1= $('.nunc');
	     $links1.css({
	       width: '160px',
	  })
	 var $links2= $('.proin');
	   $links2.css({
		 width: '160px',
	  })
	   var $links3= $('.aen');
	    $links3.css({
		 width: '160px',
	  }) 
	   	$('.broken').hide(); 
	     $('.slow').hide();
	   $links1.css({
	  width: '160px',
	  })
	 var $links2= $('.proin');
	   $links2.css({
		 width: '160px',
	  })
	   var $links3= $('.aen');
	   $links3.css({
		 width: '160px',
	  }) 
	  
})

	    $('.a_proin').text('Proin dolor');
	     $('.a_aen').text('Aenean Iacinia');
	      $('.add').hide();
	       $('.tab_data').hide();

	         
   });	

// tab_5

$(function(){

	
  $(".a_tab_5").click(function(e)
					  {
	   e.preventDefault();
	  


     $('.title').hide();
	  $('.first_proin').show();
	    $('.first_aen').hide();
         $('.first_slow').hide();
	      $('.first_broken').hide();
	       $('.first_nunc').hide();
	         $('.aen').hide();
	          $('.broken').hide(); 
	           $('.slow').hide();
	            $('.proin').show();
	             $('.a_proin').text('Proin dolor');
	  
	
	 var $links2= $('.proin');
	   $links2.css({
		 width: '160px',
	  })
	      $('.add').show();
	       $('.tab_data').hide();
	   
	           
	         

})
   });




$(function(){

	
   $(".a_add").click(function(e)
					  {
	    e.preventDefault();
	
	  $('.tab_data').show();
	  })
	   
});

		
		