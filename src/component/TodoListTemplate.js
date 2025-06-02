import React from 'react';
import '../css/TodoListTemplate.css';
import '../css/Form.css';
import '../css/TodoItem.css';

const TodoListTemplate = ({form, children}) => { //form, todoItemList를 감싸는 부모 콤포넌트
  return (
    <>
      <main className='todo-list-template'>
        <header className='title'>
          오늘의 할 일
        </header>

        <section className='form-wrapper'>
          {/* 폼 양식 */}
          {form}
        </section>

        <section className='todos-wrapper'>
          {/* 리스트 */}
          {children}
        </section>
      </main>
    </>
  );
}

export default TodoListTemplate;