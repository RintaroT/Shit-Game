var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();

//var test = document.getElementsByClassName('x0y4').id;
var ex = 0;
var ey = 4;

function ai() {
  var ec = "x" + ex + "y" + ey;
  document.getElementsByClassName(ec)[0].className += " enemy";


}
