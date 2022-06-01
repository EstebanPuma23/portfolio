/* =============== typing animacion =========== */
var typed = new Typed(".typing", {
    strings: ["", "Diseñador Web", "Diseñador Responsive", "Diseñador Grafico", "Comunity Manager"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    if (id == true) {
        location.href = "enindex.html"
    } else {
        location.href = "index.html"
    }

}