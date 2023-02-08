let elements = document.getElementsByClassName('faq');
let btns = Array.from(document.getElementsByClassName('faq-toggle'));

console.log(btns[0]);
btns.forEach((btn, btn_index) => {
    btn.addEventListener('click',()=>{
        if(elements[btn_index].classList.contains('active')){
            elements[btn_index].classList.remove('active');
        } else {
            elements[btn_index].classList.add('active');
        }
    });
});