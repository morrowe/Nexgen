import { useEffect, useState } from 'react';
import axios from "axios";
import styles from "./admin.module.scss";
import { im } from '../images/images.js';

function Admin() {
    const [activeSection, setActiveSection] = useState('Home');
    const [more, setMore] = useState([]);
    const [journey, setJourney] = useState([]);
    const [ourservices, setOurservices] = useState([]);
    const [works, setWorks] = useState([]);
    const [testimonialss, setTestimonialss] = useState([]);
    const [watch, setWatch] = useState([]);
    const [website, setWebsite] = useState([]);
    const [sections, setSections] = useState([]);
    const [faq, setFaq] = useState([]);
    const [ourprojects, setOurprojects] = useState([]);
    const [more2, setMore2] = useState([]);
    const [minds, setMinds] = useState([]);
    const [achiev, setAchiev] = useState([]);
    const [awre, setAwre] = useState([]);
    const [jointeam, setJoineam] = useState([]);
    const [apply, setApply] = useState([]);
    const [article, setArticle] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/api/more").then(res => setMore(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/journey").then(res => setJourney(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/ourservices").then(res => setOurservices(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/works").then(res => setWorks(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/testimonialss").then(res => setTestimonialss(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/watch").then(res => setWatch(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/website").then(res => setWebsite(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/sections").then(res => setSections(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/faq").then(res => setFaq(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/ourprojects").then(res => setOurprojects(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/more2").then(res => setMore2(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/minds").then(res => setMinds(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/achiev").then(res => setAchiev(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/awre").then(res => setAwre(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/jointeam").then(res => setJoineam(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/apply").then(res => setApply(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/article").then(res => setArticle(res.data)).catch(err => console.error(err));
        axios.get("http://localhost:3000/api/contacts").then(res => setContacts(res.data)).catch(err => console.error(err));
    }, []);

    const handleDelete = (section, id) => {
        axios.delete(`http://localhost:3000/api/${section}/${id}`)
            .then(() => {
                switch(section) {
                    case 'more': setMore(more.filter(item => item.id !== id)); break;
                    case 'journey': setJourney(journey.filter(item => item.id !== id)); break;
                    case 'ourservices': setOurservices(ourservices.filter(item => item.id !== id)); break;
                    case 'works': setWorks(works.filter(item => item.id !== id)); break;
                    case 'testimonialss': setTestimonialss(testimonialss.filter(item => item.id !== id)); break;
                    case 'watch': setWatch(watch.filter(item => item.id !== id)); break;
                    case 'website': setWebsite(website.filter(item => item.id !== id)); break;
                    case 'sections': setSections(sections.filter(item => item.id !== id)); break;
                    case 'faq': setFaq(faq.filter(item => item.id !== id)); break;
                    case 'ourprojects': setOurprojects(ourprojects.filter(item => item.id !== id)); break;
                    case 'more2': setMore2(more2.filter(item => item.id !== id)); break;
                    case 'minds': setMinds(minds.filter(item => item.id !== id)); break;
                    case 'achiev': setAchiev(achiev.filter(item => item.id !== id)); break;
                    case 'awre': setAwre(awre.filter(item => item.id !== id)); break;
                    case 'jointeam': setJoineam(jointeam.filter(item => item.id !== id)); break;
                    case 'apply': setApply(apply.filter(item => item.id !== id)); break;
                    case 'article': setArticle(article.filter(item => item.id !== id)); break;
                    case 'contacts': setContacts(contacts.filter(item => item.id !== id)); break;
                }
            })
            .catch(err => console.error(err));
    };

    const startEdit = (item) => {
        setEditMode(item.id);
        setEditData({...item});
    };

    const saveEdit = (section, id) => {
        if (!id) {
            console.error('No ID provided for edit');
            return;
        }
        axios.put(`http://localhost:3000/api/${section}/${id}`, editData)
            .then(() => {
                switch(section) {
                    case 'more': setMore(more.map(item => item.id === id ? editData : item)); break;
                    case 'journey': setJourney(journey.map(item => item.id === id ? editData : item)); break;
                    case 'ourservices': setOurservices(ourservices.map(item => item.id === id ? editData : item)); break;
                    case 'works': setWorks(works.map(item => item.id === id ? editData : item)); break;
                    case 'testimonialss': setTestimonialss(testimonialss.map(item => item.id === id ? editData : item)); break;
                    case 'watch': setWatch(watch.map(item => item.id === id ? editData : item)); break;
                    case 'website': setWebsite(website.map(item => item.id === id ? editData : item)); break;
                    case 'sections': setSections(sections.map(item => item.id === id ? editData : item)); break;
                    case 'faq': setFaq(faq.map(item => item.id === id ? editData : item)); break;
                    case 'ourprojects': setOurprojects(ourprojects.map(item => item.id === id ? editData : item)); break;
                    case 'more2': setMore2(more2.map(item => item.id === id ? editData : item)); break;
                    case 'minds': setMinds(minds.map(item => item.id === id ? editData : item)); break;
                    case 'achiev': setAchiev(achiev.map(item => item.id === id ? editData : item)); break;
                    case 'awre': setAwre(awre.map(item => item.id === id ? editData : item)); break;
                    case 'jointeam': setJoineam(jointeam.map(item => item.id === id ? editData : item)); break;
                    case 'apply': setApply(apply.map(item => item.id === id ? editData : item)); break;
                    case 'article': setArticle(article.map(item => item.id === id ? editData : item)); break;
                    case 'contacts': setContacts(contacts.map(item => item.id === id ? editData : item)); break;
                    default: break;
                }
                setEditMode(null);
            })
            .catch(err => {
                console.error(`Error saving to ${section}:`, err);
            });
    };

    const addNew = (section) => {
        axios.post(`http://localhost:3000/api/${section}`, {})
            .then(res => {
                const newItem = res.data;
                switch(section) {
                    case 'more': setMore([...more, newItem]); break;
                    case 'journey': setJourney([...journey, newItem]); break;
                    case 'ourservices': setOurservices([...ourservices, newItem]); break;
                    case 'works': setWorks([...works, newItem]); break;
                    case 'testimonialss': setTestimonialss([...testimonialss, newItem]); break;
                    case 'watch': setWatch([...watch, newItem]); break;
                    case 'website': setWebsite([...website, newItem]); break;
                    case 'sections': setSections([...sections, newItem]); break;
                    case 'faq': setFaq([...faq, newItem]); break;
                    case 'ourprojects': setOurprojects([...ourprojects, newItem]); break;
                    case 'more2': setMore2([...more2, newItem]); break;
                    case 'minds': setMinds([...minds, newItem]); break;
                    case 'achiev': setAchiev([...achiev, newItem]); break;
                    case 'awre': setAwre([...awre, newItem]); break;
                    case 'jointeam': setJoineam([...jointeam, newItem]); break;
                    case 'apply': setApply([...apply, newItem]); break;
                    case 'article': setArticle([...article, newItem]); break;
                    case 'contacts': setContacts([...contacts, newItem]); break;
                }
            })
            .catch(err => console.error(err));
    };    
    const renderItem = (item, section, fields) => {
        if (!item) {
            return null;
        }
        
        if (editMode === item.id && item.id) {
            return (
                <div key={item.id} className={styles.card}>
                    {fields.map(field => (
                        <input
                            key={field}
                            className={styles.input}
                            value={editData[field] || ''}
                            onChange={(e) => setEditData({...editData, [field]: e.target.value})}
                            placeholder={field}
                        />
                    ))}
                    <div className={styles.buttons}>
                        <button className={styles.save} onClick={() => saveEdit(section, item.id)}>Save</button>
                        <button className={styles.cancel} onClick={() => setEditMode(null)}>Cancel</button>
                    </div>
                </div>
            );
        }
        
        return (
            <div key={item.id || Math.random()} className={styles.card}>
                {fields.map(field => (
                    <p key={field} className={styles.field}>{item[field]}</p>
                ))}
                <div className={styles.buttons}>
                    {item.id && (
                        <>
                            <button className={styles.edit} onClick={() => startEdit(item)}>Edit</button>
                            <button className={styles.delete} onClick={() => handleDelete(section, item.id)}>Delete</button>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const sections_by_page = {
        Home: ['more', 'journey', 'ourservices', 'works'],
        Services: ['ourservices', 'watch', 'website', 'sections'],
        Projects: ['ourprojects', 'works'],
        About: ['more2', 'minds', 'achiev', 'awre'],
        Careers: ['jointeam', 'apply'],
        Blogs: ['article'],
        Contact: ['more', 'contacts']
    };

    const sectionData = {
        more: { data: more, fields: ['id', 'name', 'info'] },
        journey: { data: journey, fields: ['id', 'headline', 'text'] },
        ourservices: { data: ourservices, fields: ['id', 'img', 'head', 'txt', 'price'] },
        works: { data: works, fields: ['id', 'img', 'headline', 'category', 'time', 'text'] },
        testimonialss: { data: testimonialss, fields: ['id', 'head', 'txt', 'img', 'name', 'work'] },
        watch: { data: watch, fields: ['id', 'headline', 'bacgr1', 'bacgr2'] },
        website: { data: website, fields: ['id', 'name', 'img', 'industry', 'service'] },
        sections: { data: sections, fields: ['id', 'title', 'content'] },
        faq: { data: faq, fields: ['id', 'question', 'answer'] },
        ourprojects: { data: ourprojects, fields: ['id', 'img', 'name', 'text'] },
        more2: { data: more2, fields: ['id', 'name', 'info'] },
        minds: { data: minds, fields: ['id', 'name', 'work', 'img', 'facebook', 'twitter', 'inl'] },
        achiev: { data: achiev, fields: ['id', 'data', 'headline', 'info'] },
        awre: { data: awre, fields: ['id', 'date', 'head', 'text'] },
        jointeam: { data: jointeam, fields: ['id', 'img', 'head', 'salary', 'experience', 'deadline', 'text'] },
        apply: { data: apply, fields: ['id', 'step', 'headline', 'info'] },
        article: { data: article, fields: ['id', 'img', 'headl', 'text'] },
        contacts: { data: contacts, fields: ['id', 'name', 'one', 'two', 'tri'] }
    };

    return (
        <main className={styles.main}>
            <div className={styles.navidate}>
                <button className={activeSection === 'Home' ? styles.active : ''} onClick={() => setActiveSection('Home')}>Home</button>
                <button className={activeSection === 'Services' ? styles.active : ''} onClick={() => setActiveSection('Services')}>Services</button>
                <button className={activeSection === 'Projects' ? styles.active : ''} onClick={() => setActiveSection('Projects')}>Projects</button>
                <button className={activeSection === 'About' ? styles.active : ''} onClick={() => setActiveSection('About')}>About</button>
                <button className={activeSection === 'Careers' ? styles.active : ''} onClick={() => setActiveSection('Careers')}>Careers</button>
                <button className={activeSection === 'Blogs' ? styles.active : ''} onClick={() => setActiveSection('Blogs')}>Blogs</button>
                <button className={activeSection === 'Contact' ? styles.active : ''} onClick={() => setActiveSection('Contact')}>Contact</button>
            </div>
            <section className={styles.sect1}>
                <div className={styles.head}>
                    <h2>{activeSection}</h2>
                </div>
                {sections_by_page[activeSection].map(sectionKey => (
                    <div key={sectionKey} className={styles.sectionBlock}>
                        <div className={styles.sectionHead}>
                            <h3>{sectionKey}</h3>
                            <button className={styles.addBtn} onClick={() => addNew(sectionKey)}>Add New</button>
                        </div>
                        <div className={styles.cards}>
                            {sectionData[sectionKey].data.map(item => renderItem(item, sectionKey, sectionData[sectionKey].fields))}
                        </div>
                    </div>
                ))}
                <div className={styles.sectionBlock}>
                    <div className={styles.sectionHead}>
                        <h3>testimonialss</h3>
                        <button className={styles.addBtn} onClick={() => addNew('testimonialss')}>Add New</button>
                    </div>
                    <div className={styles.cards}>
                        {testimonialss.map(item => renderItem(item, 'testimonialss', ['id', 'head', 'txt', 'img', 'name', 'work']))}
                    </div>
                </div>
                <div className={styles.sectionBlock}>
                    <div className={styles.sectionHead}>
                        <h3>faq</h3>
                        <button className={styles.addBtn} onClick={() => addNew('faq')}>Add New</button>
                    </div>
                    <div className={styles.cards}>
                        {faq.map(item => renderItem(item, 'faq', ['id', 'question', 'answer']))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Admin;
