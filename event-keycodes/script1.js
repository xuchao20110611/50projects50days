/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-02-06 18:07:05
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-02-06 18:37:13
 * @FilePath: /event-keycodes/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let body=document.getElementById('insert');

document.onkeydown = function(event) {
    body.innerHTML='';

    let key=document.createElement('div');
    key.classList.add('key');
    key.textContent=' '+event.key+' ';
    let keyname=document.createElement('small');
    keyname.textContent='event.key';
    key.appendChild(keyname);
    body.appendChild(key);


    let keycode=document.createElement('div');
    keycode.classList.add('key');
    keycode.textContent=' '+event.keyCode+' ';
    let keycodename=document.createElement('small');
    keycodename.textContent='event.keyCode';
    keycode.appendChild(keycodename);
    body.appendChild(keycode);


    let eventcode=document.createElement('div');
    eventcode.classList.add('key');
    eventcode.textContent=' '+event.code+' ';
    let eventcodename=document.createElement('small');
    eventcodename.textContent='event.eventcode';
    eventcode.appendChild(eventcodename);
    body.appendChild(eventcode);


}

