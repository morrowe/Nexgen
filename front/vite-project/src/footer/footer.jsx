import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./footer.module.scss"

function Footer() {
    const [testimonialss, setTestimonialss] = useState([]); 
        useEffect(() => {
            axios.get("http://localhost:3000/api/testimonialss")
            .then(res => setTestimonialss(res.data))
            .catch(err => console.error(err));
        }, []);
        const [faq, setFaq] = useState([]);
        const [openId, setOpenId] = useState(null);
        useEffect(() => {
            axios
            .get("http://localhost:3000/api/faq")
            .then((res) => setFaq(res.data))
            .catch((err) => console.error(err));
        }, []);
        
    return (
        <>
            <footer>
                <section className={styles.sect1}>
                    <div className={styles.head}>
                        <h3>Testimonials</h3>
                        <div>
                            <img src={im.go2} alt="" />
                            <p>ALL Testimonials</p>
                        </div>
                    </div>
                    <div className={styles.blocks}>
                        {testimonialss.map((item, index) => (
                        <div className={styles.card}>
                            <div className={styles.text}>
                                <h4>{item.head}</h4>
                                <p>{item.txt}</p>
                            </div>
                            <div className={styles.verh}>
                                <div className={styles.profil}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p className={styles.fio}>{item.name}</p>
                                        <p className={styles.work}>{item.work}</p>
                                    </div>
                                </div>
                                <img src={im.go3} alt="" />
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.head}>
                        <h3>Frequently Asked Questions</h3>
                        <div>

                        </div>
                    </div>
                    <div className={styles.ask}>
                        <div className={styles.info}>
                        {faq.map((item) => (
                        <div key={item.id} className={styles.faq} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                            <div className={styles.top}>
                                <p className={styles.twotwo}>{item.question}</p>
                                <img
                                src={
                                    openId === item.id
                                    ? im.minus
                                    : im.plus
                                }/>
                            </div>
                            {openId === item.id && (
                                <div className={styles.answer}>
                                <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                        ))}
                        </div>
                        <div className={styles.question}>
                            <h4>Ask your questions</h4>
                            <div className={styles.string}>
                                <div className={styles.namemail}>
                                    <p>Name</p>
                                    <input type="text" placeholder='Enter your name'/>
                                </div>
                                <div className={styles.namemail}>
                                    <p>Email</p>
                                    <input type="text" placeholder='Enter your email'/>
                                </div>
                                <div className={styles.quest}>
                                    <p>Your Question</p>
                                    <input type="text" placeholder='Enter Your Question Here .....'/>
                                </div>
                            </div>
                            <button>Send Your Message</button>
                        </div>
                    </div>    
                </section>
                <div className={styles.footr}>
                    <div className={styles.orange}>
                        <div className={styles.block}>
                            <div>
                                <h5>Ready to Transform Your Digital Presence?</h5>
                                <p>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                            </div>
                            <button>Get in Touch <img src={im.stroke} alt="" /></button>
                        </div>
                    </div>
                    <div className={styles.carou}>
                      <div className={styles.track}>
                        <p> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> </p>
                        <p> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> </p>
                        <p> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> Follow Us on Social Media <span>•</span> </p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.block}>
                                <div className={styles.images}>
                                    <img src={im.instagram} alt="" />
                                    <button><img src={im.go2} alt="" /></button>
                                </div>
                                <div className={styles.text}>
                                    <p className={styles.third}>INstagram</p>
                                    <p>Share visually appealing snippets of our latest web projects.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.images}>
                                    <img src={im.twitter2} alt="" />
                                    <button><img src={im.go2} alt="" /></button>
                                </div>
                                <div className={styles.text}>
                                    <p className={styles.third}>Twitter</p>
                                    <p>Tweet about interesting coding challenges you've overcome.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.images}>
                                    <img src={im.dribbble} alt="" />
                                    <button><img src={im.go2} alt="" /></button>
                                </div>
                                <div className={styles.text}>
                                    <p className={styles.third}>Dribbble</p>
                                    <p>Showcase design elements of our web projects.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.images}>
                                    <img src={im.behance} alt="" />
                                    <button><img src={im.go2} alt="" /></button>
                                </div>
                                <div className={styles.text}>
                                    <p className={styles.third}>Behance</p>
                                    <p>Create detailed presentations for our projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.one}>
                                <div className={styles.column}>
                                    <h3>Home</h3>
                                    <a href="#">Why Us</a>
                                    <a href="#">About Us</a>
                                    <a href="#">Testimonials</a>
                                    <a href="#">FAQ's</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Services</h3>
                                    <a href="#">Web Development</a>
                                    <a href="#">App Development</a>
                                    <a href="#">Web Design</a>
                                    <a href="#">Digital Marketing</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Projects</h3>
                                    <a href="#">Klothink</a>
                                    <a href="#">Zenith</a>
                                    <a href="#">Novus</a>
                                    <a href="#">Apex</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Blogs</h3>
                                    <a href="#">Business</a>
                                    <div className={styles.with}>
                                        <a href="#">Design</a>
                                        <span className={styles.badge}>Soon</span>
                                    </div>
                                    <div className={styles.with}>
                                        <a href="#">Development</a>
                                        <span className={styles.badge}>Soon</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.two}>
                                <div className={styles.sub}>
                                    <div className={styles.info}>
                                        <p>Newsletter</p>
                                        <p className={styles.third}>Subscribe To our Newsletter</p>
                                    </div>
                                    <div className={styles.inp}>
                                        <input type="text" placeholder='Enter your email'/>
                                        <button><img src={im.go2} alt="" /></button>
                                    </div>
                                </div>
                                <div className={styles.prava}>
                                    <p className={styles.ppp}>© 2024 NextGen. All rights reserved.</p>
                                    <div>
                                        <p>Terms & Conditions</p>
                                        <p>Privacy Policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer