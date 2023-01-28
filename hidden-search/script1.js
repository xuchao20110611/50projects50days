let button=document.getElementsByClassName('btn')[0];
let serachdiv=document.getElementsByClassName('search')[0];
function ftn() {
    let index = serachdiv.classList.contains('active');
    if (index) {
        serachdiv.classList.remove('active');
    } else {
        serachdiv.classList.add('active');
    }
}
button.addEventListener('click',ftn);