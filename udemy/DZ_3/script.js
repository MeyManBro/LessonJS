// 'use strict';

let budgetMonth, data;

    function start() {
        budgetMonth = +prompt("Какой ваш бюджет на месяц?" ,'');
        data =  prompt("Введите дату в форамате YYYY-MM-DD", '');
        
            while (isNaN(budgetMonth) || budgetMonth == "" || budgetMonth == null ) {
                budgetMonth = +prompt("Какой ваш бюджет на месяц?" ,'');
                console.log("Budget Month -save");
            }
    }

start();
     

let appData = {
    budget: budgetMonth,
    timeData: data,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),   
            b = +prompt("Во сколько обойдется", '');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && (typeof(b)) != null && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            console.log("Expenses save");
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.budgetPerDay = (appData.budget/30).toFixed(2),
    alert("Ваш бюджет на 1 день "+ appData.budgetPerDay + " руб.");
    console.log("Budget per day - save");
}

detectDayBudget();


function detectLevel() {
    if (appData.budgetPerDay < 100) {
        alert("Бюджет меньше 100 руб.");
    } else if ((500 < appData.budgetPerDay) && (appData.budgetPerDay < 1000)) {
        alert("Бюджет средний больше 500руб.");
    } else if (appData.budgetPerDay > 1000) {
        alert("Да вы богач!");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt(" Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
        
        appData.monthIncome = save/100/12*percent;
        alert("Ваш доход с депозита " + appData.monthIncome + " руб");
    }
}

checkSavings();

function chooseOptExpenses() {
    for (i = 1; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов");

        appData.optionalExpenses[i] = a;
        console.log("OptExpenses save-" + appData.optionalExpenses);
    }
}

chooseOptExpenses();