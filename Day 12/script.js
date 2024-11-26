

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDB33'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  document.body.style.backgroundColor = randomColor;
} );