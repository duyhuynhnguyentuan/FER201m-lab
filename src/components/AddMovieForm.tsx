import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddMovieForm = () => {
  const initialValues = {
    id: '',
    title: '',
    description: '',
    videoUrl: '',
    thumbnailUrl: '',
    genre: '',
    duration: '',
  };

  const validationSchema = Yup.object({
    id: Yup.number().required('ID is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    videoUrl: Yup.string().required('Video URL is required'),
    thumbnailUrl: Yup.string().required('Thumbnail URL is required'),
    genre: Yup.string().required('Genre is required'),
    duration: Yup.number().required('Duration is required'),
  });

  const handleSubmit = async (values: any, resetForm: any ) => {
    try {
      const response = await axios.post(
        'https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films',
        values
      );
      console.log('Movie added:', response.data);

      // Reset the form after successful submission
      resetForm({});

    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="id">ID</label>
          <Field type="number" id="id" name="id" />
          <ErrorMessage name="id" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="videoUrl">Video URL</label>
          <Field type="text" id="videoUrl" name="videoUrl" />
          <ErrorMessage name="videoUrl" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="thumbnailUrl">Thumbnail URL</label>
          <Field type="text" id="thumbnailUrl" name="thumbnailUrl" />
          <ErrorMessage
            name="thumbnailUrl"
            component="div"
            className="error"
          />
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <Field type="text" id="genre" name="genre" />
          <ErrorMessage name="genre" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="duration">Duration</label>
          <Field type="number" id="duration" name="duration" />
          <ErrorMessage name="duration" component="div" className="error" />
        </div>

        <button type="submit">Add Movie</button>
      </Form>
    </Formik>
  );
};

export default AddMovieForm;
