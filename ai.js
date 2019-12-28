var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();


for (var i = 0; i < spawnx.length; i++) {
  ep[ep.length] = spawnx[i];
  et[et.length] = spawny[i];
}

function ai() {

  for (var t = 0; t < et.length; t++) {
    ex = ep[t];
    ey = et[t];
    var ec = "x" + ex + "y" + ey;
    var ech = document.getElementsByClassName(ec)[0];
if(localStorage.running == 0){
    if (ech != undefined) {
      document.getElementsByClassName(ec)[0].className += " enemy";
      var dist = Math.sqrt(Math.pow(ex - x, 2) + Math.pow(ey - y, 2));
      var eu = ey + 1;
      var el = ex - 1;
      var ed = ey - 1;
      var er = ex + 1;
      var dist = Math.sqrt(Math.pow(ex - x, 2) + Math.pow(ey - y, 2));
      var distu = Math.sqrt(Math.pow(ex - x, 2) + Math.pow(eu - y, 2));
      var distl = Math.sqrt(Math.pow(el - x, 2) + Math.pow(ey - y, 2));
      var distd = Math.sqrt(Math.pow(ex - x, 2) + Math.pow(ed - y, 2));
      var distr = Math.sqrt(Math.pow(er - x, 2) + Math.pow(ey - y, 2));
      if (6 > dist && dist > 1 && document.getElementsByClassName("x" + ex + "y" + ey)[0].classList.contains("notvisible") == false) {
        if (distu < distl && distu < distd && distu < distr) {
          var c = window.getComputedStyle(document.getElementsByClassName("x" + ex + "y" + eu)[0]).getPropertyValue('background-Color');
          if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)" && c !== "rgb(255, 0, 0)") {
            ey++
            et[t] = ey;
            facing = "up";
          }
        }
        if (distl < distu && distl < distd && distl < distr) {
          var c = window.getComputedStyle(document.getElementsByClassName("x" + el + "y" + ey)[0]).getPropertyValue('background-Color');

          if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)" && c !== "rgb(255, 0, 0)") {
            ex--
            ep[t] = ex;
            facing = "left";
          }
        }
        if (distd < distl && distd < distu && distd < distr) {
          var c = window.getComputedStyle(document.getElementsByClassName("x" + ex + "y" + ed)[0]).getPropertyValue('background-Color');

          if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)" && c !== "rgb(255, 0, 0)") {
            ey--
            et[t] = ey;
            facing = "down";
          }
        }
        if (distr < distl && distr < distd && distr < distu) {
          var c = window.getComputedStyle(document.getElementsByClassName("x" + er + "y" + ey)[0]).getPropertyValue('background-Color');
          if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)" && c !== "rgb(255, 0, 0)") {
            ex++
            ep[t] = ex;
            facing = "right";
          }
        }
      }


    }
  }
  }
}
