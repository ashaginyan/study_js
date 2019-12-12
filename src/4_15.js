function MyObject(name, number) {
  this.name = name
  this.number = number
  this.show = function() {
    for (var s in this) {
      if (s!="show") {
        document.write(s+"->"+this[s]+"|")
      }
    }
    document.write("<br>")
  }
}
var A = new MyObject("Obj A", 100)
var B = new MyObject("Obj B", 200)
A.show()
B.show()
MyObject.prototype.color = "transparent"
A.show()
B.show()
A.color = "white"
delete MyObject.prototype.color
A.show()
B.show()
var txt = "Object.getPrototypeOf(A)==MyObject.prototype"
document.write(txt+" -> "+eval(txt))
