
let con = 0
const natija = document.querySelector(".natija")

console.log(natija);



function nol() {
    con = 0
    console.log(con);
    natija.innerHTML = con
}



function qoshish() {
    con++
    console.log(con);
    natija.innerHTML = con
}


function ayi() {
    con--
    console.log(con);
    natija.innerHTML = con
}