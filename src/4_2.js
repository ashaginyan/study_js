function show(obj) {
  document.write(obj.name + " " + obj.age + "<br>")
}

var obj = {name: "July", age: 19}
show(obj)
obj.name = "Alex"
obj.age++
show(obj)
