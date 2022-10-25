function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  var months = [
    "1 JAN",
    "2 FEB",
    "3 MAR",
    "4 APR",
    "5 MAY",
    "6 JUN",
    "7 JUL",
    "8 AUG",
    "9 SEP",
    "10 OCT",
    "11 NOV",
    "12 DEC",
  ];

  var week = [
    "일 SUN",
    "월 MON",
    "화 TUE",
    "수 WED",
    "목 THU",
    "금 FRI",
    "토 SAT",
  ];

  var ids = [
    "dayname",
    "month",
    "daynum",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "pm";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var values = [
    week[dname],
    months[mo],
    dnum.pad(2),
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

var btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function () {
  document.querySelector(".datetime").style.background = "#daf6ff";
  document.querySelector(".datetime").style.color = "#0f3854";
});
btn.addEventListener("mouseout", function () {
  document.querySelector(".datetime").style.background = "";
  document.querySelector(".datetime").style.color = "#daf6ff";
});

// background: #daf6ff;
//   box-shadow: 0 0 30px #daf6ff;
//   color: #0f3854;
