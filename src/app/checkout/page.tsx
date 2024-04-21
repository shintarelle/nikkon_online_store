'use client'

import React, { useState, useEffect, useContext } from 'react'
import Heading from '@/components/products/components/Heading'
import { BasketContext } from '../BasketContext'
import { useRouter } from 'next/navigation'
import Button from '@/components/header/components/Button'
import BasketCard from '../../components/basket/components/BasketCard'
import FormWithValidation from '../../components/basket/components/FormWithValidation'
import DeliveryForm from '@/components/basket/components/DeliveryForm'

export interface FormData {
  firstName: string
  lastName: string
  patronymic: string
  phone: string
  email: string
}
export interface FormDeliveryData {
  region: string
  city: string
  postOffice: string
}

const Checkout = () => {
  const [step, setStep] = useState(1) // Текущий шаг оформления заказа
  const [orderCompleeted, setOrderCompleeted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
  })

  const [formDeliveryData, setFormDeliveryData] = useState<FormDeliveryData>({
    region: '',
    city: '',
    postOffice: '',
  })

  const { cartItems, clearAll } = useContext(BasketContext)
  const router = useRouter()

  const handleForm1Submit = (data: FormData) => {
    setFormData(data)
  }

  const handleForm2Submit = (data: FormDeliveryData) => {
    setFormDeliveryData(data)
  }

  const handleSubmit = () => {
    // обьединяем данные с двух форм в один обьект
    const mergedData = {
      order: [...cartItems],
      ...formData,
      ...formDeliveryData,
    }
    console.log('Merged data:', mergedData)
    setFormData({
      firstName: '',
      lastName: '',
      patronymic: '',
      phone: '',
      email: '',
    })
    setFormDeliveryData({
      region: '',
      city: '',
      postOffice: '',
    })
    clearAll()
    setOrderCompleeted(!orderCompleeted)
  }

  const handleClicktoHomePage = () => {
    router.push('/')
  }


  // Обработчик для переключения шагов по клику на черту
  const handleStepClick = (newStep: number) => {
    setStep(newStep)
    window.location.hash = `step_${newStep}`
  }

  return (
    <>
      {!cartItems.length ? (
        <div className="h-screen max-w-[1024px] mx-auto flex flex-col">
          {orderCompleeted ? (
            <>
              <p className="mb-[50px] text-center">
                Ваше замовлення прийнято! Дякуємо за замовлення!
              </p>
              <div className="pt-[100px] self-end ">
                <Button
                  title={'На головну'}
                  textSize={'md'}
                  onClick={handleClicktoHomePage}
                />
              </div>
            </>
          ) : (
            <>
              <p className="mb-[50px] text-center">Ваш кошик пуст</p>
              <div className="pt-[100px] self-end ">
                <Button
                  title={'Продовжити'}
                  textSize={'md'}
                  onClick={handleClicktoHomePage}
                />
              </div>
            </>)}
        </div>
      ) : (
        <div className="max-w-[1024px] mx-auto">
          <Heading title={'Оформление заказа'} />
          <div className="flex flex-col md:flex-row justify-between gap-7 p-[30px] ">
            <div className="flex flex-col gap-5 grow">
              <div className="flex items-center">
                <div
                  className={`cursor-pointer text-xl  ${step === 1 ? 'font-bold text-black' : 'text-gray-500'}`}
                  onClick={() => handleStepClick(1)}
                >
                  1
                </div>
                <div
                  className={`mx-2 w-1/3 h-[5px]  ${step == 1 ? 'bg-black' : 'bg-light-grey'}`}
                  onClick={() => handleStepClick(1)}
                ></div>
                <div
                  className={`cursor-pointer text-xl  ${step === 2 ? 'font-bold text-black' : 'text-gray-500'}`}
                  onClick={() => handleStepClick(2)}
                >
                  2
                </div>
                <div
                  className={`mx-2 w-1/3 h-[5px] ${step == 2 ? 'bg-black' : 'bg-light-grey'}`}
                  onClick={() => handleStepClick(2)}
                ></div>
                <div
                  className={`cursor-pointer text-xl  ${step === 3 ? 'font-bold text-black' : 'text-gray-500'}`}
                  onClick={() => handleStepClick(3)}
                >
                  3
                </div>
                <div
                  className={`mx-2 w-1/3 h-[5px] ${step == 3 ? 'bg-black' : 'bg-light-grey'}`}
                  onClick={() => handleStepClick(3)}
                ></div>
              </div>

              {step === 1 && (
                <div className="flex flex-col justify-between gap-5">
                  <h1 className=" md:text-2xl uppercase">
                    Контактна інформація
                  </h1>
                  <FormWithValidation
                    initialValues={formData}
                    handleForm1Submit={handleForm1Submit}
                    handleStepClick={handleStepClick}
                  />
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col justify-between gap-5">
                  <h1 className="md:text-2xl uppercase">Доставка</h1>
                  <DeliveryForm
                    initialValues={formDeliveryData}
                    handleForm2Submit={handleForm2Submit}
                    handleStepClick={handleStepClick}
                  />
                </div>
              )}
              {step === 3 && (
                <div className="flex flex-col justify-between gap-5">
                  <h1 className="md:text-2xl uppercase">Перевірте ваші дані</h1>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-1 p-4 ">ФІО:</div>
                    <div className="col-span-3 p-4 ">{`${formData.lastName} ${formData.firstName} ${formData.patronymic}`}</div>
                    <div className="col-span-1 p-4 ">Телефон:</div>
                    <div className="col-span-3 p-4 ">{formData.phone}</div>
                    <div className="col-span-1 p-4 ">Email:</div>
                    <div className="col-span-3 p-4 ">{formData.email}</div>
                    <div className="col-span-1 p-4 ">Адреса доставки:</div>
                    <div className="col-span-3 p-4 ">{`${formDeliveryData.region} обл, ${formDeliveryData.city}, ${formDeliveryData.postOffice}`}</div>
                    <div className="col-span-1 p-4 ">Тип доставки:</div>
                    <div className="col-span-3 p-4 ">Накладений платіж</div>
                  </div>

                  <div className="flex justify-between p-[20px] gap-2">
                    <Button
                      onClick={() => handleStepClick(2)}
                      title={'Назад'}
                      textSize={'md'}
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      title={'Підтверджую замовлення'}
                      textSize={'md'}
                    />
                  </div>
                </div>
              )}
            </div>
            <BasketCard />
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout
