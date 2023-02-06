/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-02-06 16:50:05
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-02-06 17:06:18
 * @FilePath: /sound-board/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let buttons=document.querySelector("#buttons");
let soundlist=['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function playsound(sound){
    document.getElementById(sound).play();
}

for (let sound of soundlist){
    let newbutton = document.createElement('button');
    newbutton.classList.add('btn');
    newbutton.textContent=sound;
    newbutton.addEventListener('click',()=>{
        for (let sound2 of soundlist){
            document.getElementById(sound2).pause();
            document.getElementById(sound2).currentTime=0;

        }
        document.getElementById(sound).play();

    });
    buttons.appendChild(newbutton);

}

