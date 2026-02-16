import React, { useState, useRef } from 'react';
import './Projects.css';
import CustomHook from './CustomHook';

function Projects() {
    const scrollTab = useRef();
    const divs = useRef([]);
    CustomHook(scrollTab, divs);

    const [listProjects] = useState([
        {
            name: 'SHIKHAR DIXIT',
            des: 'Shikhar Dixit is the Founder and CEO of Cosmic Aura Tech Industry (CATI), a visionary leader driven by a passion for technology and innovation. Inspired to bridge the gap between cutting-edge tech and practical applications, Shikhar established CATI with a mission to deliver user-centric solutions that foster growth and success. Under his leadership, CATI has achieved numerous milestones, becoming a trusted name in the industry. With a commitment to excellence, Shikhars dedication to continuous learning and technological advancement propels CATI towards a future filled with endless possibilities.',
            
            images: '/4.PNG',
            instagramLink: 'https://shikhard.netlify.app/'
        },
        {
            name: 'SWATANTRA SINGH',
            des: 'Swatantra Singh is the Co-Founder of Cosmic Aura Tech Industry (CATI) and a crucial partner in the conceptualization and realization of the companys vision. His innovative mindset and collaborative spirit were instrumental in shaping the foundation of CATI. Together with Shikhar Dixit, Swatantra has driven the company towards achieving its mission of delivering cutting-edge, user-centric technological solutions. His dedication to fostering growth and innovation has been a cornerstone of CATIs success, making Swatantra a vital force behind the companys impactful journey.',
            images: '/1.PNG',
            instagramLink: 'https://shikhard.netlify.app/'
        },
        {
            name: 'NISHKARSH MISHRA',
            des: 'Nishkarsh Mishra is the Director of Cosmic Aura Tech Industry (CATI), playing a pivotal role in steering the company towards its ambitious goals. With a sharp strategic vision and a deep understanding of technological advancements, Nishkarsh has been instrumental in driving CATIs growth and innovation. His leadership and commitment to excellence ensure that CATI continually delivers top-notch, user-centric solutions. Nishkarshs passion for technology and dedication to fostering a culture of innovation make him a key force behind CATIs ongoing success.',
            images: '/2.PNG',
            instagramLink: 'https://shikhard.netlify.app/'
        }
    ]);

    return (
        <section id="projects" className="projects" ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                CATI TEAM
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
            "Meet the pioneers behind Cosmic Aura Tech Industry (CATI): Shikhar Dixit, the visionary Founder and CEO; Swatantra Singh, the innovative Co-Founder and partner in CATI’s conception; and Nishkarsh Mishra, the strategic Director. Together, they lead with passion, drive, and a relentless pursuit of excellence, pushing the boundaries of technology and innovation." <br></br>
            Tap on Images to Open Portfolio of Our Team .
            </div>
            <div className="list">
                {listProjects.map((value, key) => (
                    <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
                        <div className="images" onClick={() => window.open(value.instagramLink, '_blank')}>
                            <img src={value.images} alt={value.name} />
                        </div>
                        <div className="content">
                            <h3>{value.name}</h3>
                            <div className="des">{value.des}</div>
                        </div>
                    </div>
                ))}
            </div>
            <a className='see-more-btn' href='https://shikhard.netlify.app/' target='_blank' rel='noopener noreferrer'>
                See More
            </a>
        </section>
    );
}

export default Projects;
