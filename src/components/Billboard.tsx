import React, {useState} from "react";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import PlayButton from "./PlayButton";
import BillboardModal from "./BillboardModal";
export interface Film{
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
} 
interface BillboardProps{
    film: Film;
}
const Billboard:React.FC<BillboardProps> = ({film})=>{

    const [InfoModalOpen,setInfoModalOpen] = useState(false);
    const handleOpenMadal = () =>{
        setInfoModalOpen(true);
    }
    const handleCloseMadal = () =>{
        setInfoModalOpen(false);
    }
return(
    <div className="relative h-[56.25vw]">
  <video poster={film.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop playsInline src={film.videoUrl}></video>

    <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
      <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {film.title}
      </p>
      <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        {film.description}
      </p>
      <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
        <PlayButton movieId={film.id} />
        <button
        onClick={handleOpenMadal}
          className="
          bg-white
          text-white
            bg-opacity-30 
            rounded-md 
            py-1 md:py-2 
            px-2 md:px-4
            w-auto 
            text-xs lg:text-lg 
            font-semibold
            flex
            flex-row
            items-center
            hover:bg-opacity-20
            transition
          "
          >
            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
            More Info
        </button>
      </div>
    </div>
    <BillboardModal film={film} isOpen={InfoModalOpen} onClose={handleCloseMadal} />
  </div>
);
};
export default Billboard;