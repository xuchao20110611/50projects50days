var step=1;
let prev_button=document.getElementById("prev");
let next_button=document.getElementById("next");
let progress=document.querySelectorAll(".circle");
let progress_line=document.getElementById("progress");

next_button.addEventListener('click',()=>{
    progress[step].classList.add('active');
    step=step+1;
    if(step===4){
        next_button.disabled=true;
    }
    prev_button.disabled=false;
    progress_line.style.width=100/3*(step-1)+'%';

});

prev_button.addEventListener('click',()=>{
    progress[step-1].classList.remove('active');
    step=step-1;
    if(step===1){
        prev_button.disabled=true;
    }
    next_button.disabled=false;
    progress_line.style.width=100/3*(step-1)+'%';
    
});