import React from "react";
import { data } from "../data";
import { Navbar, MovieCard } from "./index";
import { addMovies, setShowFavourites } from "../actions";
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };
  onTabChange = (value) => {
    this.props.dispatch(setShowFavourites(value));
  };
  render() {
    const { movies, search } = this.props;
    const { list, showFavorites, favourites } = movies;
    const moviesToDisplay = showFavorites ? favourites : list;
    return (
      <div className='App'>
        <Navbar search={search} />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavorites ? "" : "active-tabs"}`} onClick={() => this.onTabChange(false)}>
              Movies
            </div>
            <div className={`tab ${showFavorites ? "active-tabs" : ""}`} onClick={() => this.onTabChange(true)}>
              Favourites
            </div>
          </div>
          <div className='list'>
            {moviesToDisplay.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.dispatch} isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {moviesToDisplay.length === 0 ? <div className='no-movies'>No movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent

// class AppWrapper extends React.Component {
//   render() {
//     return <StoreContext.Consumer>{(store) => <App store={store} />}</StoreContext.Consumer>;
//   }
// }

// export default AppWrapper;
