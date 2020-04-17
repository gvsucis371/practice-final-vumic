var inputIndex = 0;
function more() {
    var string = '';
    for (var i = 0; i < (inputIndex + 10); i++) {
        string += '<input class= "box" id = "' + i + '"type="text">'
    }
    inputIndex = inputIndex + 10;
    document.getElementById("input-list").innerHTML = string;
}

function submit() {
    var x = document.getElementsByClassName("box");
    var y;
    var max;
    var min;
    var avg = 0;
    var iMax = 0;
    var iMin = 0;
    var count=0;
    for (var i = 0; i < x.length; i++) {
        if (x[i]) {
            if (!max) {
                max = parseInt(x[i].value);
            }
            if (!min) {
                min = parseInt(x[i].value);
            }
            y = parseInt(x[i].value);
            if (y >= max) {
                max = y;
                iMax = i;
                avg = avg + y;
                count++;
            } else if (y <= min) {
                min = y;
                iMin = i;
                avg = avg + y;
                count++;
            }
        }
    }
    var totalAVG = avg / count;
    
    document.getElementById("max").innerHTML = min;
    document.getElementById("min").innerHTML = max;
    document.getElementById("average").innerHTML = totalAVG;
    document.getElementById(iMax).style.backgroundColor= "red";
    document.getElementById(iMin).style.backgroundColor= "yellow";
}
