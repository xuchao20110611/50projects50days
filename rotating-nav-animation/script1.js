let closebutton=document.getElementById('close');
let openbutton=document.getElementById('open');
let container=document.getElementsByClassName('container')[0];


openbutton.addEventListener('click',()=>{
    container.classList.add('show-nav');
});

closebutton.addEventListener('click',()=>{
    container.classList.remove('show-nav');
});