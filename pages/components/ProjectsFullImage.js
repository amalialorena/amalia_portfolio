import Image from 'next/image';
import Button from '../components/Button';

const projects = [
    {
        id: '1',
        tags: 'VUEJS',
        title: 'BoolFlix: a Netflix clone',
        url: 'https://serene-aryabhata-f2a958.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolflix.jpg',
        imageAlt: 'project image',
        imageWidth: '650',
        imageHeight: '325',
    }, 
    {
        id: '2',
        tags: 'VUEJS',
        title: 'BoolApp: a whatsapp clone',
        url: 'https://elastic-rosalind-d13b9f.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/boolzapp.jpg',
        imageAlt: 'project image',
        imageWidth: '650',
        imageHeight: '325',
    },
    {
        id: '3',
        tags: 'VUEJS',
        title: 'BoolApp: a whatsapp clone',
        url: 'https://elastic-rosalind-d13b9f.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/playstation.jpg',
        imageAlt: 'project image',
        imageWidth: '650',
        imageHeight: '325',
    },
    {
        id: '4',
        tags: 'VUEJS',
        title: 'BoolApp: a whatsapp clone',
        url: 'https://elastic-rosalind-d13b9f.netlify.app',
        description: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.',
        imagePath: '/spotify.jpg',
        imageAlt: 'project image',
        imageWidth: '650',
        imageHeight: '325',
    },
];

function ProjectsFullImage() {
    const projectText = "qweweew  qweewq Website";
    return (
      <section className="cards-container">
       <h2>Projects</h2>
       <div className="cards">
            {projects.map((project) => {
                return <div className="card" key={project.id}>
                    <Image src={project.imagePath} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight}/>
                    <div className="text">
                        <div className="tags">{project.tags}</div>
                        <div className="title">{project.title}</div>
                        <div className="description">{project.description}</div>    
                    </div>
                    <a href={project.url} className="button">Visit website</a>
                </div>
            })}
       </div>
            
      </section>
    );
  };



  export default ProjectsFullImage;