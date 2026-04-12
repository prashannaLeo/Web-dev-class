const textBox = document.getElementById("text-box");
const redBtn = document.getElementById("redBtn");
const yellowBtn = document.getElementById("yellowBtn");
const btns=document.getElementById("btns");
const blueBtn = document.getElementById("blueBtn");


function content(btnColor) {
    textBox.innerText = `${btnColor} Button is clicked !!!`;
    textBox.style.backgroundColor = `${btnColor}`;
}
// redBtn.addEventListener("click", function () {
//     content("red")
// });

// yellowBtn.addEventListener("click", function () {
//     content("yellow")
// });

// blueBtn.addEventListener("click", function () {
//     content("blue")
// });

// Event delegation with switch
btns.addEventListener("click", function(event) {
    const button = event.target.closest('button');
    
    if (!button) return;
    
    switch(button.id) {
        case "redBtn":
            content("red");
            break;
        case "yellowBtn":
            content("yellow");
            break;
        case "blueBtn":
            content("blue");
            break;
    }
});
