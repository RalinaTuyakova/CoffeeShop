function func24() {
     var elem = document.getElementById('r40');
var num1 = prompt('Как вас зовут?');
var num2 = ('Добрый день, ');
var num3 = ('!')
alert(num2+num1+num3);
		}



// Определяем массив
function func1() {
var arr = ['в наличии, 100 штук', 'в наличии, 18 штук', 'в наличии, 26 штук', 'в наличии, 2 штуки', 'нет в наличии', 'в наличии, 1 штука', 'нет в наличии', 'поставок не ожидается в ближайшие 2 недели', 'в наличии, 34 штук', 'в наличии, 45 штук'];

// Получаем случайный ключ массива
var rand = Math.floor(Math.random() * arr.length);
var elem = document.getElementById('r1');
alert(arr[rand]);// Выведем, например: JavaScript
}





