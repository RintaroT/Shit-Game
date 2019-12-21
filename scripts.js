var x = 0;
var y = 0;
var tree = ["2,4"];
for (var i = 0; i < 1000; i++) {
  tree[tree.length] = Math.round(Math.random() * 100) + "," + Math.round(Math.random() * 100);
  tree[tree.length] = Math.round(Math.random() * -100) + "," + Math.round(Math.random() * 100);
  tree[tree.length] = Math.round(Math.random() * 100) + "," + Math.round(Math.random() * -100);
  tree[tree.length] = Math.round(Math.random() * -100) + "," + Math.round(Math.random() * -100);
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
    document.getElementById('a' + ii).setAttribute("class", x - 11 + "," + cy);
    document.getElementById('b' + ii).setAttribute("class", x - 10 + "," + cy);
    document.getElementById('c' + ii).setAttribute("class", x - 9 + "," + cy);
    document.getElementById('d' + ii).setAttribute("class", x - 8 + "," + cy);
    document.getElementById('e' + ii).setAttribute("class", x - 7 + "," + cy);
    document.getElementById('f' + ii).setAttribute("class", x - 6 + "," + cy);
    document.getElementById('g' + ii).setAttribute("class", x - 5 + "," + cy);
    document.getElementById('h' + ii).setAttribute("class", x - 4 + "," + cy);
    document.getElementById('i' + ii).setAttribute("class", x - 3 + "," + cy);
    document.getElementById('j' + ii).setAttribute("class", x - 2 + "," + cy);
    document.getElementById('k' + ii).setAttribute("class", x - 1 + "," + cy);
    document.getElementById('l' + ii).setAttribute("class", x + "," + cy);
    document.getElementById('m' + ii).setAttribute("class", x + 1 + "," + cy);
    document.getElementById('n' + ii).setAttribute("class", x + 2 + "," + cy);
    document.getElementById('o' + ii).setAttribute("class", x + 3 + "," + cy);
    document.getElementById('p' + ii).setAttribute("class", x + 4 + "," + cy);
    document.getElementById('q' + ii).setAttribute("class", x + 5 + "," + cy);
    document.getElementById('r' + ii).setAttribute("class", x + 6 + "," + cy);
    document.getElementById('s' + ii).setAttribute("class", x + 7 + "," + cy);
    document.getElementById('t' + ii).setAttribute("class", x + 8 + "," + cy);
    document.getElementById('u' + ii).setAttribute("class", x + 9 + "," + cy);
    document.getElementById('v' + ii).setAttribute("class", x + 10 + "," + cy);
    document.getElementById('w' + ii).setAttribute("class", x + 11 + "," + cy);
  }
  for (var i = 0; i < tree.length; i++) {
    if (document.getElementsByClassName(tree[i])[0]) {
      document.getElementsByClassName(tree[i])[0].style.backgroundColor = 'GREEN';
    }
  }
  document.getElementById("l12").style.backgroundColor = 'white';
}

var cellnum = document.getElementsByTagName('TD').length;

document.getElementById("body").onkeypress = function move(event) {
  var key = event.which || event.keyCode;
  console.log(key);
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
    document.getElementById('a' + ii).setAttribute("class", x - 11 + "," + cy);
    document.getElementById('b' + ii).setAttribute("class", x - 10 + "," + cy);
    document.getElementById('c' + ii).setAttribute("class", x - 9 + "," + cy);
    document.getElementById('d' + ii).setAttribute("class", x - 8 + "," + cy);
    document.getElementById('e' + ii).setAttribute("class", x - 7 + "," + cy);
    document.getElementById('f' + ii).setAttribute("class", x - 6 + "," + cy);
    document.getElementById('g' + ii).setAttribute("class", x - 5 + "," + cy);
    document.getElementById('h' + ii).setAttribute("class", x - 4 + "," + cy);
    document.getElementById('i' + ii).setAttribute("class", x - 3 + "," + cy);
    document.getElementById('j' + ii).setAttribute("class", x - 2 + "," + cy);
    document.getElementById('k' + ii).setAttribute("class", x - 1 + "," + cy);
    document.getElementById('l' + ii).setAttribute("class", x + "," + cy);
    document.getElementById('m' + ii).setAttribute("class", x + 1 + "," + cy);
    document.getElementById('n' + ii).setAttribute("class", x + 2 + "," + cy);
    document.getElementById('o' + ii).setAttribute("class", x + 3 + "," + cy);
    document.getElementById('p' + ii).setAttribute("class", x + 4 + "," + cy);
    document.getElementById('q' + ii).setAttribute("class", x + 5 + "," + cy);
    document.getElementById('r' + ii).setAttribute("class", x + 6 + "," + cy);
    document.getElementById('s' + ii).setAttribute("class", x + 7 + "," + cy);
    document.getElementById('t' + ii).setAttribute("class", x + 8 + "," + cy);
    document.getElementById('u' + ii).setAttribute("class", x + 9 + "," + cy);
    document.getElementById('v' + ii).setAttribute("class", x + 10 + "," + cy);
    document.getElementById('w' + ii).setAttribute("class", x + 11 + "," + cy);
  }
  for (var p = 0; p < 529; p++) {
    for (var i = 0; i < tree.length; i++) {
      if (document.getElementsByClassName(tree[i])[0]) {
        if (document.getElementsByTagName("TD")[p].className !== document.getElementsByClassName(tree[i])[0].className) {
          document.getElementsByTagName("TD")[p].style.backgroundColor = 'black';
        }
      }
    }
  }
  for (var i = 0; i < tree.length; i++) {
    if (document.getElementsByClassName(tree[i])[0]) {
      document.getElementsByClassName(tree[i])[0].style.backgroundColor = 'GREEN';
    }
  }
  document.getElementById("l12").style.backgroundColor = 'white';
}
