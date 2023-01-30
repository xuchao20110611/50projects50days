let boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',()=>{
    for (let box of boxes){
        const boxtop=box.getBoundingClientRect().top;
        if(boxtop<window.innerHeight){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    };
});