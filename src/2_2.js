var txt, name, msg
txt = "Let's meet! What is your name?"
msg = "Sorry, but you didn't name yourself"
name = prompt(txt)
if (name != "") {
  msg = "Nice to meet you, " + name + "!"
}
document.write(msg)
