import React from 'react';

function Todo(props) {
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn">{props.text1}</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
