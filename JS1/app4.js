// Task 4
let credits = 23580;
let pricePerDroid = 3000;
let message;
let input = prompt('сколько дроидов сударь желает приобрести?');
let totalPrice;
let userBalance = credits - input * pricePerDroid;

if (input === null) {
  message = 'Отменено пользователем!';
} else {
  input = Number.parseInt(input);
  totalPrice = Number(totalPrice);
  totalPrice === input * pricePerDroid;
}

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  input = Number(input);
  userBalance = Number(userBalance);
  message = `Вы купили ${input} дроидов, на счету осталось ${userBalance} кредитов.`;
}
alert(message);
