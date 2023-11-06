String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length);}

const palabras = ["calamar", "acuerdo", "estatua", "operarios", "zapatos"];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g,"_ ");
let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#calcular").addEventListener("click", () =>
{

    const letra = document.querySelector("#letra").value;
    let haFallado = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }
    if(haFallado){
        contadorFallos++;
        document.querySelector("#ahorcado2").style.backgroundPosition = -(250*contadorFallos) + "px 0";
        if(contadorFallos == 4){
            alert("Final de la partida, vuelve a intentarlo")
        }
    }else{
        if(palabraConGuiones.indexOf("_") <0){
            document.querySelector("#ganador").style.display = "flex";
        }
    }
    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value = "";
    document.querySelector("#letra").focus();
});

var reviews = [];
function displayReviews() {
    var reviewsDiv = document.getElementById("reviews");
    reviewsDiv.innerHTML = "";

    for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        var reviewElement = document.createElement("div");
        reviewElement.innerHTML = "<strong>" + review.name + "</strong><br>" + review.comment + "<hr>";
        reviewsDiv.appendChild(reviewElement);
    }
}
function addReview() {
    var name = prompt("Nombre del cliente:");
    var comment = prompt("Comentario:");
    if (name && comment) {
        var newReview = {
            name: name,
            comment: comment
        };
        reviews.push(newReview);
        displayReviews();
    }
}
    var addReviewButton = document.getElementById("addReviewButton");
    addReviewButton.addEventListener("click", addReview);
    displayReviews();
