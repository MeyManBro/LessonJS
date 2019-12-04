let startBtn = document.getElementById('start'), //выбрать по id start
    // let startCalc = document.querySelector('#start');
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


expensesBtn.addEventListener('click', function(event) {
    let target = event.target;
    target.style.display = 'none';
    // console.log('событие ' + event.type + ' на элементе ' + event.target );
});