 function fmy()
   { 
       var sec=30;
      var cn = setInterval(function(){
           sec--;     
          document.getElementById("p1").innerHTML= "00:"+ sec; 
          if(sec<=0)      
          {
                            alert("TIMEOUT");
                            clearInterval(cn);
                 }
                    },1000);}
function fn()
{
    
    document.getElementById("p1").innerHTML="00:30"
}