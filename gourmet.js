
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let a of data.results.shop){
    console.log(a.access);
    console.log(a.address);
    console.log(a.budget.average);
    console.log(a.genre.name);
    console.log(a.name);
    console.log(a.open);
  }
}
// 課題5-1 の関数 printDom() はここに記述すること
let count = 0;
function printDom(data) {
  const result = document.querySelector('div#result');

  for (let shop of data.results.shop) {
    const gurahu = document.createElement('div');
    gurahu.classList.add('gurahu');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('two');
    nameDiv.textContent = shop.name;
    gurahu.appendChild(nameDiv);

    const genreDiv = document.createElement('div');
    genreDiv.classList.add('one');
    genreDiv.textContent = shop.genre.name;
    gurahu.appendChild(genreDiv);

    const openDiv = document.createElement('div');
    openDiv.classList.add('one');
    openDiv.textContent = shop.open;
    gurahu.appendChild(openDiv);

    const budgetDiv = document.createElement('div');
    budgetDiv.classList.add('one');
    budgetDiv.textContent = shop.budget.average;
    gurahu.appendChild(budgetDiv);

    const accessDiv = document.createElement('div');
    accessDiv.classList.add('two');
    accessDiv.textContent = shop.access;
    gurahu.appendChild(accessDiv);

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('three');
    addressDiv.textContent = shop.address;
    gurahu.appendChild(addressDiv);

    result.appendChild(gurahu);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let div = document.querySelector('div#result');
  div.innerHTML = '';

  let input = document.querySelector('#namae');
  let keyword = input.value.trim();

  if (keyword === '') {
    alert('検索ワードを入力してください');
    return;
  }

  let encoded = encodeURIComponent(keyword); 
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + encoded + '.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if(typeof data === 'string'){
    data = JSON.parse(data);
  }

  console.log(data);

  /*console.log(data.x);*/
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
