const form = document.getElementById(MonForm);

function costOfMonster(num1, num2){
    return (num1 * num2);
}

function totalcost(e){
    e.preventDefault();

    let numberofGoombas = costOfMonster(form.goombas.value, 5);
    let numberofBobombs = costOfMonster(form.bobombs.value, 7);
    let numberofCheepCheeps = costOfMonster(form.cheepcheeps.value, 11);
    let result = (numberofGoombas + numberofBobombs + numberofCheepCheeps);

    document.getElementById("totalcost").innerHTML += `Your Total cost is ${result} coins.`;

    form.goombas.value = " ";
    form.bobombs.value = " ";
    form.cheepcheeps.value = " ";
}

form.addEventListener("submit", totalcost);