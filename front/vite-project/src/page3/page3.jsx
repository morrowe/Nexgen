import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page3.module.scss"

function Page3() {
    const [ourprojects, setOurprojects] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/ourprojects")
        .then(res => setOurprojects(res.data))
        .catch(err => console.error(err));
    }, []);
    const [works, setWorks] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/works")
        .then(res => setWorks(res.data))
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
                                <h2>Empowering Your</h2>
                                <button>
                                <img src={im.startb} alt="" />
                                START A PROJECT
                                </button>
                            </div>
                            <h2>Digital Vision</h2>
                            </div>
                            <p className={styles.pp}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
                        </div>
                        </div>
                        <div className={styles.right}>
                        <div className={styles.image}>
                            <div className={styles.texts}>
                            <button>Web Development.</button>  
                            <div>
                                <img src={im.go4} alt="" />
                                <p>View Blog</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.head}>
                        <h3>Key Features of Our Projects</h3>
                    </div>
                    <div className={styles.more}>
                        {ourprojects.map((item, index) => (
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={styles.block}>
                                <p className={styles.third}>{item.name}</p>
                                <p>{item.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.head}>
                        <h3>Projects Showcase</h3>
                        <div>
                            <img src={im.go2} alt="" />
                            <p>ALL Works</p>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {works.map((item, index) => (
                        <div className={styles.card}>
                            <div className={styles.detail}>
                                <div className={styles.name}>
                                    <img src={item.img} alt="" />
                                    <h4>{item.headline}</h4>
                                   <div>
                                    <img src={im.go2} alt="" />
                                    <p>Details</p>
                                   </div>
                                </div>
                                <div className={styles.resurs}>
                                    <div className={styles.categ}>
                                        <p>Category</p><p className={styles.dot}>•</p> <p className={styles.grey}>{item.category}</p>
                                    </div>
                                    <div className={styles.time}>
                                        <p>Time Taken</p> <p className={styles.dot}>•</p> <p className={styles.grey}>{item.time}</p>
                                    </div>
                                </div>
                                <p className={styles.txt}>{item.text}</p>
                            </div>
                            <div className={styles.backgr} style={{ backgroundImage: `url(${item.bacgr})` }}></div>
                            <div className={styles.info}>
                                <div className={styles.used}>
                                    <p className={styles.wh}>Technologies Used</p>
                                    <div>
                                        <p>{item.used1}</p>
                                        <p>{item.used2}</p>
                                        <p>{item.used3}</p>
                                        <p>{item.used4}</p>
                                        <p>{item.used5}</p>
                                    </div>
                                </div>
                                <div className={styles.team}>
                                    <p>Team Members</p>
                                    <div className={styles.people}>
                                        <img src={item.team1} alt="" />
                                        <img src={item.team2} alt="" />
                                        <img src={item.team3} alt="" />
                                        <img src={item.team4} alt="" />
                                        <img src={item.team5} alt="" />
                                    </div>    
                                </div>
                                <button className={styles.button}>Book A Call</button>
                            </div>
                        </div>
                        ))}
                    </div>    
                </section>
            </main>
        </>
    )
}
export default Page3