
// this event listner allows to t
window.addEventListener('DOMContentLoaded', () => {
    const boss = document.getElementById('boss');
    boss.innerText = "Nepal";
    console.log(boss);

    const boxes= document.getElementsByClassName('box');
    console.log(boxes);

    for(let i=0; i<boxes.length; i++){
        // if(i==0){
            boxes[i].innerText = `This is Box ${i+1}`;
        // console.log(`Box.no. ${i}`,boxes[i]);
    // }
}
    //  [...boxes].forEach(box=> {
    //     console.log(box);
    //  });
})