let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),   
    adv = document.querySelector('.adv'),
    title = document.getElementById('title'),
    askQuestion = '',
    blockPrompt = document.getElementById('prompt');

// document.append.
console.log(menuItem);

// переставлены пункты меню 3 - 2
menu.insertBefore(menuItem[2], menuItem[1]);

// Замена фона у body 

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Удалить рекламу со страницы

adv.remove();

//добавить слово в заголовок

console.log(title); 


// ..задаем вопрос 

askQuestion = prompt(' Как вы относитесь к технике Aplle');

blockPrompt.append('askQuestion');