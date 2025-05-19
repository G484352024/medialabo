function greeting(){
    let i = document.querySelector('input[name="left"]');
    left = Number(i.value);
    console.log(i);
    let j = document.querySelector('input[name="right"]');
    console.log(j);
    right = Number(j.value);
  let answer =(left+right);
  p = document.querySelector('span#answer');
  p.textContent = answer;
}
greeting();
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);