let closed = [0, 0, 0, 0];

function myFunction(y) {
    if (closed[y] == 0) {
        var p = document.getElementsByClassName("hideableList")[y];
        var t = document.getElementById(y);
        t.innerHTML = '&#9660'
        if (y == 3) {
            var x = p.getElementsByTagName("ol")[0];
        } else
            var x = p.getElementsByTagName("ul")[0];
        x.style.display = 'none';
        closed[y] = 1;
    } else {
        var p = document.getElementsByClassName("hideableList")[y];
        var t = document.getElementById(y);
        t.innerHTML = '&#9654'
        if (y == 3) {
            var x = p.getElementsByTagName("ol")[0];
        } else
            var x = p.getElementsByTagName("ul")[0];
        if (y == 2) {
            x.style.display = 'inline';
        } else
            x.style.display = 'block';
        closed[y] = 0;
    }
}