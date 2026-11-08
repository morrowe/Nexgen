import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page5.module.scss"



function Page5() {
    const [jointeam, setJointeam] = useState([]); 
    useEffect(() => {
    axios.get("http://localhost:3000/api/jointeam")
    .then(res => setJointeam(res.data))
    .catch(err => console.error(err));
    }, []);
    const [apply, setApply] = useState([]); 
    useEffect(() => {
    axios.get("http://localhost:3000/api/apply")
    .then(res => setApply(res.data))
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
                                <h2>Unlock Your Potential</h2>
                                <button>
                                <img src={im.startb} alt="" />
                                START A PROJECT
                                </button>
                            </div>
                            <h2>in the Digital World</h2>
                            </div>
                        </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                <p className={styles.third}>At NexGen</p>
                                <p className={styles.text}>We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.</p>
                            </div>
                            <div className={styles.buttons}>
                                <img src={im.go5} alt="" />
                                <p>Know More</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.head}>
                        <h3>Join Our Team at NexGen</h3>
                    </div>
                    <div className={styles.join}>
                        {jointeam.map((item, index) => (
                        <div className={styles.section}>
                            <div className={styles.name}>
                                <div className={styles.on}>
                                    <img src={item.img} alt="" />
                                    <p className={styles.third}>{item.head}</p>
                                </div>
                                <div className={styles.on}>
                                    <img src={im.go2} alt="" />
                                    <p>View Details</p>
                                </div>
                            </div>
                            <div className={styles.categor}>
                                <div>
                                    <p>Salary <span>•</span> {item.salary}</p>
                                </div>
                                <div>
                                    <p>Experience <span>•</span>{item.experience}</p>
                                </div>
                                <div>
                                    <p>Deadline <span>•</span>{item.deadline}</p>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <h4>Skills</h4>
                                <p>{item.text}</p>
                            </div>
                            <button>Apply NoW</button>
                        </div>
                        ))}
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.head}>
                        <h3>How to Apply</h3>
                    </div>
                    <div className={styles.container}>
                        {apply.map((item, index) => (
                        <div className={styles.content}>
                            <p className={styles.step}>{item.step}</p>
                            <div className={styles.headline}>
                                <h4>{item.headline}</h4>
                            </div>
                            <div className={styles.pp}>
                                <p>{item.info}</p>
                            </div>
                            <div className={styles.butt}>
                                <img src={im.go5} alt="" />
                                <p>Know More</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page5