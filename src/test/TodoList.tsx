import React, { useState } from 'react';
import styled from 'styled-components';

const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = (value: string) => {
    setList([...list, value]); // list에 value 추가
    console.log(list);
  };

  return (
    <>
      <Title>ToDoList</Title>
      {/*map 함수는 소괄호..*/}
      {list.map((list, index) => (
        <Lists key={index}>{list}</Lists>
      ))}
      {/*인풋날리기*/}
      <input placeholder="할 일을 입력해주세요." onChange={handleText} />
      <button
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
