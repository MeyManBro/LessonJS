// 'use strict';
let startBtn = document.getElementById('start'), //выбрать по id start
    valClass = document.querySelectorAll('div[class*= "value"]'), //выбрать все div где есть value
    budgetValue = valClass[0],
    dayBudgetValue = valClass[1],
    lavelValue = valClass[2],
    expensesValue = valClass[3],
    optionalExpensesValue = valClass[4],
    incomeValue = valClass[5],
    monthSavingsValue = valClass[6],
    yearSavingsValue = valClass[7],

    expensesItem = document.getElementsByClassName('expenses-item'), // input с обязательным расходом.
    expensesBtn = document.getElementsByTagName('button')[0], //кнопка утвердить расходы
    optionalBtn = document.getElementsByTagName('button')[1], // кнопка утвердить допольнительные расходы
    countBtn = document.getElementsByTagName('button')[2], // кнопка расчитать дневной бюджет
    optExpItem = document.querySelectorAll('.optionalexpenses-item'), // выбор полей всех допольнительных расходов
    incomeStat = document.querySelector('#income'), // input ввода доходов
    checkSavings = document.querySelector('#savings'), // чек бокс выбора накоплений
    sumSavings = document.querySelector('#sum'), // input сумма накоплений
    precentSavings = document.querySelector('#percent'), // input процент годовых накоплений
    year = document.querySelector('.year-value'), // input год
    month = document.querySelector('.month-value'), // input месяц
    day = document.querySelector('.day-value'); // input день


let budgetMonth, data;

// функция запрашивает у пользователя бюджет на месяце + дату 
function start() {

}
start();

// выполнение функци по событи нажатия на кнопку startBtn

startBtn.addEventListener('click', function() {
    data = prompt("Введите дату в форамате YYYY-MM-DD", '');
    budgetMonth = +prompt("Какой ваш бюджет на месяц?", '');

    // проверка значения budgetMonth что это только число и не имеет значения пустой строики или null
    while (isNaN(budgetMonth) || budgetMonth == "" || budgetMonth == null) {
        budgetMonth = +prompt("Какой ваш бюджет на месяц?", '');
        console.log("Budget Month -save");
    }
    appData.timeData = data;
    appData.budget = budgetMonth.to;
});

// создание объкта appData с эелментами
let appData = {
    budget: budgetMonth,
    timeData: data,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    // функция спрашивает у пользователя обязательны статьи расходов и их стоимость a:b
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется", '');

            // проверка ответов согласно условиям ниже
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && (typeof(b)) != null && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                console.log("Expenses save");

            } else {
                i--;
            }
        }
    },

    // функция расчета бюджета на один день месяца
    detectDayBudget: function() {
        appData.budgetPerDay = (appData.budget / 30).toFixed(2),
            alert("Ваш бюджет на 1 день " + appData.budgetPerDay + " руб.");
        console.log("Budget per day - save");
    },

    // функция определяющая уровень дохода за месяц
    detectLevel: function() {
        if (appData.budgetPerDay < 100) {
            alert("Бюджет меньше 100 руб.");
        } else if ((500 < appData.budgetPerDay) && (appData.budgetPerDay < 1000)) {
            alert("Бюджет средний больше 500руб.");
        } else if (appData.budgetPerDay > 1000) {
            alert("Да вы богач!");
        } else {
            alert("Что то не так...");
        }
    },

    // функция расчитывает доход от накоплений
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Ваш доход с депозита " + appData.monthIncome + " руб");
        }
    },

    // функция спрашивает у пользователя статью необязательных расходов
    chooseOptExpenses: function() {
        for (i = 1; i <= 3; i++) {
            let a = prompt("Статья необязательных расходов");

            appData.optionalExpenses[i] = a;
            console.log("OptExpenses save-" + appData.optionalExpenses);
        }
    },

    // ввод статей доплнительного дохода
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что приносит дополнительный доход? (Перечислить через запятую)", '');

            if ((typeof(items)) === 'string' || items != '' || (typeof(items)) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt("Вы можете занести еще", ''));
                appData.income.sort();
                console.log("chooseIncom - added");


            } else {
                console.log("chooseIncom - not added");
                i--;
            }
        }

        // выводит сообщение с способы доп заработка
        appData.income.forEach(function(items, i) {
            alert("Способы доп. заработка: " + (i + 1) + "-" + items);
        });


    }

};

// вывод данных объекта appData
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + "-" + appData);
}