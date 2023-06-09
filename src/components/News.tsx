const News = () => {
return(
  <div className="text-white">

    <div className="container my-24 mx-auto md:px-6">
      
      <section className="mb-32">
        <h1 className="mb-4 text-3xl font-bold">
          An intriguing title for an interesting article
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          sapiente molestias consectetur. Fuga nulla officia error placeat
          veniam, officiis rerum laboriosam ullam molestiae magni velit laborum
          itaque minima doloribus eligendi! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Optio sapiente molestias consectetur.
          Fuga nulla officia error placeat veniam, officiis rerum laboriosam
          ullam molestiae magni velit laborum itaque minima doloribus eligendi!
        </p>
    
        <p className="mb-6">
          <strong>Optio sapiente molestias consectetur?</strong>
        </p>
    
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto ex ab aut tempora officia libero praesentium, sint id
          magnam eius natus unde blanditiis. Autem adipisci totam sit
          consequuntur eligendi.
        </p>
    
        <p
          className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
          <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Optio odit consequatur porro sequi ab distinctio
          modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
          illum saepe mollitia ut voluptatum.
        </p>
    
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
          inventore perspiciatis possimus quia incidunt maiores molestias eaque
          nam commodi! Magnam, labore.
        </p>
    
        <img src="./images/hero.jpg"
          className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
    
        <ul className="mb-6 list-inside list-disc">
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
          <li>Amet</li>
        </ul>
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          temporibus nulla voluptatibus accusantium sapiente doloremque.
          Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
          nostrum in accusantium dolore veritatis eius est?
        </p>
      </section>
     
    </div>
 
  </div>
);
}
export default News;