var txt='"name" in Math'
document.write(txt+" -> "+eval(txt)+"<br>")
var A={color:"red"}
var B=new Object()
B.number=100
showAll()
Object.prototype.name="obj A"
document.write(txt+" -> "+eval(txt)+"<br>")
showAll()
B.name="obj B"
document.write("Math.name -> "+Math.name+"<br>")
showAll()
delete Object.prototype.name
document.write(txt+" -> "+eval(txt)+"<br>")
showAll()
function show(obj){
  for(var s in obj){
    document.write(s+" -> "+obj[s]+" | ")
  }
  document.write("<br>")
}
function showAll(){
  document.write("Object A: ")
  show(A)
  document.write("Object B: ")
  show(B)
  document.write("<br>")
}
