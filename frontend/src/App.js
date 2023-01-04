import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/header/Header';
import Banner from './Components/banner/Banner';
import Row from './Components/row/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row 
       title = "NETFLIX ORIGINALS" 
       fetchUrl = {requests.fetchNetFlixOriginals}
       isLargeRow = {true}
      />
       <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
