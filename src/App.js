import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { DefaultVideos } from './DefaultVideos';

function App() {
  const [videos, setVideos] = useState(DefaultVideos);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('programming');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const maxResults = 10; // Number of results per page
    // Calculate the starting index for pagination
    const startIndex = (currentPage - 1) * maxResults;
    // Fetch videos based on query and pagination
    // Update 'videos', 'totalPages', etc. state here
    const apiKey = 'AIzaSyAkECQg9IiIttwbhtJIJ8VUGXVrGmqDkrE';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if(data.items != undefined){
          setVideos(data.items);
          var maxTotalPages = Math.ceil(data.pageInfo.totalResults / maxResults);
          if(maxTotalPages > 10){
            setTotalPages(10);
          }
          else {
            setTotalPages(Math.ceil(data.pageInfo.totalResults / maxResults));
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching YouTube videos:', error);
        setLoading(false);
    });
  }, [query, currentPage]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <VideoList videos={videos} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default App;
