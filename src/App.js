import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Photo from "./Components/Photo";

function App() {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("ladies");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setQuery(inputValue);
    setInputValue("");
  };

  const fetchData = async () => {
    setLoading(true);
    await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=6uE2PnQzXHTc_kABCyip1Y-m7c12EgGzbA0NwK9k1VE`
    )
      .then((response) => response.json())
      .then((json) => setPhotos(json.results))
      .catch((error) => console.log(error.message));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  return (
    <div className="container">
      <div className="inputDiv">
        <input
          type="text"
          className="form-control"
          name="text"
          id="text"
          aria-describedby="helpId"
          placeholder="search image"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleClick}>
          Search
        </button>
      </div>
      {photos.map((photo, index) => (
        <Photo key={index} photo={photo} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
