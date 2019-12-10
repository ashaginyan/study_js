var f = function(msg) {
  document.write(msg+"<br>")
}

f("Anonymous function")
(function(msg) {
  document.write(msg+"<br>")
}("One more function"))
