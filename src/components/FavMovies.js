import React from 'react';
import { Link } from 'react-router-dom';
import {MAX_LENGTH, TITLE_MAX_LENGTH} from '../globals/variables';
import {covertNumericDateToReadableFormat} from '../utilities/storageMaker';
import Background from '../images/darkness.png';

export const FavMovies = (props) => {

    const bgStyle = {
        backgroundImage: `url(${Background})`
    }

    const favMoviesLoop = (arr) => {

        return arr.map((result, i) => {
    
            let text = result.overview;
            let titleText = result.title;
            
            return (
                <div key={i} className={`movie-data-0${i+1}`}>
                    <div className="movie-container" style={bgStyle}>
                        {result.poster_path ? <img src={`https://image.tmdb.org/t/p/w342${result.poster_path}`} alt={result.title} /> : <img src={require('../images/poster-backup-small')} alt='Poster-not-available'/> }
                        {titleText.length > TITLE_MAX_LENGTH ? <h2>{`${titleText.substring(0, TITLE_MAX_LENGTH)}...`}</h2> : <h2>{titleText}</h2>}
                        <div className="grid-content">
                            <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                <p>{result.vote_average.toFixed(1)}</p>
                            </div>
                            <div className="release">
                                <p>Released: {covertNumericDateToReadableFormat(result.release_date)}</p>
                            </div>
                        </div>
                        {text.length > MAX_LENGTH ? <p className="fav-overview">{`${text.substring(0, MAX_LENGTH)}...`}</p> : <p>{text}</p>}
                        <Link className="btn-more-info" to={`/individual-movie/${result.id}`}>More info</Link>
                    </div>
                </div>
            ); 
        }
    )} 
    return (
    <div className="movie-grid">
        {favMoviesLoop(props.results)}
    </div>
    )
};