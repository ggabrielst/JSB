let r = prompt('insira um valor entre 0 e 255:');
let g = prompt('insira um valor entre 0 e 255:');
let b = prompt('insira um valor entre 0 e 255:');

document.getElementById('text').style.color = `rgb(${r},${g},${b})`;