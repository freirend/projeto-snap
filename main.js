const ferramenta = document.querySelector('.elementos-ferramentas')
const box = document.querySelector('.box-ferramentas')
const boxempresa = document.querySelector('.box-empresa')
const empresa = document.querySelector('.elementos-empresa')
const iconum = document.querySelector('.uil-um')
const icondois = document.querySelector('.uil-dois')

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
