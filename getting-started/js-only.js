const button = document.querySelector('button');
const input = document.getElementById('num1'); 
const input2 = document.getElementById('num2');

function add(num1, num2) {
  return num1 = num2;
};

button.addEventListener('click', function(){
  console.log(add(input.value, input2.value));
});