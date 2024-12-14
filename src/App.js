import React, { useState, useEffect } from "react";
import fetchBook from "./book/fetchBook";
import BookCompo from "./book/bookCompo";

const Loader = () => {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className="wheel-and-hamster">
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
  );
};

const App = () => {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("steve jobs"); // Default query

  // Function to fetch book data
  const fetchBookData = async (query) => {
    setLoading(true);
    setBookData(null); // Clear old data
    try {
      const data = await fetchBook(query);
      setBookData(data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchBookData(searchQuery);
  }, []); // Only runs on mount

  // Handle input change on keyup
  const handleSearchInput = (e) => {
    const query = e.target.value.trim();
    if (query) {
      setSearchQuery(query);
      fetchBookData(query);
    }
  };

  return (
    <div className="all_container">
      {/* Search Input */}
      <div className="input-container">
        <input
          className="input"
          name="text"
          type="text"
          placeholder="Search for books..."
          onKeyUp={handleSearchInput} // Event listener for keyup
        />
      </div>

      {/* Loader or Data */}
      {loading ? (
        <Loader />
      ) : bookData ? (
        <BookCompo book_data={bookData} />
      ) : (
        <p>No book data found. Try searching for something else.</p>
      )}
    </div>
  );
};

export default App;
