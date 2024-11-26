const numbers = [35, 47, 12, 90, 56, 49];
let txt = "";

numbers.forEach(myFunction);
document.getElementById("array"). innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>";
};

const number1 = [40, 45, 32, 55, 10, 11];
const number2 = number1.map(myKay);

document.getElementById('map'). innerHTML = number2;

function myKay(value){
  return value * 2 + "<br>";
};

const cars = ['Vivo', 'BMW', 'Benz', 'Nissan'];

cars [0] = 'Toyota';

cars.push('Audi');

document.getElementById('push'). innerHTML = cars.join('<br>') + "<br>";