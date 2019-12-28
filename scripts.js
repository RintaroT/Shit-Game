if (localStorage.getItem("y") == null) {
  localStorage.setItem("x", 0);
  localStorage.setItem("y", 0);
  var wall = [];
  var floor = [];
  var centerx = [];
  var centery = [];
  var ep = [];
  var et = [];
  var spawnx = [];
  var spawny = [];
  var vision = [];

} else {
  var wall = JSON.parse(localStorage.getItem("wall"));
}
var x = Number(localStorage.getItem("x"));
var y = Number(localStorage.getItem("y"));
var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();
document.getElementById("body").onload = sheet;
sheet.addRule("#l12", "background: white;", 0);
//sheet.addRule(".x-3y4", "background: #008751;", 0);

if (localStorage.getItem("wall") == null) {
  //Math.floor(Math.random() * 10)
  wallx = x - 8;
  wally = y + 8;
  for (var i = 0; i < 16; i++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var i = 0; i < 16; i++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var i = 0; i < 16; i++) {
    wallx--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var i = 0; i < 16; i++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  floorx = x;
  floory = y + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = x;
  floory = y - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = x - 8;
  floory = y;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = x + 8;
  floory = y;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  counterx = -160;
  countery = 160;
  for (var i = 0; i < 10; i++) {
    for (var p = 0; p < 20; p++) {
      counterx = counterx + 16;
      centerx[centerx.length] = counterx;
      centery[centery.length] = countery;
    }
    countery = countery - 16;
    for (var p = 0; p < 20; p++) {
      centerx[centerx.length] = counterx;
      centery[centery.length] = countery;
      counterx = counterx - 16;
    }
    countery = countery - 16;
  }
  for (var i = 0; i < centerx.length; i++) {
    var room = Math.floor(Math.random() * 4);
    if (centerx[i] == 0 && centery[i] == 0) {
      emptyroom();
    } else if (room == 0) {
      room1();
    } else if (room == 1) {
      room2();
    } else if (room == 2) {
      room3();
    } else if (room == 3) {
      room4();
    }
  }


}
  sheet.addRule(".notvisible", "background: #303030;", 0);
for (var i = 0; i < floor.length; i++) {
  sheet.addRule("." + floor[i], "background: #303030;", 0);
}
for (var i = 0; i < wall.length; i++) {
  sheet.addRule("." + wall[i], "background: rgb(128, 128, 128);", 0);
}

localStorage.setItem("wall", JSON.stringify(wall));

document.getElementById("body").onload = function grid() {
  for (var i = 0; i < 23; i++) {
    var ii = i + 1;
    var table = document.getElementById("grid");

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    var cell14 = row.insertCell(13);
    var cell15 = row.insertCell(14);
    var cell16 = row.insertCell(15);
    var cell17 = row.insertCell(16);
    var cell18 = row.insertCell(17);
    var cell19 = row.insertCell(18);
    var cell20 = row.insertCell(19);
    var cell21 = row.insertCell(20);
    var cell22 = row.insertCell(21);
    var cell23 = row.insertCell(22);

    cell1.setAttribute("id", "a" + ii);
    cell2.setAttribute("id", "b" + ii);
    cell3.setAttribute("id", "c" + ii);
    cell4.setAttribute("id", "d" + ii);
    cell5.setAttribute("id", "e" + ii);
    cell6.setAttribute("id", "f" + ii);
    cell7.setAttribute("id", "g" + ii);
    cell8.setAttribute("id", "h" + ii);
    cell9.setAttribute("id", "i" + ii);
    cell10.setAttribute("id", "j" + ii);
    cell11.setAttribute("id", "k" + ii);
    cell12.setAttribute("id", "l" + ii);
    cell13.setAttribute("id", "m" + ii);
    cell14.setAttribute("id", "n" + ii);
    cell15.setAttribute("id", "o" + ii);
    cell16.setAttribute("id", "p" + ii);
    cell17.setAttribute("id", "q" + ii);
    cell18.setAttribute("id", "r" + ii);
    cell19.setAttribute("id", "s" + ii);
    cell20.setAttribute("id", "t" + ii);
    cell21.setAttribute("id", "u" + ii);
    cell22.setAttribute("id", "v" + ii);
    cell23.setAttribute("id", "w" + ii);
  }
  // l12 = middle cell
  for (var i = 0; i < 23; i++) {
    ii = i + 1;
    var cy = 11 - i + y;
    xa = x - 11;
    xb = x - 10;
    xc = x - 9;
    xd = x - 8;
    xe = x - 7;
    xf = x - 6;
    xg = x - 5;
    xh = x - 4;
    xi = x - 3;
    xj = x - 2;
    xk = x - 1;
    xm = x + 1;
    xn = x + 2;
    xo = x + 3;
    xp = x + 4;
    xq = x + 5;
    xr = x + 6;
    xs = x + 7;
    xt = x + 8;
    xu = x + 9;
    xv = x + 10;
    xw = x + 11;
    document.getElementById('a' + ii).setAttribute("class", "x" + xa + "y" + cy + " notvisible");
    document.getElementById('b' + ii).setAttribute("class", "x" + xb + "y" + cy + " notvisible");
    document.getElementById('c' + ii).setAttribute("class", "x" + xc + "y" + cy + " notvisible");
    document.getElementById('d' + ii).setAttribute("class", "x" + xd + "y" + cy + " notvisible");
    document.getElementById('e' + ii).setAttribute("class", "x" + xe + "y" + cy + " notvisible");
    document.getElementById('f' + ii).setAttribute("class", "x" + xf + "y" + cy + " notvisible");
    document.getElementById('g' + ii).setAttribute("class", "x" + xg + "y" + cy + " notvisible");
    document.getElementById('h' + ii).setAttribute("class", "x" + xh + "y" + cy + " notvisible");
    document.getElementById('i' + ii).setAttribute("class", "x" + xi + "y" + cy + " notvisible");
    document.getElementById('j' + ii).setAttribute("class", "x" + xj + "y" + cy + " notvisible");
    document.getElementById('k' + ii).setAttribute("class", "x" + xk + "y" + cy + " notvisible");
    document.getElementById('l' + ii).setAttribute("class", "x" + x + "y" + cy + " notvisible");
    document.getElementById('m' + ii).setAttribute("class", "x" + xm + "y" + cy + " notvisible");
    document.getElementById('n' + ii).setAttribute("class", "x" + xn + "y" + cy + " notvisible");
    document.getElementById('o' + ii).setAttribute("class", "x" + xo + "y" + cy + " notvisible");
    document.getElementById('p' + ii).setAttribute("class", "x" + xp + "y" + cy + " notvisible");
    document.getElementById('q' + ii).setAttribute("class", "x" + xq + "y" + cy + " notvisible");
    document.getElementById('r' + ii).setAttribute("class", "x" + xr + "y" + cy + " notvisible");
    document.getElementById('s' + ii).setAttribute("class", "x" + xs + "y" + cy + " notvisible");
    document.getElementById('t' + ii).setAttribute("class", "x" + xt + "y" + cy + " notvisible");
    document.getElementById('u' + ii).setAttribute("class", "x" + xu + "y" + cy + " notvisible");
    document.getElementById('v' + ii).setAttribute("class", "x" + xv + "y" + cy + " notvisible");
    document.getElementById('w' + ii).setAttribute("class", "x" + xw + "y" + cy + " notvisible");

  }
  document.getElementById("l12").style.backgroundColor = 'white';
  ai();
  visioncheck();
}

document.getElementById("body").onkeypress = function move(event) {
  var key = event.which || event.keyCode;
  if (key == 119 || key == 87) {
    var n = y + 1;
    var up = "x" + x + "y" + n;
    var f = window.getComputedStyle(document.getElementsByClassName(up)[0]).getPropertyValue('background-Color');
    if (f !== "rgb(0, 128, 0)" && f !== "rgb(128, 128, 128)") {
      y++
      localStorage.setItem("x", x);
      localStorage.setItem("y", y);
    }
  }
  if (key == 100 || key == 68) {
    var n = x + 1;
    var right = "x" + n + "y" + y;
    var f = window.getComputedStyle(document.getElementsByClassName(right)[0]).getPropertyValue('background-Color');
    if (f !== "rgb(0, 128, 0)" && f !== "rgb(128, 128, 128)") {
      x++
      localStorage.setItem("x", x);
      localStorage.setItem("y", y);
    }
  }
  if (key == 97 || key == 65) {
    var n = x - 1;
    var left = "x" + n + "y" + y;
    var f = window.getComputedStyle(document.getElementsByClassName(left)[0]).getPropertyValue('background-Color');
    if (f !== "rgb(0, 128, 0)" && f !== "rgb(128, 128, 128)") {
      x--
      localStorage.setItem("x", x);
      localStorage.setItem("y", y);
    }
  }
  if (key == 115 || key == 83) {
    var n = y - 1;
    var down = "x" + x + "y" + n;
    var f = window.getComputedStyle(document.getElementsByClassName(down)[0]).getPropertyValue('background-Color');
    if (f !== "rgb(0, 128, 0)" && f !== "rgb(128, 128, 128)") {
      y--
      localStorage.setItem("x", x);
      localStorage.setItem("y", y);
    }
  }
  for (var i = 0; i < 23; i++) {
    ii = i + 1;
    var cy = 11 - i + y;
    xa = x - 11;
    xb = x - 10;
    xc = x - 9;
    xd = x - 8;
    xe = x - 7;
    xf = x - 6;
    xg = x - 5;
    xh = x - 4;
    xi = x - 3;
    xj = x - 2;
    xk = x - 1;
    xm = x + 1;
    xn = x + 2;
    xo = x + 3;
    xp = x + 4;
    xq = x + 5;
    xr = x + 6;
    xs = x + 7;
    xt = x + 8;
    xu = x + 9;
    xv = x + 10;
    xw = x + 11;
    document.getElementById('a' + ii).setAttribute("class", "x" + xa + "y" + cy + " notvisible");
    document.getElementById('b' + ii).setAttribute("class", "x" + xb + "y" + cy + " notvisible");
    document.getElementById('c' + ii).setAttribute("class", "x" + xc + "y" + cy + " notvisible");
    document.getElementById('d' + ii).setAttribute("class", "x" + xd + "y" + cy + " notvisible");
    document.getElementById('e' + ii).setAttribute("class", "x" + xe + "y" + cy + " notvisible");
    document.getElementById('f' + ii).setAttribute("class", "x" + xf + "y" + cy + " notvisible");
    document.getElementById('g' + ii).setAttribute("class", "x" + xg + "y" + cy + " notvisible");
    document.getElementById('h' + ii).setAttribute("class", "x" + xh + "y" + cy + " notvisible");
    document.getElementById('i' + ii).setAttribute("class", "x" + xi + "y" + cy + " notvisible");
    document.getElementById('j' + ii).setAttribute("class", "x" + xj + "y" + cy + " notvisible");
    document.getElementById('k' + ii).setAttribute("class", "x" + xk + "y" + cy + " notvisible");
    document.getElementById('l' + ii).setAttribute("class", "x" + x + "y" + cy + " notvisible");
    document.getElementById('m' + ii).setAttribute("class", "x" + xm + "y" + cy + " notvisible");
    document.getElementById('n' + ii).setAttribute("class", "x" + xn + "y" + cy + " notvisible");
    document.getElementById('o' + ii).setAttribute("class", "x" + xo + "y" + cy + " notvisible");
    document.getElementById('p' + ii).setAttribute("class", "x" + xp + "y" + cy + " notvisible");
    document.getElementById('q' + ii).setAttribute("class", "x" + xq + "y" + cy + " notvisible");
    document.getElementById('r' + ii).setAttribute("class", "x" + xr + "y" + cy + " notvisible");
    document.getElementById('s' + ii).setAttribute("class", "x" + xs + "y" + cy + " notvisible");
    document.getElementById('t' + ii).setAttribute("class", "x" + xt + "y" + cy + " notvisible");
    document.getElementById('u' + ii).setAttribute("class", "x" + xu + "y" + cy + " notvisible");
    document.getElementById('v' + ii).setAttribute("class", "x" + xv + "y" + cy + " notvisible");
    document.getElementById('w' + ii).setAttribute("class", "x" + xw + "y" + cy + " notvisible");

  }
  ai();
  visioncheck();
  document.getElementById("l12").style.backgroundColor = 'white';
}

function cleargame() {
  localStorage.clear();
  location.reload();
}

function emptyroom() {
  wallx = centerx[i] - 8;
  wally = centery[i] + 8;
  for (var p = 0; p < 16; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wallx--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  floorx = centerx[i];
  floory = centery[i] + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i];
  floory = centery[i] - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;
}

function room1() {
  wallx = centerx[i] - 2;
  wally = centery[i] + 8;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx--
  }
  wallx = centerx[i] + 2;
  wally = centery[i] + 8;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx++
  }
  wallx = centerx[i] - 8;
  wally = centery[i] - 2;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx++
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  wallx = centerx[i] + 8;
  wally = centery[i] - 2;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  floorx = centerx[i];
  floory = centery[i] + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i];
  floory = centery[i] - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  spawnx[spawnx.length] = centerx[i];
  spawny[spawny.length] = centery[i];

  spawnx[spawnx.length] = centerx[i] + 2;
  spawny[spawny.length] = centery[i];

  spawnx[spawnx.length] = centerx[i] + 4;
  spawny[spawny.length] = centery[i];
}

