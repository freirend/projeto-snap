const ferramenta = document.querySelector('.elementos-ferramentas')
const box = document.querySelector('.box-ferramentas')
const boxempresa = document.querySelector('.box-empresa')
const empresa = document.querySelector('.elementos-empresa')
const iconum = document.querySelector('.uil-um')
const icondois = document.querySelector('.uil-dois')
const burguer = document.querySelector('.uil-bars')
const nav = document.querySelector('#navbar')

box.addEventListener('mouseover', ()=>{
    ferramenta.style.display = 'block'
    iconum.style.transform = 'rotate(180deg)'
})

box.addEventListener('mouseout',()=>{
    ferramenta.style.display = 'none'
    iconum.style.transform = 'rotate(0deg)'
})

boxempresa.addEventListener('mouseover', ()=>{
    empresa.style.display = 'block'
    icondois.style.transform = 'rotate(180deg)'
})

boxempresa.addEventListener('mouseout', ()=>{
    empresa.style.display = 'none'
    icondois.style.transform = 'rotate(0deg)'
})

box.addEventListener('click', ()=>{
    if (ferramenta.className == "elementos-ferramentas desativar"){
        ferramenta.style.display = 'block'
        ferramenta.classList.remove('desativar')
        iconum.style.transform = 'rotate(180deg)'
    } else{
        ferramenta.style.display = 'none'
        ferramenta.classList.add('desativar')
        iconum.style.transform = 'rotate(0deg)'
    }
})

boxempresa.addEventListener('click', ()=>{
    if (empresa.className == "elementos-empresa desativar"){
        empresa.style.display = 'block'
        empresa.classList.remove('desativar')
        icondois.style.transform = 'rotate(180deg)'
    } else{
        empresa.style.display = 'none'
        empresa.classList.add('desativar')
        icondois.style.transform = 'rotate(0deg)'
    }
})

burguer.addEventListener('click', ()=>{
    burguer.classList.toggle('uil-multiply')
    if (burguer.className == "uil uil-bars uil-multiply"){
        nav.style.right = '0'
    } else{
        nav.style.right = '150%'
    }
    /*Preciso adicionar a lógica de abrir e fechar a nav*/
})
