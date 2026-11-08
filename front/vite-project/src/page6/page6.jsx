import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page6.module.scss"

function Page6() {
    const [testimonialss, setTestimonialss] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/testimonialss")
        .then(res => setTestimonialss(res.data))
        .catch(err => console.error(err));
    }, []);
    const [article, setArticle] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/article")
        .then(res => setArticle(res.data))
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
            <main className={styles.main}>
                <section className={styles.sect1}>
                    <div className={styles.head}>
                        <h3>Our Blogs</h3>
                    </div>
                    <div className={styles.title}>
                        <div className={styles.immg}>
                            <img src={im.stat} alt="" />
                        </div>
                        <div className={styles.block}>
                            <div className={styles.topInfo}>
                                <h2 className={styles.third}>Web Design Trends Shaping 2024</h2>
                                <div className={styles.badges}>
                                    <div className={styles.badge}>Category <span>•</span> <strong>Design</strong></div>
                                    <div className={styles.badge}>Read Time <span>•</span> <strong>6 Mins</strong></div>
                                    <div className={styles.badge}>Author <span>•</span> <strong>Laura Turner</strong></div>
                                </div>
                            </div>
                            <p className={styles.description}>Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond.</p>
                            <div className={styles.niz}>
                                <div className={styles.readButton}>
                                    <img src={im.go2} alt="" />
                                    <p>READ FULL BLOG</p>
                                </div>
                                <div className={styles.dateBlock}>
                                    <p>Published Date</p>
                                    <h4>7TH FEBRUARY 2023</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogs}>
                        {article.map((item, index) => (
                        <div className={styles.container}>
                            <img src={item.img} alt="" />
                            <div className={styles.text}>
                                <h4>{item.headl}</h4>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.link}>
                                <img src={im.go2} alt="" />
                                <nav className={styles.nav}>
                                    <NavLink to={'/page7'} className={({isActive}) => (isActive ? "active":"")}>Read Full Blog</NavLink>
                                </nav>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page6