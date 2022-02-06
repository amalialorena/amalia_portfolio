import Image from "next/image";

const projects = [
  {
    id: "1",
    tags: ["VUEJS","JS", "HTML", "CSS"],
    title: "BoolFlix: a Netflix clone",
    url: "https://serene-aryabhata-f2a958.netlify.app",
    description:
      "Boolflix is ​​a project made in Vue.js. It interfaces with the TMDB API to show the user a catalog of Movies and TV Series. It allows you to search  any film or series and read  related pieces of information like original title, rating, overview, language etc.",
    imagePath: "/boolflix.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "2",
    tags: ["VUEJS","JS", "HTML", "CSS", "DayJs"],
    title: "BoolApp: a WhatsApp clone",
    url: "https://elastic-rosalind-d13b9f.netlify.app",
    description:
      "'Boolzapp' is the replica of Whatsapp Web, it allows you to send messages to contacts, and receive an automatic reply after a second. The hour and date display on your messages are updated with DayJs.  You can filter your contacts by entering their name in the search bar or you can select them by clicking on their name. The last message sent or received is displayed under the contact name.",
    imagePath: "/boolzapp.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "3",
    tags: ["Bootstrap", "HTML", "CSS"],
    title: "Playstation clone",
    url: "https://optimistic-blackwell-b8d3cc.netlify.app",
    description:
      "This was among my first big projects after a month and a half of training with Boolean Careers. Responsive playback of the official Playstation website. ",
    imagePath: "/playstation.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "4",
    tags: ["HTML", "CSS"],
    title: "Spotify clone",
    url: "https://quizzical-benz-9502d1.netlify.app",
    description:
      "Spotify replication was the first web app I developed, compared to previous projects the use of Media Queries was also implemented to make the application completely responsive. The project is developed with HTML and CSS.",
    imagePath: "/spotify.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "5",
    tags: ["JS", "HTML", "CSS"],
    title: "Minefield game",
    url: "https://gallant-ramanujan-8e72ac.netlify.app/",
    description:
      "The user indicates a level of difficulty on the basis of which a square game grid is generated, When the user clicks on each cell, the clicked cell changes color, if the number is present in the list of generated numbers - we stepped on a bomb - the cell turns red and the game ends. At the end of the game, the software must discover all the bombs and communicate the score, that is the number of times the user has clicked a small square with an allowed number.",
    imagePath: "/minefield.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "6",
    tags: ["VUEJS", "HTML", "SCSS"],
    title: "Avada theme clone",
    url: "https://optimistic-bassi-1bc253.netlify.app",
    description:
      "Avada theme is a web app built in Vue js. Thanks to the use of components, I was able to reuse portions of the layout, improving the maintainability of the code and the performance of my application. Some elements on the page are interactive like the menu for example.",
    imagePath: "/avada.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "7",
    tags: ["instagram", "handmade", "sculptures", "art"],
    title: "My art on Instagram",
    url: "https://www.instagram.com/sherbetlemonit/",
    description:
      "In my spare time, I dedicated myself to developing my artistic skills by working on numerous projects ranging from illustration to sculpture. Pictures of my artwork are available on my instagram page.",
    imagePath: "/sherbet-lemon-etsy2.jpg",
    imageAlt: "project image",
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
              <Image
                src={project.imagePath}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
              />
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
