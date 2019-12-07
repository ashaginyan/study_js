document.write("<h3>Piecewise smooth function</h3>")

function f(x) {
  if (x<0) {
    return 0
  }
  else {
    if (x<2) {
      return x*x
    }
    else {
      if (x<5) {
        return 6-x
      }
      else {
        return 1
      }
    }
  }
}
var z = 9*Math.random()-2
document.write("Random arg: <b>"+z+"</b><br>")
document.write("The value of func: <b>"+f(z)+"</b>")
