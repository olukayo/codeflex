const form = document.getElementById('sumForm');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event){
  event.preventDefault();


  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (!isNaN(num1) && !isNaN(num2)){
    const sum = num1 + num2;

    document.getElementById('result').textContent = ' The sum is:' + sum;
  } 
 

  
})