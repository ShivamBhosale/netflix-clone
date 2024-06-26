import './App.css';
import React, {useEffect} from 'react';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './request';


function App() {
  useEffect(() => {
    document.title = "MovieHubSpot";
  }, []);
  return (
    
    <div className="App">
      
      <Nav />
      <Banner />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentary} /> */}


    </div>
  );
}

export default App;
