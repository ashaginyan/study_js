var txt, name
txt="Let me know you, user. What is your name?"
name=prompt(txt)
if (name=="") {
  document.write("Sorry, but you didn't name yourself")
}
else if (name=="null") {
  document.write("Don't you want to meet me? :(")
}
else {
  document.write("Nice to meet you, "+name+"!")
}
