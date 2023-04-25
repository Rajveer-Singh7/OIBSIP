
function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    function display(value) {
     document.getElementById("result").value += value;
    }
    
    function calculate() {
    let input = document.getElementById("result").value;
    var result = eval(input);
    document.getElementById("result").value = result;

    }


