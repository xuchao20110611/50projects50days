/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-02-23 17:14:37
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-02-23 17:25:31
 * @FilePath: /animated-navigation/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let button=document.getElementById('toggle');
let navele=document.getElementById('nav');
navele.classList.remove('active');
button.addEventListener('click',()=>{
    if(navele.classList.contains('active')){
        navele.classList.remove('active');
    } else {
        navele.classList.add('active');
    }
})