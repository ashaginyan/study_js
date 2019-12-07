for (var k=1,s=0,n=100;k<=n;k++) {
  s+=k*k
}

var txt = "1<sup>2</sup>+2<sup>2</sup>+...+"
txt+=n+"<sup>2</sup>="
document.write(txt+s)
