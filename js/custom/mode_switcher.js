//
//Mode switcher jquery
//
(function () {
    $(".mode_dark" ).on("click", function(){
          $("#switchThemeStyle").attr("href", "assets/css/style.dark.min.css" );
          return false;
      });
    $(".mode_light" ).on("click", function(){
          $("#switchThemeStyle").attr("href", "assets/css/style.min.css" );
          return false;
      });
    $(".switch_modes a").on("click", function(e){
          e.preventDefault();
          $(this).parent().parent().find("a").removeClass("active");
          $(this).addClass("active");
      })
  })();