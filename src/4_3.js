var obj = {name: "July",
          age: 19,
          show: function() {
            document.write(this.name + " " + this.age + "<br>")
          }
}
obj.show()
obj.name = "Alex"
obj.age++
obj.show()
