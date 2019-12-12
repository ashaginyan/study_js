function MyObj() {
  this.number = 0
}

var A = new MyObj()

var F = A.constructor
var B = new F()

document.write("B.number: "+B.number+"<br>")

A = {}
F = A.constructor
document.write("F==Object -> "+(F==Object)+"<br>")

A=new function(){
this.name="obj"
}()

F = A.constructor
B = new F()

document.write("B.name: "+B.name+"<br>")
