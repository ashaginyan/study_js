var obj = {}
obj.name = "July"
obj.age = 19
obj.show = function() {
  document.write(this.name + " " + this.age + "<br>")
}
obj.show()
