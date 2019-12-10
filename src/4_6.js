function Fellow(name, age) {
  this.name = name
  this.age = age
  this.show = function() {
    document.write(this.name + " " + this.age + "<br>")
  }
}

var objA = new Fellow("July", 19)
var objB = new Fellow("Alex", 20)

objA.show()
objB.show()
