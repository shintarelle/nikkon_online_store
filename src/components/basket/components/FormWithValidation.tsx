import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormData } from '../../../app/checkout/page'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Обязательное поле'),
  lastName: Yup.string().required('Обязательное поле'),
  patronymic: Yup.string().required('Обязательное поле'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Некорректный формат номера')
    .required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
})

interface DeliveryFromProps {
  handleForm1Submit: (data: FormData) => void
  handleStepClick: (newStep: number) => void
  initialValues: FormData
}

const FormWithValidation = ({
  initialValues,
  handleForm1Submit,
  handleStepClick,
}: DeliveryFromProps) => {
  const handleSubmit = (values: FormData) => {
    handleForm1Submit(values)
    handleStepClick(2)
    console.log('contact info: ', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="p-4 bg-gray-100">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            Имя:
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="form-input mt-1 block w-full p-1 border border-light-grey"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-powder-red"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Фамилия:
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="form-input mt-1 block w-full p-1 border border-light-grey"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-powder-red"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="patronymic" className="block text-gray-700">
            Отчество:
          </label>
          <Field
            type="text"
            id="patronymic"
            name="patronymic"
            className="form-input mt-1 block w-full p-1 border border-light-grey"
          />
          <ErrorMessage
            name="patronymic"
            component="div"
            className="text-powder-red"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Телефон:
          </label>
          <Field
            type="text"
            id="phone"
            name="phone"
            className="form-input mt-1 block w-full p-1 border border-light-grey"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-powder-red"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-input mt-1 block w-full p-1 border border-light-grey"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-powder-red"
          />
        </div>

        <div className="flex justify-end p-[20px]">
          <button
            type="submit"
            className="bg-powder-pink px-7 py-2 text-md font-medium hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white"
          >
            Далі
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormWithValidation
