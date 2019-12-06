count = 0;
var x1;
var y1;
var x2;
var y2;
var points = [];
var tur = new turtle();

cvs.addEventListener("click", function(evt) {
  var mouse_pos = getMousePos(evt);
  var p = new Point(mouse_pos.x, mouse_pos.y);
  points.push(p);
  p.drawPoint();

  if (points.length == 2) {
    tur.forward(points[0], points[1]);
  } else if (points.length > 2) {
    tur.forward(points[points.length - 2], points[points.length - 1]);
  }
if(points.length>1){
  tur.printString();
}
});

function getMousePos(e) {
  var rect = cvs.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}
