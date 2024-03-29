'use client'
import React, { useState, useRef, useEffect  } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = () => {
    if (isOpen && searchValue.trim() !== '') {
      // Осуществляем переход на другую страницу с учетом значения поиска
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setIsOpen(!isOpen);
      setSearchValue('');
    } else {
      // Показываем или скрываем инпут
      setIsOpen(!isOpen);
      setSearchValue('');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    handleSearch();
  } else if (e.key === 'Escape') {
    setIsOpen(false); // Скрываем инпут при нажатии Escape
  }
};

  return (
    <div className="search-input flex justify-center align-center">
      {isOpen ? (
        <input
          ref={inputRef}
          className='w-[180px] mr-[5px] p-[5px 10px] border border-[#ccc] outline-none focus:border-[#333] rounded'
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown} // Добавляем обработчик события onKeyDown
          placeholder="Введіть..."
        />
      ) : null}
      <button onClick={handleSearch}>{isOpen ? 'Пошук' : <Image src='/search.svg' alt='search' width='20' height='20' className='w-[22px] h-[22px]'/>}</button>
    </div>
  );
};

export default SearchInput;
