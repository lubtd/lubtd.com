import React, { useState } from 'react';

import Modal from 'react-modal';

export const Project = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const buttonStyle = {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "750px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#000",
    color: "#fff",
    padding: "50px",
  };

  const data = props.data;

  return (
    <div>
      <button style={buttonStyle} onClick={() => setModalIsOpen(true)}>
        View Project
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: contentStyle,
        }}
      >
        <h2
          style={{
            margin: "20px",
            marginBottom: "50px",
          }}
        >
          {data.title}
        </h2>
        {data.content}
        <button style={buttonStyle} onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};
