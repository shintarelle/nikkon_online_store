// Modal.module.css
import React from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // Явно указываем тип функции без аргументов и возвращаемого значения
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center z-50 bg-dark-grey bg-opacity-70 ">
      <div className="bg-white w-[600px] rounded-lg p-8 max-w-md  relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Ми вам передзвоним</h2>
          <button onClick={onClose} className='absolute top-1 right-2'>x
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ім&rsquo;я</label>
          <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
          <input type="text" id="phone" name="phone" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Повідомлення</label>
          <textarea id="message" name="message" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
        </div>
        <Button title="Відправити" textSize="sm" />

        {/* инпут тайп сабмит и валидация формы!!!!! */}

      </div>
    </div>
  );
}

export default Modal;
