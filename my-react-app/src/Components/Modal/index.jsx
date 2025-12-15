import React from "react";
import "./index.css";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>{title}</h2>
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal
