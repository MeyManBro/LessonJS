'use strict';

let budgetMonth = +prompt("Какой ваш бюджет на месяц?" ,''),
    data =  prompt("введите дату в форамате YYYY-MM-DD", '');   
     

let appData = {
    budget: budgetMonth,
    timeData: data,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),   
        b = +prompt("Во сколько обойдется", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && (typeof(b)) != null && b != '' && a.length < 50) {
        console.log("save");
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

// цикл while

// let i = 0;
// while (i < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),   
//         b = +prompt("Во сколько обойдется", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && (typeof(b)) != null && b != '' && a.length < 50) {

//         console.log ("done");
//         appData.expenses[a] = b;
//     } else {
//          i--;
//     }

//     i++;
// }


// цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt ("Во сколько обойдется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && (typeof(b)) != null && b != '' && a.length < 50) {

//         console.log ("done");
//         appData.expenses[a] = b;
//     } else {
//          i--;
//     }
//     i++;
// }
// while(i < 2);


appData.budgetPerDay = appData.budget/30;
console.log(appData);

alert("Ваш бюджет на 1 день "+ appData.budgetPerDay + " руб.");

if (appData.budgetPerDay < 100) {
    alert("Бюджет меньше 100 руб.");
} else if ((500 < appData.budgetPerDay) && (appData.budgetPerDay < 1000)) {
    alert("Бюджет средний больше 500руб.");
} else if (appData.budgetPerDay > 1000) {
    alert("Да вы богач!");
}


