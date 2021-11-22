window.onload = function () {
    var seconds = 00; 
    var tens = 00; 
    var append_tens = document.getElementById("tens")
    var append_seconds = document.getElementById("seconds")
    var start_button = document.getElementById('start_button');
    var stop_button = document.getElementById('stop_button');
    var reset_button = document.getElementById('reset_button');
    var interval ;
  
    start_button.onclick = function() {
      
      clearInterval(interval);
       interval = setInterval(start_timer, 10);
    }
    
      stop_button.onclick = function() {
         clearInterval(interval);
    }
  
    reset_button.onclick = function() {
       clearInterval(interval);
      tens = "00";
        seconds = "00";
      append_tens.innerHTML = tens;
        append_seconds.innerHTML = seconds;
    }

    
    function start_timer () {
      tens++; 
      
      if(tens <= 9){
        append_tens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        append_tens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        append_seconds.innerHTML = "0" + seconds;
        tens = 0;
        append_tens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        append_seconds.innerHTML = seconds;
      }
    
    }
    
  
  }