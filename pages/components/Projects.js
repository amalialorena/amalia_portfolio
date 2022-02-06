import Image from "next/image";

const projects = [
  {
    id: "1",
    tags: ["VUEJS", "HTML", "CSS"],
    title: "BoolFlix: a Netflix clone",
    url: "https://serene-aryabhata-f2a958.netlify.app",
    description:
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
    imagePath: "/boolflix.jpg",
    imageAlt: "project image",
    imageWidth: "650",
    imageHeight: "325",
  },
  {
    id: "2",
    tags: ["VUEJS", "HTML", "CSS"],
    title: "BoolApp: a WhatsApp clone",
    url: "https://elastic-rosalind-d13b9f.netlify.app",
    description:
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
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
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
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
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
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
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
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
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.",
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
