
function run(){
    var x = document.getElementsByClassName("upcase");
    var y = document.getElementsByClassName("allcaps");
    
    for (var i = 0; i < x.length; i++ ) {
        x[i].style.textTransform  = "capitalize";
    }
    for (var j = 0; j< y.length; j++ ) {
        y[j].style.textTransform = "uppercase";
    }
}