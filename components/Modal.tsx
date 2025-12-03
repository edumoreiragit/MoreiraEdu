import React, { useEffect } from 'react';
import { XMarkIcon } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 bg-white p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 id="modal-title" className="text-xl font-bold text-gray-800 font-sans">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Fechar modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="p-4 sm:p-6 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
