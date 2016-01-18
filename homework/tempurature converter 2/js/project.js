var temperatures = function(t) {
  
    var output, given, result;
  
    given = document.getElementById('temp').value;
        
    if (t === "C") {
        result = (given * 1.8) + 32;
        if (result < 0) {
        document.body.style.background = "lightblue";
        }
        else {
        document.body.style.background = "indianRed";
        }
    } 
  
    else {
        result = (given - 32) / 1.8;
        if (result < 40) {
        document.body.style.background = "lightblue";
        }
        else {
        document.body.style.background = "indianRed";
        }
    }
      
    if (given || given === "0") {
        output = result.toFixed(2) + "\u00b0"
    } 
      
      else {
            output = '<p style="color:indianRed; font-size:20px";>' + 'C\'mon man, enter a number!' + '</p>';
            }
    document.querySelector('output').innerHTML = output;
}


document.getElementById('ftoc').addEventListener('click', function(){temperatures('C');})

document.getElementById('ctof').addEventListener('click', function(){temperatures('F');})


