function greeting(){
    let i = document.querySelector('input[name="shimei"]');
  let aisatsu =('こんにちは、'+i.value+"さん");
  p = document.querySelector('p#message');
  p.textContent = aisatsu;
}
greeting();
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);