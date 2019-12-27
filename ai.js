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
var dist = Math.sqrt(Math.pow(ex-x, 2) + Math.pow(ey-y, 2));
var eu = ey + 1;
var el= ex - 1;
var ed= ey - 1;
var er = ex + 1;

var distu = Math.sqrt(Math.pow(ex-x, 2) + Math.pow(eu-y, 2));
var distl = Math.sqrt(Math.pow(el-x, 2) + Math.pow(ey-y, 2));
var distd = Math.sqrt(Math.pow(ex-x, 2) + Math.pow(ed-y, 2));
var distr = Math.sqrt(Math.pow(er-x, 2) + Math.pow(ey-y, 2));
if (distu < distl && distu < distd && distu < distr){
  var c = window.getComputedStyle(document.getElementsByClassName("x"+ ex + "y" + eu)[0]).getPropertyValue('background-Color');
if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)"){
  ey++
}
}
if (distl < distu && distl < distd && distl < distr){
  var c = window.getComputedStyle(document.getElementsByClassName("x"+ el + "y" + ey)[0]).getPropertyValue('background-Color');
  console.log(c);
  if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)"){
  ex--
}
}
if (distd < distl && distd < distu && distd < distr){
  var c = window.getComputedStyle(document.getElementsByClassName("x"+ ex + "y" + ed)[0]).getPropertyValue('background-Color');
  if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)"){
  ey--
}
}
if (distr < distl && distr < distd && distr < distu){
  var c = window.getComputedStyle(document.getElementsByClassName("x"+ er + "y" + ey)[0]).getPropertyValue('background-Color');
  if (c !== "rgb(255, 255, 255)" && c !== "rgb(128, 128, 128)"){
  ex++
}
}

}
