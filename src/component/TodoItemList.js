import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList= ({todos, onToggle, onRemove}) => {
  // todos = 출력 내용
  // onToggle = 체크 기능
  // onRemove = 삭제 기능

  return (
    <div>
      {/* <TodoItem text="안녕하세요." />
      <TodoItem text="오늘은 월요일" />
      <TodoItem text="리액트 todolist 구현하기" /> */}
      {todos.map(({id, text, checked}) => (
        <TodoItem id={id} text={text} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id} />
      ))}
    </div>
  );
}

export default TodoItemList;