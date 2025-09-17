const client = document.getElementById("client")
const nome = prompt('Qual é seu nome?')
const projects = document.getElementById("projeto")
const certificado = document.getElementById("certificados")
const stacks = document.getElementById("stacks")
const cards = document.querySelector(".blockCards")
const menu = document.querySelector(".menu")
const icons = [...document.querySelectorAll(".icons")]
const linkDesck = document.getElementById("linkDesck")

if (nome === null || nome.trim() === "") {

} else {
  client.innerHTML = ` ${nome.trim()}!`;
}



const paginacao = (btn) => {
    btn.target.classList.toggle("select");
}

projects.addEventListener("click", (e) => {
    paginacao(e)

    if (certificado.classList.contains("select") || stacks.classList.contains("select")) {
        certificado.classList.remove("select")
        stacks.classList.remove("select")
    }

    cards.innerHTML = `
                <a href="">
                    <div class="card">
                        <img src="src/img/Captura de tela 2025-09-05 182256.png" alt="Calculadora">
                        <div class="cardText">
                            <p>Calculadora feita com JavaScript.</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <img src="src/img/Captura de tela 2025-09-05 182525.png" alt="landing page">
                        <div class="cardText">
                            <p>Landing Page, feita para treinar design.</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <img src="src/img/Captura de tela 2025-09-05 182734.png" alt="Clone HBO">
                        <div class="cardText">
                            <p>Clone HBO.</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <img src="src/img/Captura de tela 2025-09-05 182822.png" alt="Clone Discord">
                        <div class="cardText">
                            <p>Clone do Discord.</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="card">
                        <img src="src/img/Captura de tela 2025-09-05 182922.png" alt="Coffe">
                        <div class="cardText">
                            <p>Site para uma cafetéria.</p>
                        </div>
                    </div> 
                </a>
`
});

certificado.addEventListener("click", (e) => {
    paginacao(e)

    if (projects.classList.contains("select") || stacks.classList.contains("select")) {
        projects.classList.remove("select")
        stacks.classList.remove("select")
    }

    cards.innerText = `Esta seção está em fase de desenvolvimento...`
});

stacks.addEventListener("click", (e) => {
    paginacao(e)

    if (certificado.classList.contains("select") || projects.classList.contains("select")) {
        certificado.classList.remove("select")
        projects.classList.remove("select")
    }

    cards.innerHTML = `<div class="card">
                    <img src="src/img/html_1652296.png" alt="Coffe">
                </div>

                <div class="card">
                    <img src="src/img/css_9512252.png" alt="Calculadora">
                </div>

                <div class="card">
                    <img src="src/img/js_8945581.png" alt="landing page">
                </div>

                <div class="card">
                    <img src="src/img/github_536452.png" alt="Clone HBO">
                </div>
                `
});

menu.addEventListener("click", () => {
    const barras = [...document.querySelectorAll(".barra")]
    const links = document.getElementById("link")

    links.classList.toggle("links")

    barras.forEach((el) => {
        el.classList.toggle("clicado")
    })
})

icons.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        el.classList.toggle("iconsBorder")
    })

    el.addEventListener("mouseleave", () => {
        el.classList.remove("iconsBorder");
    });
})

linkDesck.addEventListener("mouseenter", (e) => {
    linkDesck.classList.toggle("linkDesckOn")
})

linkDesck.addEventListener("mouseleave", () => {
    linkDesck.classList.remove("linkDesckOn")
});