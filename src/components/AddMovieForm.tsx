import React, { useEffect, useState, ChangeEvent } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

const initialValues: Movie = {
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
  duration: Yup.string().required('Duration is required'),
});

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get<Movie[]>(
        'https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films'
      );
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleEditClick = (movie: Movie) => {
    setEditingMovie(movie);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await axios.delete(
        `https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films/${id}`
      );

      fetchMovies(); // Refresh movies after delete
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
  };

  const handleSaveEdit = async () => {
    try {
      if (!editingMovie) return;
  
      await axios.put(
        `https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films/${editingMovie.id}`,
        editingMovie 
      );
  
      setEditingMovie(null);
      fetchMovies(); // Refresh movies after update
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setEditingMovie((prevMovie) => {
      if (!prevMovie) return null;

      return {
        ...prevMovie,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (values: Movie, resetForm: any) => {
    try {
      const response = await axios.post(
        'https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films',
        values
      );
      console.log('Movie added:', response.data);

      // Reset the form after successful submission
      resetForm({});
      fetchMovies(); // Refresh movies after adding
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="mb-4 p-4 border rounded-lg">
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.genre}</p>
            <div className="flex">
              <FaEdit
                className="text-blue-500 cursor-pointer"
                onClick={() => handleEditClick(movie)}
              />
              <FaTrash
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => handleDeleteClick(movie.id)}
              />
            </div>
          </div>
        ))}

        {editingMovie && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-black">Edit Movie</h2>
              <form>
                <input
                  type="text"
                  className="input"
                  placeholder="Title"
                  name="title"
                  value={editingMovie.title}
                  onChange={handleInputChange}
                />
                <textarea
                  className="input"
                  placeholder="Description"
                  name="description"
                  value={editingMovie.description}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Video URL"
                  name="videoUrl"
                  value={editingMovie.videoUrl}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Thumbnail URL"
                  name="thumbnailUrl"
                  value={editingMovie.thumbnailUrl}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Genre"
                  name="genre"
                  value={editingMovie.genre}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Duration"
                  name="duration"
                  value={editingMovie.duration}
                  onChange={handleInputChange}
                />

                <button className="btn-blue" onClick={handleSaveEdit}>
                  Save
                </button>
                <button className="btn-gray ml-2" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <h1 className="mt-20">Add Movie Form</h1>
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
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />
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
            <Field type="text" id="duration" name="duration" />
            <ErrorMessage name="duration" component="div" className="error" />
          </div>

          <button type="submit" className="btn-blue mt-4">
            Add Movie
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieList;
