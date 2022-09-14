var obj = {
    name: 'Phùng Văn Vũ',
    age: 18,
    mark: 6,
    girlFriends: ['Nguyễn Thúy Kiều','Nguyễn Thúy Vân','Ngọc Trinh','Kỳ Duyên'],
    eat: function () {
        console.log(this.name+" đang ăn...");
    }
};
console.log(obj.name);
obj.eat();
obj.name = 'Nguyễn Việt Cường';
console.log(obj.name);
for(var i=0;i< obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i]);
}
obj.eat();

var f = 0;
function demo() {
    var x = document.getElementById("abc");
    //x.innerText = "Xin chào tất các sinh viên lớp T2207A";
    // x.innerHTML += '<i>Hello world!</i>';
  //  x.style.color = "red";
   // x.style.fontSize = f+'px';
    x.style.transform = 'rotate('+f+'deg)';
    f+= 0;
}
function quayTron(){
    setInterval(demo,10);
}

var m = 10,s=0;
function timer() {
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if(s<0){
        s = 59;
        m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function startTimer() {
    if(m>0){
        si = setInterval(timer,10);
    }
}

