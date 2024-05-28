import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {AuthContext} from '../../context/AuthContext'
import { doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { setSearchedUser } from "../../features/user/userSlice";


const SearchResult = () => {
  const [user,setUser] = useState({});
  const searchedUser = useSelector(state => state.user.searchedUser);
  const {currentUser} = useContext(AuthContext)
  
  useEffect(()=>{
  setUser(searchedUser);
  },)

  const HandleSelect =async()=>{
    // check wheather the group (chats with firbase ) exits , if not create 
    const combinedId  = 
    currentUser.uid > user.uid
    ?currentUser.uid + user.uid 
    : user.uid + currentUser.uid;
    
   try {
    const res =  await getDoc(doc(db,"chats",combinedId))

    //if there is no chat
    if(!res.exists){
      await setDoc(doc,(db,"chats",combinedId),{messages :[]}) 
    }
     //create user chat
     await updateDoc(doc(db,"userChat",currentUser.uid),{
      [combinedId+".userInfo"]:{
        uid:user.uid,
        displayName:user.displayName,
        photoURL : user.photoURL
      },
      [combinedId+".date"]:serverTimestamp()
     })


        //create user chat
        await updateDoc(doc(db,"userChat",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL : currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
         })

         setUser('')
         setSearchedUser("")
   } catch (error) {
    console.log(error);
   }

   
  }
  
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
              <button className="msg-date" onClick={HandleSelect}>Add User</button>
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
