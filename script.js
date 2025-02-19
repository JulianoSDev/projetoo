function mudarposição() {
    let botao = document.getElementById("sim");
    let novaPosX = Math.random() *window.innerWidth * 0.6;
    let novaPosY = Math.random() *window.innerHeight * 0.6;
    botao.style.left = novaPosX + "px";
    botao.style.top = novaPosY + "px";
}

function mostrarmensagem() {
    alert("Eu ja sabia fia, se liga");
}
