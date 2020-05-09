import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {

  render() {
    
    const {profiles, users} = this.props;
    
    return ( <div>
      {
        this.props.movies.map (movie => (
        	<Movie key={movie.id} movie={movie} profiles={profiles} users={users}  />
        ))
      }
  </div>
    );
    
  }
}

export default MoviesList;