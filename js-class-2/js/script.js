const inputField = document.getElementById("mult");
var textField = document.getElementById("table");
inputField.addEventListener('input', (e) => {
    let mult = inputField.value;
    // using for loop
    // for (let i = 1; i <= 10; i++) {
    //     textField.innerHTML += mult + " x " + i + " = " + mult * i + "<br>";
    //     console.log(mult + " x " + i + " = " + mult * i);
    // }
    // using while loop
    var i=1;
    while(i<=10){
        // console.log("while loop")
        // console.log(textField.innerHTML);
        // console.log(textField.innerText);
        textField.innerHTML += mult + " x " + i + " = " + mult * i + "<br>";
        i++;
    }
})
// break continue
for(let n=1; n<=20; n++){
    if(n==3){
        continue;
    }
    if(n>=15){
        break;
    }
    console.log(n);
}