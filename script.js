
{/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> */}


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 550) {
          $("#navbar").css("background" , "brown");
          $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset");
          $(".i").css("color","black");
          $("#navbar ul li a").hover(function(){
            $(this).css('color','white');
          });
          $('#navbar ul li a').mouseout(function(){
            $(this).css('color', 'white');
        });
        }
  
        else{
            $("#navbar").css("background" , "rgb(0,0,0,0)");  	
            $("#navbar").css("box-shadow","none");
            $(".i").css("color","brown");
            $("#navbar ul li a").hover(function(){
                $(this).css('color','brown');
              })
              $('#navbar ul li a').mouseout(function(){
                $(this).css('color', 'white');
            });
        }
    })
  })