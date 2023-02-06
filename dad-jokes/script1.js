/*
 * @Author: Chao Xu xuchaoNGB@outlook.com
 * @Date: 2023-02-06 17:13:02
 * @LastEditors: Chao Xu xuchaoNGB@outlook.com
 * @LastEditTime: 2023-02-06 17:23:33
 * @FilePath: /dad-jokes/script1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let button = document.getElementById('jokeBtn');
let jokecontent = document.getElementById('joke');

// button.addEventListener('click', ()=>{
//     const config = {
//         headers: {
//           Accept: 'application/json',
//         },
//       };
    
//       const res = fetch('https://icanhazdadjoke.com', config);

//       console.log(res);

//       const data = res.json();
    
//       jokecontent.textContent = data.joke;

// });

button.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    const res = await fetch('https://icanhazdadjoke.com', config)
  
    const data = await res.json()

    console.log(res);
  
    jokecontent.innerHTML = data.joke
  }
