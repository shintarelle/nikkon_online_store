'use client'
import React, { useState, useEffect, useContext } from 'react';
import Heading from '@/components/products/components/Heading'
import { BasketContext } from '../BasketContext'
import { useRouter } from 'next/navigation'
import Button from '@/components/header/components/Button'
import Image from 'next/image'

const Checkout = () => {
  const [step, setStep] = useState(1); // Текущий шаг оформления заказа
  const { cartItems } = useContext(BasketContext)
  const router = useRouter()
  console.log(cartItems)

  const handleClicktoHomePage = () => {
    router.push('/')
  }

  // Обработчик изменения хэша в URL
  const handleHashChange = () => {
    const hashStep = parseInt(window.location.hash.replace('#step_', ''), 10);
    if (!isNaN(hashStep) && hashStep !== step) {
      setStep(hashStep);
    }
  };

  useEffect(() => {
    // Подписываемся на событие изменения хэша в URL
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      // Отписываемся от события при размонтировании компонента
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [step]); // Слушаем изменения шага оформления заказа

  // Обработчик для перехода к следующему шагу
  const nextStep = () => {
  setStep((prevStep) => {
    const nextStep = prevStep + 1;
    window.location.hash = `step_${nextStep}`;
    return nextStep;
  });
};

  // Обработчик для перехода к предыдущему шагу
  const prevStep = () => {
  setStep((prevStep) => {
    const nextStep = prevStep - 1;
    window.location.hash = `step_${nextStep}`;
    return nextStep;
  });
};

  return (
    <>

    {!cartItems.length ? (
    <div className='h-screen max-w-[1024px] mx-auto flex justify-between'>
      <p className='mb-[50px]'>Ваша корзина пуста</p>
      <div className='pt-[100px]'>
        <Button title={'Продолжить'} textSize={'md'} onClick={handleClicktoHomePage} />
      </div>
  </div>
) : (
  <div>
    <Heading title={'Оформление заказа'} />
    {step === 1 && (
      <>
        <h1>Шаг 1: Введите контактные данные</h1>
                <div className='w-[378px] h-[584px] bg-light-grey p-[20px]'>
                  <div className='flex '>
                    <div className='w-[96px] h-[134px]'>
                      <Image src='/product1.jpeg' alt='product' width={100} height={100} className='w-full h-full'/>
                    </div>
                  </div>
        </div>

        {/* Форма для ввода контактных данных */}
        <button onClick={nextStep}>Далее</button>
      </>
    )}
    {step === 2 && (
      <>
        <h1>Шаг 2: Введите адрес доставки</h1>
        {/* Форма для ввода адреса доставки */}
        <button onClick={prevStep}>Назад</button>
        <button onClick={nextStep}>Далее</button>
      </>
    )}
    {/* Другие шаги оформления заказа */}
  </div>
)}


    </>
  );
};

export default Checkout;
