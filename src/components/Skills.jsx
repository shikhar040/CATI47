import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import { faPencil, faRobot } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    const [listSkills] = useState([
        {
            name: 'Fronted Development',
            des: 'At Cosmic Aura Tech Industry (CATI), our front-end development team combines creativity and technical expertise to create visually stunning and user-friendly interfaces. Proficient in HTML5, CSS3, and JavaScript frameworks like React and Vue.js, we ensure responsive design across all devices. With a focus on user experience, we translate creative visions into cohesive digital experiences, continuously pushing the boundaries of web development to deliver dynamic and interactive solutions.',
            icon: faHtml5
        },
        {
            name: 'Graphic Designs',
            des: 'At Cosmic Aura Tech Industry (CATI), our graphic design team excels in transforming ideas into captivating visual narratives. With a blend of creativity and technical skill, our designers craft compelling graphics that effectively communicate messages and engage audiences. Proficient in tools like Adobe Photoshop, Illustrator, and InDesign, our team creates stunning visuals for branding, marketing materials, and digital content.',
            icon: faPencil
        },
        {
            name: 'Java Development',
            des: 'At Cosmic Aura Tech Industry (CATI), our Java development team is dedicated to building robust, scalable, and secure applications. With expertise in Java SE, Java EE, and related frameworks like Spring and Hibernate, our developers create high-performance solutions tailored to meet diverse business needs. We prioritize code quality, maintainability, and efficiency, ensuring that our Java applications are both powerful and reliable. ',
            icon: faJava
        },
        {
            name: 'ReactJs',
            des: 'At Cosmic Aura Tech Industry (CATI), our React JS development team is dedicated to crafting dynamic and responsive web applications. Utilizing the power of React, we build high-performance, interactive user interfaces that deliver seamless user experiences. Our developers are proficient in modern JavaScript, leveraging Reacts component-based architecture to create scalable and maintainable applications. ',
            icon: faReact
        },
        {
            name: 'Python Development',
            des: ' Python Development At Cosmic Aura Tech Industry (CATI), our Python development team specializes in creating versatile and high-performance applications. Leveraging the simplicity and power of Python, we build solutions for web development, data analysis, machine learning, and automation. Our developers are adept at using popular frameworks like Django and Flask, ensuring efficient, scalable, and secure applications.',
            icon: faPython
        },
        {
            name: 'AI Promt Expert',
            des: 'At Cosmic Aura Tech Industry (CATI), our AI prompt experts excel in crafting and optimizing prompts to harness the full potential of artificial intelligence. With deep knowledge in natural language processing and machine learning, our team designs prompts that enhance AI interactions, ensuring precise and meaningful outputs. By leveraging advanced techniques and understanding context, CATIs AI prompt experts create customized solutions that drive innovation, streamline processes, and deliver insightful results, all tailored to meet the specific needs of our clients.',
            icon: faRobot
        }
    ]);

    return (
        <section id="skills" className="skills" ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                OUR SKILLS
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
            In the realm of tech, we make our stand, Cosmic Aura, a trusted hand. With skills honed sharp, like a master’s blade, Innovation in every step we’ve made.
            </div>
            <div className="list">
                {listSkills.map((value, key) => (
                    <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
                        <FontAwesomeIcon icon={value.icon} />
                        <h3>{value.name}</h3>
                        <div className="des">{value.des}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
