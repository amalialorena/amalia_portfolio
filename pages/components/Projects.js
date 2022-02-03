import Image from 'next/image';

const projects = [
    {
        id: '1',
        tags: 'VUEJS',
        title: 'BoolFlix: a Netflix clone',
        url: 'https://serene-aryabhata-f2a958.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    },
    {
        id: '2',
        tags: 'VUEJS',
        title: 'BoolApp: a whatsapp clone',
        url: 'https://elastic-rosalind-d13b9f.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    },
    {
        id: '3',
        tags: 'VUEJS',
        title: 'Spotify: a spotify clone',
        url: 'https://quizzical-benz-9502d1.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    },
    {
        id: '4',
        tags: 'VUEJS',
        title: 'Dropbox: dropbox website clone',
        url: ' https://gallant-leavitt-325733.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    },
    {
        id: '5',
        tags: 'VUEJS',
        title: 'Playstation: playstation website clone',
        url: 'https://optimistic-blackwell-b8d3cc.netlify.app/',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    }
];

function Projects() {
    return (
      <section className="cards__container">
       <h2>Projects</h2>
       <div className="cards">
            {projects.map((project) => {
                return <div className="card" key={project.id}>
                    <Image src={project.imagePath} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight}/>
                    <div className="card__text">
                        <div>{project.tags}</div>
                        <div>{project.title}</div>
                        <div>{project.description}</div>
                    </div>
                </div>
            })}
       </div>

      </section>
    );
  }

  export default Projects;