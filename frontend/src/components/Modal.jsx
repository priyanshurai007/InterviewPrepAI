import React from "react";
import { IoClose } from "react-icons/io5";

function Modal({ children, isOpen, onClose, title, hideHeader }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black/40 flex justify-center items-center">
      <div className="bg-white relative p-5 rounded-lg max-h-[90vh] overflow-y-auto custom-scrollbar">
        {!hideHeader && (
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}
        <button
          className="text-gray-400 hover:bg-orange-50 hover:text-black text-3xl absolute right-2 top-2 flex justify-center items-center rounded-lg"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
