// Task 5
let message;
const china = "КИТАЙ";
const chili = "ЧИЛИ";
const australia = "АВСТРАЛИЯ";
const india = "ИНДИЯ";
const jamayka = "ЯМАЙКА";
const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaykaPrice = 120;

let search = prompt("куда доставить???");

if (search === null) {
  search = "cancel";
}

if (search === "") {
  search = "empty";
}

switch (search.toLowerCase()) {
  case china.toLowerCase():
    alert(`Доставка в "${china}" будет стоить ${chinaPrice} кредитов`);
    break;

  case chili.toLowerCase():
    alert(`Доставка в "${chili}" будет стоить ${chiliPrice} кредитов`);
    break;

  case australia.toLowerCase():
    alert(`Доставка в "${australia}" будет стоить ${australiaPrice} кредитов`);
    break;

  case india.toLowerCase():
    alert(`Доставка в "${india}" будет стоить ${indiaPrice} кредитов`);
    break;

  case jamayka.toLowerCase():
    alert(`Доставка в "${jamayka}" будет стоить ${jamaykaPrice} кредитов`);
    break;

  case "cancel":
    console.log("Отменено пользователем");
    break;

  case "empty":
    console.log("Введено пустое поле");
    break;

  default:
    alert(`В вашей стране "${search}" доставка не доступна`);
}
