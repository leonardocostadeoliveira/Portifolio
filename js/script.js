// seleção
const background = document.getElementById("background");
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let formulario =document.getElementById('formulario')

// eventos

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('ligth')
    body.classList.toggle('ligth')
    formulario.classList.toggle('ligth')
});

const snippets = [

`const developer = {

    name: "Leonardo",

    stack: ["HTML","CSS","JavaScript"]

};`,

`function createWebsite(){

    return "Amazing";

}`,

`display:flex;

justify-content:center;

align-items:center;`,

`const projects = [

"Landing Page",

"E-commerce",

"Dashboard"

];`,

`document.querySelector(".hero");`,

`fetch("/api/projects")`

];

// funcoes
function createCode(){

    const code = document.createElement("pre");

    code.classList.add("code");

    code.textContent = snippets[Math.floor(Math.random()*snippets.length)];

    code.style.left = Math.random()*100+"vw";

    code.style.animationDuration = (15 + Math.random()*20)+"s";

    code.style.fontSize = (14 + Math.random()*12)+"px";

    background.appendChild(code);

    setTimeout(()=>{

        code.remove();

    },35000);

}

setInterval(createCode,700);