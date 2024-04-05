// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   region: Yup.string().required('Выберите область'),
//   city: Yup.string().required('Выберите город'),
//   postOffice: Yup.string().required('Выберите отделение новой почты'),
// });

// const area = ['Kharkivska', 'Kyevska', 'Odesska']
// const city = ['Kharkiv', 'Kyev', 'Odessa']
// const department = ['1', '2', '3']

// const FormWithValidation = () => {
//   const [regions, setRegions] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [postOffices, setPostOffices] = useState([]);

//   useEffect(() => {
//     // Здесь загрузите данные об областях, городах и отделениях новой почты
//     // и установите их в состояния regions, cities и postOffices

//   // // Загрузка данных об областях
//   // fetch('https://api.example.com/regions')
//   //   .then(response => response.json())
//   //   .then(data => setRegions(data));

//   // // Загрузка данных о городах
//   // fetch('https://api.example.com/cities')
//   //   .then(response => response.json())
//   //   .then(data => setCities(data));

//   // // Загрузка данных об отделениях новой почты
//   // fetch('https://api.example.com/postOffices')
//   //   .then(response => response.json())
//   //   .then(data => setPostOffices(data));

//     //для демонстрации

//     setRegions([...area]);
//     setCities([...city]);
//     setPostOffices([...department]);
// }, []);

//   const handleRegionChange = (selectedRegion) => {
//     // Обновите список городов в зависимости от выбранной области
//     const filteredCities = cities.filter(city => city.region === selectedRegion);
//     setCities(filteredCities);
//   };

//   const handleCityChange = (selectedCity) => {
//     // Обновите список отделений новой почты в зависимости от выбранного города
//     const filteredPostOffices = postOffices.filter(postOffice => postOffice.city === selectedCity);
//     setPostOffices(filteredPostOffices);
//   };

//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Formik
//       initialValues={{
//         region: '',
//         city: '',
//         postOffice: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ values, setFieldValue }) => (
//         <Form className="p-4 bg-gray-100">
//           <div className="mb-4">
//             <label htmlFor="region" className="block text-gray-700">Область:</label>
//             <Field as="select" id="region" name="region" className="form-select mt-1 block w-full p-1 border border-light-grey" onChange={(e) => {
//               setFieldValue('region', e.target.value);
//               handleRegionChange(e.target.value);
//             }}>
//               <option value="">Выберите область</option>
//               {regions.map(region => (
//                 <option key={region.id} value={region.id}>{region.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="region" component="div" className="text-red-500" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="city" className="block text-gray-700">Город:</label>
//             <Field as="select" id="city" name="city" className="form-select mt-1 block w-full p-1 border border-light-grey" onChange={(e) => {
//               setFieldValue('city', e.target.value);
//               handleCityChange(e.target.value);
//             }}>
//               <option value="">Выберите город</option>
//               {cities.map(city => (
//                 <option key={city.id} value={city.id}>{city.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="city" component="div" className="text-red-500" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="postOffice" className="block text-gray-700">Отделение Новой Почты:</label>
//             <Field as="select" id="postOffice" name="postOffice" className="form-select mt-1 block w-full p-1 border border-light-grey">
//               <option value="">Выберите отделение Новой Почты</option>
//               {postOffices.map(postOffice => (
//                 <option key={postOffice.id} value={postOffice.id}>{postOffice.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="postOffice" component="div" className="text-red-500" />
//           </div>
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Отправить</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FormWithValidation;
