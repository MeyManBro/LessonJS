let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    bodyMain = document.getElementsByTagName('body');

// document.append.
console.log(menuItem);

// переставлены пункты меню 3 - 2
menu.insertBefore(menuItem[2], menuItem[1]);

// Замена фона у body 

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';