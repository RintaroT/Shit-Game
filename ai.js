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
function ai(){
  document.getElementById("l8").className += " enemy";
}
