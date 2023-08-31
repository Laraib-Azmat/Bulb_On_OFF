//variables

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const img = document.getElementById('bulb');
const prin = document.getElementsByClassName('print');

//event listner

btn1.addEventListener('click', turnoff);
btn2.addEventListener("click", turnon);

//function

function turnoff(e) {
    img.src = './img/bulb-off.png';
    document.body.style.backgroundColor = 'white';
}

function turnon(e) {
    img.src = './img/bulb-on.png';
    document.body.style.backgroundColor = 'Yellow';
  
}