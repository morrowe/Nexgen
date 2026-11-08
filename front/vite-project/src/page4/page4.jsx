import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page4.module.scss"

function Page4() {
    const [more2, setMore2] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/more2")
        .then(res => setMore2(res.data))
        .catch(err => console.error(err));
    }, []);
    const [minds, setMinds] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/minds")
        .then(res => setMinds(res.data))
        .catch(err => console.error(err));
    }, []);
    const [achiev, setAchiev] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/achiev")
        .then(res => setAchiev(res.data))
        .catch(err => console.error(err));
    }, []);
    const [awre, setAwre] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/awre")
        .then(res => setAwre(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <main className={styles.main}>
                <section className={styles.sect1}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                        <div className={styles.start}>
                            <div className={styles.headline}>
                            <div>
                                <h2>Elevating Brands</h2>
                                <button>
                                <img src={im.startb} alt="" />
                                START A PROJECT
                                </button>
                            </div>
                            <h2>in the Digital Age</h2>
                            </div>
                            <p className={styles.pp}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
                        </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                {more2.map((item, index) => (
                                    <div className={styles.block}>
                                        <p>{item.name}</p>
                                        <p className={styles.six}>{item.info}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.button}>
                                <img src={im.go5} alt="" />
                                <p>Know More</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.head}>
                        <h3>Meet the brilliant minds behind NexGen</h3>
                        <div>
                            <img src={im.go2} alt="" />
                            <p>ALL Members</p>
                        </div>
                    </div>
                    <div className={styles.group}>
                        {minds.map((item, index) => (
                        <div className={styles.content}>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.work}</p>
                            </div>
                            <div className={styles.backg} style={{ backgroundImage: `url(${item.img})`}}></div>
                            <div className={styles.butt}>
                                <button><img src={im.facebook} alt="" /></button>
                                <button><img src={im.twitter} alt="" /></button>
                                <button><img src={im.inl} alt="" /></button>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.head}>
                        <h3>Our Achievements</h3>
                    </div>
                    <div className={styles.container}>
                        {achiev.map((item, index) => (
                        <div className={styles.content}>
                            <p className={styles.data}>{item.data}</p>
                            <div className={styles.headline}>
                                <h4>{item.headline}</h4>
                            </div>
                            <div className={styles.info}><p>{item.info}</p></div>
                        </div>
                        ))}
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.head}>
                        <h3>Awards & Recognitions</h3>
                    </div>
                    <div className={styles.content}>
                        {awre.map((item, index) => (
                        <div className={styles.info}>
                            <div className={styles.div}>
                                <div><p>Date </p><p className={styles.span}>•</p> <p> {item.date}</p></div>
                                <img src={im.priz} alt="" />
                            </div>
                            <p className={styles.third}>{item.head}</p>
                            <p className={styles.txt}>{item.text}</p>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page4