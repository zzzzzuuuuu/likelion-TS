import React, { useState } from 'react';
import styled from 'styled-components';

interface ListItem {
  id: number;
  text: string;
}

const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<ListItem[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = (text: string) => {
    if (text !== '') {
      setList((currentList) => [...currentList, { id: Date.now(), text }]);
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
      <TodoContainer>
        <Title>ToDoList</Title>
        {list.map((item) => (
          <Lists key={item.id}>{item.text}</Lists>
        ))}
        <SubmitContainer>
          <Input
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
            +
          </button>
        </SubmitContainer>
      </TodoContainer>
    </>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Lists = styled.p`
  margin: 0;
`;

const SubmitContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 150px;
`;
