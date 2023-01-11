function clock() {
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hrs <= 9) {
        hrs = '0'+hrs;
    }
    if(min <= 9) {
        min = '0'+min;
    }
    if(sec <= 9) {
        sec = '0'+sec;
    }

    var color = "#"+hrs+min+sec;
    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = color;
    document.body.style.background = color;
}

setInterval(function() {
    clock();
}, 100);