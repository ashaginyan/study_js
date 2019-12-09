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

show(8, 4, '*')
show(8, 4, '+')
show(8, 4, '/')
show(8, 4, '-')
show(8, 4, ';)')
