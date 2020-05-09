import React, { Component } from 'react';

class Movie extends Component {

  render() {
   
   const {profiles, users, movie} = this.props;

   const moviesLikes = profiles.filter( x => x.favoriteMovieID === movie.id.toString())
   console.log('Movie', movie);
   console.log('Likes', moviesLikes);
   console.log('Profiles', profiles);
    console.log('Users', users);

    
    return (
    
      	<div>
      		<h2>{movie.name}</h2>
      		<p>Liked By:</p>
            {
      		
    			moviesLikes.length <=0 ? <p>None of the current users liked this movie</p> : (
    
      					<ul>
   
                          {
    						moviesLikes.map( like => <li key={like.id}>{users[like.userID].name}</li> )
                          }
                            
                    	</ul>
    
   				 )
      
                
    			
            }
  
      	</div>
      
    );
    
  }
}

export default Movie;