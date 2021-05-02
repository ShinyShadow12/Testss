var cpr = function()
         { 
            var puntos = 0;
            var resultado = document.getElementById("txt").value;
            var resultado1 = document.getElementById("txt1").value;
            var resultado2 = document.getElementById("txt2").value;
            var resultado3 = document.getElementById("txt3").value;
          
          if(resultado == "Nos fuimos"||resultado == "nos fuimos") 
            {
             var puntos = puntos + 1;
            }
                
          if(resultado1 == "Yendo"||resultado1 == "yendo")
            {
             var puntos = puntos + 1;
            }

          if(resultado2 == "No")
            {
             var puntos = puntos + 1;
            }
          
          if(resultado3 == "Anduve"||resultado3 == "anduve")
            {
             var puntos = puntos + 1;
            }


         

          if(puntos < 4)
            {
             document.getElementById("div").innerHTML= "<br>" + "Conseguiste: " + puntos + " puntos. Suspendiste.";
            }
              
          if(puntos == 4)
            {
             document.getElementById("div").innerHTML= "<br>" + "Conseguiste: " + puntos + " puntos. Aprobaste.";
            } 
 }

var clicks = 0;
var chclicks = 0;
      var changebg = function()
             {
              
             clicks = clicks + 1;
    
              if(clicks == 1)
              { 
 
              var chhtml = document.getElementById("html");
              html.className = "html2";
 
              var chform = document.getElementById("form"); 
              form.className = "form2";

              //var chtxt =

           
              }
 
         if(clicks == 2)
             { 
               var chhtml = document.getElementById("html");
              html.className = "html";
 
              var chform = document.getElementById("form"); 
              form.className = "form";

            clicks = 0;
}
             }

        var changequest = function()
        {
           chclicks = chclicks + 1;

           if(chclicks == 1)
           {
           
           var getch = document.getElementById("chquest").value;
           chquest.value = "v                       ";
           
           var getLQ = document.getElementById("Lquest").style.visibility = "visible";
           var getMQ = document.getElementById("Mquest").style.visibility = "visible";        
           }
           
           if(chclicks == 2)
           {

           var getch = document.getElementById("chquest").value;
           chquest.value ="<                       ";
           
           var getLQ = document.getElementById("Lquest").style.visibility = "hidden";
           var getMQ = document.getElementById("Mquest").style.visibility = "hidden";

           chclicks = 0;
        
           }
                                  

        }