var myText = "Global var"
document.write(myText + "<br>")
function show() {
  var myText = "Local var"
  document.write(myText + "<br>")
}

show()
document.write(myText + "<br>")
