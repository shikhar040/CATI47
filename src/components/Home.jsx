import React, { useRef } from 'react';
import CustomHook from './CustomHook';

function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section id="home" className="home" ref={scrollTab}>
            <div className="content">
                <div className="name">
                    WELCOME TO <span>CATI</span>
                </div>
                <div className="des">
                    WELCOMES FROM THE TECH TEAM OF COSMIC AURA TECH INDUSTRY (CATI). 
                    EXPLORE OUR WEBSITE FOR FURTHER DETAILS.
                </div>
                
                <a href="/CATI.pdf" target="_blank" rel="noopener noreferrer" className="animation active">
                    Our Bronchure
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/CAT.PNG" alt="" />
                    <div className="info">
                        <div>FreeLancers</div>
                        <div>Projects</div>
                        <div>Tech Startup</div>
                        <div>Developers</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
