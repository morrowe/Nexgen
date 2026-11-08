import { useEffect, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page2.module.scss"

function Page2() {
  const [ourservices, setOurservices] = useState([]); 
  useEffect(() => {
    axios.get("http://localhost:3000/api/ourservices")
    .then(res => setOurservices(res.data))
    .catch(err => console.error(err));
  }, []);
  const [watch, setWatch] = useState([]); 
  useEffect(() => {
    axios.get("http://localhost:3000/api/watch")
    .then(res => setWatch(res.data))
    .catch(err => console.error(err));
  }, []);
  const [website, setWebsite] = useState([]); 
  useEffect(() => {
    axios.get("http://localhost:3000/api/website")
    .then(res => setWebsite(res.data))
    .catch(err => console.error(err));
  }, []);
  const [sections, setSections] = useState([]);
  const [activeTabs, setActiveTabs] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/api/sections")
    .then(res => setSections(res.data))
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
                  <h2>Our Comprehensive</h2>
                  <button>
                    <img src={im.startb} alt="" />
                    START A PROJECT
                  </button>
                </div>
                <h2>Digital Solutions</h2>
              </div>
              <p className={styles.pp}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
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
              <div className={styles.texts}>
                <div>
                  <img src={im.go4} alt="" />
                  <p>View Blog</p>
                </div>
                <button>Web Development.</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sect2}>
        <div className={styles.head}>
          <h3>Our Services</h3>
        </div>
        <div className={styles.service}>
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
          <div className={styles.watch}>
            {watch.map((item, index) => (
              <div className={styles.card}>
                <div className={styles.headline}>
                  <h4>{item.headline}</h4>
                  <div>
                    <img src={im.go2} alt="" />
                    <p>View All</p>
                  </div>
                </div>
                <div className={styles.twos}>
                  <div className={styles.two} style={{ backgroundImage: `url(${item.bacgr1})` }}>
                    <div>
                      <img src={im.go4} alt="" />
                      <p>Open Project</p>
                    </div>
                  </div>
                  <div className={styles.two} style={{ backgroundImage: `url(${item.bacgr2})` }}>
                    <div>
                      <img src={im.go4} alt="" />
                      <p>Open Project</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.sect3}>
        <div className={styles.head}>
          <h3>Success Stories</h3>
        </div>
        <div className={styles.blocks}>
          {website.map((item, index) => (
            <div className={styles.block} key={item.id}>
              <div className={styles.couple}>
                <div className={styles.left}>
                  <div className={styles.website}>
                    <div className={styles.name}>
                      <img src={item.img} alt="" />
                      <p className={styles.third}>{item.name}</p>
                    </div>
                    <div className={styles.name}>
                      <img src={im.go2} alt="" />
                      <p>Visit Website</p>
                    </div>
                  </div>
                  <div className={styles.category}>
                    <div className={styles.indust}>
                      <p>Industry • {item.industry}</p>
                    </div>
                    <div className={styles.utiliz}>
                      <p>Service Utilized • {item.service}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.buttons}>
                    {sections.map((section, sectionIndex) => (
                      <button
                        key={section.id}
                        className={
                          activeTabs[item.id] === sectionIndex
                            ? styles.active
                            : ""
                        }
                        onClick={() =>
                          setActiveTabs((prev) => ({
                            ...prev,
                            [item.id]: sectionIndex,
                          }))
                        }>
                        {section.title}
                      </button>
                    ))}
                  </div>
                  <div className={styles.content}>
                    <h3>
                      {sections[activeTabs[item.id] || 0]?.title}
                    </h3>
                    <div className={styles.cont}>
                      {sections[activeTabs[item.id] || 0]?.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  </>
 )
}
export default Page2