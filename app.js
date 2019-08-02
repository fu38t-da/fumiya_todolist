// console.log(window.localStorage);
let data = [];

document.getElementById('add')
.addEventListener(
  'click',
  function(){
    data.push(document.getElementById('task').value);
    console.log(data);
    localStorage.setItem('task',
    JSON.stringify(data)); //登録
  }
);

let btn =document.getElementsByClassName('btn');
btn.addEventListener(
  'mousedown',
  function(){
    btn.classList.add('pressed');
  }
);
btn.addEventListener(
  'mouseup',
  function(){
    btn.classList.remove('pressed');
  }
);

data = JSON.parse(localStorage.getItem('task')); //データを取り出す（出力）

for (const value of data) {
  createDOM(value);
  // // console.log(value);
}

function createDOM(){ //値が変わる物を引数に入れる上記の場合だとvalue
  let list = document.createElement('li');
  list.textContent = value;
  // console.log(list);
  document.getElementById('list')
  .appendChild(list);//要素の追加
}