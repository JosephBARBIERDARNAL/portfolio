import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './projects.css';

const Cieri = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>AutoSHARE</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <div className="projectDescription">
                            <p>
                                At <Link to='https://www.cieri-analytics.com' target="_blank" rel="noreferrer">cieri-analytics.com</Link>, me and <Link to='https://www.linkedin.com/in/thomas-salanova/' target="_blank" rel="noreferrer">Thomas Salanova</Link> develop tools for social science research. Our main project is AutoSHARE, a tool that automates cleaning, analysis and modelling of the <Link to='https://share-eric.eu/' target="_blank" rel="noreferrer">SHARE</Link> data. You can consult the state of the project <Link to='https://github.com/JosephBARBIERDARNAL/autoSHARE' target="_blank" rel="noreferrer">here</Link>.
                            </p>
                            <p>
                                The Survey of Health, Ageing and Retirement in Europe (SHARE) is a multidisciplinary and cross-national panel database of micro data on health, socio-economic status and social and family networks of more than 140,000 individuals from 28 European countries. By its size and its richness, SHARE is a unique source of information for researchers in social sciences.
                            </p>
                            <p>
                                However, social science research implies a lot of data cleaning and analysis, and this can easily become a tedious and time-consuming task. For this reason, we are building a tool that automates most of these tasks for this database. We are building it using Python within a Streamlit app for the UI.
                            </p>
                            <p>
                                The aim is also to encourage and facilitate <b>reproductible research</b>. The project is <b>open source</b> and currently a work in progress.
                            </p>
                            <h3>Articles</h3>
                            <p>
                                We are also writing articles on the <Link to='https://www.cieri-analytics.com/articles.html' target="_blank" rel="noreferrer">website</Link> about concrete questions in statistics such as:
                                <ul>
                                    <li><Link to='https://www.cieri-analytics.com/articles/large-sample-size-and-pvalue.html' target='_blank' rel='noreferrer'>Sample size and p-value: impact and relationship</Link></li>
                                    <li><Link to='https://www.cieri-analytics.com/articles/all-other-things-being-equal.html' target='_blank' rel='noreferrer'>What "all other things being equal" means</Link></li>
                                    <li><Link to='https://www.cieri-analytics.com/articles/how-to-work-with-share-python-r.html' target='_blank' rel='noreferrer'>How to work with the SHARE database</Link></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cieri;
