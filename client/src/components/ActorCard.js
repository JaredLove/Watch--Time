import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const img="https://image.tmdb.org/t/p/w500/";

const MovieBox =({name, poster_path, profile_path, popularity, known_for, known_for_department})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={img+profile_path} alt="actorimg" style={{width:'200px'}}/>
              <div className="card-body">
                <h1>{name}</h1>
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={img+profile_path} alt="actorimg" />
                      <h3>{name}</h3>
                      <h4>Popularity: {popularity}</h4>
                      <h4>Department: {known_for_department}</h4>
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