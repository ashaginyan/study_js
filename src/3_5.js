var myText = "Global var"
document.write(myText + "<br>")
function show() {
  myText = "Var that seems to be global"
  document.write(myText + "<br>")
  var myText = "Local var"
  document.write(myText + "<br>")
}
show()
document.write(myText + "<br>")
