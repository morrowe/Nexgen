import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page1.module.scss"

function Page1() {
    const [more, setMore] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/more")
        .then(res => setMore(res.data))
        .catch(err => console.error(err));
    }, []);
    const [journey, setJourney] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/journey")
        .then(res => setJourney(res.data))
        .catch(err => console.error(err));
    }, []);
    const [ourservices, setOurservices] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/ourservices")
        .then(res => setOurservices(res.data))
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
                                    <h2>Digital Solutions</h2>
                                    <button>
                                        <img src={im.startb} alt="" />
                                        START A PROJECT
                                    </button>
                                </div>
                                <h2>That Drive Success</h2>
                            </div>
                            <p className={styles.pp}>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
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
                            <div></div>
                        </div>
                        <div className={styles.texts}>
                            <h4>Estatein Real Estate</h4>
                            <p>Web Development.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bot}>
                    {more.map((item, index) => (
                        <div className={styles.block}>
                            <p>{item.name}</p>
                            <p className={styles.six}>{item.info}</p>
                        </div>
                    ))}
                    <div className={styles.show}>
                        <img src={im.go1} alt="" />
                        <p>Know More</p>
                    </div>
                </div>
            </section>
            <section className={styles.sect2}>
                <div className={styles.head}>
                    <h3>Reasons to Choose NexGen for Your Digital Journey</h3>
                </div>
                <div className={styles.bot}>
                    {journey.map((item, index) => (
                        <div className={styles.set}>
                            <div className={styles.teext}>
                                <p className={styles.third}>{item.headline}</p>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.mor}>
                                <img src={im.go1} alt="" />
                                <p>Learn More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.sect3}>
                <div className={styles.head}>
                    <h3>Our Services</h3>
                </div>
                <div className={styles.cardservice}>
                    {ourservices.map((item, index) => (
                    <div className={styles.card}>
                        <div className={styles.name}>
                            <div className={styles.one}>
                                <img src={item.img} alt="" />
                                <p className={styles.third}>{item.head}</p>
                            </div>
                            <div>
                                <img src={im.go2} alt="" />
                                <p>Book A Call</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <p>{item.txt}</p>
                            <p className={styles.third}>{item.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            <section className={styles.sect4}>
                <div className={styles.head}>
                    <h3>Our Works</h3>
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
export default Page1