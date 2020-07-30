// ID番号のための変数
let nextId = 0;

// コメントを格納する配列
const todos = [];

// DOMの取得
// コメント入力ボックス
// 追加ボタン
// タスク表示欄
const inputComment = document.getElementById('input_todo');
const addBtn = document.getElementById('add_btn');
const tableBody = document.getElementById('todo_body');

// ボタン押下時の処理
addBtn.addEventListener('click', () =>{
  const todo = {id: nextId++, comment: inputComment.value, status: '作業中', delete: '削除'}
  todos.push(todo);
  table(todos);
});

// todosを表示させるための関数
const table = (todos) => {
  tableBody.textContent = '';

  todos.forEach((todo) => {
    
    // trの生成
    const tableRecord = document.createElement('tr');
    tableBody.appendChild(tableRecord)
    
    // IDの生成
    const tableId = document.createElement('th');
    tableId.textContent = todo.id;
    tableRecord.appendChild(tableId);

    // コメントの生成
    const tableComment = document.createElement('td')
    tableComment.textContent = todo.comment;
    tableRecord.appendChild(tableComment);

    // 「作業中」ボタンの生成
    const tableStatus = document.createElement('td');
    const statusButton = document.createElement('button');
    statusButton.textContent = todo.status;
    tableStatus.appendChild(statusButton);
    tableRecord.appendChild(tableStatus);
   
    // 「削除」ボタンの生成
    const tableDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = todo.delete;
    tableDelete.appendChild(deleteButton);
    tableRecord.appendChild(tableDelete);
  });
};