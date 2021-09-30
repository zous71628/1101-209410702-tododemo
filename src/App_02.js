import Todo from './components/Todo_02';
import React from 'react';
import './App.css';

function App_02() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn PYTHON" text1="open" />
      <Todo text="Learn JAVA" text1="close" />
      <Todo text="Learn C++" text1="delete" />
    </div>
  );
}

export default App_02;
