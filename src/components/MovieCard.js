import React from "react";
import { addFavorites, removeFavorites } from "../actions";

class MovieCard extends React.Component {
  handleAddFavourite = () => {
    const {movie, dispatch} = this.props;
    dispatch(addFavorites(movie));
  }  
  handleRemoveFavourite = () => {
    const {movie, dispatch} = this.props;
    dispatch(removeFavorites(movie));
  }  

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className='movie-card'>
        <div className='left'>
          <img alt='movie-poster' src={movie.Poster} />
        </div>
        <div className='right'>
          <div className='title'>{movie.Title}</div>
          <div className='plot'>{movie.Plot}</div>
          <div className='footer'>
            <div className='rating'>{movie.imdbRating}</div>
            {
              isFavourite 
              ? <button className='unfavourite-btn' onClick={this.handleRemoveFavourite}>Remove Favourite</button>
              : <button className='favourite-btn' onClick={this.handleAddFavourite}>Favourite</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
