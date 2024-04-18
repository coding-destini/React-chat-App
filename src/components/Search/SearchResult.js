import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const SearchResult = () => {
  const [user,setUser] = useState({});
  const searchedUser = useSelector(state => state.user.searchedUser);
  
  useEffect(()=>{
  setUser(searchedUser);
  },)
  
  return (
    <>
      {user ? (
        <div className="msg online animate__animated animate__fadeInUp">
          <img
            className="msg-profile"
            src={user.photoURL}
            alt={user.displayName}
          />
          <div className="msg-detail">
            <div className="msg-username">{user.displayName}</div>
            <div className="msg-content">
              <span className="msg-message">{user.email}</span>
              <button className="msg-date">Add User</button> {/* Use appropriate button or link */}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SearchResult;
