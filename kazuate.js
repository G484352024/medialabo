
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);


let kaisu = 0;

hantei()
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);

function hantei() {
  kaisu = kaisu+1;
  p = document.querySelector('span#kaisu');
  p.textContent = kaisu;
  
  let yoso = document.querySelector('input[name="suuzi"]');
  p = document.querySelector('span#answer');
  h = Number('yoso');
  p.textContent = h;
  suuzi = Number(yoso.value);
  console.log(suuzi);

  let a;

  // 課題3-1: 正解判定する
  if(4<=kaisu){
    a=("答えは"+kotae+"でした.すでにゲームは終わっています");
  }else if(kotae===suuzi){
    a=("正解です.おめでとう！");
  }else{
    if(kaisu===3){
        a=("まちがい．残念でした答えは"+kotae+"です．")
    }else if(suuzi<kotae){
        a=("まちがい．答えはもっと大きいですよ");
    }else{
        a=("まちがい．答えはもっと小さいですよ");
    }
    p = document.querySelector('p#result');
    p.textContent = a;
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}