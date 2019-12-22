var x = 0;
var y = 0;
var tree = ["x-3y4"];

var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();
document.getElementById("body").onload = sheet;
sheet.addRule("#l12", "background: white;", 0);
//sheet.addRule(".x-3y4", "background: green;", 0);

for (var i = 0; i < 5000; i++) {
  var treex = Math.round(Math.random() * 500);
  var treey = Math.round(Math.random() * 500);
  tree[tree.length] = "x" + treex + "y" + treey;
 treex++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex--;
   treex--;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex++;
   treey++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treey--;
   treey--;
  tree[tree.length] = "x" + treex + "y" + treey;

  var treex = Math.round(Math.random() * -500);
  var treey = Math.round(Math.random() * 500);
  tree[tree.length] = "x" + treex + "y" + treey;
 treex++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex--;
   treex--;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex++;
   treey++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treey--;
   treey--;
  tree[tree.length] = "x" + treex + "y" + treey;

  var treex = Math.round(Math.random() * 500);
  var treey = Math.round(Math.random() * -500);
  tree[tree.length] = "x" + treex + "y" + treey;
 treex++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex--;
   treex--;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex++;
   treey++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treey--;
   treey--;
  tree[tree.length] = "x" + treex + "y" + treey;

  var treex = Math.round(Math.random() * -500);
  var treey = Math.round(Math.random() * -500);
  tree[tree.length] = "x" + treex + "y" + treey;
 treex++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex--;
   treex--;
  tree[tree.length] = "x" + treex + "y" + treey;
   treex++;
   treey++;
  tree[tree.length] = "x" + treex + "y" + treey;
   treey--;
   treey--;
  tree[tree.length] = "x" + treex + "y" + treey;
}
for (var i = 0; i < tree.length; i++) {
sheet.addRule("." + tree[i], "background: green;", 0);
}




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
    document.getElementById('a' + ii).setAttribute("class", "x" + xa + "y" + cy);
    document.getElementById('b' + ii).setAttribute("class", "x" + xb + "y" + cy);
    document.getElementById('c' + ii).setAttribute("class", "x" + xc + "y" + cy);
    document.getElementById('d' + ii).setAttribute("class", "x" + xd + "y" + cy);
    document.getElementById('e' + ii).setAttribute("class", "x" + xe + "y" + cy);
    document.getElementById('f' + ii).setAttribute("class", "x" + xf + "y" + cy);
    document.getElementById('g' + ii).setAttribute("class", "x" + xg + "y" + cy);
    document.getElementById('h' + ii).setAttribute("class", "x" + xh + "y" + cy);
    document.getElementById('i' + ii).setAttribute("class", "x" + xi + "y" + cy);
    document.getElementById('j' + ii).setAttribute("class", "x" + xj + "y" + cy);
    document.getElementById('k' + ii).setAttribute("class", "x" + xk + "y" + cy);
    document.getElementById('l' + ii).setAttribute("class", "x" + x + "y" + cy);
    document.getElementById('m' + ii).setAttribute("class", "x" + xm + "y" + cy);
    document.getElementById('n' + ii).setAttribute("class", "x" + xn + "y" + cy);
    document.getElementById('o' + ii).setAttribute("class", "x" + xo + "y" + cy);
    document.getElementById('p' + ii).setAttribute("class", "x" + xp + "y" + cy);
    document.getElementById('q' + ii).setAttribute("class", "x" + xq + "y" + cy);
    document.getElementById('r' + ii).setAttribute("class", "x" + xr + "y" + cy);
    document.getElementById('s' + ii).setAttribute("class", "x" + xs + "y" + cy);
    document.getElementById('t' + ii).setAttribute("class", "x" + xt + "y" + cy);
    document.getElementById('u' + ii).setAttribute("class", "x" + xu + "y" + cy);
    document.getElementById('v' + ii).setAttribute("class", "x" + xv + "y" + cy);
    document.getElementById('w' + ii).setAttribute("class", "x" + xw + "y" + cy);
  }
  document.getElementById("l12").style.backgroundColor = 'white';
}

document.getElementById("body").onkeypress = function move(event) {
  var key = event.which || event.keyCode;
//  console.log(key);
  if (key == 119) {
    y++
  }
  if (key == 100) {
    x++
  }
  if (key == 97) {
    x--
  }
  if (key == 115) {
    y--
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
        document.getElementById('a' + ii).setAttribute("class", "x" + xa + "y" + cy);
        document.getElementById('b' + ii).setAttribute("class", "x" + xb + "y" + cy);
        document.getElementById('c' + ii).setAttribute("class", "x" + xc + "y" + cy);
        document.getElementById('d' + ii).setAttribute("class", "x" + xd + "y" + cy);
        document.getElementById('e' + ii).setAttribute("class", "x" + xe + "y" + cy);
        document.getElementById('f' + ii).setAttribute("class", "x" + xf + "y" + cy);
        document.getElementById('g' + ii).setAttribute("class", "x" + xg + "y" + cy);
        document.getElementById('h' + ii).setAttribute("class", "x" + xh + "y" + cy);
        document.getElementById('i' + ii).setAttribute("class", "x" + xi + "y" + cy);
        document.getElementById('j' + ii).setAttribute("class", "x" + xj + "y" + cy);
        document.getElementById('k' + ii).setAttribute("class", "x" + xk + "y" + cy);
        document.getElementById('l' + ii).setAttribute("class", "x" + x + "y" + cy);
        document.getElementById('m' + ii).setAttribute("class", "x" + xm + "y" + cy);
        document.getElementById('n' + ii).setAttribute("class", "x" + xn + "y" + cy);
        document.getElementById('o' + ii).setAttribute("class", "x" + xo + "y" + cy);
        document.getElementById('p' + ii).setAttribute("class", "x" + xp + "y" + cy);
        document.getElementById('q' + ii).setAttribute("class", "x" + xq + "y" + cy);
        document.getElementById('r' + ii).setAttribute("class", "x" + xr + "y" + cy);
        document.getElementById('s' + ii).setAttribute("class", "x" + xs + "y" + cy);
        document.getElementById('t' + ii).setAttribute("class", "x" + xt + "y" + cy);
        document.getElementById('u' + ii).setAttribute("class", "x" + xu + "y" + cy);
        document.getElementById('v' + ii).setAttribute("class", "x" + xv + "y" + cy);
        document.getElementById('w' + ii).setAttribute("class", "x" + xw + "y" + cy);
  }
document.getElementById("l12").style.backgroundColor = 'white';
}
