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
};


appData.budgetPerDay = appData.budget/30;
alert("Ваш бюджет на 1 день "+ appData.budgetPerDay + " руб.");

console.log(appData);
