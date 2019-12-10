function first() {
  document.write("First function<br>")
}
function second() {
  document.write("Second function<br>")
}
first()
second()
var tmp
tmp = first
first = second
second = tmp
first()
second()
