window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("menu").style.position = "fixed";
    } else {
      document.getElementById("menu").style.removeProperty("position");
    }
}

var i=1;
function barras(x) {
  x.classList.toggle("change");
  if(i%2==0)
  {
  $(".menu").css({"width":"100%","visibility":"visible"});
  $(".menu a").css({"font-size":"25px"});
  
  }
  else{

    $(".menu").css({"width":"1px","visibility":"hidden"});
    $(".menu a").css({"font-size":"0px"});

  }
  i++;
}

$(document).ready(function(){

    setInterval("screen()",50);


  });

function screen(){
    if($("body").width()>=1020)
    {
        $(".menu").css({"width":"80%","height":"90px","visibility":"visible"});
        $(".menu a").css({"font-size":"20px"});
        $(".barras").css({"width":"0%","margin-left":"0%","visibility":"hidden"});
        if(i%2==0)
        {
        var x = document.getElementById("hamburguer");
        x.classList.toggle("change");
        i=1;
        }
    }
    else if($("body").width()<1020)
    {
        $(".menu").css({"height":"0px"});
        $(".barras").css({"width":"20%","margin-left":"60%", "visibility":"visible"});
        
        if(i%2==0)
            {
            $(".menu").css({"width":"100%","visibility":"visible"});
            $(".menu a").css({"font-size":"25px"});
            }
        else{

            $(".menu").css({"width":"1px","visibility":"hidden"});
            $(".menu a").css({"font-size":"0px"});
        
          }
    }
}