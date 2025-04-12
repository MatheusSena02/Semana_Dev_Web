const botaoDireita = document.getElementById("setaDireita");
const botaoEsquerda = document.getElementById("setaEsquerda");

console.log(botaoDireita)

function verificaIndice() {

    if (indice = 0) {
        const imagem1 = document.querySelector(".conteudo-pagina02_carrosel_fotos1");
        imagem1.style.display = "flex";
        const imagem2 = document.querySelector(".conteudo-pagina02_carrosel_fotos2");
        imagem2.style.display = "none";
        const imagem3 = document.querySelector(".conteudo-pagina02_carrosel_fotos3");
        imagem3.style.display = "none";
    }

    if (indice = 1) {
        const imagem1 = document.querySelector(".conteudo-pagina02_carrosel_fotos1");
        imagem1.style.display = "none";
        const imagem2 = document.querySelector(".conteudo-pagina02_carrosel_fotos2");
        imagem2.style.display = "flex";
        const imagem3 = document.querySelector(".conteudo-pagina02_carrosel_fotos3");
        imagem3.style.display = "none";
    }

    if (indice = 2) {
        const imagem1 = document.querySelector(".conteudo-pagina02_carrosel_fotos1");
        imagem1.style.display = "none";
        const imagem2 = document.querySelector(".conteudo-pagina02_carrosel_fotos2");
        imagem2.style.display = "none";
        const imagem3 = document.querySelector(".conteudo-pagina02_carrosel_fotos3");
        imagem3.style.display = "flex";
    }
}

function avancou() {
    indice = (indice =+ 1) % 3;
    console.log(indice)
    verificaIndice();
    return indice;
}

function regrediu() {
    if (indice - 1 < 0) {
        indice = 0;
    }

    else {
        indice = (indice - 1) % 3;
    }

    verificaIndice();
    return indice;
}

// indice = regrediu();
// indice = avancou();

// console.log(indice)

botaoEsquerda.addEventListener("click", regrediu);
botaoDireita.addEventListener("click", avancou);















const modal = document.getElementById("modal");

const aula1 = document.querySelector(".aula1");

aula1.addEventListener("click", abreModal);

const botaoQueFecha = document.getElementById("botaoModal");
console.log(botaoQueFecha)
botaoQueFecha.addEventListener("click", fechaModal)


function abreModal() {
    modal.style.display = "flex";
}

function fechaModal() {
    modal.style.display = "none";
}