import { useEffect, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page8.module.scss"

function Page8() {
    const [contacts, setContacts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const currentContact = contacts[activeIndex] || {};
    useEffect(() => {
        axios.get("http://localhost:3000/api/contacts")
        .then(res => setContacts(res.data))
        .catch(err => console.error(err));
    }, []);
    const [more, setMore] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/more")
        .then(res => setMore(res.data))
        .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <main className={styles.mainn}>
                <section className={styles.sect1}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <div className={styles.start}>
                                <div className={styles.headline}>
                                    <div>
                                        <h2>Get in Touch</h2>
                                        <button>
                                            <img src={im.startb} alt="" />
                                            START A PROJECT
                                        </button>
                                    </div>
                                    <h2>with Us Today!</h2>
                                </div>
                                <p className={styles.pp}>At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.</p>
                            </div>
                            <div className={styles.carou}>
                              <div className={styles.track}>
                                <p> Digital Marketing <span>•</span> Website Design <span>•</span> Branding <span>•</span> Website Development <span>•</span> Mobile App Development <span>•</span> </p>
                                <p> Digital Marketing <span>•</span> Website Design <span>•</span> Branding <span>•</span> Website Development <span>•</span> Mobile App Development <span>•</span> </p>
                                <p> Digital Marketing <span>•</span> Website Design <span>•</span> Branding <span>•</span> Website Development <span>•</span> Mobile App Development <span>•</span> </p>
                               </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                {more.map((item, index) => (
                                    <div className={styles.block}>
                                        <p>{item.name}</p>
                                        <p className={styles.six}>{item.info}</p>
                                    </div>
                                ))}
                                <div className={styles.show}>
                                    <img src={im.go5} alt="" />
                                    <p>Reach Us</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.left}>
                        <div className={styles.buttons}>
                            {contacts.map((contact, index) => (
                                <button
                                    key={contact.id}
                                    className={activeIndex === index ? styles.active : ""}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {contact.name}
                                </button>
                            ))}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.block}>
                                <p>General Inquiries</p>
                                <div>
                                    <p>{currentContact.one || ''}</p>
                                    <img src={im.go2} alt="" />
                                </div>
                            </div>
                            <div className={styles.block}>
                                <p>Business Collaborations</p>
                                <div>
                                    <p>{currentContact.two || ''}</p>
                                    <img src={im.go2} alt="" />
                                </div>
                            </div>
                            <div className={styles.block}>
                                <p>Job Opportunities</p>
                                <div>
                                    <p>{currentContact.tri || ''}</p>
                                    <img src={im.go2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.name}>
                            <div className={styles.inp}>
                                <p>First Name</p>
                                <input type="text" placeholder='Enter First Name'/>
                            </div>
                            <div className={styles.inp}>
                                <p>Last Name</p>
                                <input type="text" placeholder='Enter Last Name'/>
                            </div>
                            <div className={styles.inp}>
                                <p>Email</p>
                                <input type="text" placeholder='Enter your Email'/>
                            </div>
                            <div className={styles.country}>
                                <p>Phone Number</p>
                                <div>
                                    <button></button>
                                    <input type="text" placeholder='Enter Phone Number'/>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <p>Message</p>
                                <input type="text" placeholder='Enter your Message'/>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <input type="checkbox" />
                                <p>I agree with Terms of Use and Privacy Policy</p>
                            </div>
                            <button>Send Your Message <img src={im.go6} alt="" /></button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page8