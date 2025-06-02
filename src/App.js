import React, { useState, useRef } from 'react';
import './css/App.css';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

// 컬러값 미리 설정함.
const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

function App() {
  const [input, setInput] = useState(''); // 입력되는 상태값
  const [todos, setTodos] = useState([ //todos에 저장되는 기본값
    {id:0, text:'리액트 실습하기', checked:true},
    {id:1, text:'투두리스트 구현하기', checked:false},
    {id:2, text:'상태관리하기', checked:true}
  ]);

  const [color, setColor] = useState('#343a40'); //색상 상태값

  const nextId = useRef(3); //다음에 들어갈 값

  // 함수
  const handleChange = (e) => { //클릭시 상태변화
    setInput(e.target.value);
  }

  const handleCreate = () => { // 글 입력(추가)
    if(!input.trim()) return ''; // 공백 여부 유효성 검사

    const newTodo = {
      id:nextId.current,
      text:input,
      checked:false,
      color:color
    }

    setTodos(todos.concat(newTodo)); // 기존 목록 뒤에 추가하고
    setInput(''); // 초기화
    nextId.current += 1; // 기존 id에 1을 더함
  }

  const handleKeyPress = (e) => { // 키보드(enter) 입력시
    if(e.key === 'Enter') {
      handleCreate(); // 글 입력함수를 호출하여 내용이 삽입되도록 한다.
    }
  }

  const handleToggle = (id) => { // 글 내용 클릭시 체크,체크해제
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, checked:!todo.checked}: todo)
      // map함수로 해당 id인 글 목록만 체크할 수 있도록 한다.
    )
  }

  const handleRemove = (id) => { // 삭제시 해당 id값에 해당 글 삭제하기
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <TodoListTemplate form={<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} color={color} />}>
        {/* 템플릿 영역 */}
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    </>
  );
}

export default App;
