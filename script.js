const sidebar = document.querySelector('.side__bar')
const menuBtn = document.querySelector('.menuBtn')

menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
})