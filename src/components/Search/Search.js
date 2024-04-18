import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setSearchedUser } from "../../features/user/userSlice";

const Search = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        dispatch(setSearchedUser(userData));
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim() === "") {
      // Clear search result if search input is empty
      dispatch(setSearchedUser(null));
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
