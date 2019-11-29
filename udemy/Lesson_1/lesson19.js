let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    onerHeart = document.querySelector('.heart');


box.style.borderRadius = '10px 0 10px 0';
btn[1].style.backgroundColor = 'green';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++ ) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor ='grey';
// });

let div = document.createElement('div');

div.classList.add('black');

document.body.appendChild(div);
// div.innerHTML = 'Hello';
div.textContent = 'Hello';
console.log(div);