var H1 = document.createElement("h1")
H1.innterHTML = ""
document.body.append(H1);
H1.style.fontsize = "40px";
H1.style.fontweight = "lighter";
H1.style.fontfamily = "sans-serif";
H1.style.color = "cornflowerblue";
H1.style.textalign = "center";
H1.style.padding = "150px";
H1.style.border = "2px solid black";
H1.style.height = "1000px;";
H1.style.width = "300px"; 
H1.addEventListener ("mouseover", function() {
    H1.style.backgroundColor = "blue"
});
H1.addEventListener ("mousedown", function() {
    H1.style.backgroundColor = "red";
});
H1.addEventListener ("mouseup", function(){
    H1.style.backgroundColor = "yellow";
});
H1.addEventListener ("dblclick", function () {
    H1.style.backgrounColor = "green";
});
window.addEventListener ("scroll", function (){
    H1.style.backgroundColor = "orange";
});
window.addEventListener ("keydown", event => {
    if(event.key == "r"){
        H1.style.backgroundColor = "red"
    }
});
window.addEventListener ("keydown" , event => {
    if (event.key == "b"){
        H1.style.background == "blue";
    }
})