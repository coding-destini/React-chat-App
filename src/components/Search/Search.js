import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setSearchedUser } from "../../features/user/userSlice";
import toast from 'react-hot-toast'


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
      //If no user found
      if (querySnapshot.empty) {
        toast.error("No user found",{ duration: 2000, position:'top-right'});
        return;
      }
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        dispatch(setSearchedUser(userData));
        toast.success("User Founded",{ duration: 2000, position:'top-right'});
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
