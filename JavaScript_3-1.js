// DOMの取得
// コメント入力ボックス
// 追加ボタン
// タスク表示欄
const inputComment = document.getElementById('input_todo');
const addBtn = document.getElementById('add_btn');
const tableBody = document.getElementById('todo_body');

// ID番号のための変数
let nextId = 0;

// コメントを格納する配列
const todo = [];

// タスクを生成する関数
const table = () => {
    // trの生成
    const tableRecord = document.createElement('tr');
    tableBody.appendChild(tableRecord);
    
    // IDの生成
    const tableId = document.createElement('th');
    tableId.textContent = (nextId++);
    tableRecord.appendChild(tableId);
    
    // コメントの生成
    todo.push(inputComment.value);
    const todoTest = todo[todo.length -1];
    inputComment.value = '';
    const tableComment = document.createElement('td');
    tableComment.textContent = (todoTest);
    tableRecord.appendChild(tableComment);
    
    // 「作業中」ボタンの生成
    const tableStatus = document.createElement('td');
    tableStatus.innerHTML = '<button>作業中</button>';
    tableRecord.appendChild(tableStatus); 
    
    // 「削除」ボタンの生成
    const tableDelete = document.createElement('td');
    tableDelete.innerHTML = '<button>削除</button>';
    tableRecord.appendChild(tableDelete); 
}

// ボタン押下時の処理
addBtn.addEventListener('click', table);