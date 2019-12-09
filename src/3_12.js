function fibs(n) {
  if (n==1||n==2) {
    return 1
  }
  else {
    return fibs(n-1)+fibs(n-2)
  }
}

for(var k=1;k<=30;k++) {
  document.write(fibs(k)+" ")
}
