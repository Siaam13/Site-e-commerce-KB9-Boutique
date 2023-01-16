// 1.获取元素
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");
var box9 = document.querySelector(".box9");
var box10 = document.querySelector(".box10");

//2.使用定时器每隔一秒更新一次
setInterval(getTime, 1000);

//3.利用时间函数获取系统时间
function getTime() {
  var time = new Date();
  var year = time.getFullYear(); //year
  if (year < 10) {
    year = "0" + year;
  }

  var mon = time.getMonth() + 1; //month
  if (mon < 10) {
    mon = "0" + mon;
  }

  var date = time.getDate(); //day
  if (date < 10) {
    date = "0" + date;
  }

  var h = time.getHours(); //hour
  if (h < 10) {
    h = "0" + h;
  }

  var m = time.getMinutes(); //minute
  if (m < 10) {
    m = "0" + m;
  }

  var s = time.getSeconds(); //second
  if (s < 10) {
    s = "0" + s;
  }

  box1.innerHTML = year;
  box2.innerHTML = "/";
  box3.innerHTML = mon;
  box4.innerHTML = "/";
  box5.innerHTML = date;
  box6.innerHTML = h;
  box7.innerHTML = ":";
  box8.innerHTML = m;
  box9.innerHTML = ":";
  box10.innerHTML = s;

  if (s >= 59) {
    box8.style = "transform:scale(1.5); color:blue; transition:all 0.25s;";
  } else {
    box8.style = "transform:scale(1); transition:all 0.25s;";
  }
  if (m >= 59 && s >= 59) {
    box6.style = "transform:scale(1.5); color:blue; transition:all 0.25s;";
  } else {
    box6.style = "transform:scale(1); transition:all 0.25s;";
  }
}
 
