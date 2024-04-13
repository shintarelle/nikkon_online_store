'use client'
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormDeliveryData } from '../../../app/checkout/page'

const validationSchema = Yup.object().shape({
  region: Yup.string().required('Выберите область'),
  city: Yup.string().required('Выберите город'),
  postOffice: Yup.string().required('Выберите отделение новой почты'),
})

const area = ['Kharkivska', 'Kyevska', 'Odesska']
const city = ['Kharkiv', 'Kyev', 'Odessa']
const department = ['1', '2', '3']

interface DeliveryFromProps {
  handleForm2Submit: (data: FormDeliveryData) => void
  handleStepClick: (newStep: number) => void
  initialValues: FormDeliveryData
}

const DeliveryFrom = ({
  initialValues,
  handleForm2Submit,
  handleStepClick,
}: DeliveryFromProps) => {
  const [regions, setRegions] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [postOffices, setPostOffices] = useState<string[]>([])

  useEffect(() => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }
    if (process.env.API_KEY) {
      headers.apiKey = process.env.API_KEY
    }

    fetch('https://api.novaposhta.ua/v2.0/json/areas/getAreas', {
      method: 'GET',
      headers,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error))
      // .then((data) => setRegions(data.data.map((region: string[]) => region.Description)))


    //   // // Загрузка данных о городах
    //   // fetch('https://api.example.com/cities')
    //   //   .then(response => response.json())
    //   //   .then(data => setCities(data));

    //   // // Загрузка данных об отделениях новой почты
    //   // fetch('https://api.example.com/postOffices')
    //   //   .then(response => response.json())
    //   //   .then(data => setPostOffices(data));
    setRegions(area)
    setCities(city)
    setPostOffices(department)
  }, [])

  const handleRegionChange = (selectedRegion: string) => {
    // This is just a mock implementation, replace it with actual API call logic
    // to fetch cities based on the selected region.
    // console.log('Selected region:', selectedRegion);
  }

  const handleCityChange = (selectedCity: string) => {
    // This is just a mock implementation, replace it with actual API call logic
    // to fetch post offices based on the selected city.
    // console.log('Selected city:', selectedCity);
  }
  const handlePostOfficeChange = (selectedPostOffice: string) => {
    // This is just a mock implementation, replace it with actual API call logic
    // to perform any action based on the selected post office.
    // console.log('Selected post office:', selectedPostOffice);
  }

  const handleSubmit = (values: FormDeliveryData) => {
    handleForm2Submit(values)
    handleStepClick(3)
    console.log('delivery:', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="p-4 bg-gray-100">
          <div className="mb-4">
            <label htmlFor="region" className="block text-gray-700">
              Область:
            </label>
            <Field
              as="select"
              id="region"
              name="region"
              className="form-select mt-1 block w-full p-2 border border-light-grey"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setFieldValue('region', e.target.value)
                handleRegionChange(e.target.value)
              }}
            >
              <option value="">Выберите область</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="region"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">
              Город:
            </label>
            <Field
              as="select"
              id="city"
              name="city"
              className="form-select mt-1 block w-full p-2 border border-light-grey"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setFieldValue('city', e.target.value)
                handleCityChange(e.target.value)
              }}
            >
              <option value="">Выберите город</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postOffice" className="block text-gray-700">
              Отделение Новой Почты:
            </label>
            <Field
              as="select"
              id="postOffice"
              name="postOffice"
              className="form-select mt-1 block w-full p-2 border border-light-grey"
            >
              <option value="">Выберите отделение Новой Почты</option>
              {postOffices.map((office, index) => (
                <option key={index} value={office}>
                  {office}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="postOffice"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="flex justify-between p-[20px]">
            <button
              className="bg-powder-pink px-7 py-2 text-md font-medium hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white"
              onClick={() => handleStepClick(1)}
            >
              Назад
            </button>
            <button
              type="submit"
              className="bg-powder-pink px-7 py-2 text-md font-medium hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white"
            >
              Далі
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default DeliveryFrom
