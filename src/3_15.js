function show(x, y, op) {
  var msg
  switch(op) {
    case "+":
      msg = "x + y = " + (x + y) + "<br>"
      break
    case "-":
      msg = "x - y = " + (x - y) + "<br>"
      break
    case "*":
      msg = "x * y = " + (x * y) + "<br>"
      break
    case "/":
      msg = "x / y = " + (x / y) + "<br>"
      break
    default:
      msg = op + " - unknown operation" + "<br>"
  }
  document.write(msg)
}

show(9, 4, "-")
var f = show
f(20, 2, "*")
show = "Hello"
document.write("Show: " +show + "<br>")
