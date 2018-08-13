// main //

  $(function(){

    $("#imageList img").on('click', function() {
      /*if (!this.classList.contains("on")) {      
        // this.src = this.src.replace("_moving.gif","_static.png");
        $()

      } else {
        this.src = this.src.replace("_static.png","_moving.gif");
      }
      $(this).toggleClass("on");*/

      $(this).toggleClass("on");

      if ($(this).hasClass('on')) {
      	$(this).attr('src', $(this).attr('data-moving-src'));
      }
      else {
      	$(this).attr('src', $(this).attr('data-static-src'));
      }

    });

  });

  function play(){
    var audio = document.getElementById("audio")
    audio.play();
  }

  $('.squish').on('click',function(){
      $('.squish').removeClass('animated jello');
      setTimeout(function(){
        $('.squish').addClass('animated jello');
      },50);
  });

    $('.shaker').on('click',function(){
      $('.shaker').removeClass('animated shake');
      setTimeout(function(){
        $('.shaker').addClass('animated shake');
      },50);
  });
  
    $('.rubber').on('click',function(){
      $('.rubber').removeClass('animated rubberBand');
      setTimeout(function(){
        $('.rubber').addClass('animated rubberBand');
      },50);
  });

