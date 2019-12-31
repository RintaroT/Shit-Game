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
  ehp[ehp.length] = 3;
}

function ai() {
  nex = [];
  ney = [];
  for (var t = 0; t < et.length; t++) {
    ex = ep[t];
    ey = et[t];
    var ec = "x" + ex + "y" + ey;
    if (ehp[t] > 0) {
    var ech = document.getElementsByClassName(ec)[0];
    if (localStorage.running == 0) {
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
        if (dist < 3){
          nex[nex.length] = ex;
          ney[ney.length] = ey;
          net[net.length] = t;
        }
        if (6 > dist && dist > 2 && document.getElementsByClassName("x" + ex + "y" + ey)[0].classList.contains("notvisible") == false) {
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

        if (dist <= 2) {
          localStorage.running = 1;
          if (facing == "up") {
            mx = ex;
            my = ey + 1;
            var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
              my++
              var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            }, 200);
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
            }, 300);
            setTimeout(function() {
              localStorage.running = 0;
            }, 350);
          }
          if (facing == "left") {
            mx = ex - 1;
            my = ey;
            var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
              mx--
              var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            }, 200);
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
            }, 300);
            setTimeout(function() {
              localStorage.running = 0;
            }, 350);
          }
          if (facing == "down") {
            mx = ex;
            my = ey - 1;
            var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
              my--
              var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            }, 200);
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
            }, 300);
            setTimeout(function() {
              localStorage.running = 0;
            }, 350);
          }
          if (facing == "right") {
            mx = ex + 1;
            my = ey;
            var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            setTimeout(function() {
            document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
              mx++
              var v = document.getElementsByClassName("x" + mx + "y" + my)[0].style.backgroundColor = "rgba(255, 17, 0, 0.5)";
            }, 200);
            setTimeout(function() {
              document.getElementsByClassName("x" + mx + "y" + my)[0].style = "";
            }, 300);
            setTimeout(function() {
              localStorage.running = 0;
            }, 350);
          }
        }
      }
    }
  }
  if(localStorage.running == 1){
    nex = [];
    ney = [];
    for (var t = 0; t < et.length; t++) {
      ex = ep[t];
      ey = et[t];
  var dist = Math.sqrt(Math.pow(ex - x, 2) + Math.pow(ey - y, 2));
      if (dist < 3){
        nex[nex.length] = ex;
        ney[ney.length] = ey;
        net[net.length] = t;
      }
      var ec = "x" + ex + "y" + ey;
          var ech = document.getElementsByClassName(ec)[0];
          if (ech != undefined){
                document.getElementsByClassName(ec)[0].className += " enemy";
        }
        }

}
}
}
