import React from "react";
import { data } from "../data";
import { Navbar, MovieCard } from "./index";
import { addMovies, setShowFavourites } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };
  onTabChange = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  };
  render() {
    const { movies, search } = this.props.store.getState();
    const { list, showFavorites, favourites } = movies;
    console.log("RENDER", this.props.store.getState());
    const moviesToDisplay = showFavorites ? favourites : list;
    return (
      <div className='App'>
        <Navbar search={search} dispatch={this.props.store.dispatch} />
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
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {moviesToDisplay.length === 0 ? <div className='no-movies'>No movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