function room2() {
  wallx = centerx[i] - 8;
  wally = centery[i] + 8;
  for (var p = 0; p < 16; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wallx--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }

  wallx = centerx[i] - 2;
  wally = centery[i] + 8;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx--
  }
  wallx = centerx[i] + 2;
  wally = centery[i] + 8;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx++
  }
  wallx = centerx[i] - 8;
  wally = centery[i] - 2;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx++
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  wallx = centerx[i] + 8;
  wally = centery[i] - 2;
  for (var p = 0; p < 6; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wallx--
  }
  for (var p = 0; p < 7; p++) {
    wall[wall.length] = "x" + wallx + "y" + wally;
    wally--
  }
  floorx = centerx[i];
  floory = centery[i] + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i];
  floory = centery[i] - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 2;
  floory = centery[i] + 5;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 5;
  floory = centery[i] + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx++
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 5;
  floory = centery[i] - 2;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx++
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 2;
  floory = centery[i] - 5;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;

  spawnx[spawnx.length] = centerx[i];
  spawny[spawny.length] = centery[i];

  spawnx[spawnx.length] = centerx[i] - 5;
  spawny[spawny.length] = centery[i] + 5;

  spawnx[spawnx.length] = centerx[i] + 4;
  spawny[spawny.length] = centery[i] - 6;
}

