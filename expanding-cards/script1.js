let panels = document.querySelectorAll('.panel');

for(let panel of panels) {
    panel.addEventListener('click',()=>{
        for(let panel of panels) {
            panel.classList.remove("active");
        }
        panel.classList.add("active");
    });
}