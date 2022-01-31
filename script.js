const menu = document.getElementById("btn")
menu.addEventListener('click',()=>{
    let menuChange = document.getElementById("menuBtn");
    menuChange.classList.toggle('activeFaPaw');
    
})

/* SLIDER */
const bolaUno = document.getElementById("bolaUno");
const bolaDos = document.getElementById("bolaDos");
const bolaTres = document.getElementById("bolaTres");

/* const ballUno = document.getElementById("bolaUno");
const ballDos = document.getElementById("bolaDos");
const ballTres = document.getElementById("bolaTres") */

bolaUno.addEventListener('click',()=>{
    unaBola()
})
bolaDos.addEventListener('click',()=>{
    dosBola()
})
bolaTres.addEventListener('click',()=>{
    tresBola()
})


/* Funciones */
function unaBola(){
    /* ballUno.addEventListener('click',()=>{
        ballUno.classList.add("ball1Active")
    }); */

    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.add("slider__move__activeUno");

}g
function dosBola(){
 /*    ballDos.addEventListener('click',()=>{
        ballDos.classList.add("ball2Active")
    }); */

    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.add("slider__move__activeDos");

    removeClass();
    
}
function tresBola(){
    
    /* ballTres.addEventListener('click',()=>{
    ballTres.classList.add("ball3Active")
    });
         */
    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.add("slider__move__activeTres");

    removeClassDos();
}

/* Funcion para remover las clases */
function removeClass(){
    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.remove("slider__move__activeUno")

    
};
function removeClassDos(){
    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.remove("slider__move__activeDos");
};
function removeClassTres(){
    let bodyMove = document.getElementById("sliderMove");
    bodyMove.classList.remove("slider__move__activeTres")
};