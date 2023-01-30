let labels=document.querySelectorAll('.form-control label');

for(let label of labels){
    label.innerHTML=label.textContent
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
}