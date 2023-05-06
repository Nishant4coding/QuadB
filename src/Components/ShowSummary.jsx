import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

function ShowSummary() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card'>
      <div className="card-content">
              <h1 className="card-title">{show.name}</h1>
              <div className="row">
                <div className='column'>

        <img  src={show.image.medium} alt="" />
                </div>
                <div className='column'>

            <h4 className='card-text column'>{show.summary}</h4>
                </div>
            <button className='book-button'>Book Now</button>
            </div>
              
              
      </div>
    </div>
  );
}

export default ShowSummary;
