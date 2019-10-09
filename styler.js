var elem;
function fillStyle(elem, color) {
  var elem = document.getElementById(elem);
  elem.style.backgroundColor = color;
}
function size(elem, height, width) {
  var elem = document.getElementById(elem);
  elem.style.width = width;
  elem.style.height = height;
}
function transparency(elem, opacity) {
  var elem = document.getElementById(elem);
  elem.style.opacity = opacity
}
