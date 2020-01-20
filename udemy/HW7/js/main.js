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

let budgetMonth, date;

// выполнение функци по событию нажатия на кнопку startBtn
// функция запрашивает у пользователя бюджет на месяце + дату 
startBtn.addEventListener('click', function() {
    date = prompt("Введите дату в форамате YYYY-MM-DD", '');
    budgetMonth = +prompt("Какой ваш бюджет на месяц?", '');

    // проверка значения budgetMonth что это только число и не имеет значения пустой строики или null
    while (isNaN(budgetMonth) || budgetMonth == "" || budgetMonth == null) {
        budgetMonth = +prompt("Какой ваш бюджет на месяц?", '');
        console.log("Budget Month -save");
    }

    appData.budget = budgetMonth;
    appData.timeDate = date;
    budgetValue.textContent = budgetMonth.toFixed();
    year.value = new Date(Date.parse(date)).getFullYear();
    month.value = new Date(Date.parse(date)).getMonth() + 1;
    day.value = new Date(Date.parse(date)).getDate();
});

// фунция по расчеты допольнительных расходов
expensesBtn.addEventListener('click', function() {
    // функция спрашивает у пользователя обязательны статьи расходов и их стоимость записывает в виде a:b
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        // проверка занчений expensesItem
        if ((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});



// создание объкта appData с эелментами
let appData = {
    budget: budgetMonth,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

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