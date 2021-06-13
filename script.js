const range = document.getElementById('range');
const tooltip = document.getElementById('tooltip');

range.addEventListener('input', calculateRatio);

function calculateRatio() {
  tooltip.innerText = range.value;
  tooltip.style.left = `calc(${range.value}% - 25px)`;
}