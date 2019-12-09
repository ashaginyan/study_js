function makeHeader(t) {
  document.write("<h3>"+t+"</h3>")
}

function myRand() {
  return 1+Math.floor(10*Math.random())
}

function getRandText(n) {
  var txt = ""
  for (var k=1;k<=n;k++) {
    txt+=myRand()
  }
  return txt
}

makeHeader("Functions")
document.write(getRandText(20))
