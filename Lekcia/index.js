// Запрашиваем данные у пользователя
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
let genderInput = prompt("Вы мужчина или женщина? (введите 'мужчина' или 'женщина')");

// Определяем пол как булево значение (true — мужчина, false — женщина)
let isMale = genderInput === "мужчина";

// Создаем объект user
let user = {
  name: name,
  age: parseInt(age),
  isMale: isMale
};

// Выводим объект в консоль
console.log("Информация о пользователе:");
console.log(user);
