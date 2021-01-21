var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert("Your grade would be: " + (.5 * document.getElementById("assignment").value + .1 * document.getElementById("group").value +
    .1 * document.getElementById("quiz").value + .2 * document.getElementById("exam").value + .1 * document.getElementById("intex").value) +"%")
    
    });