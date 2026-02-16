import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import './Contacts.css';

function Contacts() {
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+91-8545099251'
        },{
            title: 'Email',
            value: 'cosmicauratechindustry@gmail.com'
        },{
            title: 'WE Are :',
            value: 'CATI TECHIES'
        }
    ]);
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section id="contact" className="contacts" ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                CONTACT US
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>

Reach out to CATI, where dreams take flight, In the realm of tech, we craft the light. Join us in this journey grand, With innovation at the heart, hand in hand.
            </div>
            <div className="list">
                {listContacts.map((value, key) => (
                    <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
                        <h3>{value.title}</h3>
                        <div>{value.value}</div>
                    </div>
                ))}
            </div>
            <div className="footer">
                <h4>About Us</h4>
                <div className="main">
                    <div className="insta">
                        <a href="https://instagram.com/axiscolleges?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div className="face">
                        <a href="https://www.facebook.com/AxisColleges?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    </div>
                    <div className="twit">
                        <a href="https://x.com/CollegesAxis?t=6jxXkuc--CoB8jzdDo_trg&s=09" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    </div>
                    <div className="yt">
                        <a href="mailto:hohoang.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope fa-2x"></i> {/* Use `fas` for solid icons */}
                        </a>
                    </div>
                    <div className="spo">
                        <a href="https://www.linkedin.com/school/axis-colleges/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © Cosmic Aura tech Industry (CATI)</p>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
