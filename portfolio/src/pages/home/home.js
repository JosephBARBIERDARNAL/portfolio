import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Timeline from '../../components/timeline/timeline';
import ProjectGallery from '../../components/gallery/gallery';
import EducationComponent from '../../components/education/education';
import Spacing from '../../components/spacing';
import './home.css'; 

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>About me</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <p>
                            Hi! I'm Joseph Barbier, passionate about building useful technical tools.
                        </p>
                        <p>
                            My current occupations include:
                            <ul>
                                <li><b>Full-time intern</b> in data science, visualization and software with <Link to='https://www.yan-holtz.com' target='_blank' rel='noreferrer'>Yan Holtz</Link></li>
                                <li>Building <b>AutoSHARE</b>, a tool that automates cleaning & analysis of the <Link to='https://share-eric.eu/' target='_blank' rel='noreferrer'>SHARE</Link> data</li>
                                <li><b>Blogging about statistics</b> in our everyday life at <Link to='https://statisticaljourney.com' target='_blank' rel='noreferrer'>statisticaljourney.com</Link></li>
                            </ul>
                        </p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/joseph.png`} alt="Joseph Barbier" className="profile-image" />
                </div>
                
                <Spacing count={3} />

                <h2 id="contact">About my work</h2><hr />
                <p>
                    My past experiences are diverse: I've did a bit of research, working in a start-up and some freelancing.
                </p>
                <Timeline />

                <Spacing count={3}/>

                <h2 id="projects">Projects</h2><hr />
                <p>
                    I've worked on lots of various projects, from talks to web development and data analysis. I share here the most interesting ones.
                </p>
                <ProjectGallery />

                <Spacing count={3}/>

                <h2 id="education">Education</h2><hr />
                <p>
                    I did my whole education at Bordeaux University and I will soon have finished my studies!
                </p>
                <EducationComponent />

                <Spacing count={3} />

            </div> 
            <Footer />
        </div>
    );
}

export default Home;
