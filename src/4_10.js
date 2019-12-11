var colors = {
  r: "red",
  y: "yellow",
  g: "green",
  show: function() {
    for (var s in this) {
      document.write(s + "|")
    }
    document.write("<hr>")
  }
}
colors.show()
delete colors.r
colors.show()
delete colors.y
colors.show()
delete colors.show

var tst = "show" in colors
document.write(tst + "<br>")
tst="green" in colors
document.write(tst)
