const barMenu = document.querySelector('.barMenu');
const navLinks= document.querySelector('.navLinks');
barMenu.addEventListener('click',() =>{
    console.log(navLinks.style.display=='none');
    if(navLinks.style.display=='block'){
        navLinks.style.display='none';
    }else{
        navLinks.style.display='block'
    }
})
console.dir(document);
console.dir(barMenu);