import React from 'react';
// import '../css/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  return (
    <div className='form'>
      {/* 
        부모 컴포넌트(TodoListTemplate)로부터 4가지 props값을 받아온다.
        value : 사용자가 input 태그에 입력한 내용
        onCreate : 버튼이 클릭되면 실행되는 함수
        onChange : input 내용이 변경될 때 실행되는 함수
        onKeyPress : input에 키를 입력할 때 실행되는 함수, enter키를 눌러도 onCreate를 실행한 것과 동일하게 적용하기 위함.
       */}
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}} />
      <div className='create-button' onClick={onCreate}>추가</div>
    </div>
  );
}

export default Form;