const input = document.querySelector('#tarefa');
const btn = document.querySelector('.btn')
const conteudo = document.querySelector('#lis')
const p = document.querySelector('#para')

let lista = []

btn.addEventListener('click', adicionarNovaTarefa)

function adicionarNovaTarefa(){
    if(input.value != ''){
    lista.push({
    tarefa: input.value,
    concluida: false
   })
   p.classList.remove('mostrar')
   input.value = ''
   document.getElementById('tarefa').focus()
   }else{
    p.classList.add('mostrar')
   }
   mostrarTarefa()
}

function mostrarTarefa(){
    let novaLinha = ''

   lista.forEach((item, index)=>{
    novaLinha = novaLinha +
    `<li class="${item.concluida && "concluida"}"> 
    <i class="fa-regular fa-circle-check" style="color: #45d232;" onclick="concluirTarefa(${index})"></i>
    ${item.tarefa}
    <i class="fa-solid fa-trash-can" style="color: #ec0e19;" O onclick="excluirTarefa(${index})"></i>
    </li>
    `
   })
   conteudo.innerHTML= novaLinha
   localStorage.setItem('items', JSON
    .stringify(lista))
}

function excluirTarefa(index){
   lista.splice(index, 1)
   mostrarTarefa()
}

function concluirTarefa(index){
    lista[index].concluida = !lista[index].concluida

    mostrarTarefa()
}

function carregarTarefas(){
    const itemsDaLista = localStorage.getItem('items')

    if(itemsDaLista){
    lista = JSON.parse(itemsDaLista)
    }
    mostrarTarefa()
}

onload = function(){
    document.getElementById('tarefa').focus()
}

document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btn.click()  
    }
  
})

carregarTarefas()

