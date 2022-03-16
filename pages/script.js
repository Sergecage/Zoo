const timerPopUp = setTimeout(openPopUp, 10000);

function openPopUp(){
    document.querySelector("#together-pop").style.display = "block";
}

function closePopUp(){
    document.querySelector('#together-pop').style.display ="none";
}