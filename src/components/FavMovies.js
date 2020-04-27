import React from 'react';
import { Link } from 'react-router-dom';
import {MAX_LENGTH, TITLE_MAX_LENGTH} from '../globals/variables';


export const FavMovies = (props) => {
    const favMoviesLoop = (arr) => {

        return arr.map((result, i) => {
    
            let text = result.overview;
    
            // Date maker - reformats the date
            const makeDate = () => {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const date = new Date(result.release_date);
                return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            }
            
            return (
                <div key={i} className={`movie-data-0${i+1}`}>
                    <div className="movie-container">
                        <div className="rem-fav">
                            <button onClick={() => {props.removeFav(result)}} className="remove-fav" >Remove</button>
                        </div> 
                        
                        {result.poster_path ? <img src={`https://image.tmdb.org/t/p/w185${result.poster_path}`} alt={result.title} /> : <img src={require('../images/poster-backup-small')} alt='Poster-not-available'/> }
                        <h2><Link className="title-link" to={`/individual-movie/${result.id}`}>{result.title}</Link></h2>
                        {text.length > MAX_LENGTH ? <p className="fav-overview">{`${text.substring(0, MAX_LENGTH)}...`}</p> : <p>{text}</p>}
                        <div className="grid-content">
                        
                            <div className="rating">
                                <h3>Rating</h3>
                                <p>{result.vote_average *10}%</p>
                            </div>
                            <div className="release">
                                <h3>Release date</h3>
                                <p>{makeDate(result.release_date)}</p>
                            </div>
                        </div>
                        <div className="btn-div">
                            <button className="btn-more-info"><Link to={`/individual-movie/${result.id}`}>More info</Link></button>
                        </div>
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