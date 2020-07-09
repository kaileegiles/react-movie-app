import React from 'react';

const About = () => {
        return(
            <main className="main-about">
                <div className="about-content">
                <section className="section-about">
                        <h1 className="about-h1">Welcome to Cinedex!</h1>
                </section>  
                <section>
                    <h2 className="about-h2">About the project</h2>
                        <p className="about-p">
                        Cinedex is a movie database where you can easily find films to watch via their popularity, rating or release date. Found a movie you like? Add it to your favourites list.
                        </p>
                        <img src={require('../images/moviedb-image.svg')} alt="TMDb logo" className="about-img"/>
                        <p className="about-p">
                            This product uses the TMBDb API but is not endorsed or certified by TMDb.
                        </p>
                </section>
                <section className="about-last-section">
                    <h2 className="about-h2">Meet The Team</h2>
                        <p className="about-p">
                        Cinedex was created by Kailee, Faris, and Erik using React.
                        </p>
                </section>
                </div>
            </main>
        )
    }

export default About;