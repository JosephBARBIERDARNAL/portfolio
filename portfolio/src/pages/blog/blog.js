import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import articles from '../../components/articles/articles';
import './blog.css';
import Spacing from '../../components/spacing';

function Blog() {

    return (
        <div>
            <Header />
            <div className="container">

                <h2 id="about">Blog</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <p>
                            I already write articles about statistics, on <Link to='https://statisticaljourney.com' target='_blank' rel='noreferrer'>Statistical Journey</Link>, but you can find here less specialized articles. Here I write more about how I understand data analysis and how we use those tools.
                        </p>
                        <p>
                            This is currently a work in progress, but I will soon publish my first article here!
                        </p>
                        <Spacing count={3} />
                        
                        <div className="articles-container">
                            {articles.map((article, index) => (
                                <Link to={article.link} className="article-card" key={index}>
                                    <div className="article-content">
                                        <h3>{article.title}</h3>
                                        <p>{article.summary}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div> {/* End content-container */}
            </div> {/* End container */}
            <Footer />
        </div>
    );
}

export default Blog;