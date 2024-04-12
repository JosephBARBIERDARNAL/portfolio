import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './visualization.css';

function Visualization() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className="container">

                <h2>Visualizations</h2><hr />
                <p style={{letterSpacing: '-0.5px'}}>
                    I love of the process of turning a raw dataset into some easy-to-understand visualizations. Either for the #TidyTuesday challenge, or by searching through Kaggle datasets, I always find something that's worth spending time on.
                </p>
                <p style={{letterSpacing: '-0.5px'}}>
                    Here are some visualizations I've made, click on them to see them in full size!
                </p><br/>
                <div className="image-gallery">
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/europe-map.png`} alt="europe map" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/img/europe-map.png`)}/>
                        <p>Map of the European Union, based on SHARE data</p>
                    </div>
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/fiscal-sponsor.png`} alt="fiscal sponsorship" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/img/fiscal-sponsor.png`)}/>
                        <p>Top Fiscal Sponsors, made for the TidyTuesday challenge</p>
                    </div>
                </div>

                <div className="image-gallery">
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/energy-consumption-france.png`} alt="energy consumption" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/img/energy-consumption-france.png`)}/>
                        <p>Energy consumption in France</p>
                    </div>
                    <div className="image-item">
                        <div className="image-item">
                            <img src={`${process.env.PUBLIC_URL}/img/confusion_matrix.png`} alt="fake news gpt" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/img/confusion_matrix.png`)} />
                            <p>ChatGPT on distinguishing fake news</p>
                        </div>
                    </div>
                </div>

                <div className="image-gallery">
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/wordcloud_linechart.png`} alt="movie reviews" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/img/wordcloud_linechart.png`)}/>
                        <p>Average movie rating per year, with wordcloud</p>
                    </div>
                </div>
 
            <h2 id="services">Services</h2><hr />
                <p>I offer <b>data analysis</b> and <b>data visualization</b> services.
                    I can help you to <b>understand your data</b>, create <b>beautiful visualizations</b>,
                    develop <b>web applications</b> and more.
                </p>
                <p>
                    I usually work with Python, R and SQL, and I do web development with either streamlit or shiny.
                </p>
                <br/>
                <p>
                    If that's something you're interested in, feel free to contact me at <b>joseph.barbierdarnal@gmail.com</b>
                </p>
                <br/>

            </div> {/* End container */}

            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <img src={selectedImage} alt="Enlarged view" className="modal-content" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Visualization;
