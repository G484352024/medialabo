let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let b = document.querySelector('button#print');
b.addEventListener('click', hantei);  // ← ここでだけ呼び出す

function hantei() {
  kaisu = kaisu + 1;

  // 入力の取得と表示
  let yoso = document.querySelector('input[name="suuzi"]');
  let suuzi = Number(yoso.value);
  console.log(suuzi);

  let spanKaisu = document.querySelector('span#kaisu');
  spanKaisu.textContent = kaisu;

  let spanAnswer = document.querySelector('span#answer');
  spanAnswer.textContent = suuzi;

  let result = document.querySelector('p#result');
  let a;

  // 判定処理
  if (kaisu >= 4) {
    a = "答えは " + kotae + " でした。すでにゲームは終わっています。";
  } else if (suuzi === kotae) {
    a = "正解です！おめでとう！";
  } else {
    if (kaisu === 3) {
      a = "まちがい。残念でした。答えは " + kotae + " です。";
    } else if (suuzi < kotae) {
      a = "まちがい。答えはもっと大きいですよ。";
    } else {
      a = "まちがい。答えはもっと小さいですよ。";
    }
  }

  result.textContent = a;
}

// kotae と yoso が一致するかどうか調べて結果を出力
// // 課題3-1における出力先はコンソール