import React from 'react';

const TodoItem = ({text, checked, id, onToggle, onRemove}) => {
  return (
    <div className='todo-item' onClick={() => onToggle(id)}>
      {/* 삭제버튼 'X' */}
      <div className='remove' onClick={(e) => {
        e.stopPropagation(); // onToggle 기능이 실행되지 않도록 함
        onRemove(id)
      }}> &times;
      {/* 삭제버튼 */}
      </div>
      
      {/* 부모에게서 전달받은 입력한 내용을 출력함 */}
      <div className={`todo-text ${checked && 'checked'}`}>
        {/* 내용 출력 */}
        <div>{text}</div>
      </div>
      {checked && (
      <div className='check-mark'>
        {/* 체크 표시가 들어가는 곳 */}
        ✔
      </div>)}
    </div>
  );
}

export default TodoItem;