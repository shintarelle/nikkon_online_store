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
  const [selectedRegion, setSelectedRegion] = useState('')

  const [cities, setCities] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState('')
  const [cityRef, setCityRef] = useState('')

  const [postOffices, setPostOffices] = useState<string[]>([])

  const apiKey = process.env.API_KEY

  useEffect(() => {
    // Загрузка данных о областях
    fetch('https://api.novaposhta.ua/v2.0/json/areas/getAreas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey,
        modelName: 'Address',
        calledMethod: 'getAreas',
        methodProperties: {},
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const areas = data.data.map((item: any) => item.Description);
        setRegions(areas);
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  useEffect(() => {
    // Загрузка данных о городах
    if (selectedRegion) {
      fetch('https://api.novaposhta.ua/v2.0/json/cities/getCities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {},
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const citiesOfRegion = data.data.filter(
            (item: any) => item.AreaDescription === selectedRegion,
          )
          const citiesNames = citiesOfRegion.map(
            (item: any) => item.Description,
          )
          setCities(citiesNames)
        })
        .catch((error) => console.error('Error:', error))
    }
  }, [selectedRegion])

  useEffect(() => {
    // Загрузка данных об отделениях новой почты
    if (selectedCity) {
      fetch('https://api.novaposhta.ua/v2.0/json/warehouses/getwarehouses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: selectedCity,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const offices = data.data.map((item: any) => item.Description)
          setPostOffices(offices)
        })
        .catch((error) => console.error('Error:', error))
    }
  }, [selectedCity])


  const handleRegionChange = (selectedRegion: string) => {
    setSelectedRegion(selectedRegion)
  }

  const handleCityChange = (selectedCity: string) => {
    setSelectedCity(selectedCity)
  }
  const handlePostOfficeChange = (selectedPostOffice: string) => {
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
          <p>{selectedRegion}</p>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">
              Місто:
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
              Відділення Нової Пошти:
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
