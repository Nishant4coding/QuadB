import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Details.css'

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='card'>
      <div className="card-content">

        {shows.map(show => (
          <div key={show.show.id} className='card-content'>
            <h1 className='card-title'>{show.show.name}</h1>
            {/* <img src={show.image.medium} alt="" /> */}

                <h3 className="card-text">
                    <b>Score: </b> {show.score}
                </h3>
                <h3 className="card-text">
                <b>Language: </b>{show.show.language}
                </h3>
                <h3 className="card-text">
                <b>Genres: </b>{show.show.genres}
                </h3>
                <h3 className="card-text">
                <b>Type: </b>{show.show.type}
                </h3>
            {/* <p>{show.show.summary}</p> */}
            <Link to={`/show/${show.show.id}`}>
            <button className="card-button">Summary</button>
            </Link>
</div>
        ))}

      </div>
    </div>
  );
}

export default ShowList;
