let lang = 'ru';
//через if,
if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
    console.log('Неверно выбрали язык!');
}

//через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log('Неверно выбрали язык!');
}
//через многомерный массив без ифов и switch
let lang_array = [];
lang_array['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(lang_array[lang]);

/*2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

*/
let namePerson = 'Артем';
console.log((namePerson === 'Артем') ? 'Директор' :
    (namePerson === 'Максим') ? 'преподаватель' :
        'Студент');