import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page7.module.scss"

function Page7() {
    const [article, setArticle] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/article")
        .then(res => setArticle(res.data))
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
                                <h2>Mastering the Art</h2>
                                <button>
                                <img src={im.startb} alt="" />
                                START A PROJECT
                                </button>
                            </div>
                            <h2>of Minimalistic Design</h2>
                            </div>
                            <p className={styles.pp}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
                        </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <p className={styles.category}>Author</p>
                                <p className={styles.info}>Sophia Roberts</p>
                            </div>
                            <div>
                                <p className={styles.category}>Published Date</p>
                                <p className={styles.info}>25th October 2023</p>
                            </div>
                            <div>
                                <p className={styles.category}>Category</p>
                                <p className={styles.info}>Design</p>
                            </div>
                            <div>
                                <p className={styles.category}>Read Time</p>
                                <p className={styles.info}>5 minutes</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles. sect2}>
                    <div className={styles.imgg}><img src={im.withs} alt="" /></div>
                    <div className={styles.statua}>
                        <div className={styles.left}>
                            <button><img src={im.twitter2} alt="" /></button>
                            <button><img src={im.faceb} alt="" /></button>
                            <button><img src={im.dis} alt="" /></button>
                        </div>
                        <div className={styles.centr}>
                            <div className={styles.one}>
                                <p className={styles.third}>The Essence of Minimalism in Design</p>
                                
                                    <p>In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful.</p>
                                    <p>As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.</p>
                                    <p>At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
                                
                            </div>
                            <div className={styles.two}>
                                <p className={styles.third}>Minimalism Beyond Aesthetics</p>
                               
                                    <p>Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.</p>
                                    <p>Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.</p>
                                
                            </div>
                            <div className={styles.tri}>
                                <p className={styles.third}>Practical Tips for Mastering Minimalistic Design</p>
                                
                                    <p>The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.</p>
                                    <p>Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.</p>
                                    <p>Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.</p>
                                
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.authorCard}>
                                <div className={styles.profileHeader}>
                                    <img src={im.people1} />
                                    <div className={styles.nameBlock}>
                                        <p className={styles.name}>Wade Warren</p>
                                        <p className={styles.role}>Art Director</p>
                                    </div>
                                </div>
                                <p className={styles.bio}>Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.</p>
                                <div className={styles.twitterButton}>
                                    <div className={styles.twitterLeft}>
                                        <img src={im.twitter} alt="Twitter" />
                                        <p>@wadewarren</p>
                                    </div>
                                    <img src={im.stroke} alt="Arrow" className={styles.arrowIcon} />
                                </div>
                            </div>
                            <div className={styles.statsCard}>
                                <div className={styles.statRow}>
                                    <img src={im.like} />
                                    <div className={styles.statContent}>
                                        <p className={styles.statLabel}>LIKED BY</p>
                                        <div className={styles.statValueBlock}>
                                            <p className={styles.statNumber}>2.6K</p>
                                            <span className={styles.separator}>|</span>
                                            <p className={styles.statUnit}>USERS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.statRow}>
                                    <img src={im.share} />
                                    <div className={styles.statContent}>
                                        <p className={styles.statLabel}>SHARED BY</p>
                                        <div className={styles.statValueBlock}>
                                            <p className={styles.statNumber}>120</p>
                                            <span className={styles.separator}>|</span>
                                            <p className={styles.statUnit}>USERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.head}>
                        <h3>Related Blogs</h3>
                        <div>
                            <img src={im.go2} alt="" />
                            <p>ALL Blogs</p>
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
export default Page7