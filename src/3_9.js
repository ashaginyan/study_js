function f(x){
  var argType
  argType=typeof(x)
  switch(argType){
    case "number":
    document.write("Number<br>")
    break
    case "string":
      document.write("Text<br>")
      break
    default:
      document.write("Not a number or text<br>")
  }
}

f("t")
f(6)
f(9.78)
f(true)
var a
f(a)
