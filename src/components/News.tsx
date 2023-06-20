const News = () => {
return(
  <div className="text-white">

    <div className="container my-24 mx-auto md:px-6">
      
      <section className="mb-8 lg:mb-10">
        <h1 className="mb-4 text-3xl font-bold">
        The Cinematic Triumph: A Journey through Spectacular Cinema
        </h1>
    
        <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            className="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>Hot news
        </p>
    
        <p className="mb-6">
        Welcome to our movie website, where we embark on a thrilling journey through the mesmerizing world of cinema. Here, we celebrate the artistry, the storytelling, and the magic that movies bring to our lives. Join us as we explore the diverse genres, iconic performances, groundbreaking technology, and unforgettable moments that have shaped the landscape of the silver screen. From the gripping dramas to the heart-pounding action, from the thought-provoking documentaries to the fantastical adventures, let's dive into the captivating world of movies.
        </p>
    
        <p className="mb-6">
          <strong>Shazam!</strong>
        </p>
    
        <p className="mb-6">
        Unleashing Imagination: Blockbuster Spectacles
        Hollywood has always been a haven for larger-than-life spectacles, and the movie industry continually pushes the boundaries of what is visually and technologically possible. From the grandiose superhero epics that dominate the box office to the awe-inspiring science fiction sagas that transport us to distant galaxies, these blockbusters captivate us with their stunning visuals, heart-pounding action, and breathtaking special effects.
        </p>
    
        <p
          className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
          <strong>Note:</strong> This movie web is designed by Duy Huynh for his lab grade in FER201m. Building with React and Tailwind, MaterialUI and Materialize. Most of the project uses Typescript (90%).
        </p>
    
        <p className="mb-6">
        While visual spectacle may grab our attention, it is the power of storytelling that truly mesmerizes us. Movies have the ability to transport us to different eras, cultures, and perspectives, allowing us to experience worlds beyond our own. Whether it's an intimate character-driven drama, a suspenseful thriller that keeps us on the edge of our seats, or a heartwarming tale that touches our souls, movies have the power to evoke a wide range of emotions and leave an indelible impact on our lives.
        </p>
    
        <img src="./images/hero.jpg"
          className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
    

    
        <p>
        Movies are brought to life by the incredible performances of talented actors and actresses. From the legendary icons of the past to the rising stars of today, these individuals have the ability to immerse themselves in their roles, captivating us with their portrayal of complex characters and their ability to evoke genuine emotions. Their performances stay etched in our memories, making us laugh, cry, and cheer along with them.
        </p>
      </section>
     
    </div>
   

  </div>
);
}
export default News;