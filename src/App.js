
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';
import instance from './instance';
import axios from 'axios';
import Nav from './components/Nav';
function App() {
  return (
    <div>
   <Banner fetchUrl={requests.fetchNetflixOriginals}/>
   <Nav/>
    <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending In India" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
