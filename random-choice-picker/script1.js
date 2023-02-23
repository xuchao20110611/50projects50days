/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-02-23 15:05:45
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-02-23 15:27:04
 * @FilePath: /random-choice-picker/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let tags=document.getElementById('tags');
let inputtext=document.getElementById('textarea');
inputtext.addEventListener('keyup',(e)=>{
    tags.innerHTML=``;
    let textcontent=inputtext.value;
    const textarray=textcontent.split(',');
    for (let tag of textarray){
        if(tag.trim()==""){
            continue;
        }
        tag=tag.trim();
        let newtag=document.createElement('span');
        newtag.textContent=tag;
        newtag.classList.add('tag');
        tags.appendChild(newtag);
    }

    if(e.key === 'Enter') {
        inputtext.value='';

        randomSelect()
    }
});


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
