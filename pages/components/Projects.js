import Image from 'next/image';

const projects = [
    { 
        id: '1',
        tags: 'VUEJS',
        title: 'BoolFlix: a Netflix clone',
        url: 'https://www.google.com/',
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
        url: 'https://www.google.com/',
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
        url: 'https://www.google.com/',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.png',
        imageAlt: 'project image',
        imageWidth: '202',
        imageHeight: '325',
    }
];

function Projects() {
    return (
      <section>
       <h2>Projects</h2>
       <div></div>
       {projects.map((project) => {
        return <div key={project.id}>
            <Image src={project.imagePath} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight}/>
            <div>{project.tags}</div>
            <div>{project.title}</div>
            <div>{project.description}</div>
        </div>
       })}
      </section>
    );
  }
  
  export default Projects;