/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-01-30 13:21:18
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-01-30 13:41:02
 * @FilePath: /split-landing-page/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let left=document.getElementsByClassName('left')[0];
let right=document.getElementsByClassName('right')[0];
let container=document.getElementsByClassName('container')[0];

window.addEventListener('mousemove',(event)=>{
    const seperate =right.getBoundingClientRect().left;
    if(event.pageX>seperate){
        container.classList.remove('hover-left');
        container.classList.add('hover-right');
    } else {
        container.classList.remove('hover-right');
        container.classList.add('hover-left');
    }
});