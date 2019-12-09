var myText="Global var"
document.write(myText + "<br>")
function show() {
  var myText = "Local var"
  window.myText = "Var that seems to be global"
  document.write(myText + "<br>")
  document.write(window.myText + "<br>")
}
show()
document.write(myText + "<br>")
