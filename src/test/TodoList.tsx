import React, { useState } from 'react';
import styled from 'styled-components';

const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = (value: string) => {
    setList([...list, value]); // list에 value 추가
    if (text !== '') {
      list.push(text);
      setList(list);
      setText('');
    }
    console.log(list);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick(text);
    }
  };

  return (
    <>
      <Title>ToDoList</Title>
      {/*map 함수는 소괄호..*/}
      {list.map((list, index) => (
        <Lists key={index}>{list}</Lists>
      ))}
      <input
        type="text"
        value={text}
        placeholder="할 일을 입력해주세요."
        onChange={handleInput}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        value={text}
        onClick={() => {
          handleClick(text);
        }}
      >
        등록하기
      </button>
    </>
  );
};

export default TodoList;

const Title = styled.h1`
  color: black;
`;

const Lists = styled.p`
  color: black;
`;

const Input = styled.input`
  width: 150px;
`;

const TextButton = styled.button`
  width: 70px;
`;
