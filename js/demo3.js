function demo() {
    var h = document.getElementById("head");
    h.style.color = "red";
}
function demo1() {
    var h = document.getElementById("head");
    h.style.color = "green";
}

function change() {
    var ip = document.getElementById("ip");
    console.log(ip.value);
}
function changeColor() {
    //var arr = document.getElementsByTagName("p");// array
    // var arr = document.getElementsByClassName("pg");// array
    var arr = document.querySelectorAll("p.pg");// array
    for(var i=0;i<arr.length;i++){
        arr[i].style.color = "deeppink";
    }
}