function room3() {
  wallx = centerx[i] - 8;
  wally = centery[i] + 8;
  for (var p = 0; p < 16; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wallx--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  wallx = centerx[i] - 2;
  wally = centery[i] + 7;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 2;
  wally = centery[i] + 4;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 7;
  wally = centery[i] + 3;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 4;
  wally = centery[i] + 3;
  wall[wall.length] = "x" + wallx + "y" + wally;
  for (var p = 0; p < 8; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 4; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  wallx = centerx[i] - 2;
  wally = centery[i] - 7;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 2;
  wally = centery[i] - 6;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 2;
  wally = centery[i] - 3;
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx = centerx[i] - 2;
  wally = centery[i] - 2;
  wall[wall.length] = "x" + wallx + "y" + wally;
  for (var p = 0; p < 9; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  floorx = centerx[i];
  floory = centery[i] + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i];
  floory = centery[i] - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  spawnx[spawnx.length] = centerx[i];
  spawny[spawny.length] = centery[i];

  spawnx[spawnx.length] = centerx[i] - 5;
  spawny[spawny.length] = centery[i] + 5;

  spawnx[spawnx.length] = centerx[i] + 5;
  spawny[spawny.length] = centery[i] - 5;
}

function room4() {
  wallx = centerx[i] - 8;
  wally = centery[i] + 8;
  for (var p = 0; p < 16; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wallx--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 16; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  wallx = centerx[i] - 2;
  wally = centery[i] + 7;
  wall[wall.length] = "x" + wallx + "y" + wally;
  for (var p = 0; p < 5; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  wallx = centerx[i] - 5;
  wally = centery[i] + 2;
  wall[wall.length] = "x" + wallx + "y" + wally;
  for (var p = 0; p < 7; p++) {
    wally--
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 10; p++) {
    wallx++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  for (var p = 0; p < 8; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  wallx--
  wall[wall.length] = "x" + wallx + "y" + wally;
  wally++
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx--
  wall[wall.length] = "x" + wallx + "y" + wally;
  wallx--
  wall[wall.length] = "x" + wallx + "y" + wally;
  for (var p = 0; p < 3; p++) {
    wally++
    wall[wall.length] = "x" + wallx + "y" + wally;
  }
  floorx = centerx[i];
  floory = centery[i] + 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i];
  floory = centery[i] - 8;
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floorx = floorx + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] - 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  floorx = centerx[i] + 8;
  floory = centery[i];
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory--
  floor[floor.length] = "x" + floorx + "y" + floory;
  floory = floory + 2;
  floor[floor.length] = "x" + floorx + "y" + floory;

  spawnx[spawnx.length] = centerx[i];
  spawny[spawny.length] = centery[i];

  spawnx[spawnx.length] = centerx[i] - 5;
  spawny[spawny.length] = centery[i] + 5

  spawnx[spawnx.length] = centerx[i] + 6;
  spawny[spawny.length] = centery[i] - 6;
}


function visioncheck() {
  vx = x;
  vy = y;
  vision[vision.length] = "x" + vx + "y" + vy;
  for (var i = 0; i < 5; i++) {
    vy++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vy = y;
  for (var i = 0; i < 5; i++) {
    vy--
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vy = y;
  for (var i = 0; i < 5; i++) {
    vx++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  for (var i = 0; i < 5; i++) {
    vx--
    vision[vision.length] = "x" + vx + "y" + vy;
  }

  vx = x;
  vx++
  for (var i = 0; i < 4; i++) {
    vy++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vx = x;
  vx++
  for (var i = 0; i < 4; i++) {
    vy--
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vx--
  for (var i = 0; i < 4; i++) {
    vy++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vx--
  for (var i = 0; i < 4; i++) {
    vy--
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vy++
  for (var i = 0; i < 4; i++) {
    vx--
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vy++
  for (var i = 0; i < 4; i++) {
    vx++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vy--
  for (var i = 0; i < 4; i++) {
    vx--
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x;
  vy = y;

  vy--
  for (var i = 0; i < 4; i++) {
    vx++
    vision[vision.length] = "x" + vx + "y" + vy;
  }
  vx = x - 2;
  vy = y + 2;
  vision[vision.length] = "x" + vx + "y" + vy;
  vx = x + 2;
  vy = y + 2;
  vision[vision.length] = "x" + vx + "y" + vy;
  vx = x - 2;
  vy = y - 2;
  vision[vision.length] = "x" + vx + "y" + vy;
  vx = x + 2;
  vy = y - 2;
  vision[vision.length] = "x" + vx + "y" + vy;
for (var i = 0; i < vision.length; i++) {
  if (document.getElementsByClassName(vision[i])[0] != undefined && document.getElementsByClassName(vision[i])[0].classList.contains("visible") == false){
    document.getElementsByClassName(vision[i])[0].classList.remove("notvisible");
}
}

}
