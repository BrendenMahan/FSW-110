for  (let  i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello World";
    document.body.append(ele);
    ele.style.color = "blue";
    ele.style.background = "orange";
}
 
var people = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for ( var i = 0; i < people.length; i ++) {
    var peopleList = document.createElement("li");
    peopleList.innerHTML = people [i];
    document.body.append(peopleList);
}