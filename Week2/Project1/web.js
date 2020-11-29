var newHeader = document.createElement("h1")
newHeader.textContent = "Welcome to my J.S site"
document.body.append(newHeader)

var newParagraph = document.createElement("p")
newParagraph.textContent = "All of this was created with Javascript"
document.body.append(newParagraph)

var newLi = document.createElement("li")
newLi.textContent = "0"
var newLi1 = document.createElement("li")
newLi1.textContent = "1"
var newLi2 = document.createElement("li")
newLi2.textContent = "2"
var myOl = document.createElement("ol")
myOl.append(newLi,newLi1,newLi2)
document.body.append(myOl)