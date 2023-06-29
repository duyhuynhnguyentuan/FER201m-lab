import Input from "./Input";
import { useState } from 'react';
import {FcDeleteRow} from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { addFilm, deleteFilm, updateFilm } from "../features/Film";
import { v4 as uuidv4 } from 'uuid';
import { Button, IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import AddMovieForm from "./AddMovieForm";

const FilmsManageMent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const dispatch = useDispatch();
  const filmList = useSelector((state:any)=> state.films.value);  
  const [newTitle,setnewTitle]=useState('');
  const [newDescription,setnewDescription]=useState('');
  
  const handleAddFilm = () => {
      const id = uuidv4();
      const film = {
          id,
          title,
          description,
          videoUrl,
          thumbnailUrl,
          genre,
          duration
        };
        
        dispatch(addFilm(film));
        console.log('Adding film:', film);
  };

  return (
    <div className="relative h-full w-full">
     <div className="container rounded-md bg-white py-20 px-20 ">

      <h1 className="">Formik Add Film</h1>
      <AddMovieForm/>
     </div>
      {/* sign-in form starts here */}
      <div className="flex justify-center">
        <div className="bg-black/80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 semi-bold">
            Add new Films
          </h2>
          <div className="flex flex-col gap-4">
            <Input
              id="title"
              onchange={(ev :any) => setTitle(ev.target.value)}
              value={title}
              lable="Title"
              type="text"
            />
            <Input
              id="description"
              onchange={(ev :any) => setDescription(ev.target.value)}
              value={description}
              lable="Description"
              type="text"
            />
            <Input
              id="videoUrl"
              onchange={(ev: any) => setVideoUrl(ev.target.value)}
              value={videoUrl}
              lable="videoUrl"
              type="text"
            />
            <Input
              id="thumbnailUrl"
              onchange={(ev:any) => setThumbnailUrl(ev.target.value)}
              value={thumbnailUrl}
              lable="Thumbnail Url"
              type="text"
            />
            <Input
              id="genre"
              onchange={(ev:any) => setGenre(ev.target.value)}
              value={genre}
              lable="Genre"
              type="text"
            />
            <Input
              id="duration"
              onchange={(ev:any) => setDuration(ev.target.value)}
              value={duration}
              lable="Duration"
              type="text"
            />
          </div>
          <button
            onClick={handleAddFilm}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
          >
            ADD FILM
          </button>
        </div>
      </div>
    <div className="container bg-white/80 mt-52 rounded-md">
    {
      filmList.map((films : any)=>{
        return(
          <>
          <ListItem key={films.id}>
          <ListItemText primary={films.title} secondary={films.description}/>
          <TextField placeholder="Type new Title..." onChange={(e:any)=>setnewTitle(e.target.value)}/>
          <TextField placeholder="Type new Description..." onChange={(e:any)=>setnewDescription(e.target.value)}/>
          <Button
          onClick={()=>{dispatch(updateFilm({id: films.id, title: newTitle, description: newDescription}));
        }}
          >
            Update
          </Button>
          <IconButton aria-label="delete" color="error" onClick={()=>{
            dispatch(deleteFilm({id: films.id}));
          }}>
            <FcDeleteRow/>
          </IconButton>
          </ListItem>
          </>
        )
      })
    }
    </div>

    </div>
  );
};

export default FilmsManageMent;
