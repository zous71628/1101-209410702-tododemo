import React, { useState } from 'react';
import Backdrop_02 from './Backdrop_02';
import Modal_02 from './Modal_02';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            {props.text1}
          </button>
        </div>
      </div>
      {showModal && <Backdrop_02 onClose={closeModalHandler}/>}
      {showModal && <Modal_02 text="Are you sure?" onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
