document.write("Random numbers <br>")
var rnd, msg
for (var k=1,n=20;k<=n;k++) {
  rnd=6+Math.floor(10*Math.random())
  msg=rnd
  switch(rnd) {
    case 6:
      msg += " - perfect number <br>"
      break
    case 7:
    case 11:
    case 13:
      msg += " - simple number <br>"
      break
    case 10:
    case 15:
      msg += " - divided by 5 <br>"
      break
    default:
      msg += " - I have nothing to say about this number <br>"
  }

  document.write(msg)
}
