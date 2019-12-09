var x = "Alpha"
show("Bravo")

function show(x) {
  document.write("Arg: " + x + "<br>")
  document.write("Global var: " + window.x + "<br>")
}
