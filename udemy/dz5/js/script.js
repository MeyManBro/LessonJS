let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
     
    adv = document.querySelector('.adv'),
    title = document.getElementById('title'),
    askQuestion = '',
    blockPrompt = document.getElementById('prompt');

// document.append.
console.log(menuItem);

// переставлены пункты меню 3 - 2 добавили 5
menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemLi = document.createElement('li');
    menuItemLi.classList.add('menu-item');
    menuItemLi.innerHTML = '<u>Пятый элемен</u>';
    menu.appendChild(menuItemLi);

// Замена фона у body 

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Удалить рекламу со страницы

adv.remove();

//добавить слово в заголовок


title.textContent = 'Мы продаем только подлинную технику Apple';


// ..задаем вопрос 

askQuestion = prompt(' Как вы относитесь к технике Aplle');

// blockPrompt.append(askQuestion);
blockPrompt.textContent = askQuestion;