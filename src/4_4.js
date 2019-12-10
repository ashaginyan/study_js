var objA = {name: "July",
          age: 19,
          show: function() {
            document.write(this.name + " " + this.age + "<br>")
          }
}
document.write("ObjA: ")
objA.show()

var objB = objA
document.write("ObjB: ")
objB.show()

objA.name = "Alex"
objA.age++

document.write("ObjA: ")
objA.show()
document.write("ObjB: ")
objB.show()
