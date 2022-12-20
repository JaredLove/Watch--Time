import React,{useState} from 'react';
import ActorCard from '../components/ActorCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,FormControl,Button } from 'react-bootstrap';


function SearchActor() {

  const [actors, setActors]=useState([]);
  const [query, setQuery]=useState('');

  const searchActor = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`
      https://api.themoviedb.org/3/search/person?api_key=e62a8500b88c9a431caf5c5d9c7a7674&language=en-US&query=${query}&page=1&include_adult=false`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setActors(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
  
      <Container fluid>


 

            <Form className="d-flex" onSubmit={searchActor} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Actor Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>

      </Container>

    <div>
      {actors.length > 0 ?(
        <div className="container">
        <div className="grid">
          {actors.map((actorReq)=>
          <ActorCard key={actorReq.id} {...actorReq}/>)}
            </div>
    </div>
      ):(
        <h2>Search a actor</h2>
      )}
    </div>   
    </>
   
  );
}

export default SearchActor;