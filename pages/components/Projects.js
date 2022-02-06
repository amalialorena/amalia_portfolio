import Image from "next/image";

const projects = [
  {
    id: "1",
    tags: ["VUEJS", "JS", "HTML 5", "CSS 3", "NPM"],
    title: "BoolFlix: a Netflix replica",
    url: "https://serene-aryabhata-f2a958.netlify.app",
    description:
      "Boolflix is a project made in VueJS, it interfaces with the TMDB API to show the user a catalog of Movies and TV Series. It allows you to search any film or series to see additional information such as original title, ratings, overviews, language etc.",
    imagePath: "/boolflix.jpg",
    imageAlt: "Boolflix",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "2",
    tags: ["VUEJS", "JS", "HTML 5", "CSS 3", "DayJs"],
    title: "BoolApp: a WhatsApp replica",
    url: "https://elastic-rosalind-d13b9f.netlify.app",
    description:
      "Boolzapp is a replica of Whatsapp Web, it allows you to send messages to contacts, and receive an automatic reply after a second. The hour and date display on your messages are updated with DayJs. You can filter your contacts by entering their name in the search bar or you can select them by clicking on their name. The last message sent or received is displayed under the contact name.",
    imagePath: "/boolzapp.jpg",
    imageAlt: "Boolzapp",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "3",
    tags: ["Bootstrap 3", "HTML 5", "CSS 3"],
    title: "Playstation replica",
    url: "https://optimistic-blackwell-b8d3cc.netlify.app",
    description:
      "This was among my first big projects, after a month and a half of training with Boolean Careers. It's a mobile first replica of the official Playstation website.",
    imagePath: "/playstation.jpg",
    imageAlt: "Playstation replica",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "4",
    tags: ["HTML", "CSS"],
    title: "Spotify replica",
    url: "https://quizzical-benz-9502d1.netlify.app",
    description:
      "This replica of Spotify was one of the firsts web application I developed, it introduced me to the concept of media queries and responsive design with HTML and CSS.",
    imagePath: "/spotify.jpg",
    imageAlt: "Spotify replica",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "5",
    tags: ["JS", "HTML", "CSS"],
    title: "Minefield game",
    url: "https://gallant-ramanujan-8e72ac.netlify.app/",
    description:
      "In this small javascript game, the user needs to avoid the bomb. He will be asked to choose a difficulty level and based on that the a grid will be created. when the user clicks on a cell, the clicked cell changes color, if the number is present in a list of random generated numbers, you stepped on a bomb! The cell will turn red and the game ends. At the end of the game, the software will cicle trough all the bombs and calculate the score based on the number of times the user has succesfully clicked a square with an allowed number.",
    imagePath: "/minefield.jpg",
    imageAlt: "Minefield game",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "6",
    tags: ["VUEJS", "HTML", "SCSS"],
    title: "Avada theme clone",
    url: "https://optimistic-bassi-1bc253.netlify.app",
    description:
      "Avada is one of the most popular themes, I replicated one of the layouts as a web application with VueJS. Thanks to the use of components, I was able to reuse portions of the layout, improving the maintainability of the code and the performance of my application. Some elements on the page are interactive like the menu for example.",
    imagePath: "/avada.jpg",
    imageAlt: "Avada",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "7",
    tags: ["instagram", "made by me!", "handmade", "sculptures", "art"],
    title: "My art on Instagram",
    url: "https://www.instagram.com/sherbetlemonit/",
    description:
      "Art has always been one of my passions, I created lots of different pieces and developed my artistic skills by working on many different projects ranging from illustration, video editing and sculpture. Some pictures of my artworks are available on my instagram page, check it out!",
    imagePath: "/sherbet-lemon-etsy2.jpg",
    imageAlt: "My Instagram page",
    imageWidth: "650",
    imageHeight: "325",
  },
];

function Projects() {
  return (
    <section className="cards-container">
      <h2 className="cards-title">Projects</h2>
      <p className="cards-subtitle">
        A selection of some projects, from the over 50 projects I have done
      </p>
      <div className="cards">
        {projects.map((project) => {
          return (
            <div className="card" key={project.id}>
              <a href={project.url}>
                <Image
                  src={project.imagePath}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                />
              </a>
              <div className="text">
                <div className="tags">
                  {project.tags.map(function (tag) {
                    return (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="title">{project.title}</div>
                <div className="description">{project.description}</div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Visit website
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
