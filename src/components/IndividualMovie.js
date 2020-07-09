import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../globals/variables';
import { useParams } from 'react-router-dom';
import {covertNumericDateToReadableFormat, isMovieInStorage} from '../utilities/storageMaker';
import Background from '../images/darkness.png';

const IndividualMovie = (props) => {

    const bgStyle = {
        backgroundImage: `url(${Background})`
    }

    // Page variables
    let { id } = useParams();

    // App states
    const [movieData, setMovieData] = useState(null);
    const [favourited, setFavourited] = useState(false);

    // Movie info API call
    useEffect(() => {

        const fetchMovieInfo = async () => {
            const res = await fetch (`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`);
            const movieData = await res.json();
            console.log(movieData);
            setFavourited(isMovieInStorage(movieData));
            setMovieData(movieData);
        }
        fetchMovieInfo();

        }, [id]);

        const setFavourite = () => {

            if(localStorage.getItem('favourite') === null){
                let md = [movieData];
                md = JSON.stringify(md);
                localStorage.setItem('favourite', md);
                setFavourited(true);
    
            }else if(localStorage.getItem('favourite')){
                let md = [];
                md = JSON.parse(localStorage.getItem('favourite')) || [];
                for(let i = 0; i < md.length; i++) {
                    if (movieData.id === md[i].id) {
                        console.log(i);
                        md.splice(i, 1);
                        md = JSON.stringify(md);
                        localStorage.setItem('favourite', md);
                        setFavourited(false);
                        return;
                    }else if (movieData.id !== md[i].id){
                        continue;
                    }
                }

                md.push(movieData);
                localStorage.setItem('favourite', JSON.stringify(md));
                setFavourited(true);
            }
    }

        return (
        <main className="main-movie">
            <section className="section-movie">
                { movieData !== null && <div className="im-page">
                    <div className="movie-info-container" style={bgStyle}>
                        <div className="poster-container">
                        {movieData.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} /> : <img src={require('../images/poster-backup-large')} alt='Poster-not-available'/>}
                        </div>
                        <div className="poster-lower-half">
                            <div className="im-movie-text">
                                <h2 className="im-title">{movieData.title}</h2>
                                {console.log('Favourited: ', favourited)}
                                {favourited
                                ?
                                <div id="fav-container" className="fav-active" onClick={() => {setFavourite()}}>
                                    <div className="heart-shape"></div>
                                    <p>Remove from favourites</p>
                                </div>
                                :
                                <div id="fav-container" className="fav-container" onClick={() => {setFavourite()}}>
                                    <div className="heart-shape"></div>
                                    <p>Add to favourites</p>
                                </div>
                                }
                                <p className="im-overview">{movieData.overview}</p>
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                    <p>{movieData.vote_average.toFixed(1)}</p>
                                </div>
                                <div className="release">
                                    <p>Released: {covertNumericDateToReadableFormat(movieData.release_date)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>  
        </main>
    )
    }

export default IndividualMovie;


