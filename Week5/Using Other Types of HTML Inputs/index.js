var form= document.passengerData;
form.addEventListener("submit", function(event){
event.preventDefault()

var checkedBox= []
for (var i = 0; i < form.dietary.length; i++){
    if(form.dietary[i].checked){
    checkedBox.push(form.dietary[i].value)
    }
}
var firstName= form.firstName.value
var lastName= form.lastName.value
var age= form.age.value
var gender= form.gender.value
var location= form.city.value

form.firstName.value= ""
form.lastName.value= ""
form.age.value= ""
form.gender.value= ""
form.city.value= ""
form.phone.value= ""

alert("First name: "+firstName+"\nLast name: "+lastName+"\nAge: "+age+"\nGender: "+gender+"\nLocation: "+location+"\nDietary: "+checkedBox)
})