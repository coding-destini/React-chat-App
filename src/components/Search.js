import React, { useState } from 'react'

const Search = () => {
  const [username, setUsername] = useState("");
  const [user,setUser] = useState("");

  const handleSearch =()=>{

  }
  const handleKey=e=>{
    e.code === "Enter" && handleSearch()
  }

  return (
    <div>
      <div className="search-bar" onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}>
      <input type="text" placeholder="Search..." />
    </div>
    </div>
  )
}

export default Search