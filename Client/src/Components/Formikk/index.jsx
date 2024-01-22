import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const Formikk = ({ getData }) => {
    async function addMenu(values) {
        const res = await axios.post("http://localhost:5000/shells", values)
        getData()
    }

    return (
        <Formik
            initialValues={{ name: '', image: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                image: Yup.string()
                    .max(150, 'Must be 150 characters or less')
                    .required('Required'),

            })}
            onSubmit={(values, { resetForm }) => {
                addMenu(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="firstName">name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />

                <label htmlFor="image">image</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />



                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default Formikk