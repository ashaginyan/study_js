var myText = "Global var"
document.write(myText + "<br>")
function show() {
  myText = "Non local var"
  document.write(myText + "<br>")
}
show()
document.write(myText + "<br>")
