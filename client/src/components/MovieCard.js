import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const img="https://image.tmdb.org/t/p/w500/";

const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={img+poster_path} alt="movieimg" style={{width:'200px'}}/>
              <div className="card-body">
              <h2>{title}</h2>
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'10rem'}}src={img+poster_path} alt="movieimg" />
                      <h2>{title}</h2>
                      <h4>Rating: {vote_average}</h4>
                      <h4>Release Date: {release_date}</h4>
                      <h3>Overview</h3>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;